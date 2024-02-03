const log = "http://localhost:50000/log";

export default async function postLog(params: any) {
  const recordBodyParameters = {
    username: params.username,
    photo: params.photo,
    description: params.description,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recordBodyParameters),
  };

  const response = await fetch(log, options);
  const jsonResponse = await response.json();

  console.log(JSON.stringify(jsonResponse));

  return jsonResponse;
}
