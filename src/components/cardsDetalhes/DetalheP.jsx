import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ProdutoService from '../../services/ProdutoF';
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
                                <Card.Title>{p.nome}{' '}{'-'}{' '}{p.nomeins}</Card.Title>
                            </Card.Body>
                            <Card.Img className='img-detalhe' src={p.fotoc? p.fotoc:'https://upload.wikimedia.org/wikipedia/commons/2/27/Instrument_Placeholder.png'}></Card.Img>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Telefone: {p.telefone}</ListGroupItem>
                                <ListGroupItem>Email: {p.email}</ListGroupItem>
                                <ListGroupItem>Cep: {p.cep}</ListGroupItem>
                                <ListGroupItem>Cidade: {p.cidade}</ListGroupItem>
                                <ListGroupItem>Quadra: {p.quadra}</ListGroupItem>
                                <ListGroupItem>Conjunto: {p.conjunto}</ListGroupItem>
                                <ListGroupItem>Casa/apartamento: {p.casa}</ListGroupItem>
                                <ListGroupItem>Referencia: {p.referencia}</ListGroupItem>
                                <ListGroupItem>Data de entrada: {p.datain}</ListGroupItem>
                                <ListGroupItem>Data de saida: {p.dataout}</ListGroupItem>
                                <ListGroupItem>Tipo: {p.tipo}</ListGroupItem>
                                <ListGroupItem>Com cordas? {p.cordas?'sim':'não'}</ListGroupItem>
                                {p.cordas && <ListGroupItem>Tipo da corda: {p.tipocorda}</ListGroupItem>}
                                <ListGroupItem>Descrição: {p.descricao}</ListGroupItem>
                            </ListGroup>
                            <Accordion defaultActiveKey="1" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Mais Informações</Accordion.Header>
                                    <Accordion.Body>
                                    {p.ur.map((item)=>(<img key={item} className='image-url' src={item}/>))}
                        
                         

                    
                                        
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