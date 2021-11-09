import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import TopicEntriesPage from "./pages/TopicEntriesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/topics/:topicId" component={TopicEntriesPage} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
