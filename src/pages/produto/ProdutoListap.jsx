import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import CardP from '../../components/cardListas/CardP'
import ColabService from '../../services/ColabF';

function ProdutoListap() {
    const [plist, setP] = useState([])
    const location = useLocation();
    

    useEffect(() => {
        async function data() {
            const data = await ColabService.search(String(location.state));
           
            setP(data);
        }
        data();
        
        
    }, [location.state])

    return (
        <div className='fundo'>
            <Container>
                <h1>Pesquisa {location.state}</h1>
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

export default ProdutoListap