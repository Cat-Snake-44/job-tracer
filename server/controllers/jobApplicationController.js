/* eslint-disable camelcase */
// import the jobApp Model
const db = require('../models/jobApplicationModels');

const jobApplicationController = {};

/**
 * These are the controllers
 // eslint-disable-next-line prettier/prettier
 * @param {Request} req 
 * @param {Response} res
 * @param {function} next 
 */
jobApplicationController.getJobApplications = (req, res, next) => {
  // create query string
  const queryStr = `
    SELECT * FROM applications
    `;

  // call db query passing in query string

  db.query(queryStr)
    .then((data) => {
      // add the data to res.locals
      res.locals.jobApplications = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught error in jobApplicationController.getJobApplications',
        status: 400,
        message: { err },
      });
    });
};

// create new job application
/**
 * express middleware function that sends the new job application data to the client
 * @param {*} req
 * @param {*} res
 * @param {fuction} next
 */
jobApplicationController.createJobApplication = (req, res, next) => {
  // get values from the req body
  const {
    company_name,
    job_title,
    salary,
    description,
    post_source,
    status_name,
    status_date,
    notes,
    favorite,
  } = req.body;

  // put values in to a new array

  const jobApplicationValues = [
    company_name,
    job_title,
    salary,
    description,
    post_source,
    status_name,
    status_date,
    notes,
    favorite,
  ];

  // make query string

  const queryStr = `
    INSERT INTO 
      applications 
        (company_name,job_title,salary,description,post_source,status_name, status_date, notes, favorite)
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;

  // call db query passing in query string and values array

  db.query(queryStr, jobApplicationValues)
    //   (data, error) => {
    // eslint-disable-next-line prettier/prettier
    //   if(error) 
    //   return next(error);
    // else {
    //   console.log('this is data', data);
    //   res.locals.result = data.rows[0]
    // }})
    .then((data) => {
      console.log('this is data', data);
      // eslint-disable-next-line prettier/prettier
      // eslint-disable-next-line prefer-destructuring
      res.locals.result = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught error in jobApplicationController.createJobApplication',
        status: 400,
        message: { err },
      });
    });
};

// update job application
/**
 * express middleware function that sends the updated job application data to the client
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
jobApplicationController.updateJobApplicationById = (req, res, next) => {
  // get id from req query

  // const { _id } = req.query;

  // get values from req body

  const {
    _id,
    company_name,
    job_title,
    salary,
    description,
    post_source,
    notes,
    favorite,
  } = req.body;

  // add job application id as last array element

  const updatedJobApplicationValues = [
    company_name,
    job_title,
    salary,
    description,
    post_source,
    notes,
    favorite,
    _id,
  ];

  // make query string

  const queryStr = `
    UPDATE
      applications
    SET 
      company_name = $1,job_title = $2,salary = $3, description = $4, post_source = $5, notes = $6, favorite = $7
    WHERE 
      _id = $8  
    RETURNING *`;

  //  query db

  db.query(queryStr, updatedJobApplicationValues)
    .then((data) => {
      // eslint-disable-next-line prefer-destructuring
      res.locals.update = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught error in jobApplicationController.updateJobApplicationById',
        status: 400,
        message: { err },
      });
    });
};

/**
 * express middleware function that sends the to be deleted job application data to the client
 * @param {*} req
 * @param {*} res
 * @param {function} next
 */
jobApplicationController.deleteJobApplicationById = (req, res, next) => {
  // get id from req query
  const { _id } = req.body;

  console.log(_id);
  // make query string

  const queryStr = `
    DELETE FROM 
      applications
    WHERE 
      _id = $1`;

  // query db

  db.query(queryStr, [_id])
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught error in jobApplicationController.deleteJobApplication',
        status: 400,
        message: { err },
      });
    });
};

module.exports = jobApplicationController;
