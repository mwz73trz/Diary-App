import React from "react";
import Entry from "../components/Entry";
import diaryAPI from "../api/diaryAPI";

export default function EntryPage(props) {
  const [entry, setEntry] = React.useState(null);

  React.useState(() => {
    const getEntry = async () => {
      try {
        const entryData = await diaryAPI.getEntryById(
          props.match.params.entryId
        );
        setEntry(entryData);
      } catch (error) {
        console.error("error fetching entry: ", error);
      }
    };
    if (entry === null) {
      getEntry();
    }
  }, [entry]);

  return (
    <div>
      {entry ? <Entry {...entry} /> : <span>404: Entry Not Found</span>}
    </div>
  );
}
