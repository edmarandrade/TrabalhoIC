import React from 'react';
import AppHeader from '../../../../../components/Header';
import AppContact from '../../../../../components/contact';
import AppFooter from '../../../../../components/footer';

function Projetos() {
    return (
        <>
        <header id='header'>
        <AppHeader />
      </header>
         <div style={{background: 'linear-gradient(180deg, transparent, #00761F) center center', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
        <img src='../../assets/Not_01.jpg 'alt=''/>
        <div style={{bottom: '1rem'}} className="px-3 px-md-5 px-xl-5 px-xxl-5  position-absolute">
            <h1 className="text-white f-30">Unidade Orgânica</h1>
        </div>
        </div>
        <main className="px-3 px-md-5 px-xl-5 px-xxl-5 py-2">
        <br />
        <div className="row flex-row-reverse">
        <div className="col-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                <br />
                <div className="details-magazine">
                <p className="display-6 f-reg f-20">
                    <b style={{textTransform: 'capitalize'}} className="mb-3 text-success f-24">Projectos</b><br />
                    <br />
                   

                </p>
                <br />
        
                <br />
       
                <br />
                </div>
                <br /><br />
            </div>
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
            <a href="/unidade_organica" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-success mt-2 f-reg d-flex justify-content-between">
                <span className="f-reg ">
                Apresentação
                </span>
                <i className="bi text-success bi-arrow-right" />
            </a>
            <a href="/missao_visao_valoresCS" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                <span className="f-reg ">
                Missão Visão Valores
                </span>
                <i className="bi text-success bi-arrow-right" />
            </a>
            <a href="# " style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Programa
                </span>
                <i className="bi text-success bi-arrow-right" />
            </a>
            <a href="# " style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Projetos
                </span>
                <i className="bi text-success bi-arrow-right" />
            </a>          
            <a href="/docentesCS" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Docentes 
                </span>
                <i className="bi text-success bi-arrow-right" />
            </a>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        </main>
        <AppContact />
        <footer id="footer">
        <AppFooter />
      </footer>
        </>
    );
}

export default Projetos;