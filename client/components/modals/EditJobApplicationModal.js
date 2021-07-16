/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

/**
 * A function that maps state to the props on the EditJobApplicationModal React Component
 * @param {object} state
 * @param {*} ownProps
 */
const mapStateToProps = (state, ownProps) => {
  const { jobAppId, show, onClose } = ownProps;
  const { jobApplications } = state.jobApplications;

  const jobApplicationToEditArray = jobApplications.filter((el) => {
    // eslint-disable-next-line no-underscore-dangle
    return el._id === jobAppId;
  });
  const jobApplicationObject = jobApplicationToEditArray[0];
  return { jobAppId, show, onClose, jobApplicationObject };
};

/**
 * A function that maps dispatch to the props on the EditJobApplicationModal React Component
 * @param {function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    editAppHandler: (jobAppId, jobApplicationObject) =>
      dispatch(actions.editApp(jobAppId, jobApplicationObject)),
  };
};

/**
 * Creates an EditJobApplicationModal React Component
 */
class EditJobApplicationModal extends React.Component {
  constructor(props) {
    super(props);

    this.formFieldChangeHandler = this.formFieldChangeHandler.bind(this);
    this.SubmitHandler = this.SubmitHandler.bind(this);
  }

  formFieldChangeHandler(event) {
    event.preventDefault();
    this.props.jobApplicationObject[event.target.name] = event.target.value;
  }

  SubmitHandler(event) {
    event.preventDefault();
    this.props.editAppHandler(
      this.props.jobAppId,
      this.props.jobApplicationObject
    );
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Edit Job Application</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={this.SubmitHandler}>
              <label>
                Favorite?:
                <select
                  name="favorite"
                  defaultValue={this.props.jobApplicationObject.favorite}
                  onChange={this.formFieldChangeHandler}
                >
                  <option defaultValue="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </label>
              <label>
                Company Name:
                <input
                  type="text"
                  name="company_name"
                  placeholder={this.props.jobApplicationObject.company_name}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Job Title:
                <input
                  type="text"
                  name="job_title"
                  placeholder={this.props.jobApplicationObject.job_title}
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
                  placeholder={this.props.jobApplicationObject.salary}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Application Status Date:
                <input
                  type="date"
                  name="status_date"
                  placeholder={this.props.jobApplicationObject.status_date}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Application Status:
                <select
                  name="status_name"
                  placeholder={this.props.jobApplicationObject.status_name}
                  onChange={this.formFieldChangeHandler}
                >
                  <option defaultValue="pending">Pending</option>
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
                  name="post_source"
                  placeholder={this.props.jobApplicationObject.post_source}
                  onChange={this.formFieldChangeHandler}
                >
                  <option defaultValue="friend">Friend</option>
                  <option value="internet">Internet</option>
                </select>
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  placeholder={this.props.jobApplicationObject.description}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label>
                Notes:
                <textarea
                  name="notes"
                  placeholder={this.props.jobApplicationObject.notes}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <button className="btn btn-add" type="submit">
                Submit Changes
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={this.props.onClose}
              className="btn btn-close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditJobApplicationModal);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EditJobApplicationModal);
