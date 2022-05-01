import React from "react";
import Carousel from "nuka-carousel";
import { MoviesService } from "./MoviesService";
import cherek from "../images/cherek.png";
import voltar from "../images/volta.png";
import aranha from "../images/omiAranha.png";
import sonho from "../images/sonho.png";
import sozinho from "../images/sozinho.png";
import fuga from "../images/fuga.jpeg";
import rocketman from "../images/rocketman.jpg";
import amarelo from "../images/amarelo.jpg";
import styled from "styled-components";
import thumbUp from "../images/thumbsUp-Filled.svg";

const Container = styled.div`
  padding: 0 3% 0 3%;
  background-color: black;
`;

const Img = styled.img`
  width: 350px;
  height: 200px;
`;

const Card = styled.div`
  color: white;
  width: 100%;
  border: 1px solid yelow;
`;

const Left = styled.div`
  align: left;
  width: 70%;
  border: 1px solid red;
  display: inline-flex;
`;

const Right = styled.div`
  align: right;
  width: 20%;
  border: 1px solid green;
  display: inline-flex;
`;
export default class App extends React.Component {
  state = {
    dropdownState: false,
    movies: MoviesService.getAll(),
    filteredMovies: [],
  };

  componentDidMount() {
    this.setState({ filteredMovies: this.state.movies });
  }

  render() {
    return (
      <>
        <Container>
          <Card>
            <h4>Destaques</h4>
          </Card>
          <Carousel wrapAround={true} slidesToShow={5} adaptiveHeight={true}>
            {this.state.movies.map((item) => (
              <>
                <Card>
                  <Img src={item.img} />
                  <Left>{item.title}</Left>
                  <Right>
                    4/5 <img src={thumbUp} alt="Icone Seta para cima" />
                  </Right>
                  <p>{item.description}</p>
                </Card>
              </>
            ))}
          </Carousel>
        </Container>
      </>
    );
  }
}
