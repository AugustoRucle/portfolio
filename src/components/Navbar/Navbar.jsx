import React from "react";

import NavbarItem from "./components/item";

import './style.scoped.sass';

function Navbar() {
    return <div className="navbar">
        <div className="navbar-content">
            <NavbarItem icon="faHome" label="Home" current={true} />
            <NavbarItem icon="faUser" label="Sobre mi" />
            <NavbarItem icon="faBriefcase" label="Portafolio" />
            <NavbarItem icon="faStar" label="Habilidades" />
            <NavbarItem icon="faGlobe" label="Experiencia" />
            <NavbarItem icon="faToolbox" label="Eventos" />
            <NavbarItem icon="faAddressCard" label="Contacto" />
            <NavbarItem icon="faCloudDownloadAlt" label="CV" />
        </div>
    </div>
}

export default Navbar;