import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import CardP from '../../components/cardListas/CardP'
import ProdutoService from '../../services/ProdutoF';

function ProdutoLista() {
    const [plist, setP] = useState([])

    useEffect(() => {
        async function data() {
            const data = await ProdutoService.getAll();
            
            setP(data.docs);
        }
        data();
        
        
    }, [])

    return (
        <div className='fundo'>
            <Container>
                <Row>
                    <Col className='py-4'>
                        <Link className='btn btn-warning ' to={'/produto/create'}><FaPlus /> Novo</Link>
                    </Col>
                </Row>
                <Row>
                    {plist.map((p, i) => (
                        
                        <Col md={4} className="py-3" key={p.id}>
                            
                            <CardP
                                
                                id={p.id}
                                dados={p._document.data.value.mapValue.fields}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProdutoLista