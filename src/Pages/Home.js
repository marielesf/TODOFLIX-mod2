import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import capitao2 from "../images/capitao2.png";
import coracao from "../images/coracao.svg";
import thumbUp from "../images/thumbsUp-Filled.svg";
import Carroussel from "./Carroussel";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  background-color: black;
}

p{
  padding-top: 2vh;
  padding-bottom: 2vh;
}
`;

const LastView = styled.div`
  width: 25%;
  padding-left: 3vh;
`;

const Banner = styled.div`
  padding-top: 100px;
  color: white;
  display: flex;
  padding: 3% 3% 3% 3%;
`;

class Home extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />

        <Banner>
          <img src={capitao2} alt="Imagem capitao" />

          <LastView>
            <img src={coracao} alt="Icone Coracao" />
            <p>Visto Recentemente</p>
            <h1>Capitao Fantástico</h1>
            <p>
              Nas florestas do estado de Washington, um pai cria seus seis
              filhos longe da civilização, em uma rígida rotina de aventuras.
              Ele é forçado a deixar o isolamento e leva sua família para
              encarar o mundo, desafiando sua ideia do que significa ser pai.
            </p>
            4/5{" "}
            <a href="#">
              <img src={thumbUp} alt="Icone Seta para cima" />
            </a>
          </LastView>
        </Banner>
        <Carroussel />
      </>
    );
  }
}

export default Home;
