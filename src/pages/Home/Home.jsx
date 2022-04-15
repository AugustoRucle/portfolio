import React from 'react';

import PageTransition from '../../components/PageTransition';
import TypeWriter from '../../components/Typewriter';
import H1Tag from '../../components/Tags/H1';
import H3Tag from '../../components/Tags/H3';
import BrTag from '../../components/Tags/Br';
import Button from '../../components/Button';
import Social from '../../components/Social';
import { Link } from "react-router-dom";

import Avatar from '../../assets/images/logo.webp';

import './style.scoped.sass'

function HomePage() {
    return <PageTransition>
        <div className="home-page">
            <div className="left-content">
                <H3Tag>
                    Hola, mi nombre es

                    <BrTag parent="h3">
                        Augusto Ruiz &nbsp;
                    </BrTag>

                    <div style={{ height: 30 }} />
                </H3Tag>

                <div style={{ marginTop: 80 }} />

                <H1Tag>
                    <div className="left-content--job-desktop">
                        <TypeWriter width={410} startAfter={300} hideAfter={1000}>
                            Soy un
                        </TypeWriter>

                        <div style={{ height: 10 }} />

                        <BrTag parent="h1">
                            <TypeWriter width={730} startAfter={1300}>
                                <span>Desarrollador Frontend &nbsp;</span>
                            </TypeWriter>
                        </BrTag>
                    </div>

                    <div className="left-content--job-mobile">
                        <TypeWriter width={285} startAfter={300} hideAfter={1000}>
                            Soy un
                        </TypeWriter>

                        <div style={{ height: 10 }} />

                        <BrTag parent="h1">
                            <TypeWriter width={300} startAfter={1400} hideAfter={2000}>
                                <span>Desarrollador &nbsp;</span>
                            </TypeWriter>

                            <TypeWriter width={190} startAfter={3500}>
                                <span>Frontend &nbsp;</span>
                            </TypeWriter>
                        </BrTag>
                    </div>

                    <div style={{ height: 30 }} />
                </H1Tag>

                <div style={{ marginTop: 65 }} />

                <div className="about-me">
                    <div className="about-me--animation">
                        <Link to="portafolio">
                            <Button
                                label="Conoce mis trabajos"
                                icon="faArrowRight"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="right-content">
                <div className="avatar">
                    <div className="avatar--animation">
                        <img src={Avatar} className="avatar--img" />
                    </div>
                </div>

                <div className="socials">
                    <div className="socials--animation">
                        <div className="socials-content">
                            <Social
                                title="Linkeding"
                                icon="faLinkedin"
                            />

                            <Social
                                title="Github"
                                icon="faGithub"
                            />

                            <Social
                                title="Codigo Facilito"
                                icon="faCode"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PageTransition>
}

export default HomePage;
