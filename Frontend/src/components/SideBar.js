import React from 'react';
import image from '../assets/images/230502-REVIVALCLOTHING-Logotipo-colores.png';
import { NavLink } from 'react-router-dom';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <NavLink to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    {/* <a className="sidebar-brand d-flex align-items-center justify-content-center" href> */}
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Revival Clothing" />
                    </div>
                    {/* </a> */}
                </NavLink>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <NavLink to="/" className="nav-link">
                        {/* <a className="nav-link" href> */}
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Revival - Dashboard</span>
                        {/* </a> */}
                    </NavLink>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <NavLink to="/users" className="nav-link">
                        {/* <a className="nav-link" href> */}
                        <i className="fas fa-fw fa-user"></i>
                        <span>Uers</span>
                        {/* </a> */}
                    </NavLink>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <NavLink to="/products" className="nav-link collapsed">
                        {/* <a className="nav-link collapsed" href> */}
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span>Products</span>
                        {/* </a> */}
                    </NavLink>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <NavLink to="/carts" className="nav-link">
                        {/* <a className="nav-link" href> */}
                        <i className="fas fa-fw fa-cart-shopping"></i>
                        <span>Cart</span>
                        {/* </a> */}
                    </NavLink>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

        </React.Fragment>
    )
}
export default SideBar;