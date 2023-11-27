export async function jsonFetch<T>(endpoint: string, request: RequestInit = {}): Promise<T> {
  const response = await fetch(`${endpoint}`, request);

  if (!response.ok) throw new Error("Request failed");

  return await response.json();
}