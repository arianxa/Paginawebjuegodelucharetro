/* eslint-disable array-callback-return */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { Container, Row, Col } from "reactstrap";
import "./UnderNight.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { animateScroll as scroll } from "react-scroll";
import TituloPJ from "./TituloPJ.png";
// get our fontawesome imports
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";

//AVER SI FUNCIOONA
class Child extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef(); // Create a ref object
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        style={{ width: "100%" }}
        className=""
        key={this.props.elemento.Nombre}
      >
        <div className="NombrePersonajeUN my-4  ">
          <img className="fotoNombrePJUN" src={TituloPJ} alt="logo"></img>
          <h3 className="TextoPersonajeTituloUN">
            {this.props.elemento.Nombre}
          </h3>
        </div>
        <Container className="PruebadefondoAtaquesUN tamañodeprueba">
          <Row className="w-100  px-0 mx-0   prrr restarTOP">
            <Col className="col-md-5 w-100  pruebatablas margenesUnder  pUNDERA ">
              <TableContainer className="fondoTablaUN UNAFU  eliminarradius nomostrarscrollBD prrr  AnchoUN">
                <h3 className="TituloAtaquesUN  py-2 my-0 mb-2 ">
                  Special Attack
                  {/* <hr className="pruebalinea" />   my-0 */}
                </h3>

                <Table
                  stickyHeader
                  aria-label="sticky table"
                  className="nomostrarscroll  "
                >
                  <TableBody className="nomostrarscrollBD ">
                    {this.props.elemento.SpecialAttack.map((Ataque, index) => (
                      <TableRow key={Ataque.nombreAtaque} className="mx-5  ">
                        <TableCell
                          className="  py-2 NombreAtaquesUN tablaborderabajo "
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  celdaimgAtaqUN py-2 tablaborderabajo"
                            component="td"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueUN"
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

              <TableContainer className=" UNAFU   mt-3  prrr CONTAINERINFIT AnchoUN">
                <h3 className="TituloAtaquesUN2 py-2 ">Infinite Worth</h3>

                <Table className="nomostrarscrollBD">
                  <TableBody>
                    {this.props.elemento.InfiniteWorth.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5">
                        <TableCell
                          className="  py-2 NombreAtaquesUN2 tablaborderabajo "
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            component="td"
                            className="  celdaimgAtaqUN2 py-2 tablaborderabajo"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueUN"
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
            <Col className="col-md-5 w-100 margenesUnder pUNDERA">
              <TableContainer className="UNAFU2 pt-2 pb-5  fondoTablaUN fondoTablaBD px-0 mt-5 prrr AnchoUN">
                <h3 className="TituloAtaquesUN3  py-2> ">Special Attack</h3>

                <Table className="nomostrarscrollBD">
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.SpecialAttack.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5">
                        <TableCell
                          className="  py-2 NombreAtaquesUN4  nomostrarscrollBD tablaborderabajo"
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  celdaimgAtaqUN4 py-2 tablaborderabajo"
                            align="right"
                            component="td"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueUN"
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

              <TableContainer className="  UNAFU2 fondoTablaUN fondoTablaUN  mt-3 mb-4  prrr AnchoUN">
                <h3 className="TituloAtaquesUN4 py-2 ">Infinite Worth EXS</h3>

                <Table className="nomostrarscroll">
                  <TableBody>
                    {this.props.elemento.InfiniteWorthEXS.map(
                      (Ataque, index) => (
                        <TableRow key={Ataque.nombreAtaque} className="mx-5">
                          <TableCell
                            className="  py-2 NombreAtaquesUN4 tablaborderabajo "
                            component="td"
                            scope="row"
                            align="left"
                          >
                            {Ataque.nombreAtaque}
                          </TableCell>

                          {
                            <TableCell
                              component="td"
                              className="  celdaimgAtaqUN4 py-2 tablaborderabajo"
                              align="right"
                            >
                              {Ataque.Animacion.map(
                                (animaciondelataque, index) => (
                                  <Image
                                    key={index}
                                    className="imgAtaqueUN"
                                    src={
                                      process.env.PUBLIC_URL +
                                      animaciondelataque
                                    }
                                    fluid
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
              <Link
                to={{
                  pathname: "/BiografiaUndernight",
                  state: {
                    ALL: this.props.elemento,
                  },
                }}
                className="btn-ki large ghostpulse "
              >
                <div className="DivBotonUN2 ">
                  <button className="BotonUN">Biography &amp; Videos</button>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class UnderNight extends React.Component {
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
      <div className="DivBDFONDOIMAGEN">
        <Helmet>
          <title>UNDER NIGHT IN-BIRTH </title>
          <meta name="description" content="Move 	UNDER NIGHT IN-BIRTH " />
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
          <Row className="NavbarUnder ">
            {/* <Col md="3" className="">
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className=""
                height="180vw"
              ></img>
            </Col> */}
            <Col md="8" className="fondo2UN">
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                alt=""
                className="LogoUn"
                height="180vw"
              ></img>
            </Col>

            <Col md="4" style={style}></Col>
          </Row>
        </div>

        {/* <div className="DivBDFONDOUN "> */}
        <div className=" ">
          <div className="w-100 mt-4 ">
            <Container className=" pt-1 containerUN ">
              <h3 className="TextoTituloUN   mx-auto">Character Select</h3>
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
                <div className="DivBotonUN2 ">
                  <button className="BotonUN2">See Tierlist</button>
                </div>
              </Link>
              <Row className=" w-100 stage RowUn  centrarelemento">
                {/* <img
                  src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                  className="mx-auto mb-3"
                ></img> */}

                <div
                  className="nav  col-md-11  borderBotUN mb-4  passs"
                  role="tablist"
                >
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <div
                        className="CentrodoUN  "
                        align="center"
                        key={personaje.Nombre}
                      >
                        <div className="w-100 divFOTOUN">
                          <div className="DivFotoUnder">
                            <Image
                              className="FotoUB "
                              onClick={() => this.showContent(index)}
                              src={process.env.PUBLIC_URL + personaje.Foto}
                              alt="imagen personaje"
                              fluid
                            ></Image>

                            <div className="divTectoUnder">
                              <h3 className="puebaNombre">
                                {personaje.Nombre}
                              </h3>
                            </div>
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
export default withRouter(UnderNight);
