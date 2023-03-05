/* eslint-disable no-useless-constructor */
import React from "react";
import data from "../../JSON/Personajes.json";
import MARVEL from "../../JSON/Marvel.json";
import ponys from "../../JSON/ponys.json";
import killerinstinct from "../../JSON/KillerInstinct.json";
import Skullgirls from "../../JSON/SkullGirls.json";
import Juegos from "../../JSON/juegos.json";
import { Link } from "react-router-dom";

class PersonajesGlobales extends React.Component {
  constructor(props) {
    super(props);
  }

  streetfighter(elementoporpasarparametro) {
    return (
      <div className="row">
        {elementoporpasarparametro.map((perso, index) => {
          return (
            <div key={perso.Nombre} className="Personajes">
              <div className="card">
                {/*Para coger la carpeta public */}
                <Link
                  to={{
                    pathname: "/Detalles",
                    state: {
                      objecto: perso,
                      name: perso.Nombre,
                      age: 20,
                    },
                  }}
                >
                  <img
                    variant="top"
                    src={process.env.PUBLIC_URL + perso.Foto}
                    alt="Error"
                  />
                  <span className="Nombre"> {perso.Nombre}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    let prueba = Juegos;
    console.log(prueba[0].Nombre);
    let mostrarvalor = this.props.location.state.visible;
    if (mostrarvalor === prueba[0].Nombre) {
      return this.streetfighter(data);
    } else if (mostrarvalor === prueba[2].Nombre) {
      return this.streetfighter(ponys);
    } else if (mostrarvalor === prueba[3].Nombre) {
      return this.streetfighter(killerinstinct);
    } else if (mostrarvalor === prueba[4].Nombre) {
      return this.streetfighter(Skullgirls);
    } else {
      return this.streetfighter(MARVEL);
    }
  }
}

export default PersonajesGlobales;
