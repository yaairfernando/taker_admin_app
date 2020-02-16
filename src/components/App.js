import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux';
import { fetchActivities, fetchActivityLogs, fetchBabies, fetchAssistants } from '../actions';
import { Route, Router, Redirect } from 'react-router-dom';
import ActivitiesList from './activities/ActivitiesList'
import ActivityLogsList from './activity_logs/ActivityLogsList'
import AssistantsList from './assistants/AssistantsList'
import BabiesList from './babies/BabiesList'
import Header from './Header'
import history from '../history';

export class App extends Component {

  componentDidMount() {
    this.props.fetchActivities();
    this.props.fetchActivityLogs();
    this.props.fetchAssistants();
    this.props.fetchBabies();
  }

  render() {
    return (
      <div className="w-100">
        <Router history={history}>
          <Header />
          <Redirect from="/" to="activity_logs" />
          <Route exact path="/activity_logs" component={ActivityLogsList} />
          <Route path="/activities" component={ActivitiesList} />
          <Route path="/babies" component={BabiesList} />
          <Route path="/assistants" component={AssistantsList} />
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps, { fetchActivities, fetchActivityLogs, fetchAssistants, fetchBabies})(App)

