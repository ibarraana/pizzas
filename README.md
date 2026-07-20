Contexto: Una pizzería local necesita una SPA (Single Page Application) para que sus
clientes puedan autogestionar sus pedidos. El sistema debe mostrar un catálogo de
variedades de pizza (con un precio base correspondiente al tamaño personal) y, al
seleccionar una, desplegar los tamaños y tipos de masa disponibles, calculando el precio
final con su respectivo porcentaje de incremento.
1. Requerimientos de Estructura
• Header: Un logo de la pizzería y el título "Armá tu Pedido".
• Cuerpo (Main) - Flujo de 2 pasos:
◦ Paso 1 (Catálogo): Una grilla con las variedades de pizza disponibles
mostrando imagen, nombre, descripción de ingredientes y el precio base.
◦ Paso 2 (Detalle y Tamaños): Al elegir una pizza, la grilla debe ocultarse. Se
debe mostrar a pantalla completa la pizza elegida y las opciones de tamaño/
masa disponibles para esa variedad.

• Footer: Texto centrado: "© 2026 Pizzería La Masa - Instituto Superior Santa Rosa
de Calamuchita".
2. Interacción y Lógica de Negocio
• Gestión de Estados (useState): * Un estado para la pizza seleccionada
(pizzaSeleccionada).
◦ Un estado para la opción de tamaño seleccionada (tamanoSeleccionado).
• Cruce de Datos: Al seleccionar una pizza, se debe utilizar su id para buscar en el
segundo JSON (tamanos.json) el array de opciones correspondientes a esa
variedad.
• Renderizado de Tamaños: Mostrar las opciones como botones o tarjetas. La
primera opción siempre será el tamaño "Personal" (0% de incremento sobre el
precio base).
• Lógica Matemática (Punto Crítico): Al seleccionar un tamaño, el sistema debe
calcular el precio final en tiempo real basándose en el porcentaje de incremento.
◦ Fórmula: Precio Final = Precio Base + (Precio Base * incremento / 100).

◦ Ejemplo: Si el precio base de la pizza es $6000 y se elige "Familiar"
(incremento del 100%), el total a pagar mostrado debe ser $12000.

• Renderizado Condicional:
◦ El panel de "Resumen del Pedido" en la parte inferior solo debe aparecer si
el usuario ya seleccionó un tamaño.
◦ En el resumen debe decir: "Pedido: Pizza [Nombre] - Tamaño: [Nombre del
Tamaño]. Total a pagar: $[Precio Calculado]". Debe incluir un botón simulado
