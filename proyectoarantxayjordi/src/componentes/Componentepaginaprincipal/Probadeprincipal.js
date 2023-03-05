import React from "react";
import "./PaginaPrincipal.css";
import $ from "jquery";

import { Link } from "react-router-dom";

class Probadeprincipal extends React.Component {
  state = {
    name: "",
    showResults: false,
    showResultselemento: true,
    showResultsRanking: false,
  };
  componentDidMount() {
    setTimeout(function() {
      $(".slab .slab-wrapper").css("display", "none");
      $(".poster-text").addClass("show");
      $(".slab-wrapper").addClass("show");
    }, 5550);
  }
  onClick = (e) => {
    this.setState({
      showResults: false,
      showResultselemento: true,
      showResultsRanking: false,
      name: "",
    });
  };
  Mostrarranking = (e) => {
    this.setState({
      showResults: false,
      showResultselemento: false,
      showResultsRanking: true,
      name: "",
    });
  };
  filterProducts = (e) => {
    this.setState({
      showResults: true,
      showResultselemento: false,
      name: e.target.value,
    });
  };

  render() {
    return (
      <section className="landing">
        <div className="poster-wrapper">
          <div className="posters-container">
            <div className="poster-header">
              <div className="poster-heading">
                <h1 className="reveal-text">Fighting Games Social Club</h1>
              </div>
              <div className="poster-sub-heading">
                <h2 className="reveal-text"> 2020 </h2>
              </div>
            </div>
            <div className="poster-body">
              <div className="poster-text">
                <h4>
                  <p
                    style={{
                      display: this.state.showResultsRanking ? "block" : "none",
                    }}
                    className="colortextoprincilal"
                  >
                    Hola sabes que se va hacer la EVO no¿? , en este sitio
                    podrás obtener toda la información de los juegos que se van
                    a jugar tanto su tier list,sus movimientos,sus
                    curiosidades.... En este apartado podrás ir viendo los
                    resultados de los torneos. Para eso deberás clickear sobre
                    el juego que os guste
                  </p>
                  <div
                    style={{
                      display: this.state.showResultselemento
                        ? "inline"
                        : "none",
                    }}
                  >
                    <h1 className="colortextoprincilal"> About Us</h1>
                    <span className="colortextoprincilal">
                      We are a team that we love fighting games and the world of
                      programming, this website is made so that people who have
                      just started in fighting games have information at hand
                      for each game. On the web you can see: the different games
                      that were going to be made in the EVO with their tierlist,
                      movements, biographies and combo. We are starting in the
                      world of web design if you are interested in creating your
                      page, improving your design, implementing something, do
                      not hesitate to contact us, you can do it by email to:
                      Adijnor@gmail.com or a Pm on Twitter @BT_Kazukun,
                      @carpediiemm. I hope you like it.
                    </span>
                  </div>
                  <div
                    className="colortextoprincilal"
                    style={{
                      display: this.state.showResults ? "block" : "none",
                    }}
                  >
                    {/*
                    <img
                      className="FotoBracket"
                      variant="top"
                      src={process.env.PUBLIC_URL + this.state.name}
                      alt="Error"
                    />
                    */}
                    <h1>{this.state.name}</h1>
                  </div>
                </h4>
                <span className="poster-author colortextoprincilal">
                  - Adijnor
                </span>
              </div>

              <div className="slab-wrapper">
                <div className="slab"></div>
                <div className="slab"></div>
                <div className="slab"></div>
                <div className="slab"></div>
                <div className="slab"></div>
                <div className="slab"></div>
                <div className="slab"></div>
                <div className="slab"></div>
                <div className="slab"></div>
                <div className="slab"></div>
              </div>
            </div>
            <ul className="poster-footer">
              <li className="foot-box" data-num="1">
                <div href="/PaginaJuegos" className=" foot-link">
                  <Link
                    to={{
                      pathname: "/PaginaJuegos",
                    }}
                    className="colorgames"
                  >
                    <span className="no-planet-b foot-link ">Games</span>
                  </Link>
                </div>
              </li>
              <li className="foot-box" data-num="2">
                <div href="#" className="foot-link" onClick={this.onClick}>
                  <span
                    className="no-planet-b foot-link "
                    onClick={this.onClick}
                  >
                    About Us
                  </span>
                </div>
              </li>

              <li className="foot-box" data-num="1">
                <div href="/PaginaJuegos" className=" foot-link">
                  <a
                    href="https://fightinggamessc.blogspot.com"
                    className="colorgames"
                  >
                    <span className="no-planet-b foot-link ">Blog</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Probadeprincipal;
