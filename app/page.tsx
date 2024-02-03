"use client";
import { JSX, useState } from "react";
import getLogs from "./requests/getLogs";
import postLog from "./requests/postLog";

export default function Home() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [logs, setLogs] = useState([]);

  // Submit button's onclick function. Calls POST request
  const submit = async () => {
    let log = {
      username: username,
      description: description,
      photo: photo,
    };
    console.log(log);
    let response = await postLog(log);
    console.log(response);
  };

  // Get button's onClick function. Calls GET API request.
  const get = async () => {
    let response = await getLogs();
    let logsArr: any[] = [];
    response.records.forEach((log: any, index: any) => {
      logsArr.push(
        <li key={index}>
          {log.username.value}, {log.description.value}, {log.photo.value}
        </li>
      );
    });
    setLogs(logsArr as never[]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-red-500">TEST PAGE</div>
      <div className="selectDiv">
        <p>Upload image</p>
        <input />
        <p>Write a description</p>
        <textarea />
      </div>
      <div className="submitDiv flex flex-col">
        <button onClick={submit}>Submit!</button>
        <button onClick={get}>Get!</button>
      </div>
      <div className="listRecordsDiv">
        <ul>{logs}</ul>
      </div>
    </main>
  );
}
