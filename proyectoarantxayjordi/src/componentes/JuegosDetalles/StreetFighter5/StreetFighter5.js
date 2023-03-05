/* eslint-disable array-callback-return */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { Container, Row, Col } from "reactstrap";
import "./StreetFighter5.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { animateScroll as scroll } from "react-scroll";
import imagenLetraSF5 from "./fondo_nombreSF5.jpg";
import { Link } from "react-router-dom";
// get our fontawesome imports
import { Helmet } from "react-helmet";

import ReactPlayer from "react-player";

//AVER SI FUNCIOONA
class Child extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef(); // Create a ref object
  }

  render() {
    return (
      <div
        style={{ width: "100%" }}
        className="PruebadefondoAtaquesSF DIVCONTENEDORTABLASSF"
        key={this.props.elemento.Nombre}
      >
        <div className=" enter mt-4 pROSF ">
          <img
            src={imagenLetraSF5}
            className="w-100 tamañolinea"
            alt="logo"
          ></img>

          <h3 className="TextoPersonajeTituloSF">
            {this.props.elemento.Nombre}
          </h3>

          <div className="rule "></div>
        </div>
        <Container className="  w-100">
          <Row className="w-100  px-0 mx-auto  ">
            <Col className="col-md-5 w-100 margenesSF">
              <TableContainer className="fondoTablaSF   nomostrarscrollBD mt-4  AnchoSF ">
                <h3 className="TituloAtaquesSF mifuenteSF UniqueMVSF my-0">
                  Unique Moves
                </h3>

                <Table
                  stickyHeader
                  aria-label="sticky table"
                  className="nomostrarscroll "
                >
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.UniqueMoves.map((Ataque, index) => (
                      <TableRow
                        key={Ataque.nombreAtaque}
                        className="mx-5  rowSF5 "
                      >
                        <TableCell
                          className="  py-2 colorFondoAtaquesSF tablaborderabajo "
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesSF py-2 tablaborderabajo pr-2"
                            component="td"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className=""
                                  src={
                                    process.env.PUBLIC_URL + animaciondelataque
                                  }
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
            <Col className="col-md-6 margenesSF  ">
              <TableContainer className=" fondoTablaSF  mt-4 AnchoSF">
                <h3 className="TituloAtaquesSF  mifuenteSF my-0 w-100">
                  Special Moves
                </h3>

                <Table className="nomostrarscrollBD">
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.SpecialMoves.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5 rowSF5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesSF  nomostrarscrollBD tablaborderabajo"
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesSF   pr-2 py-2 tablaborderabajo"
                            align="right"
                            component="td"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className=""
                                  src={
                                    process.env.PUBLIC_URL + animaciondelataque
                                  }
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
              <TableContainer className=" fondoTablaSF  mt-2 mb-4 AnchoSF">
                <h3 className="TituloAtaquesSF mifuenteSF my-0">
                  Critical Art
                </h3>

                <Table className="nomostrarscrollBD">
                  <TableBody>
                    {this.props.elemento.CriticalArt.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5 rowSF5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesSF tablaborderabajo "
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            component="td"
                            className="  nombreAtaquesSF   pr-2 py-2 tablaborderabajo"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className=""
                                  src={
                                    process.env.PUBLIC_URL + animaciondelataque
                                  }
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
              <Link
                to={{
                  pathname: "/BiografiaStreetfighter",
                  state: {
                    ALL: this.props.elemento,
                  },
                }}
                className="btn-ki large ghostpulse "
              >
                <div className="DivBotonSF2 ">
                  <button className="BotonSF">Biography &amp; Videos</button>
                </div>
              </Link>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class StreetFighter5 extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      isItemContentVisible: {},
      numChildren: 0,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  renderContent() {
    const newLocal = this.state;
    newLocal.isItemContentVisible = false;

    return <div>I'm the child</div>;
  }
  showContent(id) {
    // merge new value with existing visibility status into new object
    this.setState({
      isItemContentVisible: {
        ...this.state.isItemContentVisible,
        [id]: true,
      },
    });
  }
  state = {
    show: false,
    elmento: "",
    imagen: "",
    isActive: false,
  };
  // eslint-disable-next-line no-dupe-class-members
  renderContent(personaje) {
    const newLocal_1 = this.state;
    newLocal_1.isItemContentVisible = false;
    /*
    return <div className="pruebadelelemento">prueba</div>;
    */
    // this.setState({ objetoPersonaje: personaje });
    newLocal_1.objetoPersonaje = personaje;
  }
  onClickDown = () => {
    scroll.scrollToBottom();
  };
  scrollToTop = () => {
    scroll.scrollToBottom();
  };
  // eslint-disable-next-line no-dupe-class-members
  showContent(id) {
    // merge new value with existing visibility status into new object´
    this.setState({
      isItemContentVisible: {
        ...this.state.isItemContentVisible,
        [id]: true,
      },
    });
    this.setState({ mostrarsegundoelemnto: true });
    this.onClickDown();
  }
  state = {
    objetoPersonaje: "",
    mostrarsegundoelemnto: false,
    isItemContentVisible: false,
    show: false,
    elmento: "",
    imagen: "",
    isActive: false,
  };
  showModal = (e, imagenes) => {
    this.setState({
      show: true,
      elmento: e,
      imagen: imagenes,
    });
  };

  handleCloseModal = (e) => {
    this.setState({ show: false });
  };

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
      <div className="DivBDFONDOSF degrafado w-100 ml-0">
        <Helmet>
          <title>Street Fighter</title>
          <meta name="description" content="Move StreetFighter" />
        </Helmet>
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>{this.state.elmento} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="imgAtaque"
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
          <Row className="NavbarSF">
            <Col md="3" className="fondo1">
              <h6> {this.props.detalles[0]}</h6>
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className="fotoLogoBD"
                height="110vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2">
              {/* <h1 className="TextoTituloDB">{this.props.detalles.Nombre} </h1> */}
            </Col>

            <Col md="5" style={style}></Col>
          </Row>
        </div>

        <div className="row">
          <div className="w-100 mt-4 mb-4 ">
            <Container className="w-100 mx-auto  ">
              <h3 className="LetraTituloSF mb-4">Character Select</h3>
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
                <div className="DivBotonSF2 ">
                  <button className="BotonSF2">See Tierlist</button>
                </div>
              </Link>
              <Row className=" w-100 stage  ml-4  ">
                {/* <img
                  src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                  className="mx-auto mb-3"
                ></img> */}

                <div
                  className="nav nav-tabs col-md-6  RowSF borderBotBD  "
                  role="tablist"
                >
                  {this.props.Juego.map((personaje, index) => {
                    if (index <= 19) {
                      return (
                        <div
                          className=" "
                          align="center"
                          key={personaje.Nombre}
                        >
                          <div className="DIVFOTO w-100">
                            <div className="fotoPruebaa">
                              <img
                                className="FotoSF"
                                onClick={() => this.showContent(index)}
                                src={process.env.PUBLIC_URL + personaje.Foto}
                                alt="imagen personaje"
                              ></img>
                            </div>
                            <div className="DivNombrePJ">
                              <h3 className="NombrePesonaje1">
                                {personaje.Nombre}
                              </h3>
                            </div>{" "}
                          </div>
                          <div>
                            <div>
                              {this.state.isItemContentVisible[index] &&
                                this.renderContent(personaje)}

                              <div></div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>

                <div
                  className="nav nav-tabs col-md-6  RowSF borderBotBD"
                  role="tablist"
                >
                  {this.props.Juego.map((personaje, index) => {
                    if (index > 19) {
                      return (
                        <div
                          key={personaje.Nombre}
                          className=" "
                          align="center"
                        >
                          <div className="DIVFOTO w-100">
                            <div className="fotoPruebaa">
                              <img
                                className="FotoSF2 "
                                onClick={() => this.showContent(index)}
                                src={process.env.PUBLIC_URL + personaje.Foto}
                                alt="imagen logo2"
                              ></img>
                            </div>
                            <div className="DivNombrePJ">
                              <h3 className="NombrePesonaje1 nom2">
                                {personaje.Nombre}
                              </h3>
                            </div>
                          </div>
                          <div>
                            <div>
                              {this.state.isItemContentVisible[index] &&
                                this.renderContent(personaje)}

                              <div></div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </Row>
            </Container>
            {this.state.mostrarsegundoelemnto && (
              <Child elemento={this.state.objetoPersonaje} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(StreetFighter5);
