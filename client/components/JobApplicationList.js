/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import JobApplication from './JobApplication';
import * as actions from '../actions/actions';

/**
 * A function that maps state to the props on the EditJobApplicationModal React Component
 * @param {function} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  deleteJobApplication: (id) => dispatch(actions.deleteJobApplication(id)),
});

function JobApplicationList({ jobApplications, deleteJobApplication }) {
  return (
    <div>
      <h1 className="heading">Application List</h1>
      <div className="list" data-testid="list">
        {jobApplications &&
          jobApplications.map((application) => (
            <JobApplication
              key={`job-${application._id}`}
              _id={application._id}
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
