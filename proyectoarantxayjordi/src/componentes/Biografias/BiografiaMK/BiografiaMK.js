import React from "react";

import "./BiografiaMK.css";
import {  Row, Col } from "reactstrap";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

class BiografiaMK extends React.Component {
  constructor(props, context) {
    super(props);
   
  }
  componentDidMount() {
    window.scrollTo(0, 0);
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
  };

  handleCloseModal = (e) => {
    this.setState({ show: false });
  };

  render() {
    const detalles = this.props.location.state.ALL;

    return (
      <div className="DivBioMK">
        <Helmet>
          <title>Biography Mortal Kombat </title>
          <meta name="description" content="Biography Mortal Kombat " />
        </Helmet>
        <div className="BioDivTotalMK">
          <h1 className="BioNombreMK"> {detalles.Nombre}</h1>

          <div>
            <Row className="BioImgyMK">
              <div className="DivIconMK">
                <FontAwesomeIcon
                  className="iconoMK"
                  icon={faArrowLeft}
                  onClick={this.props.history.goBack}
                />
              </div>
              <Col className="col-md-4">
                <img
                  className="BioImgMK"
                  variant="top"
                  src={process.env.PUBLIC_URL + detalles.Foto1}
                  alt="Error"
                />
              </Col>
              <Col className="col-md-4  BIOCentrarColDivMK">
                <h1 className="BiotituloMK"> Biografia</h1>
                <h6 className="BioDesMK"> {detalles.Descripcion}</h6>
                <h1 className="BiotituloMK"> Characteristics</h1>
                <h6 className="BioDesMK">
                  <strong>Real name: </strong> {detalles.RealName}
                </h6>
                <h6 className="BioDesMK">
                  <strong>Gender: </strong> {detalles.Gender}
                </h6>
                <h6 className="BioDesMK">
                  <strong>Species: </strong> {detalles.Species}
                </h6>
              </Col>
            </Row>
            <Row className="BioImgyBioMK">
              <h1 className="BIOtitulocombosMK"> Combos</h1>
            </Row>
            <div className="derechaMK">
              <ResponsivePlayer className="video" url={detalles.Combos} />
            </div>
            <div className="izqMK">
              <ResponsivePlayer className="video" url={detalles.Combos2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaMK);
