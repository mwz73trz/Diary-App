const BASE_URL = "http://localhost:8000/";

const getTopics = async () => {
  const url = `${BASE_URL}api/topics/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getTopicById = async (topicId) => {
  const url = `${BASE_URL}api/topics/${topicId}/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const myExports = {
  getTopics,
  getTopicById,
};

export default myExports;
