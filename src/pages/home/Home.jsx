import React, { useState, useEffect } from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import "../../components/css/Projeto.css"
import apimedware from '../../services/apimedware'

const Home = () => {
  let  [data,setData] = useState([])
  useEffect(() => {
    async function data() {
      const pega = await apimedware.get(
        "Medico/Listar"
      );
      const data = pega.data.dados;
      console.log(data);
  }
    return () => {
      
    }
  }, [])
  
  return (
    <div className='fundo'>
       <h1>testando</h1>
    </div >
  )
}

export default Home