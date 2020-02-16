import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 0 auto;
  width: 75%;

  & > a {
    width: 150px;
  }
`

const Table = ({ records }) => {
  return (
    <Container className="mt-4">
      <Link to="/activity_logs/new" className="btn btn-info mb-2">New</Link>
      {typeof records === 'string' ? <div>{records}</div> : null}
      <table className="table table-striped mt-4">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">Baby</th>
            <th scope="col">Assistant</th>
            <th scope="col">Activity</th>
            <th scope="col">Start Time</th>
            <th scope="col">Status</th>
            <th scope="col">Duration</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {typeof records === 'object' ? records.map((r, index) => {
            return (
              <tr key={index}>
                <td>{r.baby}</td>
                <td>{r.assistant}</td>
                <td>{r.activity}</td>
                <td>{r.start_time}</td>
                <td>{r.stop_time}</td>
                <td>{r.duration}</td>
                <td className="acciones">
                  {r.stop_time === "Progreso" ? <Link to={`activity_logs/edit/${r.id}`} className="btn btn-primary mr-2" >Finish</Link> : null }
                </td>
              </tr>
            )
          }) : null}
        </tbody>
      </table>
    </Container>
  )
}

export default Table;