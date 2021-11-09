import { useState, useEffect } from "react";
import diaryAPI from "../api/diaryAPI";

export default function TopicEntriesPage(props) {
  const [topicId, setTopicId] = useState(props.match.params.topicId);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getTopic = async () => {
      try {
        const topicData = await diaryAPI.getTopicById(
          props.match.params.topicId
        );
        setTopicId(topicData);
      } catch (e) {
        console.error("error fetching topic: ", e);
      }
    };
  });
}
