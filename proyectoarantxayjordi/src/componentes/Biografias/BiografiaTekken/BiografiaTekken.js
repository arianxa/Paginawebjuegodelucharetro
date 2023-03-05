import React from "react";

import "./BiografiaTekken.css";
import {  Row, Col } from "reactstrap";

import { withRouter } from "react-router-dom";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

class BiografiaTekken extends React.Component {
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
      <div className="BioDivTotalTK">
        <Helmet>
          <title>Biography Tekken</title>
          <meta name="description" content="Biography Tekken" />
        </Helmet>
        <div className="BioEspTopTK">
          <h1 className="BioNombreTK"> {detalles.Nombre}</h1>

          <div>
            <Row className="BioImgyBioTK">
              <div>
                <FontAwesomeIcon
                  className="iconoTK"
                  icon={faArrowLeft}
                  onClick={this.props.history.goBack}
                />
              </div>
              <Col className="col-md-5 margenesTK">
                <img
                  className="BioImgTK"
                  variant="top"
                  src={process.env.PUBLIC_URL + detalles.Foto2}
                  alt="Error"
                />
              </Col>
              <Col className="col-md-5  BIOCentrarColDivTK">
                <h1 className="BiotituloTK"> Biography</h1>
                <h6 className="BioDescTK"> {detalles.Descripcion}</h6>
                <h1 className="BiotituloTK"> Personality</h1>
                <h6 className="BioDescTK"> {detalles.Personality}</h6>
                <h1 className="BiotituloTK"> Characteristics </h1>
                <h6 className="BioDescTK">
                  <strong>Height: </strong> {detalles.Height}
                </h6>
                <h6 className="BioDescTK">
                  <strong> Weight: </strong>
                  {detalles.Weight}
                </h6>
                <h6 className="BioDescTK">
                  <strong>Likes: </strong> {detalles.Likes}
                </h6>
                <h6 className="BioDescTK">
                  <strong>Dislikes: </strong> {detalles.Dislikes}
                </h6>
                <h6 className="BioDescTK">
                  <strong>Species: </strong> {detalles.Species}
                </h6>
                <h6 className="BioDescTK">
                  <strong> Gender: </strong> {detalles.Gender}
                </h6>
                <h6 className="BioDescTK">
                  <strong> Occupation: </strong> {detalles.Occupation}
                </h6>
              </Col>
            </Row>
            <div className="">
              <h1 className="BIOtitulocombosTK"> Combos</h1>
              <div className="derechaTK">
                <ResponsivePlayer className="video" url={detalles.Combos} />
                {/* <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos} />
                </Col>
                <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos2} />
              </Col> */}
              </div>
              <div className="izqTK">
                <ResponsivePlayer className="video" url={detalles.Combos2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaTekken);
