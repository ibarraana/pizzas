// Componente que muestra el resumen del pedido
function ResumenPedido({ pizza, tamano }) {

    // Calcula el precio final
    const precioFinal =
        pizza.precioBase +
        (pizza.precioBase * tamano.incremento) / 100;

    return (

        <div className="bg-yellow-200 p-5 mt-5 text-center rounded">

            <h2 className="text-3xl">
                Resumen del Pedido
            </h2>

            <p>
                <b>Pedido:</b> Pizza {pizza.nombre}
            </p>

            <p>
                <b>Tamaño:</b> {tamano.nombre}
            </p>

            <p>
                <b>Masa:</b> {tamano.masa}
            </p>

            <h3>
                Total a pagar: ${precioFinal}
            </h3>

            <button className="bg-red-600 text-white px-5 py-2 rounded mt-3">
                Confirmar Pedido
            </button>

        </div>

    );

}

export default ResumenPedido;