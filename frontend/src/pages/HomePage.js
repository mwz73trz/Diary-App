import diaryAPI from "../api/diaryAPI";
import Topics from "../components/Topics";
import { useState, useEffect } from "react";

export default function HomePage(props) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const getTopics = async () => {
      try {
        let topicsData = await diaryAPI.getTopics();
        setTopics(topicsData);
      } catch (e) {
        console.error("error fetching topics: ", e);
      }
    };
    if (!topics.length) {
      getTopics();
    }
  }, [topics]);
  return (
    <div>
      <Topics topics={topics} />
    </div>
  );
}
