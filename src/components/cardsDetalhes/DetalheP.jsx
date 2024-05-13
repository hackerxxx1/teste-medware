import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import HorasService from '../../services/HorasF';
import FolgasService from '../../services/FolgasF';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import CardD from '../../components/cardListas/CardD'
import CardF from '../../components/cardListas/CardF'

const DetalheP = (p) => {
    const params = useParams()
    const [horas, setHoras] = useState([])
    const [folgas, setFolgas] = useState([])
     useEffect(() => {
        async function data() {
            const dat = await HorasService.search(p.id);
            const dat1 = await FolgasService.search(p.id);
            setHoras(dat)
            setFolgas(dat1)
           }
           data()
     }, [])
     
    return (
        <div className='margem-do-quadrado'>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{p.nome}{' '}{'-'}{' '}{p.tipo}</Card.Title>
                            </Card.Body>
                            <Card.Img className='img-detalhe' src={p.fotoc? p.fotoc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZD3GRLux4pFIJSaAt2uB-rfaguxJm9D_1jWHJ493cow&s'}></Card.Img>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Telefone: {p.telefone}</ListGroupItem>
                                <ListGroupItem>Email: {p.email}</ListGroupItem>
                              {p.horas != undefined && p.horas != 0 &&  <ListGroupItem>Quantidade de horas na casa: {p.horas}</ListGroupItem>}
                            </ListGroup>
                            <Accordion defaultActiveKey="1" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Horas</Accordion.Header>
                                    <Accordion.Body>
                                    {horas.map((p, i) => (
                                         <Col md={4} className="py-3" key={p.id}>
                                             {console.log(p._document.data.value.mapValue.fields)}
                                             <CardD
                                                 id={p.id}
                                                 dados={p._document.data.value.mapValue.fields}
                                                 colab={params.id}
                                             />
                                         </Col>
                                     ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion defaultActiveKey="1" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Folgas</Accordion.Header>
                                    <Accordion.Body>
                            {folgas.map((p, i) => (
                                         <Col md={4} className="py-3" key={p.id}>
                                             {console.log(p._document.data.value.mapValue.fields)}
                                             <CardF
                                                 id={p.id}
                                                 dados={p._document.data.value.mapValue.fields}
                                                 colab={params.id}
                                             />
                                         </Col>
                                     ))}
                                   </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='py-3'>
                        <Link className='btn btn-dark' to={-1}><BsArrowLeftCircleFill /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetalheP