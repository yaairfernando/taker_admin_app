import React, { Component } from 'react'
import { connect } from 'react-redux';
import Table from './Table';
import Spinner from '../Spinner'

export class BabiesList extends Component {
  render() {
    const { babies } = this.props
    if (babies) {
      const data = babies.data
      return <Table data={data} />
    }
    return (
      <Spinner />
    )
  }
}
const mapStateToProps = state => {
  return {
    babies: state.babies.babies
  }
}

export default connect(mapStateToProps)(BabiesList)
