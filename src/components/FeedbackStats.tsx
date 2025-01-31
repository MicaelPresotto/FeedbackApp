import React from "react";
import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  const avgRating =
    feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>Average rating: {isNaN(avgRating) ? 0 : avgRating.toFixed(1)}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
