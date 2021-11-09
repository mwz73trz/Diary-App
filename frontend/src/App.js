import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddTopicPage from "./pages/AddTopicPage";
import TopicEntriesPage from "./pages/TopicEntriesPage";
import EntryPage from "./pages/EntryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/add-topic" component={AddTopicPage} />
          <Route exact path="/topics/:topicId" component={TopicEntriesPage} />
          <Route
            exact
            path="/topics/:topicId/entries/:entryId"
            component={EntryPage}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
