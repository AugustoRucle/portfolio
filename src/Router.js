import React from 'react';

import ExperiencePage from './pages/Experience';
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
        <App loadingPage={true}>
            <Routes
                location={location}
                key={location.pathname}
            >
                <Route index element={<HomePage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/festivals" element={<FestivalsPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/about-me" element={<AboutMePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/skills" element={<SkillsPage />} />
            </Routes>
        </App>
    </AnimatePresence>
}

export default Router;
