import React from 'react';
import AppHeader from '../../../components/Header';
import AppUdadeOrganica from '../../../components/unidadeOrganica';
import AppFooter from '../../../components/footer';
import AppContact from '../../../components/contact';

function Unidade_organica() {
    return (
        <>
            <header id='header'>
        <AppHeader />
      </header>
        <div style={{background: 'linear-gradient(180deg, transparent, #00761F), URL(../../src/assets/bg-testimonial.jpg)', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
        <div style={{bottom: '1rem'}} className="px-3 px-md-5 px-xl-5 px-xxl-5  position-absolute">
            <h1 className="text-white f-30">Unidade Orgânica</h1>
        </div>
        </div>
        <AppUdadeOrganica />
        <AppContact />
        <AppFooter /> 
    </>
     )
}

export default Unidade_organica;