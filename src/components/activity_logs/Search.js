import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchActivityLogs } from '../../actions'
import styled from 'styled-components';

const ActionsContainer = styled.div`
  & > button {
    width: 145px;
  }
`

class Search extends Component {
  state = {
    baby: '',
    assistant: '',
    status: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { baby, assistant, status } = this.state;
    this.props.fetchActivityLogs(baby, assistant, status);
  }

  onReset = (e) => {
    e.preventDefault();
    this.props.fetchActivityLogs();
  }

  handleChangeBaby = e => {
    this.setState({ baby: e.target.value });
  }

  handleChangeAssistant = e => {
    this.setState({ assistant: e.target.value });
  }

  handleChangeStatus = e => {
    this.setState({ status: e.target.value });
  }

  render() {
    const { babies, assistants } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="col-3">
            <select className="form-control" value={this.state.baby} onChange={this.handleChangeBaby} >
              <option value="">SELECT A BABY</option>
              {babies ? babies.data.map((baby, index) => (
                <option value={baby.id} key={index}>{baby.name}</option>
              )) : null}
            </select>
          </div>
          <div className="col-3">
            <select className="form-control" value={this.state.assistant} onChange={this.handleChangeAssistant} >
              <option value="">SELECT AN ASSISTANT</option>          
              {assistants ? assistants.data.map((assistant, index) => (
                <option value={assistant.id} key={index}>{assistant.name}</option>
              )) : null}
            </select>   
          </div>
          <div className="col-3">
            <select className="form-control" value={this.state.status} onChange={this.handleChangeStatus} >
              <option value="">SELECT THE STATUS</option>
              <option value="2">All</option>
              <option value="1">Finished</option>
              <option value="0">Progress</option>
            </select>
          </div>
          <ActionsContainer className="d-flex w-25 justify-content-around">
            <button type="button" onClick={this.onReset} className="btn btn-success mb-2">Reset</button>
            <button type="submit" className="btn btn-primary mb-2 ml-1">Filter</button>
          </ActionsContainer>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    babies: state.babies.babies,
    assistants: state.assistants.assistants
  }
}

export default connect(mapStateToProps, { fetchActivityLogs })(Search);