import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchActivities, fetchActivityLogs, fetchBabies, fetchAssistants } from '../actions'

export class App extends Component {

  componentDidMount() {
    this.props.fetchActivities();
    this.props.fetchActivityLogs();
    this.props.fetchAssistants();
    this.props.fetchBabies();
  }

  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps, { fetchActivities, fetchActivityLogs, fetchAssistants, fetchBabies})(App)

