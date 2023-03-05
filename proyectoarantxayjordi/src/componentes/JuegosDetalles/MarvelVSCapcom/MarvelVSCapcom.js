/* eslint-disable array-callback-return */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { Container, Row, Col } from "reactstrap";
import "./MarvelVSCapcom.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// get our fontawesome imports

import ReactPlayer from "react-player";

//AVER SI FUNCIOONA
class Child extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef(); // Create a ref object
  }

  showModal = (e, imagenes) => {
    this.setState({
      show: true,
      elmento: e,
      imagen: imagenes,
    });
  };

  state = {
    show: false,
    elmento: "",
    imagen: "",
  };
  handleCloseModal = (e) => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div
        style={{ width: "100%" }}
        className="PruebadefondoAtaquesMC DIVCONTENEDORTABLAMVS "
        key={this.props.elemento.Nombre}
      >
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
        <div className=" enter mt-4 pROSF  ">
          <h3 className="TextoPersonajeTituloMC">
            {this.props.elemento.Nombre}
          </h3>

          <div className="rule "></div>
        </div>
        <Container className="  w-100 ContainerMC ">
          <Row className="w-100  px-0 justify-content-center   RowMC">
            <Col className="col-md-6 w-100 mb-5  colPrimeraMarvel PaddingBotRespMC">
              <TableContainer className="fondoTablaMC   nomostrarscrollBD mt-4  PaddingBotRespMC tablaanchuraMC ">
                <h3 className="TituloAtaquesMC my-0 mifuenteMVC">
                  Special Moves
                </h3>

                <Table
                  stickyHeader
                  aria-label="sticky table"
                  className="nomostrarscroll  "
                >
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.SpecialMoves.map((Ataque, index) => (
                      <TableRow
                        key={Ataque.nombreAtaque}
                        className="mx-5  rowSF5 MVCursor"
                      >
                        <TableCell
                          className="   py-2 colorFondoAtaquesMC  mifuenteataquesMVC tablaborderabajo "
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesSF py-2 mifuenteataquesMVC tablaborderabajo pr-2"
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
            <Col className="col-md-6 w-100 colPrimeraMarvel">
              <TableContainer className=" fondoTablaMC   pruMC mt-4 bottomM tablaanchuraMC">
                <h3 className=" mifuenteMVC TituloAtaquesMC my-0 w-100">
                  Super Moves
                </h3>

                <Table className="nomostrarscrollBD">
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.SuperMoves.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5 rowSF5">
                        <TableCell
                          className="  MVCursor  py-2 colorFondoAtaquesMC  mifuenteataquesMVC nomostrarscrollBD tablaborderabajo"
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesSF  mifuenteataquesMVC pr-2 py-2 tablaborderabajo"
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

              <TableContainer className=" fondoTablaMC   mt-2 mb-4  tablaanchuraMC">
                <h3 className=" mifuenteMVC TituloAtaquesMC my-0">
                  AssistMoves
                </h3>

                <Table className="nomostrarscrollBD ">
                  <TableBody>
                    {this.props.elemento.AssistMoves.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5 rowSF5">
                        <TableCell
                          className=" MVCursor py-2 colorFondoAtaquesMC mifuenteataquesMVC tablaborderabajo "
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
                  pathname: "/BiografiaMarvelvsCapcom",
                  state: {
                    ALL: this.props.elemento,
                  },
                }}
                className="  btn-MVC large2 PruebadefondoAtaquesSF   "
              >
                <div className="margendelbotoonMK ">
                  <button className=" botonMC">Biography &amp; Videos</button>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class MarvelVSCapcom extends React.Component {
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
      <div className="DivFONDOSMC degrafado w-100 ml-0">
        <Helmet>
          <title>Marvel vs Capcom</title>
          <meta name="description" content="Move Marvel vs Capcom " />
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
          <Row className="NavbarMC">
            <Col md="3" className="fondo1MC">
              <h6> {this.props.detalles[0]}</h6>
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className="fotoLogoBD"
                height="110vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2MC"></Col>

            <Col md="5" style={style}></Col>
          </Row>
        </div>

        <div className="row">
          <div className="w-100 mt-4 mb-4 ">
            <Container className="w-100 mx-auto   ">
              <h3 className="LetraTituloMC  w-100 mb-4">Character Select</h3>

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
                <div className="margendelbotoonMK2 ">
                  <button className=" botonMC">See Tierlist</button>
                </div>
              </Link>

              <Row className=" w-100 stage  containerMV RowMC">
                <div
                  className="col-md-10 mx-auto navMC borderBotBD   "
                  role="tablist"
                >
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <div className=" " align="center" key={personaje.Nombre}>
                        <div className=" DivFotoMC w-100">
                          <img
                            className="FotoMC"
                            onClick={() => this.showContent(index)}
                            src={process.env.PUBLIC_URL + personaje.Foto}
                            alt="imagen personaje"
                          ></img>
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
export default withRouter(MarvelVSCapcom);
