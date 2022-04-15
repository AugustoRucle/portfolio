import React, { useCallback } from "react";

import NavbarItem from "./components/Item";
import Burguer from "./components/Burguer";

import { useSelector, useDispatch } from 'react-redux'
import { closeNavbar, toggleNavbar } from './slice'
import debounce from 'lodash.debounce';
import {
    useLocation,
} from "react-router-dom";
import {
    isFunction,
} from '../../utils/ functions';

import './style.scoped.sass';

function Navbar() {
    const open = useSelector(state => state.navbar.open);
    const dispatch = useDispatch()

    const location = useLocation();

    /**
     * Donwload the cv pdf
     * 
     * @return
     */
    const downloadCvPdf = () => {
        _closeNavbar();
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

    /**
     * Scoped close navbar
     * 
     */
    const _closeNavbar = (event) => {
        dispatch(closeNavbar())
    }

    /**
     * Toogle navbar
     * 
     * @return
     */

    const toggleNavbarDebounce = debounce(() => dispatch(toggleNavbar()), 200);
    const toggleNavbarCallback = useCallback(toggleNavbarDebounce, [open]);

    return <>
        <Burguer
            open={open}
            onClick={toggleNavbarCallback}
        />

        <div
            className={`navbar ${open && 'navbar--open'}`}
            onClick={(event) => event.stopPropagation()}
        >
            <div className="navbar-content">
                <NavbarItem
                    current={isCurrentPathname("/")}
                    icon="faHome"
                    label="Home"
                    to="/"
                    onClick={_closeNavbar}
                />

                <NavbarItem
                    current={isCurrentPathname("/sobre-mi")}
                    label="Sobre mi"
                    icon="faUser"
                    to="sobre-mi"
                    onClick={_closeNavbar}
                />

                <NavbarItem
                    current={isCurrentPathname("/portafolio")}
                    icon="faBriefcase"
                    label="Portafolio"
                    to="portafolio"
                    onClick={_closeNavbar}
                />

                <NavbarItem
                    current={isCurrentPathname("/skills")}
                    label="Habilidades"
                    icon="faStar"
                    to="skills"
                    onClick={_closeNavbar}
                />

                <NavbarItem
                    current={isCurrentPathname("/experiencia")}
                    label="Experiencia"
                    icon="faGlobe"
                    to="experiencia"
                    onClick={_closeNavbar}
                />

                <NavbarItem
                    current={isCurrentPathname("/eventos")}
                    icon="faToolbox"
                    label="Eventos"
                    to="eventos"
                    onClick={_closeNavbar}
                />

                <NavbarItem
                    current={isCurrentPathname("/contacto")}
                    icon="faAddressCard"
                    label="Contacto"
                    to="contacto"
                    onClick={_closeNavbar}
                />

                <NavbarItem
                    icon="faCloudDownloadAlt"
                    label="CV"
                    onClick={downloadCvPdf}
                />
            </div>
        </div>
    </>
}

export default Navbar;