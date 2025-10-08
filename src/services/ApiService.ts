const getAsync = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: "GET",
  });

  return await response.json();
};
// const postASync = async (url: string, body: unknown): Promise<Response> => {
//     const response = await fetch(url, {
//         method: 'POST',
//         data: JSON.stringify(body),
//     });

export { getAsync };