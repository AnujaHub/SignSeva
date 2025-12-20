import React from 'react';

const CameraPreview = () => (
  <section className="camera-preview">
    <video autoPlay muted className="video-feed" />
    <div className="overlay">Detecting...</div>
  </section>
);

export default CameraPreview;
