import React from 'react';
import AppHeader from '../../../../components/Header';
import AppFooter from '../../../../components/footer';
import AppContact from '../../../../components/contact';
import AppBlogOrganica from '../../../../components/blogOrganica';

function ApresentacaoCS() {
    return (
        <>
        <header id='header'>
        <AppHeader />
        </header>
            <div style={{background: 'linear-gradient(180deg, transparent, #00761F), url("../../assets/Not_01.jpg") center center', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
            <div style={{bottom: '1rem'}} className="px-3 px-md-5 px-xl-5 px-xxl-5  position-absolute">
                <h1 className="text-white f-30">Ciência da Saúde</h1>
            </div>
            </div>
            <main className="px-3 px-md-5 px-xl-5 px-xxl-5 py-2">
            <br />
            <div className="row flex-row-reverse">
                <div className="col-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                <br />
                <div className="details-magazine">
                    <p className="f-reg">
                    <b className="display-6 mb-3 text-success">Apresentação</b><br />
                    <br />
                    Unidade Orgânica, tendo os seus cursos devidamente legalizados através do Decreto Executivo n.º 433/12, de 24 de Outubro, fundado desde 2013, pela entidade promotora Instituto Superior Politécnico Atlântida, cujo na idoneidade na vertente de ensino desde 2003. Representado pela Dra.
                    Soqui Isabel Mendes, licenciada em Ciências da Saúde.
                    <br /><br />  Em 2013 arrancou o ano académico com mais de 800 alunos, 3 cursos e 65 professores, 27 salas de aulas. Sendo que em 2018 foram outorgados mais de 100 estudantes da primeira promoção, 2018  e em 2021 mais de 200 estudantes, quadros de alta qualificação, esperando que os mesmos façam a diferença no mercado nacional e Internacional gerando e difundindo conhecimentos, preservando e divulgando valores para a transformação das sociedades. Atualmente, a Unidade orgânica da Saúde possui um Centro Médico Atlântida para a conciliação da teoria e prática aos estudantes e professores dos cursos ministrados.
                    <br /><br />
                    </p>
                    <br />
                </div>
                <br />
                <br />
                <AppBlogOrganica />
                </div>
               
                <div className="col-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                <a href="/ciencia_saude" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-success mt-2 f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                    Apresentação
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/missao_visao_valoresCS" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                    Missão  Visão e Valores
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/programas" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                    Programa
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>           
                <a href="/projetos" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                    <span className="f-reg">
                    Projectos 
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/docentes" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
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

export default ApresentacaoCS;