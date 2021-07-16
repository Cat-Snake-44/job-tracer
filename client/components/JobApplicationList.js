/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as actions from '../actions/actions';
import JobApplication from './JobApplication';

/**
 * A function that maps state to the props on the EditJobApplicationModal React Component
 * @param {function} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  deleteJobApplication: (id) => dispatch(actions.deleteJobApplication(id)),
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function JobApplicationList({ jobApplications, deleteJobApplication }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Application List
          </Typography>
          <div className={classes.demo}>
            <List>
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
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(JobApplicationList);
