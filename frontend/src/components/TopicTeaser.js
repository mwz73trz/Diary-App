import { ListGroupItemHeading } from "reactstrap";
import { Link } from "react-router-dom";

export default function TopicTeaser({ id, name }) {
  return (
    <div>
      <ListGroupItemHeading>
        <Link to={`/topics/${id}`}>{name}</Link>
      </ListGroupItemHeading>
    </div>
  );
}
