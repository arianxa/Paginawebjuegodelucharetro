import React from "react";

import "./TierList.css";

import { Row, Col } from "reactstrap";

import { withRouter } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import { Helmet } from "react-helmet";

class TierList extends React.Component {
  constructor(props, context) {
    super(props);
    console.log(this.props.location.state);
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
    const descripcionbiojuego = this.props.location.state.descripcionjuego;
    let comp;

    return (
      /*  const style2 = {
        backgroundPosition: "right right",
        backgroundSize: "cover",
  
        display: "block",
        backgroundImage:
          "linear-gradient(to left, rgba(255,255,255,0), rgba(0, 0, 0, 1)), url(" +
          this.props.detalles.personaje +
          ")",
        backgroundRepeat: "no-repeat",
      };*/

      <div className="DivPrincTier ">
        <Helmet>
          <title>Tier List </title>
          <meta name="description" content="Move Tier List" />
        </Helmet>
        <Row className="FondoTier">
          <h1 className="TierNombre">{descripcionbiojuego.Nombre}</h1>
        </Row>
        <Row>
          <h1 className="subtitulo">TierList</h1>
        </Row>
        <Row className="FondoTier">
          <FontAwesomeIcon
            className="iconoTier margenesiconos"
            icon={faArrowLeft}
            onClick={this.props.history.goBack}
          />
        </Row>
        <Row className="FondoTier">
          <Col className="col-md-5">
            <div className="margenestablas testtablas">
              <Table
                responsive
                size="sm"
                className="elominarborders  TablaTierNumero"
              >
                <thead className="HeadTablaTier">
                  <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Name</th>
                  </tr>
                </thead>
                {detalles.map((personaje, index) => {
                  if (personaje.FotoTier != null) {
                    comp = (
                      <tbody key={index}>
                        <tr>
                          <td className=" tdTierNombre elominarborders tdTier">
                            <h3 className="NombrePersTier">{index + 1}</h3>
                          </td>
                          <td className="tdTierfoto elominarborders">
                            <img
                              src={process.env.PUBLIC_URL + personaje.FotoTier}
                              alt=""
                              className="fototier"
                            ></img>
                          </td>
                          <td className="tdTierNombre elominarborders">
                            <h3 className="NombrePersTier">
                              {personaje.Nombre}
                            </h3>
                          </td>
                        </tr>
                      </tbody>
                    );
                  } else {
                    comp = (
                      <tbody key={index}>
                        <tr>
                          <td className=" tdTierNombre elominarborders tdTier">
                            <h3 className="NombrePersTier">{index + 1}</h3>
                          </td>
                          <td className="tdTierfoto elominarborders">
                            <img
                              src={process.env.PUBLIC_URL + personaje.Foto}
                              alt=""
                              className="fototier"
                            ></img>
                          </td>
                          <td className="tdTierNombre elominarborders">
                            <h3 className="NombrePersTier">
                              {personaje.Nombre}
                            </h3>
                          </td>
                        </tr>
                      </tbody>
                    );
                  }

                  return comp;
                })}
              </Table>
            </div>
          </Col>
          <Col className="col-md-7">
            <div className="testtablas">
              <h1 className="TituloDesc">Description</h1>
              <h6 className="DescripcionTier  ">
                {descripcionbiojuego.Descripcion}
              </h6>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(TierList);
