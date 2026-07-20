// Componente que muestra el catálogo de pizzas
// Componente que muestra el catálogo de pizzas
function Catalogo({ pizzas, seleccionarPizza }) {

    return (
        <div className="text-center">

            {/* Título */}
            <h2 className="text-5xl">Variedades de Pizzas</h2>

            {/* Grilla de pizzas */}
            <nav className="flex flex-wrap justify-center gap-4">

                {pizzas.map((pizza) => (

                    <ul key={pizza.id} className="border p-4 rounded">

                        {/* Nombre */}
                        <li>
                            <b>Pizza:</b> {pizza.nombre}
                        </li>

                        {/* Imagen */}
                        <li>
                            <img
                                src={pizza.imagen}
                                alt={pizza.nombre}
                                width="350px"
                                height="350px"
                            />
                        </li>

                        {/* Ingredientes */}
                        <li>
                            <b>Ingredientes:</b> {pizza.ingredientes}
                        </li>

                        {/* Precio */}
                        <li>
                            <b>Precio Base:</b> ${pizza.precioBase}
                        </li>

                        {/* Botón */}
                        <li>
                            <button
                                onClick={() => seleccionarPizza(pizza)}
                                className="bg-yellow-400 px-4 py-2 rounded mt-3"
                            >
                                Seleccionar Pizza
                            </button>
                        </li>

                    </ul>

                ))}

            </nav>

        </div>
    );
}

export default Catalogo;