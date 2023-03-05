/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Row, Col } from "reactstrap";
import "./Mortalkombat.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { animateScroll as scroll } from "react-scroll";
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
        id="section1"
        style={{ width: "100%" }}
        key={this.props.elemento.Nombre}
      >
        <div className="horiz-rule  mt-1">
          <div className="bar"></div>
          <img
            src="https://cdn-prod.mortalkombat.com/aftermath/global/vectors/horizontal-rule-node.svg"
            alt=""
            className="node"
          />
        </div>

        <div className="title-block enter">
          <h3>{this.props.elemento.Nombre}</h3>
          <div className="rule "></div>
        </div>
        <Container className="">
          <Row className="w-100  px-0 mx-0">
            <Col className="col-md-4 w-100 margenesparalastablas">
              <TableContainer
                component={Paper}
                className="fondoTablaMK pruebadelelemento mt-5 AnchoMK"
              >
                <h3 className="TituloAtaquesMK">Kombo Attacks</h3>

                <Table
                  stickyHeader
                  aria-label="sticky table"
                  className="nomostrarscroll"
                >
                  <TableBody className="nomostrarscroll">
                    {this.props.elemento.KomboAttacks.map((Ataque, index) => (
                      <TableRow
                        key={Ataque.nombreAtaque}
                        className="mx-5 pruebaaa"
                      >
                        <TableCell
                          className="  py-2 colorFondoAtaquesMK tablaborderabajoMK"
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesMK py-2 tablaborderabajoMK"
                            component="td"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueMK"
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
            <Col className="col-md-4 margenesparalastablas">
              <TableContainer
                component={Paper}
                className="fondoTablaMK  pruebadelelemento mt-5 AnchoMK"
              >
                <h3 className="TituloAtaquesMK">Special Moves</h3>

                <Table className="nomostrarscroll">
                  <TableBody>
                    {this.props.elemento.KomboAttacks.map((Ataque, index) => (
                      <TableRow key={Ataque.nombreAtaque} className="mx-5 ">
                        <TableCell
                          className="  py-2 colorFondoAtaquesMK  tablaborderabajoMK"
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesMK py-2 tablaborderabajoMK"
                            align="right"
                            component="td"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueMK"
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
            <Col className="col-md-4 margenesparalastablas">
              <TableContainer className=" fondoTablaMK pruebadelelemento mt-5 AnchoMK">
                <h3 className="TituloAtaquesMK">Finishers</h3>

                <Table className="nomostrarscroll">
                  <TableBody>
                    {this.props.elemento.Finishers.map((Ataque, index) => (
                      <TableRow key={Ataque.nombreAtaque} className="mx-5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesMK tablaborderabajoMK PruebaMK"
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            component="td"
                            className="  nombreAtaquesMK py-2 tablaborderabajoMK"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueMK"
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
                  pathname: "/BiografiaMK",
                  state: {
                    ALL: this.props.elemento,
                  },
                }}
                className="btn-ki large ghostpulse "
              >
                <div className="DivBotonMK ">
                  <button className="BotonMk">Biography &amp; Videos</button>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class MortalKombat extends React.Component {
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
  onClickDown = () => {
    scroll.scrollToBottom();
  };
  scrollToTop = () => {
    scroll.scrollToBottom();
  };

  prueballamadadetodolosdatos() {}
  renderContent(personaje) {
    const newLocal = this.state;
    newLocal.isItemContentVisible = false;
    /*
    return <div className="pruebadelelemento">prueba</div>;
    */
    // this.setState({ objetoPersonaje: personaje });
    newLocal.objetoPersonaje = personaje;
  }
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
      <div className="DivMortalkombat  w-100 ml-0">
        <Helmet>
          <title>Mortal Kombat</title>
          <meta name="description" content="Move Mortal Kombat" />
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
          <Row>
            <Col md="7" className="photo">
              <h6> {this.props.detalles[0]}</h6>
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                alt=""
                className="photo-container"
                height="110vw"
              ></img>
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Logo}
                alt=""
                className="photo-banner"
                height="110vw"
              ></img>
            </Col>

            <Col md="5" style={style}></Col>
          </Row>
        </div>
        <h1 className="TituloElegirMK"> Choose your character</h1>
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
          <div className="DivBotonMK ">
            <button className="BotonMk2">See Tierlist</button>
          </div>
        </Link>
        <div className="row rowGlobalKI  ">
          <div className="w-100 mt-4">
            <Container className="w-100 px-0">
              <Row className=" w-100 stage mx-0 mb-4">
                <div
                  className="characterMk nav justify-content-center  "
                  role="tablist"
                >
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <a
                        key={index}
                        data-id="index"
                        className="character-thumb visible enabled  claseeprueba "
                      >
                        <div>
                          <div className="img-wrapper">
                            <img
                              href="#una-id"
                              onClick={() => this.showContent(index)}
                              data-src={process.env.PUBLIC_URL + personaje.Foto}
                              alt=""
                              className="img-fluid lazy-loaded h-100 "
                              src={process.env.PUBLIC_URL + personaje.Foto2}
                            />
                          </div>

                          <div className="label">{personaje.Nombre}</div>
                        </div>
                        <div className="m-">
                          {this.state.isItemContentVisible[index] &&
                            this.renderContent(personaje)}

                          <div></div>
                        </div>
                      </a>
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

export default withRouter(MortalKombat);
