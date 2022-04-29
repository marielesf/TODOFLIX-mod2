import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { MoviesService } from "./MoviesService";
import cherek from "../images/cherek.png";
import voltar from "../images/volta.png";
import aranha from "../images/omiAranha.png";
import sonho from "../images/sonho.png";
import sozinho from "../images/sozinho.png";
import fuga from "../images/fuga.jpeg";
import rocketman from "../images/rocketman.jpg";
import amarelo from "../images/amarelo.jpg";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: black;
  }
`;

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  padding: 0 5% 0 5%;
`;

const Card = styled.div`
  color: white;
  width: 25%;
  padding: 1%;
`;

const Img = styled.img`
  width: 350px;
  height: 200px;
`;

const Title = styled.h1`
  padding-left: 5%;
  color: white;
`;

export default class Movies extends React.Component {
  state = {
    filterList: [],
    listFilmes: MoviesService.getAll(),
  };

  componentDidMount() {
    this.setState({ filterList: this.state.movies });
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Title>TODOS</Title>
        <Container>
          {MoviesService?.getFilteredMovies()?.map((item) => (
            <>
              <Card>
                <Img src={item.img} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </Card>
            </>
          ))}
        </Container>
      </>
    );
  }
}
