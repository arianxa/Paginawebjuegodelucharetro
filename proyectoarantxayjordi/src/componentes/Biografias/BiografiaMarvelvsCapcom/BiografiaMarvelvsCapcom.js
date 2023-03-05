import React from "react";

import "./BiografiaMarvelvsCapcom.css";

import { withRouter } from "react-router-dom";
import {  Row, Col } from "reactstrap";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

class BiografiaMarvelvsCapcom extends React.Component {
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

    return (
      <div className="BioDivTotalMvsC">
        <Helmet>
          <title>Biography MarvelVSCapcopm</title>
          <meta name="description" content="Biography MarvelVSCapcopm" />
        </Helmet>
        <h1 className="BioNombreMvsC"> {detalles.Nombre}</h1>

        <div className="DivIconoMvsC">
          <Row className="BioImgyBioMvsC">
            <div>
              <FontAwesomeIcon
                className="iconoMvsC"
                icon={faArrowLeft}
                onClick={this.props.history.goBack}
              />
            </div>
            <Col className="col-md-5">
              <img
                className="BioImgMvsC"
                variant="top"
                src={process.env.PUBLIC_URL + detalles.Foto2}
                alt="Error"
              />
            </Col>
            {/* 
            "NombreReal":"Servbot / Kobun",
    "Genero":"Male(Robot)",
    "Armas":"Common Objects",
    "Afiliacion":"Villain(Neutral)",
    "Universo": */}
            <Col className="col-md-5  BIOCentrarColDivMvsC">
              <h1 className="BiotituloMvsC"> Biography</h1>
              <h6 className="BioDescMvsC"> {detalles.Descripcion}</h6>
              <h1 className="BiotituloMvsC"> Characteristics </h1>
              <h6 className="BioDescMvsC">
                <strong>Real Name: </strong> {detalles.NombreReal}
              </h6>
              <h6 className="BioDescMvsC">
                <strong> Gender: </strong>
                {detalles.Genero}
              </h6>
              <h6 className="BioDescMvsC">
                {" "}
                <strong>Attack: </strong> {detalles.Armas}
              </h6>
              <h6 className="BioDescMvsC">
                {" "}
                <strong>Affiliation: </strong> {detalles.Afiliacion}
              </h6>
              <h6 className="BioDescMvsC">
                {" "}
                <strong>Universe: </strong> {detalles.Universo}
              </h6>
            </Col>
          </Row>

          <div className="">
            <h1 className="BIOtitulocombosMvsC"> Combos</h1>
            <div className="derechaMvsC">
              <ResponsivePlayer className="video" url={detalles.Combos} />
              {/* <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos} />
                </Col>
                <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos2} />
              </Col> */}
            </div>
            <div className="izqMvsC">
              <ResponsivePlayer className="video" url={detalles.Combos2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaMarvelvsCapcom);
