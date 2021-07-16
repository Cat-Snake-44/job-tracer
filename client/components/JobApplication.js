import React, { useState } from 'react';
import EditJobApplicationModal from './modals/EditJobApplicationModal';

const JobApplication = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {props.company_name && (
        <div className="job-application">
          <div className="row space-around">
            <p>{props.company_name}</p>
            <p className="ml">{props.job_title}</p>
            <p className="ml">{props.status}</p>
          </div>
          <button
            className="btn btn-close"
            type="button"
            onClick={() => setShow(true)}
          >
            Edit
          </button>
          <EditJobApplicationModal
            // eslint-disable-next-line no-underscore-dangle
            jobAppId={props._id}
            onClose={() => setShow(false)}
            show={show}
          />
          <button
            className=" btn btn-delete"
            type="button"
            // eslint-disable-next-line no-underscore-dangle
            onClick={() => props.deleteJobApplication(props._id)}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default JobApplication;
