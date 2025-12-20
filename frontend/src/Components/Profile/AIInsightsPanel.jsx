import React from 'react';

const AIInsightsPanel = ({ stats }) => (
  <div className="ai-insights">
    <h3>AI Insights</h3>
    <ul>
      <li><strong>Accuracy:</strong> {stats.accuracy}%</li>
      <li><strong>Strongest area:</strong> {stats.strongest}</li>
      <li><strong>Needs practice:</strong> {stats.needsPractice}</li>
    </ul>
  </div>
);

export default AIInsightsPanel;
