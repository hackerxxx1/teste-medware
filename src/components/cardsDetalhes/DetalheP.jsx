import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ColabService from '../../services/ColabF';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircleFill } from 'react-icons/bs'

const DetalheP = (p) => {
     
     
     
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
                                <ListGroupItem>Tipo: {p.tipo}</ListGroupItem>
                            </ListGroup>
                            <Accordion defaultActiveKey="1" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Mais Informações</Accordion.Header>
                                    <Accordion.Body>
                                    
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