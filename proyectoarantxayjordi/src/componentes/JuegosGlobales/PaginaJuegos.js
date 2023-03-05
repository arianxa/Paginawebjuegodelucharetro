import React, { Component } from "react";
import data from "../../JSON/juegos.json";
import "./JuegosGlobales.css";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export class PaginaJuegos extends Component {
  click(e) {
    //const mother = new Mother();
    //mother.addMother(id);
  }

  render() {
    return (
      <div className=" fondodepantalla mx-0 px-5 mx-auto">
        <Helmet>
          <title>All Games</title>
          <meta name="description" content="All Games Website" />
        </Helmet>
        <h1 className="hee">
          <strong className="AllGames">
            All Games <span>({data.length})</span>
          </strong>
        </h1>
        <div className="row justify-content-center px-5">
          {data.map((juego, index) => {
            return (
              <div key={juego.Nombre} className="wrapper ">
                <div className="cards justify-content-center">
                  <Link
                    to={{
                      pathname: "/juegosDetalles",
                      state: {
                        prueba: juego,
                        visible: juego.Nombre,
                      },
                    }}
                  >
                    {/*Para coger la carpeta public */}
                    <figure className="card ">
                      {/*className="tamañoimg"*/}
                      <img
                        variant="top"
                        src={process.env.PUBLIC_URL + juego.Cara}
                        alt="Error"
                      />

                      {/* <figcaption>{juego.Nombre}</figcaption> */}
                    </figure>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

/*<div class="news">

		<figure class="article">

			<img src="https://mrreiha.keybase.pub/codepen/hover-fx/news1.jpg" />

			<figcaption>

				<h3>New Item</h3>

				<p>

					In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.

				</p>

			</figcaption>

		</figure>

		<figure class="article">

			<img src="https://mrreiha.keybase.pub/codepen/hover-fx/news2.png" />

			<figcaption>

				<h3>Update</h3>

				<p>

					Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.

				</p>

			</figcaption>

		</fig

	</div>*/
