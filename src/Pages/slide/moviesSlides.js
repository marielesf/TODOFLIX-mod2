import React from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import styledComponents from "styled-components";

const Img = styled.img`
  witdth: 70%;
`;

const apiFilmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=adae7c025affeec1ced3ea91c4dc1636&language=en-US&page=1",
});

export default class MoviesSlides extends React.Component {
  state = {
    movies: [],
  };

  //responsavel por montar aplicacao
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const response = await apiFilmes.get();
    //console.log(response.data.results);
    let filmes = response.data.results.map((item) => {
      return {
        ...item, //pega o arra q ja existe e espalha no novo arrray
        poster: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
      };
    });
    this.setState({
      movies: filmes,
    });
  };

  render() {
    return (
      <Carousel>
        {this.state.movies.map((item) => (
          <Img src={item.poster.poster_path} />
        ))}
      </Carousel>
    );
  }
}
