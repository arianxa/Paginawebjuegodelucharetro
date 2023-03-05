/* eslint-disable no-dupe-class-members */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Row, Col } from "reactstrap";
import "./GranBlue.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";

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
        <div className="products">
          <h3>{this.props.elemento.Nombre}</h3>
        </div>
        <Container className="contGB">
          <Row className="w-100  px-0 mx-0">
            <Col className="col-md-6 w-100 mb-3 tablaGBP1">
              <TableContainer
                component={Paper}
                className="fondoTablaGB  eliminarradius margenesGBPRUEBA anchoGB"
              >
                <h3 className="TituloAtaquesGB my-0">Unique Action</h3>

                <Table
                  stickyHeader
                  aria-label="sticky table"
                  className="nomostrarscroll"
                >
                  <TableBody className="nomostrarscroll">
                    {this.props.elemento.UniqueAction.map((Ataque, index) => (
                      <TableRow key={Ataque.nombreAtaque} className="mx-5 ">
                        <TableCell
                          className="  py-2 colorFondoAtaquesGB "
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesGB py-2"
                            component="td"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueGB"
                                  src={
                                    process.env.PUBLIC_URL + animaciondelataque
                                  }
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
              <TableContainer className=" fondoTablaGB  mt-3 anchoGB">
                <h3 className="TituloAtaquesGB my-0 w-100">Special Moves</h3>

                <Table>
                  <TableBody>
                    {this.props.elemento.Skill.map((Ataque, index) => (
                      <TableRow key={Ataque.nombreAtaque} className="mx-5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesGB "
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesGB py-2"
                            align="right"
                            component="td"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueGB"
                                  src={
                                    process.env.PUBLIC_URL + animaciondelataque
                                  }
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
            <Col className="col-md-6 tablaGBP">
              <TableContainer className=" fondoTablaGB   margenesGBPRUEBA  anchoGB">
                <h3 className="TituloAtaquesGB my-0">Sky bound Art</h3>

                <Table className="nomostrarscroll">
                  <TableBody>
                    {this.props.elemento.SkyboundArt.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesGB "
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            component="td"
                            className="  nombreAtaquesGB py-2"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueGB"
                                  src={
                                    process.env.PUBLIC_URL + animaciondelataque
                                  }
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

              <TableContainer className=" fondoTablaGB  mt-3  mb-5  anchoGB">
                <h3 className="TituloAtaquesGB my-0">Super Sky boundArt</h3>

                <Table className="nomostrarscroll">
                  <TableBody>
                    {this.props.elemento.SuperSkyboundArt.map(
                      (Ataque, index) => (
                        <TableRow key={Ataque.nombreAtaque} className="mx-5">
                          <TableCell
                            className="  py-2 colorFondoAtaquesGB "
                            component="td"
                            scope="row"
                            align="left"
                          >
                            {Ataque.nombreAtaque}
                          </TableCell>

                          {
                            <TableCell
                              component="td"
                              className="  nombreAtaquesGB py-2"
                              align="right"
                            >
                              {Ataque.Animacion.map(
                                (animaciondelataque, index) => (
                                  <Image
                                    key={index}
                                    className="imgAtaqueGB"
                                    src={
                                      process.env.PUBLIC_URL +
                                      animaciondelataque
                                    }
                                  />
                                )
                              )}
                            </TableCell>
                          }
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Col className="col-md-6 anchoGB">
                <Link
                  to={{
                    pathname: "/BiografiaGranBlue",
                    state: {
                      ALL: this.props.elemento,
                    },
                  }}
  
                >
                  <div className="DivBotonGB ">
                    <button className="BotonGB">Biography &amp; Videos</button>
                  </div>
                </Link>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class GranBlue extends React.Component {
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
  renderContent(personaje) {
    const newLocal_1 = this.state;
    newLocal_1.isItemContentVisible = false;

    newLocal_1.objetoPersonaje = personaje;
  }
  onClickDown = () => {
    scroll.scrollToBottom();
  };
  scrollToTop = () => {
    scroll.scrollToBottom();
  };
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
      <div className="DivGranBlue degrafado w-100 ml-0">
        <Helmet>
          <title>Gran Blue</title>
          <meta name="description" content="Move Gran Blue" />
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
          <Row className="NavbarGB">
            <Col md="3" className="fondo1">
              <h6> {this.props.detalles[0]}</h6>
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Logo}
                alt=""
                className="fotoLogoKI"
                height="110vw"
              ></img>
            </Col>

            <Col md="4" className="fondo2">
              <h1 className="TituloJuego">{this.props.detalles.Nombre} </h1>
            </Col>
            <Col md="5" style={style}></Col>
          </Row>
        </div>

        <div className="row degadadoprueba rowGlobalKI ">
          <div className="w-100 mt-4">
            <Container className="w-100     ">
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                className="mx-auto mb-3 logoCharacters"
                alt="imagen logo"
              ></img>
              <div>
                <Link
                  to={{
                    pathname: "/TierList",
                    state: {
                      ALL: this.props.Juego,
                      descripcionjuego: this.props.detalles,
                    },
                  }}
                >
                  <div className="DivBotonGB2 ">
                    <button className="BotonGB2">See Tierlist</button>
                  </div>
                </Link>
              </div>
              <Row className=" w-100 stage RowGrandBLue   justify-content-center  mx-auto ">
                <div className=" nav " role="tablist">
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <div
                        key={personaje.Nombre}
                        className="unskew characterGB  "
                        data-toggle="tab"
                        role="tab"
                        aria-selected="false"
                      >
                        <div className="unskew.active">
                          <Image
                            href="#una-id"
                            className="centrarImagen"
                            onClick={() => this.showContent(index)}
                            src={process.env.PUBLIC_URL + personaje.Foto}
                            fluid
                          ></Image>
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
export default withRouter(GranBlue);
