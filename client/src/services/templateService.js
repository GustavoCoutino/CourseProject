import apiClient from "./apiClient";

async function getLatestTemplates() {
  try {
    const response = await apiClient.get("/");
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getTemplatesByTag(tags) {
  try {
    const response = await apiClient.post("/tags", { tags });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default { getLatestTemplates, getTemplatesByTag };
