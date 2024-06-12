import React from 'react';

import AppHeader from '../../../components/Header';

function Perguntas_Frequentes() {
    return (
        <>
           <header id='header'>
        <AppHeader />
      </header>
      <div style={{background: 'linear-gradient(180deg, transparent, #000000E6), url("/img/DSC_0475.jpg") center center', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
            <div style={{bottom: '1rem'}} className="px-3 px-md-5 px-xl-5 px-xxl-5  position-absolute">
            <h2 className="text-white f-30">Instituição</h2>
            </div>
        </div>
        <main className="px-3 px-md-5 px-xl-5 px-xxl-5 py-2">
        <br /><br />
        <div className="row flex-row-reverse">
            <div className="col-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
            <br />
            <div className="details-magazine">
                {/* <img src="{% static '/img/Cartaz para capa 4.jpg' %}" alt="" class="w-100"> */}
                <p className="f-reg f-30">
                <b>Perguntas e respostas sobre o ISP-Atlântida</b>
                <br /><br />
                </p><div id="accordion rounded-0">
                <div className="card rounded-0">
                    <div className="card-header rounded-0" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        1. Primeira pergunta
                        </button>
                    </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body  f-reg">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                        brunch.
                    </div>
                    </div>
                </div>
                <div className="card rounded-0">
                    <div className="card-header rounded-0" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        2. Segunda pergunta
                        </button>
                    </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body  f-reg">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                        brunch.
                    </div>
                    </div>
                </div>
                <div className="card rounded-0">
                    <div className="card-header rounded-0" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        3. Terceira pergunta
                        </button>
                    </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body f-reg">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                        brunch.
                    </div>
                    </div>
                </div>
                <div className="card rounded-0">
                    <div className="card-header rounded-0" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        4. Quarta pergunta
                        </button>
                    </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body  f-reg">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                        brunch.
                    </div>
                    </div>
                </div>
                <div className="card rounded-0">
                    <div className="card-header rounded-0" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        5. Quinta pergunta
                        </button>
                    </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body f-reg">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                        brunch.
                    </div>
                    </div>
                </div>
                </div>
                <p />
                <br />
            </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
            <br />
            <br />
            <a href="/instituicao" style={{textDecoration: 'none', borderBottom: '1px solid green', borderTop: '1px solid green'}} className="py-2 text-dark f-reg d-flex justify-content-between">
                <span className="f-reg">
                Apresentação
                </span>
                <i className="bi text-success bi-arrow-right my-auto" />
            </a>
            <a href="/palavra_presidente" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                <span className="f-reg ">
                Palavras da Presidente
                </span>
                <i className="bi text-success bi-arrow-right" />
            </a>
            <a href="/Organigrama" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between ">
                <span className="f-reg  ">
                Organigrama 
                </span>
                <i className="bi text-success bi-arrow-right my-auto" />
            </a>
            <a href="/legalidade" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Legalidade
                </span>
                <i className="bi text-success bi-arrow-right my-auto" />
            </a>
            <a href="/missao_visao_valores" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Missão, Visão e Valores 
                </span>
                <i className="bi text-dark bi-arrow-right my-auto" />
            </a><a href="# " style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Apoio Social
                </span>
                <i className="bi text-success bi-arrow-right my-auto" />
            </a>
            <a href="/perguntas_frequentes" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-success f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Perguntas Frequentes 
                </span>
                <i className="bi text-success bi-arrow-right my-auto" />
            </a>
            <a href="# " style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Projectos
                </span>
                <i className="bi text-success bi-arrow-right my-auto" />
            </a>
            </div>
        </div>
        <br />
        <br />
        <br />
        {/* <div class="b-t py2"></div> */}
        </main>

        </>
    );
}

export default Perguntas_Frequentes;