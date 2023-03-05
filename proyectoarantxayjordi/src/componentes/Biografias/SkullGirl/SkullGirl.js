import React from "react";

import "./SkullGirl.css";

import { withRouter } from "react-router-dom";
import {  Row, Col } from "reactstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { Helmet } from "react-helmet";

class SkullGirl extends React.Component {
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
  show;
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
      <div className="BioDivTotalSG">
        <Helmet>
          <title>Biography Skullgirls </title>
          <meta name="description" content="Biography Skullgirls" />
        </Helmet>
        <div>
          <h1 className="BioNombreSG"> {detalles.Nombre}</h1>

          <div>
            <Row className="BioImgyBioSG">
              <div className="DivIconSkull">
                <FontAwesomeIcon
                  className="iconoSkull"
                  icon={faArrowLeft}
                  onClick={this.props.history.goBack}
                />
              </div>
              <Col className="col-md-5">
                <img
                  className="BioImgSG"
                  variant="top"
                  src={process.env.PUBLIC_URL + detalles.Foto}
                  alt="Error"
                />
              </Col>
              <Col className="col-md-5  BIOCentrarColDivSG">
                <h1 className="BiotituloSG"> Biography</h1>
                <h6 className="BioDescSG"> {detalles.Descripcion}</h6>

                <h1 className="BiotituloSG"> History</h1>
                <h6 className="BioDescSG"> {detalles.History}</h6>

                <h1 className="BiotituloSG"> Characteristics </h1>
                <h6 className="BioDescSG">
                  <strong>Likes: </strong> {detalles.Likes}
                </h6>
                <h6 className="BioDescSG">
                  <strong>Not Like: </strong> {detalles.NotLike}
                </h6>
                <h6 className="BioDescSG">
                  <strong>Anime name: </strong> {detalles.Animename}
                </h6>
                <h6 className="BioDescSG">
                  {" "}
                  <strong>Gender: </strong> {detalles.Gender}
                </h6>
                <h6 className="BioDescSG">
                  {" "}
                  <strong>Size: </strong> {detalles.Size}
                </h6>
                <h6 className="BioDescSG">
                  <strong> Weight: </strong> {detalles.Weight}
                </h6>
              </Col>
            </Row>
            <div className="">
              <h1 className="BiotituloSG2"> Combos</h1>
              <div className="derechaSG">
                <ResponsivePlayer className="video" url={detalles.Combos} />
              </div>
              <div className="izqSG">
                <ResponsivePlayer className="video" url={detalles.Combos2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SkullGirl);
