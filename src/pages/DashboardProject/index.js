import React from 'react';

const DashboardProject = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <PublicPreference />
        </div>
        <div className="col-md-6">
          <UserBehavior />
        </div>
      </div>
    </div>
  </div>
);

export default DashboardProject;