import React from "react";

import "./juegosDetalles.css";
import killerinstinct from "../../../JSON/KillerInstinct.json";
import Skullgirls from "../../../JSON/SkullGirls.json";
import PJmortalkombat from "../../../JSON/MortalKombat.json";

import Juegos from "../../../JSON/juegos.json";
import { withRouter } from "react-router-dom";
import ponys from "../../../JSON/ponys.json";
import MARVEL from "../../../JSON/Marvel.json";
import Dragonball from "../../../JSON/DragonBall.json";
import UnderNight from "../../../JSON/UnderNight.json";
import StreetFighterV from "../../../JSON/StreetFighter5.json";

import TEKKEN from "../../../JSON/Tekken.json";
import SoulCalibur from "../../../JSON/SoulCalibur.json";
import Granblue from "../../../JSON/GranBlue.json";
import KillerInstinct from "../KillerInstinc/KillerInstinc";
import MortalKombat from "../MortalKombat/MortalKombat";
import GbFantasy from "../GrandBLUE/GranBlue";
import DB from "../DragonBall/Dragonball";
import UnderNightJuego from "../UnderNight/UnderNight";
import SoulCaliburVI from "../Soulcalibur/Soulcalibur";
import StreetFighter5 from "../StreetFighter5/StreetFighter5";
import GAMETEKKEN from "../TEKKEN/TEKKEN";
import PONYS from "../Ponys/PONYS";
import MarvelVSCapcom from "../MarvelVSCapcom/MarvelVSCapcom";
import SkullG from "../SkullGirls/SkullGirls";

class JuegosDetalles extends React.Component {
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

  render() {
    const detalles = this.props.location.state.prueba;
    let prueba = Juegos;
    if (detalles.Nombre === prueba[0].Nombre) {
      return <MarvelVSCapcom detalles={detalles} Juego={MARVEL} />;
    } else if (detalles.Nombre === prueba[1].Nombre) {
      return <PONYS detalles={detalles} Juego={ponys} />;
    } else if (detalles.Nombre === prueba[2].Nombre) {
      return <KillerInstinct detalles={detalles} Juego={killerinstinct} />;
    } else if (detalles.Nombre === prueba[3].Nombre) {
      return <SkullG detalles={detalles} Juego={Skullgirls} />;
    } else if (detalles.Nombre === prueba[4].Nombre) {
      return <UnderNightJuego detalles={detalles} Juego={UnderNight} />;
    } else if (detalles.Nombre === prueba[5].Nombre) {
      return <DB detalles={detalles} Juego={Dragonball} />;
    } else if (detalles.Nombre === prueba[6].Nombre) {
      return <GAMETEKKEN detalles={detalles} Juego={TEKKEN} />;
    } else if (detalles.Nombre === prueba[7].Nombre) {
      return <SoulCaliburVI detalles={detalles} Juego={SoulCalibur} />;
    } else if (detalles.Nombre === prueba[8].Nombre) {
      return <StreetFighter5 detalles={detalles} Juego={StreetFighterV} />;
    } else if (detalles.Nombre === prueba[9].Nombre) {
      return <GbFantasy detalles={detalles} Juego={Granblue} />;
    } else if (detalles.Nombre === prueba[10].Nombre) {
      return <MortalKombat detalles={detalles} Juego={PJmortalkombat} />;
    }
  }
}

export default withRouter(JuegosDetalles);
