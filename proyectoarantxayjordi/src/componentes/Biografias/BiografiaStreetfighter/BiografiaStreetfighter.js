import React from "react";

import "./BiografiaStreetfighter.css";
import {  Row, Col } from "reactstrap";

import { withRouter } from "react-router-dom";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

class BiografiaStreetfighter extends React.Component {
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
      <div className="BioDivTotalSF">
        <Helmet>
          <title>Biography Street Fighter</title>
          <meta name="description" content="Biography Street Fighter" />
        </Helmet>
        <h1 className="BioNombreSF"> {detalles.Nombre}</h1>

        <div>
          <Row className="BioImgyBioSF">
            <div>
              <FontAwesomeIcon
                className="iconoSF"
                icon={faArrowLeft}
                onClick={this.props.history.goBack}
              />
            </div>
            <Col className="col-md-5">
              <img
                className="BioImgSF"
                variant="top"
                src={process.env.PUBLIC_URL + detalles.Foto2}
                alt="Error"
              />
            </Col>
            <Col className="col-md-5  BIOCentrarColDivSF">
              <h1 className="BiotituloSF"> Biography</h1>
              <h6 className="BioDescSF"> {detalles.Descripcion}</h6>
              <h1 className="BiotituloSF"> Personality</h1>
              <h6 className="BioDescSF"> {detalles.Personality}</h6>
              <h1 className="BiotituloSF"> Characteristics </h1>
              <h6 className="BioDescSF">
                <strong>Likes: </strong> {detalles.Likes}
              </h6>
              <h6 className="BioDescSF">
                <strong>Dislikes: </strong> {detalles.Dislikes}
              </h6>

              <h6 className="BioDescSF">
                <strong>Skills: </strong> {detalles.Skills}
              </h6>
              <h6 className="BioDescSF">
                <strong>Affiliation: </strong> {detalles.Affiliation}
              </h6>
              <h6 className="BioDescSF">
                <strong>Height: </strong> {detalles.Height}
              </h6>
              <h6 className="BioDescSF">
                <strong> Weight: </strong>
                {detalles.Weight}
              </h6>
            </Col>
          </Row>
          <div className="">
            <h1 className="BIOtitulocombosSF"> Combos</h1>
            <div className="derechaSF">
              <ResponsivePlayer className="video" url={detalles.Combos} />
              {/* <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos} />
                </Col>
                <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos2} />
              </Col> */}
            </div>
            <div className="izqSF">
              <ResponsivePlayer className="video" url={detalles.Combos2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaStreetfighter);
