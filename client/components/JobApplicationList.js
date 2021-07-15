import React from 'react';
import { connect } from 'react-redux';
import JobApplication from './JobApplication';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  deleteJobApplication: (id) => dispatch(actions.deleteJobApplication(id)),
});

function JobApplicationList({ jobApplications, deleteJobApplication }) {
  return (
    <div>
      <h2 className="heading">Application List</h2>
      <div className="list">
        {jobApplications &&
          jobApplications.map((application) => (
            <JobApplication
              key={`job-${application._id}`}
              id={application._id}
              company_name={application.company_name}
              job_title={application.job_title}
              status={application.status_name}
              deleteJobApplication={deleteJobApplication}
            />
          ))}
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(JobApplicationList);
