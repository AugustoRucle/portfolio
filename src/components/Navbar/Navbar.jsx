import React from "react";

import NavbarItem from "./components/Item";

import {
    useLocation,
} from "react-router-dom";

import './style.scoped.sass';

function Navbar() {
    const location = useLocation();

    /**
     * Donwload the cv pdf
     * 
     * @return
     */
    const downloadCvPdf = () => {
        alert('descargando pdf');
    }

    /**
     * Check if item is the current pathname
     * 
     * @param {string} to
     * @return {boolean}
     */
    const isCurrentPathname = (to) => {
        return location.pathname === to;
    }

    return <div className="navbar">
        <div className="navbar-content">
            <NavbarItem
                current={isCurrentPathname("/")}
                icon="faHome"
                label="Home"
                to="/"
            />

            <NavbarItem
                current={isCurrentPathname("/about-me")}
                label="Sobre mi"
                icon="faUser"
                to="about-me"
            />

            <NavbarItem
                current={isCurrentPathname("/portfolio")}
                icon="faBriefcase"
                label="Portafolio"
                to="portfolio"
            />

            <NavbarItem
                current={isCurrentPathname("/skills")}
                label="Habilidades"
                icon="faStar"
                to="skills"
            />

            <NavbarItem
                current={isCurrentPathname("/experience")}
                label="Experiencia"
                icon="faGlobe"
                to="experience"
            />

            <NavbarItem
                current={isCurrentPathname("/festivals")}
                icon="faToolbox"
                label="Eventos"
                to="festivals"
            />

            <NavbarItem
                current={isCurrentPathname("/contact")}
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