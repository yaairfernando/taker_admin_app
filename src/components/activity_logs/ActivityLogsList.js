import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './Table'
import { fetchActivityLogs } from '../../actions'

export class ActivityLogsList extends Component {
  render() {
    const {activity_logs } = this.props
    if (activity_logs.activityLogs) {
      let records = activity_logs.activityLogs.data
      return <Table records={records} />
    }
    return (
      <div>
        Loading....
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activity_logs: state.activityLogs
  }
}

export default connect(mapStateToProps, { fetchActivityLogs })(ActivityLogsList);