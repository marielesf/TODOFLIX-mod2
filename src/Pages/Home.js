import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import capitao2 from "../images/capitao2.png";
import coracao from "../images/coracao.svg";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  padding: 0 3% 0 3%;
  background-color: black;
`;

const Banner = styled.div`
  padding-top: 100px;
  padding: 0 3% 0 3%;
  background-color: black;
  color: white;
  width: 100%;
  display: flex;
`;

class Home extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />

        <Banner>
          <img src={capitao2} alt="Imagem capitao" />
          <Container></Container>
          Visto Recentemente
          <img src={coracao} alt="Icone Coracao" />
          <h1>Capitao Fantástico</h1>
          <p>
            Nas florestas do estado de Washington, um pai cria seus seis filhos
            longe da civilização, em uma rígida rotina de aventuras. Ele é
            forçado a deixar o isolamento e leva sua família para encarar o
            mundo, desafiando sua ideia do que significa ser pai.
          </p>
        </Banner>
      </>
    );
  }
}

export default Home;
