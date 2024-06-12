import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/UN_OR_04.jpg'),
    title: 'Engenharia',
    description: '"Desenvolva o futuro construindo o presente! Descubra como o curso de Engenharia Civil pode abrir portas para uma carreira emocionante e impactante. Clique para explorar.""',
    link: '#'
  },
  {
    id: 2,
    image: require('../assets/UN_OR_02.jpg'),
    title: 'Ciência da Gestão',
    description: '"Desbloqueie seu potencial de liderança com o curso de Ciência da Gestão! Descubra como dominar habilidades estratégicas, liderança e análise de dados para impulsionar sua carreira.',
    link: '#'
  },
  {
    id: 3,
    image: require('../assets/UN_OR_01.jpg'),
    title: 'Ciência da Saúde',
    description: '"O evento proporcionou uma oportunidade única para a comunidade acadêmica trocar ideias, colaborar em projetos e promover o avanço do conhecimento científico."',
    link: '/ciencia_saude'
  }
  ,
  {
    id: 3,
    image: require('../assets/UN_OR_03.jpg'),
    title: 'Ciências Socias',
    description: '"O evento proporcionou uma oportunidade única para a comunidade acadêmica trocar ideias, colaborar em projetos e promover o avanço do conhecimento científico."',
    link: '#'
  }
]

function AppUdadeOrganica() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
       
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={3} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Leia mais<i className="fas fa-chevron-right"></i></a>
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

export default AppUdadeOrganica;