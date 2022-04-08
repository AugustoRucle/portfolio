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
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function Router() {
    return <BrowserRouter>
        <App loadingPage={true}>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/festivals" element={<FestivalsPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/about-me" element={<AboutMePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/skills" element={<SkillsPage />} />
            </Routes>
        </App>
    </BrowserRouter>
}

export default Router;
