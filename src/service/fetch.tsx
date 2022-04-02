export const apiRequest = async (
  url: string,
  method: string
): Promise<any[]> => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  return response.json()
}
