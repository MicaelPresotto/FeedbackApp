import Header from "./components/Header.tsx";
import FeedbackList from "./components/FeedbackList.jsx";
import { useState } from "react";
import feedbackData from "./data/data.js";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
