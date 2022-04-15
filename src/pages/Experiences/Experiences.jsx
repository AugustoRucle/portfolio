import React from 'react';

import PageTransition from '../../components/PageTransition';
import Experience from './components/Experience';
import H1Tag from '../../components/Tags/H1';

import CodigoFacilitoImage from '../../assets/images/codigo_facilito.webp'
import SwitchImage from '../../assets/images/switch_logo.webp'
import RealhostImage from '../../assets/images/realhost.webp'

import './style.scoped.sass'

function ExperiencePage(props) {
    return <PageTransition>
        <H1Tag>
            Experiencias
        </H1Tag>

        <div className="experiences">
            <Experience
                img={{
                    src: RealhostImage,
                    alt: 'Image de logo de realhost'
                }}
                company={{
                    to: 'http://realhost.com.mx/',
                    text: 'realhost.com'
                }}
            />


            <Experience
                img={{
                    src: SwitchImage,
                    alt: 'Image de logo de switch'
                }}
                company={{
                    to: '',
                    text: 'realhost.com'
                }}
            />

            <Experience
                img={{
                    src: CodigoFacilitoImage,
                    alt: 'Image de logo de codigo facilito'
                }}
                company={{
                    to: 'https://codigofacilito.com/',
                    text: 'codigofacilito.com'
                }}
            />
        </div>
    </PageTransition>
}

export default ExperiencePage;