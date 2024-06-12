import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './App.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home';
import Instituicao from './pages/instituicao/index.js';
import Brochura from './pages/programas/brochura_informativa/index.js';
import Cursos from './pages/programas/cursos_profissionais/index.js';
import Licenciatura from './pages/programas/Licenciatura/index.js';
import Graduacao from './pages/programas/pos_graduacao/index.js';
import Unidade from './pages/programas/unidade_curricular/index.js';
import UnidadeOrganica from './pages/programas/unidade_organica/index.js';
import OrganigramaInstituicao from './pages/instituicao/Organigrama/index.js';
import LegalidadeInstituto from './pages/instituicao/legalidade/index.js';
import MissaInstituicaoInstituicao from './pages/instituicao/missao_visao_valores/index.js';
import PalavraPresidenteInstituicao from './pages/instituicao/palavra_do_presidente/index.js';
import PerguntasFrequentesInstituicao from './pages/instituicao/perguntas_frequentes/index.js';
import ProjetosInstituicao from './pages/instituicao/projetos/index.js';
import DocentesCS from './pages/programas/unidade_organica/ciencia_saude/docentesCS/index.js';
import MissaoCS from './pages/programas/unidade_organica/ciencia_saude/missao_visao_valoresCS/index.js';
import ProgramaCS from './pages/programas/unidade_organica/ciencia_saude/programas/index.js';
import ProjetoCS from './pages/programas/unidade_organica/ciencia_saude/projetos/index.js';
import CienciaSaude from './pages/programas/unidade_organica/ciencia_saude/index.js';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
  },
  {
    path:"instituicao",
    element:<Instituicao />,
  },
  {
    path:"docentesCS",
    element:<DocentesCS />,
  },
  {
    path:"missao_visao_valoresCS",
    element:<MissaoCS />,
  },
  {
    path:"programas",
    element:<ProgramaCS />,
  },
  {
    path:"ciencia_saude",
    element:<CienciaSaude />,
  },
  {
    path:"projetos",
    element:<ProjetoCS />,
  },
  {
    path:"Brochura_informativa",
    element:<Brochura />,
  },
  {
    path:"cursos_profissionais",
    element:<Cursos />,
  },
  {
    path:"pos_graduacao",
    element:<Graduacao />,
  },
  {
    path:"licenciatura",
    element:<Licenciatura />,
  },
  {
    path:"unidade_curricular",
    element:<Unidade />,
  },
  {
    path:"Unidade_organica",
    element:<UnidadeOrganica />,
  },
  {
    path:"Organigrama",
    element:<OrganigramaInstituicao />,
  },
  {
    path:"legalidade",
    element:<LegalidadeInstituto />,
  },
  {
    path:"missao_visao_valores",
    element:<MissaInstituicaoInstituicao />,
  },
  {
    path:"palavra_do_presidente",
    element:<PalavraPresidenteInstituicao />,
  },
  {
    path:"/perguntas_frequentes",
    element:<PerguntasFrequentesInstituicao />,
  },
  {
    path:"/projetos",
    element:<ProjetosInstituicao />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
