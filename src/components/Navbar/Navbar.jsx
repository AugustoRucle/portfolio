import React from "react";

import NavbarItem from "./components/Item";

import './style.scoped.sass';

function Navbar() {
    
    /**
     * Donwload the cv pdf
     * 
     * @return
     */
    const downloadCvPdf = () => {
        alert('descargando pdf');
    }

    return <div className="navbar">
        <div className="navbar-content">
            <NavbarItem
                current={true}
                icon="faHome"
                label="Home"
                to="/"
            />

            <NavbarItem
                label="Sobre mi"
                icon="faUser"
                to="about-me"
            />

            <NavbarItem
                icon="faBriefcase"
                label="Portafolio"
                to="portfolio"
            />

            <NavbarItem
                label="Habilidades"
                icon="faStar"
                to="skills"
            />

            <NavbarItem
                label="Experiencia"
                icon="faGlobe"
                to="experience"
            />

            <NavbarItem
                icon="faToolbox"
                label="Eventos"
                to="festivals"
            />

            <NavbarItem
                icon="faAddressCard"
                label="Contacto"
                to="contact"
            />

            <NavbarItem
                icon="faCloudDownloadAlt"
                label="CV"
                onClick={downloadCvPdf}
            />
        </div>
    </div>
}

export default Navbar;