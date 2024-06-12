import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/Not_Uni_01.jpg'),
    time: '16-Setembro-2023  | 09H - 12H',
    title: 'Actividade Solidária',
    description: '"Na Cerimônia de Outorga de Diplomas doInstituto Superior Politécnico Atlântida, os formandos da turma de 2024 se reuniram ansiosos no auditório. Com discursos inspiradores, eles receberam seus diplomas, celebrando com amigos e familiares ao final."',
  },
  {
    id: 2,
    image: require('../assets/Not_Uni_02.jpg'),
    time: '24 e 25 DE MAIO 2024 | 07H',
    title: 'Estudantes de Análises Clínicas protagonistas da AHIA',
    description: 'CIÊNCIAS BIOMÉDICAS, QUESTÕES GLOBAIS E ACÇÕES LOCAIS',
  
  },
  {
    id: 3,
    image: require('../assets/Not_Uni_03.jpg'),
    time: '07-Setembro-2023  | 09H - 12H',
    title: 'Estudante do ISPA',
    description: 'CIÊNCIAS BIOMÉDICAS, QUESTÕES GLOBAIS E ACÇÕES LOCAIS',
   
  },
  {
    id: 4,
    image: require('../assets/Not_Uni_04.jpg'),
    time: '07-Setembro-2023  | 09H - 12H',
    title: 'Actividade Solidária',
    description: '"O evento proporcionou uma oportunidade única para a comunidade acadêmica trocar ideias, colaborar em projetos e promover o avanço do conhecimento científico."',
   
  },
  {
    id: 5,
    image: require('../assets/Not_Uni_05.jpg'),
    time: '24 e 25 DE MAIO 2024 | 07H',
    title: '5ª Jornada Científica Geral',
    description: 'CIÊNCIAS BIOMÉDICAS, QUESTÕES GLOBAIS E ACÇÕES LOCAIS',
    
  },
  {
    id: 6,
    image: require('../assets/Not_Uni_06.jpg'),
    time: '24 e 25 DE MAIO 2024  | 7H',
    title: 'Actividade Solidária',
    description: 'CIÊNCIAS BIOMÉDICAS, QUESTÕES GLOBAIS E ACÇÕES LOCAIS'
  },
  {
    id: 7,
    image: require('../assets/Not_Uni_07.jpg'),
    time: '07-Setembro-2023  | 09H - 12H',
    title: 'Actividade Solidária',
    description: 'Descubra o impacto que já causamos e inspire-se para se juntar à nossa causa! Veja como nossas atividades solidárias anteriores transformaram vidas e comunidades. Seja parte dessa história de mudança positiva. Clique para saber mais e se envolver"',
   
  },
  {
    id: 8,
    image: require('../assets/Not_Uni_08.jpg'),
    time: '07-Setembro-2023  | 09H - 12H',
    title: 'Actividade Solidária',
    description: 'Descubra o impacto que já causamos e inspire-se para se juntar à nossa causa! Veja como nossas atividades solidárias anteriores transformaram vidas e comunidades. Seja parte dessa história de mudança positiva. Clique para saber mais e se envolver',
  
  },
  {
    id: 9,
    image: require('../assets/Not_Uni_09.jpg'),
    time: '07-Setembro-2023  | 09H - 12H',
    title: 'Actividade Solidária',
    description: 'Descubra o impacto que já causamos e inspire-se para se juntar à nossa causa! Veja como nossas atividades solidárias anteriores transformaram vidas e comunidades. Seja parte dessa história de mudança positiva. Clique para saber mais e se envolver',
    
  }
]

function AppBlogOrganica() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Anúncios</h2>
          <div className="subtitle">Nossas actividades</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppBlogOrganica;