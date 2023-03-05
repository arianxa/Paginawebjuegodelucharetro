/* eslint-disable array-callback-return */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Row, Col } from "reactstrap";
import "./TEKKEN.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { animateScroll as scroll } from "react-scroll";
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

  render() {
    return (
      <div
        style={{ width: "100%" }}
        className="PruebadefondoAtaques"
        key={this.props.elemento.Nombre}
      >
        {/* <img  className="FotoFondoBD" src={fondoFotoNombre}>
          </img> */}

        <div className="fondonombreTK enter">
          <h3 className="TextoPersonajeTituloTK">
            {this.props.elemento.Nombre}
          </h3>

          <div className="rule "></div>
        </div>
        <Container className=" PruebadefondoAtaques h-100">
          <Row className="w-100  px-0 mx-0 ">
            <Col className="col-md-5 w-100 margentabla colTKTabla">
              <TableContainer
                component={Paper}
                className="fondoTablaTK  eliminarradius nomostrarscrollBD mt-5 "
              >
                <h3 className="TituloAtaquesTK  my-0">
                  Unique Moves
                  <hr className="LineaTK" />
                </h3>

                <Table
                  stickyHeader
                  aria-label="sticky table"
                  className="nomostrarscroll w-100"
                >
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.Ataques.map((Ataque, index) => (
                      <TableRow key={Ataque.nombreAtaque} className="mx-5  ">
                        <TableCell
                          className="  py-2 colorFondoAtaquesTK tablaborderabajo "
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesBD py-2 tablaborderabajo"
                            component="td"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueTTK resppp"
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
                  pathname: "/BiografiaTekken",
                  state: {
                    ALL: this.props.elemento,
                  },
                }}
                className="btn-ki large ghostpulse "
              >
                <div className="DivBotonTK ">
                  <button className="BotonTK">Biography &amp; Videos</button>
                </div>
              </Link>
            </Col>
            <Col className="col-md-5 w-100 mb-5 mr-5  ">
              <img
                className="FOTOTK2 escondersi my-1 mt-5 "
                src={process.env.PUBLIC_URL + this.props.elemento.Foto2}
                alt="imagen personaje"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class TEKKEN extends React.Component {
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
      <div className="DivFONDOTK degrafado w-100 ml-0">
        <Helmet>
          <title>Tekken</title>
          <meta name="description" content="Move Tekken" />
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
          <Row className="NavbarTK">
            <Col md="7" className="fondo2TK">
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Logo}
                alt=""
                className="fotoLogoTK"
                height="110vw"
              ></img>{" "}
            </Col>

            <Col md="5" style={style}></Col>
          </Row>
        </div>

        <div className="row DivNegroTransTK pb-5">
          <div className="w-100  mt-4 ">
            <Container className="w-100   ">
              <h3 className="LetraTituloTK">Character Select</h3>
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
                <div className="DivBotonTK2 ">
                  <button className=" BotonTK2">See Tierlist</button>
                </div>
              </Link>
              <Row className=" tamañodefectoTK stage TK2img ">
                {/* <img
                  src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                  className="mx-auto mb-3"
                ></img> */}

                <div
                  className="nav nav-tabs col-md-11   w-100 mx-auto borderBotBD "
                  role="tablist"
                >
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <div
                        className="CentrodoBD  mx-auto "
                        align="center"
                        key={personaje.Nombre}
                      >
                        <div
                          className="DIVFOTOTK  w-100"
                          onClick={() => this.showContent(index)}
                        >
                          <div className="DivFOTOTK ">
                            <img
                              className="FotoTK my-1 "
                              src={process.env.PUBLIC_URL + personaje.Foto}
                              alt="imagen personaje"
                            ></img>
                          </div>
                          <h3 className="NombrePesonajeTK">
                            {personaje.Nombre}
                          </h3>
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
export default withRouter(TEKKEN);
