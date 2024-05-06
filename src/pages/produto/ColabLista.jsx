import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import CardP from '../../components/cardListas/CardP'
import ColabService from '../../services/ColabF';

function ProdutoLista() {
    const [plist, setP] = useState([])

    useEffect(() => {
        async function data() {
            const data = await ColabService.getAll();
            console.log(data);           
            setP(data.docs);
         
        }
        data();
        
        
    }, [])
console.log(plist);
    return (
        <div className='fundo'>
            <Container>
                <Row>
                    <Col className='py-4'>
                        <Link className='btn btn-warning ' to={'/colab/create'}><FaPlus /> Novo</Link>
                    </Col>
                </Row>
                <Row>
                    {plist.map((p, i) => (
                        <Col md={4} className="py-3" key={p.id}>
                            {console.log(p._document.data.value.mapValue.fields)}
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