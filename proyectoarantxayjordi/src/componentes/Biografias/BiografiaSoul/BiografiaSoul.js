import React from "react";

import "./BiografiaSoul.css";
import {  Row, Col } from "reactstrap";

import { withRouter } from "react-router-dom";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

class BiografiaSoul extends React.Component {
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
      <div className="BioDivTotalSoul">
        <Helmet>
          <title>Biography Soul Calibur</title>
          <meta name="description" content="Biography Soul Calibur" />
        </Helmet>
        <div>
          <h1 className="BioNombreSoul"> {detalles.Nombre}</h1>

          <div>
            <Row className="BioImgySoul">
              <div className="DivIconSoul">
                <FontAwesomeIcon
                  className="iconoSoul"
                  icon={faArrowLeft}
                  onClick={this.props.history.goBack}
                />
              </div>
              <Col className="col-md-4 bioPSoul">
                <img
                  className="BioImgSoul"
                  variant="top"
                  src={process.env.PUBLIC_URL + detalles.Foto}
                  alt="Error"
                />
              </Col>
              <Col className="col-md-5  BIOCentrarColDivSoul">
                <h1 className="BiotituloSoul"> Biografia</h1>
                <h6 className="BioDesSoul"> {detalles.Descripcion}</h6>
                <h1 className="BiotituloSoul"> Personality</h1>
                <h6 className="BioDesSoul"> {detalles.Personality}</h6>
                <h1 className="BiotituloSoul"> Characteristics </h1>
                <h6 className="BioDesSoul">
                  <strong>Real name: </strong> {detalles.RealName}
                </h6>
                <h6 className="BioDesSoul">
                  <strong> Gender: </strong>
                  {detalles.Gender}
                </h6>
                <h6 className="BioDesSoul">
                  <strong>Height: </strong> {detalles.Height}
                </h6>
                <h6 className="BioDesSoul">
                  <strong>Weight: </strong> {detalles.Weight}
                </h6>
                <h6 className="BioDesSoul">
                  <strong> Weaponname: </strong> {detalles.Weaponname}
                </h6>
              </Col>
            </Row>
            <div className="">
              <h1 className="BIOtitulocombosSoul"> Combos</h1>
              <div className="derechaSOUL">
                <ResponsivePlayer className="video" url={detalles.Combos} />
                {/* <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos} />
                </Col>
                <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos2} />
              </Col> */}
              </div>
              <div className="izqSOUL">
                <ResponsivePlayer className="video" url={detalles.Combos2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaSoul);
