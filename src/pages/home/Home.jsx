import React, { useState, useEffect } from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import "../../components/css/Projeto.css"
import apimedware from '../../services/apimedwareteste'

const Home = () => {
  let  [data,setData] = useState([])
  useEffect(() => {
    async function data() {
     
      console.log(data);
  }
  data()
    return () => {
      
    }
  }, [])
  
  return (
    <div className='fundo'>
       <h1>Medware horas seja bem vindo</h1>
    </div >
  )
}

export default Home