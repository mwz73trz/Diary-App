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

const addTopic = (topicObject) => {
  return fetch(`${BASE_URL}api/topics/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(topicObject),
  });
};

const getEntryById = async (entryId) => {
  const url = `${BASE_URL}api/entries/${entryId}/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const myExports = {
  getTopics,
  getTopicById,
  addTopic,
  getEntryById,
};

export default myExports;
