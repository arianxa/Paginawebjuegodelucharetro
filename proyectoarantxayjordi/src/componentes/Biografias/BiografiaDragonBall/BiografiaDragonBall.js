import React from "react";

import "./BiografiaDragonBall.css";

import { withRouter } from "react-router-dom";
import {  Row, Col } from "reactstrap";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

class BiografiaDragonBall extends React.Component {
  constructor(props, context) {
    super(props);

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
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const detalles = this.props.location.state.ALL;

    return (
      <div className="BioDivTotalBD">
        <Helmet>
          <title>Biography Dragon Ball</title>
          <meta name="description" content="Biography Dragon Ball" />
        </Helmet>
        <h1 className="BioNombreBD"> {detalles.Nombre}</h1>

        <div className="DivIconoBD">
          <Row className="BioImgyBioBD">
            <div>
              <FontAwesomeIcon
                className="iconoBD"
                icon={faArrowLeft}
                onClick={this.props.history.goBack}
              />
            </div>
            <Col className="col-md-5">
              <img
                className="BioImgBD"
                variant="top"
                src={process.env.PUBLIC_URL + detalles.Foto2}
                alt="Error"
              />
            </Col>
            <Col className="col-md-5  BIOCentrarColDivBD">
              <h1 className="BiotituloBD"> Biography</h1>
              <h6 className="BioDescBD"> {detalles.Descripcion}</h6>
              <h1 className="BiotituloBD"> Personality</h1>
              <h6 className="BioDescBD"> {detalles.Personality}</h6>
              <h1 className="BiotituloBD"> Characteristics </h1>
              <h6 className="BioDescBD">
                <strong>Anime name: </strong> {detalles.Animename}
              </h6>
              <h6 className="BioDescBD">
                <strong> Manga name: </strong>
                {detalles.Manganame}
              </h6>
              <h6 className="BioDescBD">
                {" "}
                <strong>Raze: </strong> {detalles.Raze}
              </h6>
              <h6 className="BioDescBD">
                {" "}
                <strong>Gender: </strong> {detalles.Gender}
              </h6>
              <h6 className="BioDescBD">
                {" "}
                <strong>Size: </strong> {detalles.Size}
              </h6>
              <h6 className="BioDescBD">
                <strong> Weight: </strong> {detalles.Weight}
              </h6>
            </Col>
          </Row>

          <div className="">
            <h1 className="BIOtitulocombosBD"> Combos</h1>
            <div className="derechaBD">
              <ResponsivePlayer className="video" url={detalles.Combos} />
              {/* <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos} />
                </Col>
                <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos2} />
              </Col> */}
            </div>
            <div className="izqBD">
              <ResponsivePlayer className="video" url={detalles.Combos2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaDragonBall);
