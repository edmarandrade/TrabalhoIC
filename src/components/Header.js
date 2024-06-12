import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logo.png';


function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <img className='logoHome' src={Logo} alt="Minha Imagem" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown
            className='dropdown'
              id="nav-dropdown-dark-example"
              title="A Instituição"
              menuVariant=""
            >
              <NavDropdown.Item href="/instituicao">Apresentação</NavDropdown.Item>
              <NavDropdown.Item href="/palavra_do_presidente" >Palavra do Presidente</NavDropdown.Item>
              <NavDropdown.Item href="/organigrama" >Organigrama</NavDropdown.Item>
              <NavDropdown.Item href="/missao_visao_valores" >Missão Valores e Visão</NavDropdown.Item>
              <NavDropdown.Item href="/accao_social" >Açção Social</NavDropdown.Item>
              <NavDropdown.Item href="/perguntas_frequentes" >Perguntas Frequentes</NavDropdown.Item>
              <NavDropdown.Item href="/" >Projectos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
            className='dropdown'
              id="nav-dropdown-dark-example"
              title="Programa"
              menuVariant=""
            >
              <NavDropdown.Item href="/">Licenciatura</NavDropdown.Item>
              <NavDropdown.Item href="/" >Cursos  Profissionais</NavDropdown.Item>
              <NavDropdown.Item href="/" >Pós-Graduação</NavDropdown.Item>
              <NavDropdown.Item href="/unidade_organica" >Unidade Orgânica</NavDropdown.Item>
              <NavDropdown.Item href="/" >Unidade Currilares</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
            className='dropdown'
              id="nav-dropdown-dark-example"
              title="Investigação"
              menuVariant=""
            >
              <NavDropdown.Item href="/">Investigação Científica</NavDropdown.Item>
              <NavDropdown.Item href="/" >Unidade de Investigação</NavDropdown.Item>
              <NavDropdown.Item href="/" >Publicação</NavDropdown.Item>
              <NavDropdown.Item href="/" >Laboratório</NavDropdown.Item>
              <NavDropdown.Item href="/" >Apoio a Investigação</NavDropdown.Item>
              <NavDropdown.Item href="/" >Revista Olhar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
            className='dropdown'
              id="nav-dropdown-dark-example"
              title="Recursos"
              menuVariant=""
            >
              <NavDropdown.Item href="/">Calendário Acadêmicos</NavDropdown.Item>
              <NavDropdown.Item href="/" >Calendário Científico</NavDropdown.Item>
              <NavDropdown.Item href="/" >Regulamento de Estudante</NavDropdown.Item>
              <NavDropdown.Item href="/" >Biblioteca Digital</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
            className='dropdown'
              id="nav-dropdown-dark-example"
              title="Comunicação"
              menuVariant=""
            >
              <NavDropdown.Item href="/">Eventos</NavDropdown.Item>
              <NavDropdown.Item href="/" >Noticias</NavDropdown.Item>
            </NavDropdown>
     
            <Nav.Link href="https://portalonline.icsgisabelinha.com/">Portal Online</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;