import React, { Component } from 'react'
import { connect } from 'react-redux';
import Table from './Table';
import Spinner from '../Spinner'

export class activitiesList extends Component {
  render() {
    const { activities } = this.props
    if (activities) {
      const data = activities.data
      return <Table data={data} />
    }
    return (
      <Spinner />
    )
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities.activities
  }
}

export default connect(mapStateToProps)(activitiesList)
