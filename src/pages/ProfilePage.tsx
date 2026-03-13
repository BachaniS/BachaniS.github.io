import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif";
  const { profileName } = useParams<{ profileName: string }>();

  // Ensure type safety
  const profileId: string = ['swe', 'ai', 'de', 'general'].includes(profileName || '') 
    ? profileName! 
    : 'general';

  return (
    <div className="profile-dashboard">
      <div className="profile-hero-bg" style={{ backgroundImage: `url(${backgroundGif})` }}>
        <ProfileBanner profileName={profileId} />
      </div>
      <div className="profile-content-rows">
        <TopPicksRow profile={profileId} />
        <ContinueWatching profile={profileId} />
      </div>
    </div>
  );
};

export default ProfilePage;
