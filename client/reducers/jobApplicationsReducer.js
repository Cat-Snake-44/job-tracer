/* eslint-disable no-underscore-dangle */
import * as types from '../constants/actionTypes';

// define initialState

const initialState = {
  jobApplications: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_JOB_APPLICATIONS:
      return {
        ...state,
        jobApplications: action.payload,
      };
    case types.ADD_JOB_APPLICATION:
      return {
        ...state,
        jobApplications: [action.payload, ...state.jobApplications],
      };
    case types.DELETE_JOB_APPLICATION:
      return {
        ...state,
        jobApplications: state.jobApplications.filter(
          (application) => application._id !== action.payload
        ),
      };
    case types.EDIT_JOB_APPLICATION:
      // eslint-disable-next-line no-case-declarations
      const newJobApplication = [];
      for (let i = 0; i < state.jobApplications.length; i += 1) {
        if (action.payload._id === state.jobApplications[i]._id) {
          const newCoolObj = {};
          // eslint-disable-next-line no-unused-expressions
          // eslint-disable-next-line prettier/prettier
          newCoolObj._id = action.payload._id; 
          // eslint-disable-next-line prettier/prettier
          newCoolObj.company_name = action.payload.company_name;
          newCoolObj.description = action.payload.description;
          newCoolObj.favorite = action.payload.favorite;
          newCoolObj.job_title = action.payload.job_title;
          newCoolObj.post_source = action.payload.post_source;
          newCoolObj.salary = action.payload.salary;
          newCoolObj.status_date = action.payload.status_date;
          newCoolObj.status_name = action.payload.status_name;
          newCoolObj.notes = action.payload.notes;
          newJobApplication.push(newCoolObj);
        } else {
          newJobApplication.push(state.jobApplications[i]);
        }
      }
      console.log('this is newJobApp', newJobApplication);
      return {
        ...state,
        jobApplications: newJobApplication,
      };

    default:
      return state;
  }
};

export default reducer;
