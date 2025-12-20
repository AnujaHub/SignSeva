// Pages/Other/Learn.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { HiHandRaised } from 'react-icons/hi2';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import ModuleGrid from '../../Components/Learn/ModuleGrid';
import '../../Styles/Learn.css';

const modules = [
  {
    id: 1,
    title: "Alphabets (A–Z)",
    description: "Learn all 26 letters in ISL.",
    progress: 100,
    locked: false,
    thumbnail: "/src/assets/alphabets.png",
    link: "/alphabet-flashcards"
  },
  {
    id: 2,
    title: "Numbers (0–9)",
    description: "Master the numbers in ISL.",
    progress: 40,
    locked: false,
    thumbnail: "src/assets/numbers.png",
    link: "/number-flashcards"
  },
  {
    id: 3,
    title: "Common Gestures",
    description: "Frequently used everyday signs.",
    progress: 0,
    locked: true,
    thumbnail: "/src/assets/gestures.png"
  }
];

export default function Learn() {
  return (
    <div className="learn-page">
      <h1>Learn Indian Sign Language <HiHandRaised className="inline-icon" /></h1>
      <p className="subheading">Choose a module and start your journey.</p>

      <Link to="/AIZone" className="ai-zone-link">
        <HiOutlineRocketLaunch className="inline-icon" /> Go to AI Zone for Practice & Detection
      </Link>

      <ModuleGrid modules={modules} />
    </div>
  );
}
