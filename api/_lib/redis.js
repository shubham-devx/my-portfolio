async function redis(command, args = []) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  if (!url || !token) throw new Error("Analytics storage is not configured.");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([command, ...args]),
  });
  const data = await response.json();

  if (!response.ok || data.error) throw new Error(data.error || "Analytics storage request failed.");
  return data.result;
}

function parseHash(result) {
  const values = {};
  for (let index = 0; index < result.length; index += 2) values[result[index]] = Number(result[index + 1]);
  return values;
}

module.exports = { redis, parseHash };
