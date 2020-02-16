import React, { Component } from 'react'
import { connect } from 'react-redux';
import Table from './Table';

export class activitiesList extends Component {
  render() {
    const { activities } = this.props
    if (activities) {
      const data = activities.data
      return <Table data={data} />
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
    activities: state.activities.activities
  }
}

export default connect(mapStateToProps)(activitiesList)
