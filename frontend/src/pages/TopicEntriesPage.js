import { useState, useEffect } from "react";
import diaryAPI from "../api/diaryAPI";
import Entries from "../components/Entries";

export default function TopicEntriesPage(props) {
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    const getTopic = async () => {
      try {
        let topicId = props.match.params.topicId;
        const topicData = await diaryAPI.getTopicById(topicId);
        setTopic(topicData);
      } catch (e) {
        console.error("error fetching topic: ", e);
      }
    };
    if (!topic) {
      getTopic();
    }
  }, [topic]);

  const renderEntries = () => {
    if (topic !== null) {
      return (
        <div>
          <h1>Topic: {topic.name}</h1>
          <h2>Entries</h2>
          <Entries topic={topic} />
        </div>
      );
    } else {
      return "";
    }
  };

  return <div>{renderEntries()}</div>;
}
