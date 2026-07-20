import Logo from "../assets/pizza.jpg"
function Header() {
    return (
        <div className="header text-center bg-fondo1 flex justify-center items-center">            
            <img src={Logo} alt="Logo" />
            <h1 className="text-5xl">Cotizador de Pizzas</h1>
        </div>
    )
}

export default Header