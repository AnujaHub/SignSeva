import React from 'react';
import { HiHandRaised } from 'react-icons/hi2';

const ProfileHeader = ({ name, avatar, quote }) => (
  <div className="profile-header">
    <img src={avatar} alt={name} className="profile-avatar" />
    <div>
      <h2>Hi, {name} <HiHandRaised className="inline-icon" /></h2>
      <p>{quote}</p>
    </div>
  </div>
);

export default ProfileHeader;
