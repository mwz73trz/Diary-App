import React from "react";

export default function Entries(props) {
  let renderEntries = () => {
    if (props.topic.entries !== null) {
      return props.topic.entries.map((entry, index) => (
        <div>
          <p key={`entry-${index}`}>{entry.name}</p>
        </div>
      ));
    } else {
      return "";
    }
  };
  return <div>{renderEntries()}</div>;
}
