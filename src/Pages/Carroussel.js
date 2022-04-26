import React from "react";
import Carousel from "nuka-carousel";
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
`;

const Left = styled.div`
  align: left;
  display: flex;
  width: 50%;
`;

const Right = styled.div`
  align: right;
  display: flex;
  width: 50%;
`;
export default class App extends React.Component {
  state = {
    dropdownState: false,
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
          <Carousel wrapAround={true} slidesToShow={5}>
            {this.state.movies.map((item) => (
              <>
                <Img src={item.img} />
                <Card>
                  <Left>{item.title}</Left>
                  <Right>
                    4/5{" "}
                    <a href="#">
                      <img src={thumbUp} alt="Icone Seta para cima" />
                    </a>
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
