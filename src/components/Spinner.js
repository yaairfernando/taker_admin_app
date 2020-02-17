import React from 'react'
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  position: absolute;
  right: 50%;
  bottom: 50%;
  
`

const Spinner = () => {
  return (
    <SpinnerContainer className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </SpinnerContainer>
  )
}

export default Spinner;