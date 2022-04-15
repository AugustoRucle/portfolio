import React from 'react';

import PageTransition from '../../components/PageTransition';
import Project from '../../components/Project';

import ShedclouddImg from '../../assets/images/shedcloud.webp';
import FacturaTuTicketImg from '../../assets/images/factura_tu_ticket.webp';
import XmlPdfImg from '../../assets/images/xmlpdf.webp';
import PresadoImg from '../../assets/images/presado.webp';
import Nom035Img from '../../assets/images/nom035.webp';
import PosImg from '../../assets/images/pos.webp';

import './style.scoped.sass';

function PortfolioPage(props) {
    return <PageTransition>
        <div className="portfolio-page">
            <Project
                current={true}
                title="Shedclod"
                description="Sistema de control, organización, exportación e importación de productos internos y externos."
                date="2020-2022"
                company={{
                    to: "http://realhost.com.mx/",
                    text: "Realhost"
                }}
                website={{
                    to: "https://en.shedcloudtest.com/Log_In",
                    text: "en.shedcloudtest.com"
                }}
                languages={[
                    "React",
                    "Redux",
                    "Sass",
                    "Material Design"
                ]}
                image={{
                    src: ShedclouddImg,
                    alt: "Imagen de login de shedcloud"
                }}
                position="left"
            />

            <div className="portfolio-project-margin" />

            <Project
                title="Presado Portal"
                description="Plataforma web para imprentas que busca la automatización  en la alta de sus cotizaciones administraciones de productos (revistas, libros, Posters, etc.) y órdenes de producción"
                date="2019-2020"
                company={{
                    to: "http://realhost.com.mx/",
                    text: "Realhost"
                }}
                website={{
                    to: "https://presado.cloud/login",
                    text: "presado.cloud"
                }}
                languages={[
                    "Vuejs",
                    "Vuex",
                    "Css",
                    "Ant Design"
                ]}
                image={{
                    src: PresadoImg,
                    alt: "Imagen de inicio de presado"
                }}
                position="right"
            />

            <div className="portfolio-project-margin" />

            <Project
                title="Nom035"
                description="Plataforma web para la identificación, análisis y prevención de factores de riesgos psicosocial."
                date="2019-2020"
                company={{
                    to: "http://realhost.com.mx/",
                    text: "Realhost"
                }}
                website={{
                    to: "https://nom035.me/",
                    text: "nom035.me"
                }}
                languages={[
                    "Vuejs",
                    "Vuex",
                    "Css",
                    "Ant Design"
                ]}
                image={{
                    src: Nom035Img,
                    alt: "Imagen de inicio de nom035"
                }}
                position="left"
            />


            <div className="portfolio-project-margin" />

            <Project
                title="Factura Mi Ticket"
                date="Enero - Noviembre 2020"
                description="Sitio web diseñado para realizar las facturas de las empresas relacionadas a realhost"
                company={{
                    to: "http://realhost.com.mx/",
                    text: "Realhost"
                }}
                website={{
                    to: "http://www.facturatuticket.com/",
                    text: "facturatuticket.com"
                }}
                languages={[
                    "Vuejs",
                    "Css",
                ]}
                image={{
                    src: FacturaTuTicketImg,
                    alt: "Imagen de inicio de factura tu ticket"
                }}
                position="right"
            />

            <div className="portfolio-project-margin" />


            <Project
                title="XML to Pdf"
                description="Plataforma web para convertir un xml a pdf."
                date="Agosto - Septiembre 2020"
                company={{
                    to: "http://realhost.com.mx/",
                    text: "Realhost"
                }}
                website={{
                    to: "https://facturasenlinea.com.mx/xml-a-pdf/",
                    text: "facturasenlinea.com.mx"
                }}
                languages={[
                    "Vuejs",
                    "Vuex",
                    "Css",
                    "Ant Design"
                ]}
                image={{
                    src: XmlPdfImg,
                    alt: "Imagen de inicio de xml to pdf"
                }}
                position="left"
            />

            <div className="portfolio-project-margin" />

            <Project
                title="Punto de venta"
                description="Sistema web para automatizar los procesos de venta de las empresas relacionadas a realhost, cuenta con modulos de aplicacion de descuento global, por articulo, busqueda de producto y publicidad"
                date="2019-2020"
                company={{
                    to: "http://realhost.com.mx/",
                    text: "Realhost"
                }}
                website={{
                    to: "http://posqa.realhost.cloud/login",
                    text: "posqa.realhost.cloud"
                }}
                languages={[
                    "Vuejs",
                    "Vuex",
                    "Css",
                ]}
                image={{
                    src: PosImg,
                    alt: "Imagen de inicio del punto de venta"
                }}
                position="right"
            />

            <div className="portfolio-project-margin" />
        </div>
    </PageTransition>
}

export default PortfolioPage;