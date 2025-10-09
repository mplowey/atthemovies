const getAsync = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: "GET",
  });

  return await response.json();
};
const postAsync = async <T>(url: string, body: unknown): Promise<T> => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer sometoken",
    },
  });

  return await response.json();
};

export { getAsync, postAsync };
