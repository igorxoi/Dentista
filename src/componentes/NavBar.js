import React from 'react';

function NavBar(){
	return(
		<nav className="navbar navbar-expand navbar-light bg-dark mb-5">
			<a className="navbar-brand text-white text-uppercase" hfre="/">
				Odonto
			</a>

			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a href="/" className="nav-link text-white">
						<i className="fas fa-home"></i>&nbsp;Home
						</a>
					</li>
					<li className="nav-item">
						<a href="/dentistas" className="nav-link text-white">
						<i className="fas fa-tooth"></i>&nbsp;Dentistas
						</a>
					</li>
					<li className="nav-item">
						<a href="/pacientes" className="nav-link text-white">
						<i className="fas fa-users"></i>&nbsp;Pacientes
						</a>
					</li>
					<li className="nav-item">
						<a href="/consultas" className="nav-link text-white">
						<i className="far fa-calendar-minus"></i>&nbsp;Marcar consultas
						</a>
					</li>
				</ul>
				<form className="form-inline">
					<input className="form-control mr-3" type="search" placeholder="Bucar"/>
					<button className="btn btn-primary" type="button">Buscar</button>
				</form>
			</div>
		</nav>
	);
}

export default NavBar;