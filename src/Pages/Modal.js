import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid red;
  width: 50vw;
  height: 50vh;
  z-index: 1;
  margin-top: 20vh;
`;

export default class Modal extends React.Component {
  render() {
    return (
      <Container>
        <div></div>
      </Container>
    );
  }
}
