/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

/**
 * A function that maps dispatch to the props on the CreateJobApplicationModal component
 * @param {function} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  addJobApplication: (newJobApplication) =>
    dispatch(actions.addJobApplication(newJobApplication)),
  loadJobApplications: () => dispatch(actions.loadJobApplications),
});

/**
 * Creating a CreateJobApplicationModal React Component
 */
class CreateJobApplicationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        company_name: '',
        job_title: '',
        salary: '',
        post_source: '',
        description: '',
        status_name: '',
        notes: '',
        status_date: '',
        favorite: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formFieldChangeHandler = this.formFieldChangeHandler.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addJobApplication(this.state.details);
    console.log('hiiii', this.state.details);
    this.props.loadJobApplications();
    this.setState({
      details: {
        company_name: '',
        job_title: '',
        salary: '',
        post_source: '',
        description: '',
        status_name: '',
        notes: '',
        status_date: '',
        favorite: false,
      },
    });
    this.props.onClose();
  }

  formFieldChangeHandler(event) {
    const { details } = this.state;
    details[event.target.name] = event.target.value;
    this.setState({ details });
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal list">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Create Job Application</h4>
          </div>
          <div className="modal-body">
            <form>
              <label>
                Favorite?:
                <select
                  defaultValue={this.state.details.favorite}
                  name="favorite"
                  onChange={this.formFieldChangeHandler}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </label>
              <label>
                Company Name:
                <input
                  type="text"
                  name="company_name"
                  value={this.state.details.company_name}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Job Title:
                <input
                  type="text"
                  name="job_title"
                  value={this.state.details.job_title}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Salary:
                <input
                  type="number"
                  min="0"
                  max="10000000"
                  name="salary"
                  value={this.state.details.salary}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Application Status Date:
                <input
                  type="date"
                  name="status_date"
                  value={this.state.details.status_date}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Application Status:
                <select
                  defaultValue={this.state.details.status_name}
                  name="status_name"
                  onChange={this.formFieldChangeHandler}
                >
                  <option value="pending">Pending</option>
                  <option value="applied">Applied</option>
                  <option value="interviewed">Interviewed</option>
                  <option value="offer_received">Offer Received</option>
                  <option value="rejected">Rejected</option>
                  <option value="dropped">Dropped</option>
                  <option value="accepted">Accepted</option>
                </select>
              </label>
              <label>
                Post Source:
                <select
                  defaultValue={this.state.details.post_source}
                  name="post_source"
                  onChange={this.formFieldChangeHandler}
                >
                  <option value="friend">Friend</option>
                  <option value="internet">Internet</option>
                </select>
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={this.state.details.description}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Notes:
                <textarea
                  name="notes"
                  value={this.state.details.notes}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <button
                className="btn btn-add"
                type="submit"
                onClick={this.handleSubmit}
              >
                Add Job
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-close"
              type="button"
              onClick={this.props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreateJobApplicationModal);
