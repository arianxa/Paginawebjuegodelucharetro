/* eslint-disable no-dupe-class-members */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Row, Col } from "reactstrap";
import "./Soulcalibur.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";

//AVER SI FUNCIOONA
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // Create a ref object
  }
  /*
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
        <Container className="">
          <Row className="w-100  px-0 mx-0">
            <Col className="col-md-6 w-100 mb-5">
              <TableContainer
                component={Paper}
                className="fondoTablaGB  eliminarradius mt-5"
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
              <TableContainer className=" fondoTablaGB  mt-3">
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
            <Col className="col-md-6">
              <TableContainer className=" fondoTablaGB  mt-5 ">
                <h3 className="TituloAtaquesGB my-0">Sky bound Art</h3>

                <Table className="nomostrarscroll">
                  <TableBody>
                    {this.props.elemento.SkyboundArt.map((Ataque, index) => (
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

              <TableContainer className=" fondoTablaGB  mt-3 ">
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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  */
}

class Soulcalibur extends React.Component {
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
      <div className="DivSoulcal">
        <Helmet>
          <title>Soulcalibur</title>
          <meta name="description" content="Move Soulcalibur" />
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
          <Row className="NavSC">
            <Col md="8" className="fondo2UC">
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className="fotoLogoSC "
              ></img>
            </Col>

            <Col md="4" style={style}></Col>
          </Row>
        </div>
        <div className="row rowGlobal ">
          <div className="w-100  mt-4">
            <Container className="w-100   mx-0  px-0   containerDIV">
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                className=" mb-3 fotoCharacterSOUL"
                alt="imagen logo"
              ></img>

              <Link
                to={{
                  pathname: "/TierList",
                  state: {
                    ALL: this.props.Juego,
                    descripcionjuego: this.props.detalles,
                  },
                }}
              >
                <div className="DivBotonSoulTier  ">
                  <button className="BotonSL2">See Tierlist</button>
                </div>
              </Link>
              <Row className=" w-100 stageUC  px-0  mx-0">
                <div className=" nav mx-auto  w-100" role="tablist">
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <div
                        className="Personajes w-100    mx-0  px-0"
                        key={personaje.Nombre}
                      >
                        <Container className="w-100   mx-0  px-0 ContainerSeparacionSOUL ">
                          <Row className="prueba pt-0 pb-3   RowSOUL ">
                            <Col md="8" className="coltablasoul mt-0">
                              <div className="contenedor   w-100">
                                <div className="NombrePJSOUL mt-5  ">
                                  {personaje.Nombre}
                                </div>
                              </div>
                              <TableContainer
                                component={Paper}
                                className="TablaGeneralSoul  mb-3 mt-3 AnchoSOUL"
                              >
                                <Table>
                                  <TableBody className="TableBodySOUL">
                                    {personaje.Ataques.map((Ataque, index) => (
                                      <TableRow
                                        key={Ataque.nombreAtaque}
                                        className="mx-5 RowSOUL"
                                      >
                                        <TableCell
                                          className=" py-2 CellNombreAtaques "
                                          component="td"
                                          scope="row"
                                        >
                                          {Ataque.nombreAtaque +
                                            "   " +
                                            "   " +
                                            ":"}
                                        </TableCell>

                                        {
                                          <TableCell
                                            component="td"
                                            className="  CellImgAtaques py-2"
                                            align="right"
                                          >
                                            {Ataque.Animacion.map(
                                              (animaciondelataque, index) => (
                                                <Image
                                                  className="imagenAtaqueSL"
                                                  key={index}
                                                  variant="top"
                                                  src={
                                                    process.env.PUBLIC_URL +
                                                    animaciondelataque
                                                  }
                                                  alt="Error"
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
                            <Col md="4 mt-3 colimgSOul">
                              <Image
                                className=" imagenestamaño   imagen2SOUL"
                                variant="top"
                                src={process.env.PUBLIC_URL + personaje.Foto}
                                alt="Error"
                              />
                              <Link
                                to={{
                                  pathname: "/BiografiaSoul",
                                  state: {
                                    ALL: personaje,
                                  },
                                }}
                                className="btn-ki large ghostpulse "
                              >
                                <div className="DivBotonSoul2 ">
                                  <button className="BotonSL">
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
export default withRouter(Soulcalibur);
