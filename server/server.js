// Express Server Setup
const express = require('express');
const cors = require('cors');
const PORT = 50000;
const app = express();

// Hide sensitive info in a .env file with dotenv
require('dotenv').config({ path: '../.env' });

// Get Kintone credentials from a .env file
const subdomain = process.env.SUBDOMAIN;
const appIDUsers = process.env.APPID_USERS;
const appIDLogs = process.env.APPID_LOGS;
const apiTokenUsers = process.env.APITOKEN_USERS;
const apiTokenLogs = process.env.APITOKEN_LOGS;


// Parse incoming requests with JSON payloads
app.use(express.json());

app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000'
};

// Kintone's record(s) endpoints
const users = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appIDUsers}`
const logs = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appIDLogs}`
const log = `https://${subdomain}.kintone.com/k/v1/record.json?app=${appIDLogs}`;

// POST endpoint at /log
app.post('/log', cors(corsOptions), async (req, res) => {

    const requestBody = {
      app: appIDLogs,
      record: {
        description: {
          value: req.body.description
        },
        photo: {
          value: req.body.photo
        },
        username: {
          value: req.body.username
        },
      }
    
    }

    const option = {
      method: 'POST',
      headers: {
        'X-Cybozu-API-Token': apiTokenLogs,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    }
    const response = await fetch(log, option);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
})

// GET endpoint at /logs
app.get('/logs', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      'X-Cybozu-API-Token': apiTokenLogs
    }
  
  }
  const response = await fetch(logs, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
})


app.listen(PORT, () => {
  console.log(`\n Backend server listening at http://localhost:${PORT} \n Confirm if Kintone records are being retrieved at \n http://localhost:${PORT}/logs`);
});