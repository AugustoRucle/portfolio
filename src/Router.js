import React from 'react';

import ExperiencesPage from './pages/Experiences';
import FestivalsPage from './pages/Festivals';
import PortfolioPage from './pages/Portfolio';
import AboutMePage from './pages/AboutMe';
import ContactPage from './pages/Contact';
import SkillsPage from './pages/Skills';
import HomePage from './pages/Home';
import App from './App';

import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import {
    AnimatePresence,
} from 'framer-motion';

function Router() {
    const location = useLocation();

    return <AnimatePresence>
        <App>
            <Routes
                location={location}
                key={location.pathname}
            >
                <Route index element={<HomePage />} />
                <Route path="/experiencia" element={<ExperiencesPage />} />
                <Route path="/eventos" element={<FestivalsPage />} />
                <Route path="/portafolio" element={<PortfolioPage />} />
                <Route path="/sobre-mi" element={<AboutMePage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/skills" element={<SkillsPage />} />
            </Routes>
        </App>
    </AnimatePresence>
}

export default Router;
