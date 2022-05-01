import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movies from "./Movies";
import Home from "./Home";
import Modal from "./Modal";
import { createGlobalStyle } from "styled-components";
import { MoviesService } from "./MoviesService";

import styled from "styled-components";
import Group32 from "../images/Group 32.svg";
import Group3 from "../images/Group 3.svg";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  nav{
    display: flex;
    margin: 1%;
    font-size: 15px;
    width:60%;
  }

  button{
    background-color: red;
    color: white;
    display: inline-block;
    border-radius: 10px;
    width:20%;
  }

  a:link, a:visited {
    color: white;
    padding: 14px 25px;
    text-decoration: none;
    display: inline-block;
  }

  a:hover {
    color: grey;
    cursor: pointer;
    text-decoration: none;
  }

  button:hover {
    color: black;
    border: 1px solid black;
    cursor: pointer;
    text-decoration: none;
  }

  input{
    color: white;
    width:95%;
    height:100%;
    padding: 0px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 10px;
    background-color: #2C2C2C;
    background-image: url('../images/iconSearch.svg');
    background-repeat: no-repeat;
  }
`;

const Container = styled.div`
  padding-left: 3%;
  height: 80px;
  background-color: black;
  display: flex;
  flex-wrap: nowrap;
`;

const Logo = styled.div`
  color: red;
  font-size: x-large;
`;

const LinkNav = styled.li`
  color: white;
  text-decoration: none;
  display: flex;
  text-align: center;
`;

export const List = styled.ul`
  display: "block";
  position: absolute;
  padding: 10px 0;
  width: 150px;
  top: 53px;
  left: 350px;
`;

export const LinkDropDown = styled(Link)`
  color: "#FFFFFF";
  font-size: "12px";
  display: flex;
  padding-top: 0;
  margin: 0;
`;

export const LinkSearch = styled(Link)`
  width: 60%;
  display: flex;
  padding: 0px !important;
`;

export default class Header extends React.Component {
  state = {
    boxState: false,
    stateList: false,
    movies: MoviesService.getAll(),
  };

  filtro = (event) => {
    let filmesFiltradosConvevertido;
    if (event.target.value !== "") {
      filmesFiltradosConvevertido = this.state.movies.filter((item) => {
        if (
          item.title.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          return true;
        }
        return;
      });
    }
    MoviesService.saveFilteredMovies(
      filmesFiltradosConvevertido
        ? filmesFiltradosConvevertido
        : this.state.movies
    );
    this.setState({
      filteredMovies: filmesFiltradosConvevertido,
    });
  };

  handleBox = () => {
    this.setState({ boxState: !this.state.boxState });
  };
  handleList = () => {
    this.setState({ stateList: !this.state.stateList });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Container>
            <nav>
              <Logo>
                <h1>TODOFLIX</h1>{" "}
              </Logo>
              <Link to="/">
                <LinkNav>
                  <strong>Inicio </strong>
                </LinkNav>
              </Link>
              <Link to="/movies" onMouseOver={this.handleList}>
                <LinkNav>
                  <strong>Categorias </strong>
                  <img src={Group3} alt="icon arrow" />
                </LinkNav>
              </Link>
              {this.state.stateList && (
                <List>
                  <LinkNav>
                    <LinkDropDown to="/movies">Todos</LinkDropDown>
                  </LinkNav>
                  <LinkNav>
                    <LinkDropDown to="/Favoritos">Favoritos</LinkDropDown>
                  </LinkNav>
                  <LinkNav>
                    <LinkDropDown to="/vistos">Já Vistos</LinkDropDown>
                  </LinkNav>
                  <LinkNav>
                    <LinkDropDown to="/adicioinados">Adicionados</LinkDropDown>
                  </LinkNav>
                </List>
              )}
            </nav>

            <nav>
              <button onClick={this.handleBox}>Adicionar Filmes</button>
              {this.state.boxState && (
                <p>
                  <Modal />
                </p>
              )}
              <LinkSearch to="/movies">
                <input
                  type="text"
                  placeholder="🔍 Pesquisar"
                  onChange={this.filtro}
                />
              </LinkSearch>
              <img src={Group32} alt="icon person" />
              <img src={Group3} alt="icon person setinha" />
            </nav>
          </Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </Router>
      </>
    );
  }
}
