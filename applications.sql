--Table for job applications
CREATE TABLE applications (
    _id serial PRIMARY KEY,
    company_name varchar NOT NULL,
    job_title varchar NOT NULL,
    salary integer,
    "description" varchar,
    post_source varchar,
    status_name varchar,
    notes varchar,
    status_date date,
    date_created date DEFAULT current_date,
    favorite boolean
);

