import { useState } from "react";
import "../styles/activityBar.css";

export default function ActivityBar() {
  const [selectedTab, setSelectedTab] = useState("nearby");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };
  
  return (
    <div className="activity-tabnav">
      <div
        className={`tab-label ${selectedTab === 'nearby' ? 'tab-label-border' : ''}`}
        onClick={() => handleTabClick('nearby')}
      >
        Nearby
      </div>
      <div
        className={`tab-label ${selectedTab === 'friends' ? 'tab-label-border' : ''}`}
        onClick={() => handleTabClick('friends')}
      >
        Friends
      </div>
      <div
        className={`tab-label ${selectedTab === 'following' ? 'tab-label-border' : ''}`}
        onClick={() => handleTabClick('following')}
      >
        Following
      </div>
    </div>
  );
}
