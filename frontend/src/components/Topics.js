import { ListGroup, ListGroupItem } from "reactstrap";
import TopicTeaser from "../components/TopicTeaser";

export default function Topics({ topics }) {
  return (
    <ListGroup>
      {topics.map((topic, index) => (
        <ListGroupItem>
          <TopicTeaser {...topic} id={index + 1} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
