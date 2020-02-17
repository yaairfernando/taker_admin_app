import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateActivityLog, fetchActivityLog, fetchActivityLogs } from '../../actions'
import TimePicker from 'react-time-picker';
import Swal from 'sweetalert2';
import Spinner from '../Spinner'

class ActivityLogsEdit extends Component {

  componentDidMount() {
    this.props.fetchActivityLog(this.props.match.params.id)
  }

  state = {
    comments: '',
    time: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { comments, time } = this.state;
    let id = this.props.activityLog.data.id;
    const { data } = this.props.activityLog
    let date = data.start_time.slice(0, data.start_time.length - 7);
    let full_date = date + ' ' + time;
    if (time === '') {
      Swal.fire(
        'Error!!',
        'The time is a required field!!',
        'error'
      )
    } else {
      this.props.updateActivityLog(id, comments, full_date);
      this.props.fetchActivityLogs();
    }
  }

  onChangeComments = e => {
    this.setState({ comments: e.target.value })
  }

  onChangePicker = time => {
    this.setState({ time })
  }

  render() {
    if (!this.props.activityLog) {
      return <Spinner />
    }
    const { data } = this.props.activityLog
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weigth-bold">Finish Activity</h2>
              <div>
                <label>Baby:</label>
                <strong>{data.baby}</strong>
              </div>
              <div>
                <label>Assistant:</label>
                <strong>{data.assistant}</strong>
              </div>
              <div>
                <label>Activity:</label>
                <strong>{data.activity}</strong>
              </div>
              <div>
                <label>Start Time:</label>
                <strong>{data.start_time}</strong>
              </div>
              <hr/>
              <form onSubmit={this.onSubmit}>
                <div className="form-row">
                  <div className="col-12 mb-3">
                    <label>Activity stop time:</label>
                    <TimePicker className="form-control"
                      onChange={this.onChangePicker}
                      value={this.state.time}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="comments">Comments:</label>
                    <textarea className="form-control" value={this.state.comments} onChange={this.onChangeComments} id="comments" rows="3"></textarea>
                  </div>
                  <div className="w-100">
                    <button type="submit" className="btn d-block btn-primary mb-2 ml-1">Finish Activity</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activityLog: state.activityLogs.activityLog
  }
}

export default connect(mapStateToProps, { updateActivityLog, fetchActivityLogs, fetchActivityLog })(ActivityLogsEdit);