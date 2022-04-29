import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movies from "./Movies";
import Home from "./Home";
import Modal from "./Modal";
import Shows from "./Shows";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Group32 from "../images/Group 32.svg";
import Group3 from "../images/Group 3.svg";
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
    color: white;
    width:60%;
    border-radius: 10px;
    margin-left: 15px;
    margin-right: 15px;
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
  padding: 0;
  margin: 0;
`;

export default class Header extends React.Component {
  state = {
    boxState: false,
    stateList: false,
    movies: [
      {
        id: 1,
        img: cherek,
        title: "Shrek",
        description:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
      },
      {
        id: 2,
        img: sozinho,
        title: "Hoje Eu Quero Voltar…",
        description:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
      },
      {
        id: 3,
        img: aranha,
        title: "Spider-Man",
        description:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
      },
      {
        id: 4,
        img: sonho,
        title: "Um Sonho de Liberdade",
        description:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
      },
      {
        id: 5,
        img: voltar,
        title: "Que Horas Ela Volta?",
        description:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
      },
      {
        id: 6,
        img: fuga,
        title: "A Fuga das Galinhas",
        description:
          "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",
      },
      {
        id: 7,
        img: amarelo,
        title: "AmarElo",
        description:
          "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.",
      },
      {
        id: 8,
        img: rocketman,
        title: "Rocketman",
        description:
          "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.",
      },
    ],
    filteredMovies: [],
  };

  handleBox = () => {
    this.setState({ boxState: !this.state.boxState });
  };
  handleList = () => {
    this.setState({ stateList: !this.state.stateList });
  };

  filtro = (event) => {
    const filmesFiltradosConvevertido = this.state.movies.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
      return;
    });
    this.setState({
      filteredMovies: filmesFiltradosConvevertido,
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />

        <Router>
          <Container>
            <nav>
              <Logo>
                <h1>TODOFLIX</h1>
              </Logo>
              <Link to="/">
                <LinkNav>
                  <strong>Inicio </strong>
                </LinkNav>
              </Link>
              <Link to="/home" onMouseOver={this.handleList}>
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
              <input
                type="text"
                placeholder="🔍 Pesquisar"
                onChange={this.filtro}
              />{" "}
              <img src={Group32} alt="icon person" />
              <img src={Group3} alt="icon person setinha" />
            </nav>
          </Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </Router>

        {/* <button onClick={this.handleList}>
            {this.state.stateList === false ? "Open" : "Close"}
          </button>
          {this.state.stateList && (
            <ul>
              <p>AAAA</p>
              <p>BBBB</p>
              <p>CCCC</p>
              <p>DDDD</p>
            </ul>
          )} */}

        {/* <Link to="/movies">Movies</Link> */}
      </>
    );
  }
}
