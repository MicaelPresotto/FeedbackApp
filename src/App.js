import Header from "./components/Header.tsx";
import FeedbackList from "./components/FeedbackList.tsx";
import { useState } from "react";
import feedbackData from "./data/data.js";
import FeedbackStats from "./components/FeedbackStats.tsx";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?"))
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
