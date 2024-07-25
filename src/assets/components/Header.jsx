import { NavLink } from "react-router-dom"

function Header(){

    return(
        <div className="header">
            <div className="logo_1">
            <img className="logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" alt="" />
            </div>           
            <ul >
                                
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="#">Cart</NavLink></li>
            </ul>

        </div>
    )
}

export default Header