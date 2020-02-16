import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background: #1976D2;

  & > nav {
    margin: 0 auto;
    height: 100%;

    & > ul {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      
      & > a {
        color: #fff;
        opacity: 0.7;
        transition: 0.2s ease-in-out;
        padding: 5px 30px;

        &:hover {
          opacity: 1;
          text-decoration: none;
          -webkit-transition: width 0.4s ease-in-out;
          transition: width 0.4s ease-in-out;
        }

        &::after {
          content: ' ';
          display: block;
          left: 0;
          top: 50px;
          margin: 0 auto;
          width: 0;
          height: 3px;
          background: #9aceff;
          transition: width 0.15s;
        }

        &:hover::after {
          display: block;
          left: 15%;
          width: 70%;
          height: 3px;
          background-color: #fff;
          content: " ";
          transition: width 0.15s;
          transition-property: width;
          transition-duration: 0.15s;
          transition-timing-function: ease-in-out;
          transition-delay: 0s;
        }
      }
    }
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <Link to="/activity_logs">Activity Logs</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/babies">Babies</Link>
          <Link to="/assistants">Assistants</Link>
        </ul>
      </nav>
    </HeaderContainer>
  )
};

export default Header;