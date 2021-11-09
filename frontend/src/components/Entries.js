import React from "react";
import { Link } from "react-router-dom";

export default function Entries(props) {
  let renderEntries = () => {
    if (props.topic.entries !== null) {
      return props.topic.entries.map((entry, index) => (
        <div>
          <p key={`entry-${index}`}>
            <Link to={`topics/${props.topic.id}/entries/${entry.id}`}>
              {entry.name}
            </Link>
          </p>
        </div>
      ));
    } else {
      return "";
    }
  };
  return <div>{renderEntries()}</div>;
}
