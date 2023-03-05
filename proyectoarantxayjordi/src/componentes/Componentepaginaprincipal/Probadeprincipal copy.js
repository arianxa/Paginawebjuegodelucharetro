import React from "react";
import "./PaginaPrincipal.css";

import { Container, Row, Col } from "reactstrap";

class Probadeprincipal extends React.Component {
  state = {
    name: "",
    showResults: false,
  };

  onClick = (e) => {
    this.setState({
      showResults: true,
      name: e.currentTarget.attributes[0].value,
    });
  };
  render() {
    console.log(this.state.name);

    return (
      <div className="DivPrinc">
        
        <div>
          <Container>
            <Row>
              <Col className="col-md-8 RankingGeneral">
                <div>
                  <div className="header">
                    <h1>Ranking</h1>
                  </div>

                  <p>
                    Hola sabes que se va hacer la EVO no¿? , en este sitio
                    podras obtenet toda la informacion de los juegos que se van
                    a jugar tanto su tierlist,sus moviminetos,sus
                    curiosidades.... En este apartado podras ir viendo los
                    resultados de los torneos. Para eso debereis clickear sobre
                    el juego que os guste
                  </p>
                  <div
                    nameClass="showName"
                    className="pruebadeljuego"
                    style={{
                      display: this.state.showResults ? "block" : "none",
                    }}
                  >
                    <img
                      className="FotoBracket"
                      variant="top"
                      src={process.env.PUBLIC_URL + this.state.name}
                      alt="Error"
                    />
                  </div>
                </div>
              </Col>
              <Col className="col-md-4 QuienesSomos">
                <h1>Quienes Somos</h1>

                <p>
                  Somos dos personas que nuestro objetivo es dedicamos ,creacion
                  paginas, mantenimientto de paginas web cualquier cliente nos
                  llamamos Adinox. Para darnos a conocer , ya que nuestra
                  aficion son los juegos de lucha hemos creado esta web con
                  react para poder enseñar que podemos hacer, si os interesa
                  nuestro trabajo, podeis ver esta web : o enviarnos un correo a
                  :
                </p>

                <div>
                  <div className="header">
                    <h1>Lista de juegos</h1>
                  </div>

                  <p>
                    Escoge el juego que deseas ver los resultados.
                    <h1
                      onClick={this.onClick}
                      value={
                        process.env.PUBLIC_URL + "imagenes/Eliminatoria.jpg"
                      }
                    >
                      Juego 1
                    </h1>
                    <h1
                      onClick={this.onClick}
                      value={process.env.PUBLIC_URL + "imagenes/elim2.jpg"}
                    >
                      Juego 2
                    </h1>
                    <h1>Juego 1</h1>
                    <h1>Juego 1</h1>
                    <h1>Juego 1</h1>
                  </p>
                </div>
              </Col>
            </Row>
            
          </Container>
          
        </div>

        {/* 
     
      <CardDeck>
        <Card>
          <Link
            to={{
              pathname: "/PaginaJuegos",
            }}
          >
            <Card.Body>
              <Card.Title className="colortextoprincilal">Juegos</Card.Title>
              <Card.Text className="colortextoprincilal">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>

   
       
      </CardDeck> */}
      </div>
    );
  }
}

export default Probadeprincipal;
