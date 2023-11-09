import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Chocolacias</h3>
            <div>
                <button>Chocolate con manteca de mani</button>
                <button>Chocolate con almendras</button>
                <button>Chocolate con oreo</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar