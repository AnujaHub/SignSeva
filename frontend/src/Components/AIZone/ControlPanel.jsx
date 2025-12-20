import React, { useState } from 'react';
import { FiMic, FiCamera } from 'react-icons/fi';

const ControlPanel = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  return (
    <section className="control-panel">
      <h3>Controls</h3>
      <button 
        className={`control-btn ${isRunning ? 'running' : ''}`} 
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? 'Stop AI' : 'Start AI'}
      </button>
      <button 
        className={`control-btn ${micOn ? 'active' : 'inactive'}`} 
        onClick={() => setMicOn(!micOn)}
        aria-pressed={micOn}
        aria-label={micOn ? 'Mute Microphone' : 'Unmute Microphone'}
      >
        <FiMic /> {micOn ? 'Mic On' : 'Mic Off'}
      </button>
      <button 
        className={`control-btn ${cameraOn ? 'active' : 'inactive'}`} 
        onClick={() => setCameraOn(!cameraOn)}
        aria-pressed={cameraOn}
        aria-label={cameraOn ? 'Turn off Camera' : 'Turn on Camera'}
      >
        <FiCamera /> {cameraOn ? 'Camera On' : 'Camera Off'}
      </button>
    </section>
  );
};

export default ControlPanel;
