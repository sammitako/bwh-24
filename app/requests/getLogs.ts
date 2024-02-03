const logs = "http://localhost:50000/logs";

export default async function getLogs() {
  const response = await fetch(logs);
  const jsonResponse = await response.json();

  console.log(jsonResponse);

  return jsonResponse;
}
