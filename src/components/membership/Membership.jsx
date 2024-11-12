import React from 'react';
import PricingSection from './components/PricingSection';
import OnlineCoaching from './components/OnlineCoaching';
import CoachingLessons from './components/CoachingLessons';
import StudentsHaveTo from './components/StudentsHaveTo';
import DownloadBanner from './components/DownloadBanner';
import RoleCard from './components/RoleCard';

function Membership() {
  return (
    <div className="Membership">
      <PricingSection />
      <OnlineCoaching />
      <CoachingLessons />
      <StudentsHaveTo />
      <DownloadBanner />
      <RoleCard />
    </div>
  );
}

export default App;

