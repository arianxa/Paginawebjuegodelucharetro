import React from "react";
import "./App.css";
import { PaginaPrincipal } from "./componentes/PaginaPrincipal";
import { Footer } from "./componentes/PaginaPrincipal";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App colorprimario">
      <PaginaPrincipal />

      <footer className="colorprimario">
        <Footer />
      </footer>
    </div>
  );
}

/**
 * Texto de preuba
 * arraypersonajes { 0= id ,nombre,img}
 *
 */
export default App;
