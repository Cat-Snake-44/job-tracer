import * as types from '../constants/actionTypes';

/**
 * A function that loads the job application data upon a GET request to the server
 * @param {function} dispatch
 */
export const loadJobApplications = () => (dispatch) => {
  fetch('api/', {
    method: 'GET',
    headers: {
      'Content-Type': 'Application/JSON',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOAD_JOB_APPLICATIONS,
        payload: data,
      });
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};

/**
 * A function that loads adds job application data upon a POST request to the server
 * @param {function} dispatch
 */
export const addJobApplication = (data) => (dispatch) => {
  console.log(data);
  fetch(`api/jobApplication`, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      dispatch({
        type: types.ADD_JOB_APPLICATION,
        payload: data,
      });
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};

/**
 * A function that deletes the job application data upon a DELETE request to the server
 * @param {function} dispatch
 */
export const deleteJobApplication = (_id) => (dispatch) => {
  fetch(`api/jobApplication/?id=${_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({ _id }),
  })
    .then(() => {
      dispatch({
        type: types.DELETE_JOB_APPLICATION,
        payload: _id,
      });
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};

/**
 * A function that edits the job application data upon an UPDATE request to the server
 * @param {function} dispatch
 */
export const editApp = (jobAppId, jobApplicationObject) => (dispatch) => {
  console.log('idd', jobAppId);
  console.log('jobbbappobject', jobApplicationObject);
  fetch(`api/jobApplication`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify(jobApplicationObject),
  })
    .then(() => {
      dispatch({
        type: types.EDIT_JOB_APPLICATION,
        payload: jobApplicationObject,
      });
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};
