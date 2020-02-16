import React, { Component } from 'react'
import { connect } from 'react-redux';
import Table from './Table';

export class AssistantsList extends Component {
  render() {
    const { assistants } = this.props
    if (assistants) {
      console.log(assistants)
      const data = assistants.data
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
    assistants: state.assistants.assistants
  }
}

export default connect(mapStateToProps)(AssistantsList)
