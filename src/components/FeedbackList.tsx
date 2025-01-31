import FeedbackItem from "./FeedbackItem.tsx";
import React from "react";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback && feedback.length === 0) {
    <p>No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackList;
