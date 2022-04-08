import React from 'react';

import PageTransition from '../../components/PageTransition';
import TypeWriter from '../../components/Typewriter';
import H1Tag from '../../components/Tags/H1/H1';
import H3Tag from '../../components/Tags/h3';
import BrTag from '../../components/Tags/Br';
import Button from '../../components/Button';
import Social from '../../components/Social';

import Avatar from '../../assets/images/Logo.png';

import './style.scoped.sass'

function HomePage() {
    return <PageTransition>
        <div className="home-page">
            <div className="left-content">
                <H3Tag>
                    <TypeWriter width={800} hideAfter={4200}>
                        Hola, mi nombre es <BrTag position="left-right"> &nbsp; Augusto Ruiz</BrTag>
                    </TypeWriter>
                </H3Tag>

                <div style={{ marginTop: 80 }} />

                <H1Tag>
                    <TypeWriter width={440} startAfter={4200} hideAfter={2000}>
                        Soy un
                    </TypeWriter>

                    <div className="mb-3 mt-5" style={{ height: 100 }}>
                        <BrTag position="top-bottom">
                            <TypeWriter width={750} startAfter={6100}>
                                &nbsp; Desarrollador Frontend &nbsp;&nbsp;
                            </TypeWriter>
                        </BrTag>
                    </div>
                </H1Tag>


                <div style={{ marginTop: 65 }} />

                <div className="about-me">
                    <div className="about-me--animation">
                        <Button label="Conoce mis trabajos" icon="faArrowRight" />
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
