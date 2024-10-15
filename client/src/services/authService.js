import apiClient from "./apiClient";

async function login(email, password) {
  try {
    const response = await apiClient.post("/login", { email, password });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default { login };
