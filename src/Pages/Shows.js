import React from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  `;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
`;

const apiSeries = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=adae7c025affeec1ced3ea91c4dc1636&language=en-US&page=1",
});

class Shows extends React.Component {
  state = {
    listSeries: [],
    seriesFilter: [],
  };

  componentDidMount() {
    this.getSeries();
  }

  // getSeries = async () => {
  //   const responseTv = await apiSeries.get();
  //   console.log("responseTv", responseTv.data.results);

  //   const series = responseTv.data.results.map((item) => {
  //     return {
  //       ...item,
  //       poster: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
  //     };
  //   });
  //   console.log("series", series);
  //   this.setState({
  //     listSeries: series,
  //     seriesFilter: series,
  //   });
  // };

  // filtro = (event) => {
  //   let { listSeries } = this.state;
  //   const listaSeriesFilter = listSeries.filter((item) => {
  //     console.log("ITEM: ", item);
  //     if (
  //       item.original_name
  //         .toLowerCase()
  //         .includes(event.target.value.toLowerCase())
  //     ) {
  //       return true;
  //     }
  //   });
  //   this.setState({
  //     seriesFilter: listaSeriesFilter,
  //   });
  // };

  render() {
    return (
      <>
        <GlobalStyle />
        <h1>
          Series{" "}
          <input
            type="text"
            placeholder="Informe a serie..."
            onChange={this.filtro}
          ></input>
        </h1>
        <Container>
          {this.state.seriesFilter.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Lançamento: {item.first_air_date}</p>
              <img src={item.poster} alt="Titulo da Serie: {item.name}" />
            </div>
          ))}
        </Container>
      </>
    );
  }
}

export default Shows;
