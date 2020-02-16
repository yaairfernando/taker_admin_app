import React, { Component } from 'react'
import { connect } from 'react-redux';
import Table from './Table';
import Spinner from '../Spinner'

export class AssistantsList extends Component {
  render() {
    const { assistants } = this.props
    if (assistants) {
      const data = assistants.data
      return <Table data={data} />
    }
    return (
      <Spinner />
    )
  }
}
const mapStateToProps = state => {
  return {
    assistants: state.assistants.assistants
  }
}

export default connect(mapStateToProps)(AssistantsList)
