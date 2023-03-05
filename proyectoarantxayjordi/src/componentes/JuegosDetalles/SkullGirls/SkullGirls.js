import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Row, Col } from "reactstrap";
import "./SkullGirls.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
// get our fontawesome imports
import Image from "react-bootstrap/Image";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

//AVER SI FUNCIOONA
class SkullGirls extends React.Component {
  constructor(props, context) {
    super(props);
  }

  state = {
    show: false,
    elmento: "",
    imagen: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const style = {
      backgroundPosition: "right right",
      backgroundSize: "cover",

      display: "block",
      backgroundImage:
        "linear-gradient(to left, rgba(255,255,255,0), rgba(0, 0, 0, 1)), url(" +
        this.props.detalles.Rooter +
        ")",
      backgroundRepeat: "no-repeat",
    };

    return (
      <div className="DivGeneral">
        <Helmet>
          <title>SkullGirls</title>
          <meta name="description" content="Move SkullGirls" />
        </Helmet>
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>{this.state.elmento} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className=""
              variant="top"
              src={process.env.PUBLIC_URL + this.state.imagen}
              alt="Error"
            />
            <ReactPlayer
              //Modificacion del tamaño del video.
              width="100px"
              height="100px"
              url="https://www.youtube.com/watch?v=3IHJokjMpf0"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div>
          <Row className="NavbarSkull">
            <Col md="3" className="fondo1">
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className="fotoSkulls"
                height="110vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2">
              <h1 className="TextoTitulo">{this.props.detalles.Nombre} </h1>
            </Col>

            <Col md="5" style={style}></Col>

            {/* {juegos.map((juego, index) => {
            return (
              <div key={juego.Nombre} className="prueba">



              </div>
              
              
            );
          })} */}
          </Row>
        </div>
        <div className="row rowGlobal ">
          <Container className="witdhgeneralSK ContainerSeparacion mt-4 ">
            <div className=" contenedor contDEsc ">
              <h1 className="txtDescripcion ">Descripcion</h1>
              <Image
                src={require("./header.png")}
                className="imgDescripcion"
                alt="Descripcion Juego"
                fluid
              />
            </div>
            <h6 className="NombreDesc">{this.props.detalles.Descripcion} </h6>
            <Link
              to={{
                pathname: "/TierList",
                state: {
                  ALL: this.props.Juego,
                  descripcionjuego: this.props.detalles,
                },
              }}
              className="  btn-MVC large2 PruebadefondoAtaquesSF   "
            >
              <div className="DivBotonSkull2 ">
                <button className=" BotonSkull2">See Tierlist</button>
              </div>
            </Link>
          </Container>
          {this.props.Juego.map((personaje) => {
            return (
              <div className="Personajes witdhgeneralSK" key={personaje.Nombre}>
                <Container className="w-100 ContainerSeparacion  Container2SK">
                  <div className="contenedor">
                    <div className="centrado">{personaje.Nombre}</div>
                  </div>

                  <Row className="pruebaskull pt-0 pb-3  ">
                    <Col md="8">
                      <div className="contenedor mb-3 mt-5">
                        <Image
                          src={require("./nombre.png")}
                          className="fotoNombre"
                          alt="Descripcion Juego"
                          fluid
                        />

                        <div className="CentradoTituloAtaque w-100">
                          Specials
                        </div>
                      </div>
                      <TableContainer
                        component={Paper}
                        className="TablaGeneral  tablapruebraquetalmeva  padddingdetablasprueba mb-3 AnchoSG"
                      >
                        <Grid item xs={12}>
                          <Table>
                            <TableBody className="bodySKULL ">
                              {personaje.Ataques.map((Ataque, index) => (
                                <TableRow
                                  key={Ataque.nombreAtaque}
                                  className="mx-5 "
                                >
                                  <TableCell
                                    className=" py-2 pro "
                                    component="th"
                                    scope="row"
                                  >
                                    {Ataque.nombreAtaque}
                                  </TableCell>

                                  {
                                    <TableCell
                                      component="th"
                                      className="  nombreAtaques py-2"
                                      align="right"
                                    >
                                      {Ataque.Animacion.map(
                                        (animaciondelataque, index) => (
                                          <Image
                                            className=""
                                            key={index}
                                            variant="top"
                                            src={
                                              process.env.PUBLIC_URL +
                                              animaciondelataque
                                            }
                                            alt="Error"
                                            fluid
                                          />
                                        )
                                      )}
                                    </TableCell>
                                  }
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Grid>
                      </TableContainer>

                      <div className="contenedor  mb-4 mt-5">
                        <Image
                          src={require("./nombre.png")}
                          className="fotoNombre"
                          alt="Descripcion Juego"
                          fluid
                        />

                        <div className="CentradoTituloAtaque w-100 ">
                          Team Movies
                        </div>
                      </div>
                      <TableContainer
                        component={Paper}
                        className="TablaGeneral  tablapruebraquetalmeva padddingdetablasprueba  AnchoSG "
                      >
                        <Table>
                          <TableBody className="bodySKULL">
                            {personaje.TeamMoves.map((Ataque, index) => (
                              <TableRow key={Ataque.nombreAtaque}>
                                <TableCell
                                  className=" py-2 pro"
                                  component="th"
                                  scope="row"
                                >
                                  {Ataque.nombreAtaque}
                                </TableCell>
                                {
                                  <TableCell
                                    className=" py-2 nombreAtaques"
                                    component="th"
                                    align="right"
                                  >
                                    {Ataque.Animacion.map(
                                      (animaciondelataque, index) => (
                                        <span key={index}>
                                          <Image
                                            className=""
                                            variant="top"
                                            src={
                                              process.env.PUBLIC_URL +
                                              animaciondelataque
                                            }
                                            alt="Error"
                                            fluid
                                          />
                                        </span>
                                      )
                                    )}
                                  </TableCell>
                                }
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>

                      <div className="contenedor mb-4 mt-5">
                        <Image
                          src={require("./nombre.png")}
                          className="fotoNombre "
                          alt="Descripcion Juego"
                          fluid
                        />

                        <div className="CentradoTituloAtaque w-100 ">
                          Blockbusters
                        </div>
                      </div>

                      <TableContainer
                        component={Paper}
                        className="TablaGeneral tablapruebraquetalmeva padddingdetablasprueba  AnchoSG "
                      >
                        <Table>
                          <TableBody className="bodySKULL">
                            {personaje.Blockbusters.map((Ataque, index) => (
                              <TableRow key={Ataque.nombreAtaque}>
                                <TableCell
                                  className=" py-2 pro margenesdetablas"
                                  component="th"
                                  scope="row"
                                >
                                  {Ataque.nombreAtaque}
                                </TableCell>
                                {
                                  <TableCell
                                    className=" py-2 nombreAtaques"
                                    component="th"
                                    align="right"
                                  >
                                    {Ataque.Animacion.map(
                                      (animaciondelataque, index) => (
                                        <Image
                                          className=""
                                          key={index}
                                          variant="top"
                                          src={
                                            process.env.PUBLIC_URL +
                                            animaciondelataque
                                          }
                                          alt="Error"
                                          fluid
                                        />
                                      )
                                    )}
                                  </TableCell>
                                }
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Col>
                    <Col md="4">
                      <img
                        className="imagenpaddin"
                        variant="top"
                        src={process.env.PUBLIC_URL + personaje.Foto}
                        alt="Error"
                      />
                      <Link
                        to={{
                          pathname: "/BiografiaSkullGirl",
                          state: {
                            ALL: personaje,
                          },
                        }}
                        className="btn-ki large ghostpulse "
                      >
                        <div className="DivBotonSkull2 ">
                          <button className="BotonSkull">
                            Biography &amp; Videos
                          </button>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(SkullGirls);
