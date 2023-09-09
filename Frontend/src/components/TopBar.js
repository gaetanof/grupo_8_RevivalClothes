import React from 'react';
import foto from '../assets/images/ferxxo.jpg';
import { NavLink } from 'react-router-dom';


function TopBar() {
	return (
		<React.Fragment>
			{/*<!-- Topbar -->*/}
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

				{/*<!-- Sidebar Toggle (Topbar) -->*/}
				<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
					<i className="fa fa-bars"></i>
				</button>

				{/*<!-- Topbar Navbar -->*/}
				<ul className="navbar-nav ml-auto">

					{/*<!-- Nav Item - Alerts -->*/}
					<li className="nav-item dropdown no-arrow mx-1">
						<NavLink className="nav-link dropdown-toggle" id="alertsDropdown">
							<i className="fas fa-bell fa-fw"></i>
							{/*<!-- Counter - Alerts -->*/}
							<span className="badge badge-danger badge-counter">3+</span>
						</NavLink>
					</li>

					{/*<!-- Nav Item - Messages -->*/}
					<li className="nav-item dropdown no-arrow mx-1">
						<NavLink className="nav-link dropdown-toggle" id="messagesDropdown">
							<i className="fas fa-envelope fa-fw"></i>
							{/*<!-- Counter - Messages -->*/}
							<span className="badge badge-danger badge-counter">7</span>
						</NavLink>
					</li>

					<div className="topbar-divider d-none d-sm-block"></div>

					{/*<!-- Nav Item - User Information -->*/}
					<li className="nav-item dropdown no-arrow">
						<NavLink className="nav-link dropdown-toggle" id="userDropdown">
							<span className="mr-2 d-none d-lg-inline text-gray-600 small">Ferxxo 🦎</span>
							<img className="img-profile rounded-circle" src={foto} alt="Jordan Walke - Creador de React" width="60" />
						</NavLink>
					</li>

				</ul>

			</nav>
			{/*<!-- End of Topbar -->*/}

		</React.Fragment>
	)
}
export default TopBar;