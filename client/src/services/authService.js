import apiClient from "./apiClient";

async function login(email, password) {
  try {
    const response = await apiClient.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function register(username, email, password) {
  try {
    const response = await apiClient.post("/auth/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default { login, register };
