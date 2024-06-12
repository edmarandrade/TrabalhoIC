import React from 'react';
import AppHeader from '../../../components/Header';


function Palavra_do_presidente() {
    return (
        <>

        <div>
        <header id='header'>
        <AppHeader />
      </header>
        {/* banner */}
        <div style={{background: 'linear-gradient(180deg, transparent, #000000E6), url("../img/DSC_0475.jpg") center center', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
            <div style={{bottom: '1rem'}} className="px-3 px-md-5 px-xl-5 px-xxl-5 container position-absolute">
            <h2 className="text-white f-30"> Instituição</h2>
            </div>
        </div>
        {/* Fechamento do banner */}
        <main className="px-3 px-md-5 px-xl-5 px-xxl-5  py-1 py-2 ">
            <br />
            <div className="row ">
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                <a href="/instituicao" style={{textDecoration: 'none'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                <span className="f-reg ">
                    Apresentação
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/palavra_do_presidente" style={{textDecoration: 'none', borderBottom: '1px solid green', borderTop: '1px solid green'}} className="py-2 text-success f-reg d-flex justify-content-between">
                <span className="f-reg ">
                    Palavras da Presidente
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/Organigrama" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                    Organigrama
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/legalidade" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                    Legalidade
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/missao_visao_valores" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                    Missão, Visão e Valores
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/accao_social" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                    Apoio Social
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/perguntas_frequentes" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                    Perguntas Frequentes
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="# " style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                    Projectos
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-7 col-xxl-7">
                <br />
                <div className="details-magazine">
                <p className="f-reg">
                    <b className="h4 mb-3 text-ispa">Palavras da Presidente</b><br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aut necessitatibus in explicabo
                    rem ipsam quas excepturi. Dolores, ducimus explicabo dolorum esse reprehenderit deleniti
                    accusantium neque minus perferendis aliquid architecto. 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <br />
                </div>
            </div>
            <div className="col-12 col-md-2 col-lg-3 col-xl-3 col-xxl-3">
                <img src="{% static'/img/Dra. Albertina Barros.jpg' %}" alt="" className="w-100" /> 
            </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </main>
        </div>


        </>
    );
}

export default Palavra_do_presidente;