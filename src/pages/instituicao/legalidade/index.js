import React from 'react';
import AppHeader from '../../../components/Header';

function Legalidade() {
    return (
            <div>
                   <header id='header'>
        <AppHeader />
      </header>
            {/* banner */}
            <div style={{background: 'linear-gradient(180deg, transparent, #000000E6), url(/img/DSC_0475.jpg) center center', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
                <div style={{bottom: '1rem'}} className="px-3 px-md-5 px-xl-5 px-xxl-5  position-absolute">
                <h2 className="text-white f-30">Instituição</h2>
                </div>
            </div>
            {/* Fechamento do banner */}
            <main className="px-3 px-md-5 px-xl-5 px-xxl-5 py-2">
                <br />
                <div className="row flex-row-reverse">
                <div className="col-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                    <br />
                    <div className="details-magazine">
                    <p className="f-reg text-center">
                        <a href="link_to_legalidade_da_instituicao.pdf" className="mb-3 text-ispa">Legalidade da instituição: Decreto Nº 168/12 de 24 de Julho</a><br /><br />
                        <a href="link_to_legalidade_dos_cursos.pdf" className="mb-3 text-ispa">Legalidade dos Cursos: Decreto Nº 433/12 de 24 de Outubro</a><br /><br />
                        <a href="link_to_legalidade_dos_cursos_derrogado.pdf" className="mb-3 text-ispa">Legalidade dos Cursos (Derrogado): Nº Decreto 437/17 de 29 de Setembro</a><br />
                    </p>
                    </div>
                    <br /><br />
                </div>
                <div className="col-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                    <a href="/instituicao" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                        Apresentação
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                    </a>
                    <a href="/palavra_do_presidente" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
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
                    <a href="/legalidade" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-success f-reg d-flex w-100 justify-content-between">
                    <span className="f-reg">
                        Legalidade
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                    </a>
                    <a href="/missao_visao_valores" style={{textDecoration: 'none'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                        Missão, Visão e Valores
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                    </a>
                    <a href="# " style={{textDecoration: 'none', borderBottom: '1px solid green', borderTop: '1px solid green'}} className="py-2 text-dark f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                        Apoio Social
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                    </a>
                    <a href="/perguntas_frequentes" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex justify-content-between">
                    <span className="f-reg ">
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
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </main>
            </div>

    );
}

export default Legalidade;