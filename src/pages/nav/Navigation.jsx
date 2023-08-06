import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigations">

            <div className="blocLinks">
                <ul className="links">
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;