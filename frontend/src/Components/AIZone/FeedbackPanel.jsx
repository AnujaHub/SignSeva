import React from 'react';
import { HiHandRaised } from 'react-icons/hi2';

const FeedbackPanel = () => (
  <section className="feedback-panel">
    <h3>AI Feedback</h3>
    <div className="feedback-item">
      <strong>Detected Sign:</strong> <HiHandRaised className="inline-icon" /> Hello
    </div>
    <div className="feedback-item">
      <strong>Confidence:</strong> 92%
    </div>
    <div className="feedback-item tips">
      <strong>Tips:</strong> Raise hand slightly higher.
    </div>
  </section>
);

export default FeedbackPanel;
