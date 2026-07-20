import { useState } from "react";

// Datos
import pizzas from "./data/pizzas.json";
import tamanos from "./data/tamanos.json";

// Componentes
import Header from "./components/Header.jsx";
import Catalogo from "./components/Catalogo.jsx";
import DetallePizza from "./components/DetallePizza.jsx";
import ResumenPedido from "./components/ResumenPedido.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  const [pizzaSeleccionada, setPizzaSeleccionada] = useState(null);

  const [tamanoSeleccionado, setTamanoSeleccionado] = useState(null);

  const seleccionarPizza = (pizza) => {
    setPizzaSeleccionada(pizza);
    setTamanoSeleccionado(null);
  };

  const seleccionarTamano = (tamano) => {
    setTamanoSeleccionado(tamano);
  };

  const precioFinal =
    pizzaSeleccionada && tamanoSeleccionado
      ? pizzaSeleccionada.precioBase +
        (pizzaSeleccionada.precioBase * tamanoSeleccionado.incremento) / 100
      : 0;

  return (
    <>
      <Header />

      {!pizzaSeleccionada ? (

        <Catalogo
          pizzas={pizzas.pizzas}
          seleccionarPizza={seleccionarPizza}
        />

      ) : (

        <DetallePizza
          pizza={pizzaSeleccionada}
          opciones={tamanos.categorias}
          seleccionarTamano={seleccionarTamano}
        />

      )}

      {tamanoSeleccionado && (

        <ResumenPedido
          pizza={pizzaSeleccionada}
          tamano={tamanoSeleccionado}
          total={precioFinal}
        />

      )}

      <Footer />
    </>
  );
}

export default App;