import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createActivityLog, fetchActivityLogs } from '../../actions'
import TimePicker from 'react-time-picker';

class ActivityLogsNew extends Component {
  state = {
    baby: '',
    assistant: '',
    activity: '',
    time: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { baby, assistant, activity, time } = this.state;
    let today = new Date();
    let date = '';
    if (time !== '') {
      date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear() + ' ' + time;
    }
    this.props.createActivityLog(baby, assistant, activity, date);
    this.props.fetchActivityLogs();
  }

  onChangePicker = time => {
    this.setState({ time })
  }

  handleChangeBaby = e => {
    this.setState({ baby: e.target.value })
  }

  handleChangeAssistant = e => {
    this.setState({ assistant: e.target.value })
  }

  handleChangeActivity = e => {
    this.setState({ activity: e.target.value })
  }

  render() {
    const { babies, assistants, activities } = this.props;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weigth-bold">Create new log</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-row">
                  <div className="col-12 col-md-6 mb-3">
                    <label>Select Baby:</label>
                    <select className="form-control" value={this.state.baby} onChange={this.handleChangeBaby} >
                      <option value=''>Select</option>
                      {babies.data.map((baby, index) => (
                        <option value={baby.id} key={index}>{baby.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <label>Select Assistant:</label>
                    <select className="form-control" value={this.state.assistant} onChange={this.handleChangeAssistant} >
                      <option value=''>Select</option>
                      {assistants.data.map((assistant, index) => (
                        <option value={assistant.id} key={index}>{assistant.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <label>Select Activity:</label>
                    <select className="form-control" value={this.state.activity} onChange={this.handleChangeActivity} >
                      <option value=''>Select</option>
                      {activities.data.map((activity, index) => (
                        <option value={activity.id} key={index}>{activity.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <label>Select Start Time:</label>
                    <TimePicker className="form-control" 
                      onChange={this.onChangePicker}
                      value={this.state.time}
                    />
                  </div>
                  <div className="w-100">
                    <button type="submit" className="btn btn-primary d-block mb-2 ml-1">Create</button>
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
    babies: state.babies.babies,
    assistants: state.assistants.assistants,
    activities: state.activities.activities
  }
}

export default connect(mapStateToProps, { createActivityLog, fetchActivityLogs })(ActivityLogsNew);