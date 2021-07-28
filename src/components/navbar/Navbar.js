import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = (props) => {

    const {title} = props;
    return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-success">
                <a className="navbar-brand" href="#">{title}</a>

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/contact/add">Add</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>

                </ul>

            </nav>
    );
}

Navbar.defaultProps = {
    title: "My Title"
}

export default Navbar;