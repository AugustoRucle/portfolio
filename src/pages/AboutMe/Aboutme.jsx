import React, { useEffect, useState } from 'react';

import PageTransition from '../../components/PageTransition';
import Adventure from './components/Adventure';
import H1Tag from '../../components/Tags/H1';
import H3Tag from '../../components/Tags/H3';
import UlTag from '../../components/Tags/Ul';
import PTag from '../../components/Tags/P';
import List from '../../components/List';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGraduationCap,
    faPaw,
} from '@fortawesome/free-solid-svg-icons';


import TravelImage from '../../assets/images/travel.webp';
import StudyOnline from '../../assets/images/study_online.webp';
import CursoArduino from '../../assets/images/curso_arduino.webp';
import Coffee from '../../assets/images/coffee.webp';
import Anime from '../../assets/images/anime.webp';
import Juegos from '../../assets/images/juegos.webp';

import { getRandomArbitrary } from '../../utils/ functions';

import './style.scoped.sass';

const AVENTURES = [
    "PERRITO",
    "VIAJAR",
    "ESTUDIO",
    "TALLER",
    "ANIMES",
    "JUEGOS"
];

function AboutMePage(props) {
    const [currentAventure, setCurrentAventure] = useState('');
    const [intervalId, setIntervalId] = useState(0);

    useEffect(() => {
        createIntervalRandomAventure();

        return stopRandomAventure
    }, [])

    /**
     * Stop the interval of random aventure
     * 
     * @return
     */
    const stopRandomAventure = () => {
        clearInterval(intervalId);
        setCurrentAventure('');
    }

    /**
     * Create the interval to generate random aventure
     * 
     * @return
     */
    const createIntervalRandomAventure = () => {
        setIntervalId(
            setInterval(
                setRandomAventure,
                1000
            ),
        );
    }

    /**
     * Function to generate a random number in a interval time
     * 
     * @return
     */
    const setRandomAventure = () => {
        const aventure = AVENTURES[getRandomArbitrary(-1, 5)];
        setCurrentAventure(aventure);
    }

    return <PageTransition>
        <div className="page-about-me">
            <div className="left-content">
                <H1Tag style={{ width: 340 }}>
                    Sobre mi
                </H1Tag>

                <PTag style={{ marginTop: 28 }}>
                    Hola!, Mi nombre es
                    <span className="font-weight-bold"> Augusto Ruiz </span>
                    , soy un
                    <span className="text-light-blue-A700">
                        &nbsp; &nbsp;
                        <FontAwesomeIcon icon={faGraduationCap} />
                        &nbsp;
                        Ingeniero en el desarrollo de software
                    </span>
                    , de origen
                    <span className="text-light-blue-A700">
                        &nbsp; &nbsp;
                        <FontAwesomeIcon icon={faPaw} />
                        &nbsp;
                        Chiapaneco
                        &nbsp;
                    </span>
                    y con aproximandamente 3 años en el
                    <span className="text-light-blue-A700">
                        &nbsp; desarrollo frontend.
                    </span>
                </PTag>

                <UlTag style={{ marginTop: 45 }}>
                    <List
                        labels={[
                            "Talleres de programación",
                            "Hackatones",
                            "Diseñador",
                            "Desarrollo movil y escritorio",
                            "Electronica"
                        ]}
                        chunk={3}
                    />
                </UlTag>

                <H3Tag style={{ width: 340, marginTop: 45 }}>
                    Intereses
                </H3Tag>

                <UlTag style={{ marginTop: 45 }}>
                    <List
                        labels={[
                            "Ser un desarrollador fullstack",
                            "Aprender más sobre UI y UX",
                            "Conocer más sobre la ciencia de datos",
                        ]}
                    />
                </UlTag>
            </div>

            <div className="right-content">
                <Adventure
                    src={TravelImage}
                    title="Viajar"
                    description="Me encanta conocer lugares nuevos, por ende procuro armar un viaje cada año y explorar nuevos paisajes"
                    showInfo={currentAventure === "VIAJAR"}
                />

                <Adventure
                    src={StudyOnline}
                    title="Estudiar"
                    description="Intento siempre estar aprendiendo algo nuevo, con el fin de no solo estar al dia como programador si no que en lo personal creo que es un requisito para todos estar aprendiendo siempre"
                    showInfo={currentAventure === "ESTUDIO"}
                />

                <Adventure
                    src={CursoArduino}
                    title="Taller de Arduino"
                    description="No solo me gusta aprender, tambien me gusta enseñar. En la preparatorio tuve la oportunidad de impartir un taller de introduccion a Arduino a mis compañeres de menor semestre"
                    showInfo={currentAventure === "TALLER"}
                />

                <Adventure
                    src={Coffee}
                    title="Mi perrito"
                    description="No solo me gusta aprender, tambien me gusta enseñar. En la preparatorio tuve la oportunidad de impartir un taller de introduccion a Arduino a mis compañeres de menor semestre"
                    showInfo={currentAventure === "PERRITO"}
                />

                <Adventure
                    src={Anime}
                    title="Ver Anime"
                    description="No solo me gusta aprender, tambien me gusta enseñar. En la preparatorio tuve la oportunidad de impartir un taller de introduccion a Arduino a mis compañeres de menor semestre"
                    showInfo={currentAventure === "ANIMES"}
                />

                <Adventure
                    src={Juegos}
                    title="Jugar"
                    description="No solo me gusta aprender, tambien me gusta enseñar. En la preparatorio tuve la oportunidad de impartir un taller de introduccion a Arduino a mis compañeres de menor semestre"
                    showInfo={currentAventure === "JUEGOS"}
                />
            </div>
        </div>
    </PageTransition>
}

export default AboutMePage;