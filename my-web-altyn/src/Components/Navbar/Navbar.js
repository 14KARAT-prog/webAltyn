import React from "react";
import './Navbar.scss';

const Navbar = ({sortCity, sortCompany}) => {
	return (
		<nav>
			<div>Сортировка</div>
			<button onClick={() => sortCity()}>по городу</button>
			<button onClick={() => sortCompany()}>по компании</button>
		</nav>
	)
}

export default Navbar;