import React from 'react';
import '../../views/Profile/Profile';

const Profilecomponent = ({name, score}) => {
  return (
        <div className="container">
            <h1 className="profile-name">{name}</h1>
            <div className="profile-stats">
                <div className="stat">
                    <h2 className="stat-number">1</h2>
                    <p className="stat-label">Followers</p>
                </div>
                <div className="stat">
                    <h2 className="stat-number">1</h2>
                    <p className="stat-label">Following</p>
                </div>
                <div>
                    <h2 className="stat-number">{score}</h2>
                    <p className="stat-label">Score</p>
                </div>
            </div>
        </div>

  );
}

export default Profilecomponent;