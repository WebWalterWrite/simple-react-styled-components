import React, { Fragment } from "react";
import styled from "styled-components/macro";

// import component
import Homepage from "./Homepage";

// use styled components
const Header = styled.header`
  background-color: #db7093;
  color: #ffffff;
  padding: 1em;
  display: flex;
  align-items: center;
  img {
    margin-right: 2%;
  }
`;

export default () => (
  <Fragment>
    <Header>
      <img
        src="https://www.styled-components.com/static/icon.png"
        alt="styled-components"
        width="100"
        height="50"
      />
      <h1>styled components</h1>
    </Header>
    <main>
      <Homepage />
    </main>
    <footer />
  </Fragment>
);
