import React from "react";

import "./BiografiaUndernight.css";
import {  Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

class BiografiaUndernight extends React.Component {
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
      <div className="BioDivTotalUN">
        <Helmet>
          <title>Biography Under Night In-Birth</title>
          <meta
            name="description"
            content="Biography Under Night In-Birth
"
          />
        </Helmet>
        <div className="BioEspTopUN">
          <h1 className="BioNombreUN"> {detalles.Nombre}</h1>

          <div>
            <Row className="BioImgyBioUN">
              <div>
                <FontAwesomeIcon
                  className="iconoUnder"
                  icon={faArrowLeft}
                  onClick={this.props.history.goBack}
                />
              </div>
              <Col className="col-md-5">
                <img
                  className="BioImgUN"
                  variant="top"
                  src={process.env.PUBLIC_URL + detalles.Foto2}
                  alt="Error"
                />
              </Col>
              <Col className="col-md-5  BIOCentrarColDivUN">
                <h1 className="BiotituloUN"> Biografia</h1>
                <h6 className="BioDescUN"> {detalles.Descripcion}</h6>
                <h1 className="BiotituloUN"> Personality</h1>
                <h6 className="BioDescUN"> {detalles.Personality}</h6>
                <h1 className="BiotituloUN"> Characteristics </h1>

                <h6 className="BioDescUN">
                  <strong>Size: </strong> {detalles.Size}
                </h6>
                <h6 className="BioDescUN">
                  <strong> Weight: </strong> {detalles.Weight}
                </h6>
              </Col>
            </Row>
            <div className="">
              <h1 className="BIOtitulocombosUN"> Combos</h1>
              <div className="derechaUN">
                <ResponsivePlayer className="video" url={detalles.Combos} />
                {/* <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos} />
                </Col>
                <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos2} />
              </Col> */}
              </div>
              <div className="izqUN">
                <ResponsivePlayer className="video" url={detalles.Combos2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaUndernight);
