import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { StyleSheet, Text, View } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Juego.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import { ReactComponent as Logo } from "../nombre.png";
import ReactPlayer from "react-player";

import { BrowserRouter, Route, Link } from "react-router-dom";

class KillerInstinc extends React.Component {
  constructor(props, context) {
    super(props);
    console.log(props);
    console.log(this.props.detalles.Foto);
  }

  state = {
    show: false,
    elmento: "",
    imagen: "",
  };

  showModal = (e, imagenes) => {
    this.setState({
      show: true,
      elmento: e,
      imagen: imagenes,
    });

    console.log(this.state.elemento);
  };

  handleCloseModal = (e) => {
    this.setState({ show: false });
  };

  render() {
    const detalles = this.props;
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

    const p={
    left:" -2.60069vw"
    };

    const h={
 
      left: "9.14782vw"

    };

    return (
      <div className="DivGeneral">
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
            <Col md="3" className="fondo1">
              <h6> {this.props.detalles[0]}</h6>
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className="fotoLogoPonys"
                height="110vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2">
              <h1 className="TextoTitulo">{this.props.detalles.Nombre}</h1>
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
        
          {this.props.Juego.map((personaje) => {
            return (
              <div className="PersonajesKI w-100 mt-4" key={personaje.Nombre}>
            

    

               <Container className="w-100 ">
                 <Row className=" w-100 stage">
                   <Col className="pra col-md-6" >              
                    

             
                    <img src="https://msgpwebsites.azureedge.net/killerinstinctv2/wp-content/uploads/2016/12/emblem_aria-7.png"   className="rune"/>
                
              
                    <img src="https://msgpwebsites.azureedge.net/killerinstinctv2/wp-content/uploads/2016/12/character_aria-7.png"  className="character"/>
              
                <a href="https://www.ultra-combo.com/characters/hisako/" alt="Character Name"></a> 

                </Col>
                <Col className="col-md-6">


                  <h1 className="NombreKI">{personaje.Nombre}</h1>

                  <div className="content">
                   
                    <div className="youtube">
                        <div>
                        </div>
                    </div>
                    <div className="nav">
                        <a className="btn-ki large ghostpulse" href="https://www.ultra-combo.com/characters/arbiter/">
                            <span>
                                <span>Biography &amp; Videos</span>
                            </span>
                        </a>
                    </div>
                </div>




               
                 
                      <TableContainer
                                           >
                        <Table>
                          <TableBody>
                           <TableRow>
                                <TableCell>
                                
                                 
                                  </TableCell>
                               
                              </TableRow>
                           
                          </TableBody>
                        </Table>
                      </TableContainer>







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

export default withRouter(KillerInstinc);
