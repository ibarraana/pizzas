// Componente que muestra el detalle de la pizza seleccionada
function DetallePizza({ pizzaActual, categorias, seleccionarTamano }) {

    // Si todavía no hay una pizza elegida, no muestra nada
    if (!pizzaActual) {
        return null;
    }

    // Busca los tamaños correspondientes a la pizza seleccionada
    const categoriaPizza = categorias.find(
        (categoria) => categoria.pizzaId === pizzaActual.id
    );

    if (!categoriaPizza) {
        return <p>No hay tamaños disponibles para esta pizza.</p>;
    }

    return (
        <div className="text-center">

            <h1 className="text-5xl">Detalle del Pedido</h1>

            <h2>{pizzaActual.nombre}</h2>

            <img
                src={pizzaActual.imagen}
                alt={pizzaActual.nombre}
                width="450px"
                height="450px"
            />

            <p>
                <b>Ingredientes:</b> {pizzaActual.ingredientes}
            </p>

            <p>
                <b>Precio Base:</b> ${pizzaActual.precioBase}
            </p>

            <h2>Tamaños disponibles</h2>

            {
                categoriaPizza.opciones.map((opcion) => (

                    <div key={opcion.id} className="border p-3 m-3">

                        <h3>{opcion.nombre}</h3>

                        <p>
                            <b>Masa:</b> {opcion.masa}
                        </p>

                        <p>
                            <b>Incremento:</b> {opcion.incremento}%
                        </p>

                        <button
                            onClick={() => seleccionarTamano(opcion)}
                            className="bg-yellow-300 px-4 py-2"
                        >
                            Elegir este tamaño
                        </button>

                    </div>

                ))
            }

        </div>
    );
}

export default DetallePizza;