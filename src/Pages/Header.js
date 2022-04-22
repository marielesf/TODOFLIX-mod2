import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movies from "./Movies";
import Home from "./Home";
import Shows from "./Shows";
import { createGlobalStyle } from "styled-components";
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

  input{
    width:60%;
    border-radius: 10px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: grey;
    background-image: url('../images/Icon - Search - Filled.svg');
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

const LinkNav = styled.div`
  color: white;
  text-decoration: none;
  display: flex;
  text-align: center;
`;

export default class Header extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Router>
            <nav>
              <Logo>
                <h1>TODOFLIX</h1>
              </Logo>
              <Link to="/">
                <LinkNav>
                  <strong>Inicio </strong>
                </LinkNav>
              </Link>
              <Link to="/series">
                <LinkNav>
                  <strong>Categorias </strong>
                  <img src={Group3} alt="icon person" />
                </LinkNav>
              </Link>
            </nav>

            <nav>
              <button>Adicionar Filmes</button>
              <input
                type="text"
                placeholder="Pesquisar"
                onChange={this.filtro}
              />{" "}
              <img src={Group32} alt="icon person" />
              <img src={Group3} alt="icon person setinha" />
            </nav>

            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Shows />} />
            </Routes>
          </Router>

          {/* <Link to="/movies">Movies</Link> */}
        </Container>
      </>
    );
  }
}
