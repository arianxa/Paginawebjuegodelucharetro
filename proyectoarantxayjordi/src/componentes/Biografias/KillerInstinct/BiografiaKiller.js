import React from "react";

import "./BiografiaKiller.css";

import { withRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

class BiografiaKiller extends React.Component {
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
    const detalles = this.props.location.state.ALL;
    const fondoKIBIO = {
      backgroundImage: "url(" + process.env.PUBLIC_URL + detalles.Fondo + ")",
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      color: "black",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
    };
    return (
      <div className="BioDivTotalKI">
        <Helmet>
          <title>Biography Killer Instinct</title>
          <meta
            name="description"
            content="Biography Killer Instinct"
          />
        </Helmet>
        <div style={({ width: "100%" }, fondoKIBIO)}>
          <h1 className="BioNombreKI"> {detalles.Nombre}</h1>

          <div>
            <Row className="BioImgyBioKI">
              <div className="DivIconKI">
                <FontAwesomeIcon
                  className="iconoKI"
                  icon={faArrowLeft}
                  onClick={this.props.history.goBack}
                />
              </div>
              <Col className="col-md-4">
                <img
                  className="BioImgKI"
                  variant="top"
                  src={process.env.PUBLIC_URL + detalles.Foto}
                  alt="Error"
                />
              </Col>
              <Col className="col-md-5  BIOCentrarColDivKI">
                <h1 className="BiotituloKI"> Biografia</h1>
                <h6 className="BioDesKI"> {detalles.Descripcion}</h6>
                <h1 className="BiotituloKI"> Personality</h1>
                <h6 className="BioDesKI"> {detalles.Personality}</h6>
                <h1 className="BiotituloKI"> Characteristics </h1>

                <h6 className="BioDesKI">
                  <strong>Size: </strong> {detalles.Size}
                </h6>
                <h6 className="BioDesKI">
                  <strong> Weight: </strong> {detalles.Weight}
                </h6>
              </Col>
            </Row>
            <Row className="BioImgyBioKI">
              <h1 className="BIOtitulocombosKI"> Combos</h1>
            </Row>
            <div className="derechaKiller">
              <ResponsivePlayer className="video" url={detalles.Combos} />
            </div>
            <div className="izqKiller">
              <ResponsivePlayer className="video" url={detalles.Combos2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaKiller);
