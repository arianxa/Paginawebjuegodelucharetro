import React from "react";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

class PersonajeDetalles extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    const detalles = this.props.location.state.objecto;
    let comp;


    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <button onClick={this.props.history.goBack}>Back</button>

        <h1>{comp}</h1>
        <h1>{detalles.Nombre}</h1>
        <h1>{detalles.Descripcion}</h1>
        <img
          variant="top"
          src={process.env.PUBLIC_URL + detalles.Foto}
          alt="Error"
        />

        <h1>
          {detalles.Ataques.map((Ataque) => (
            <li key={Ataque.nombreAtaque}>
              {Ataque.nombreAtaque}
              {Ataque.Animacion.map((animaciondelataque, index) => (
                <img
                  key={index}
                  variant="top"
                  src={process.env.PUBLIC_URL + animaciondelataque}
                  alt="Error"
                />
              ))}
            </li>
          ))}
        </h1>
      </div>
    );
  }
}

export default withRouter(PersonajeDetalles);
