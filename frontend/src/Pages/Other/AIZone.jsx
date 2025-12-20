import React from 'react';
import CameraPreview from '../../Components/AIZone/CameraPreview';
import FeedbackPanel from '../../Components/AIZone/FeedbackPanel';
import StatsPanel from '../../Components/AIZone/StatsPanel';
import SuggestionsPanel from '../../Components/AIZone/SuggestionsPanel';
import ControlPanel from '../../Components/AIZone/ControlPanel';

import '../../Styles/AIZone.css';

export default function AIZone() {
  return (
    <div className="main-container">
    <div className="ai-zone-page">
      <h2>AI Zone: Practice & Detect Signs</h2>

      {/* Main section: Camera on left, controls on right */}
      <div className="ai-zone-main">
        <CameraPreview />
        <div className="right-side-panel">
          <FeedbackPanel />
          <ControlPanel />
           <StatsPanel />
        <SuggestionsPanel />
        </div>
      </div>

    </div>
    </div>
  );
}
