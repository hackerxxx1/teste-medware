import React, { useEffect, useState } from 'react'
import { Button,  Col,  Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill, BsTrashFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import FolgasService from '../../services/FolgasF';
import ColabService from '../../services/ColabF';
import { Link, useNavigate, useParams } from 'react-router-dom';
import folgaV from '../../components/validators/folgaV';


const HorasForm = () => {
 
  const params = useParams()
  const navigate = useNavigate()
  const [n, setN] = useState(0)
  const [serv, setServ] = useState([])
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      async function pegadata () {
        
        const data = await ColabService.get(params.id)
        console.log(data);
        setServ(data)
      }
      pegadata()
    }
  }, [params.id, setValue])
console.log(serv);
  function salvar(dados) {
    if (serv.horas){serv.horas=Number(serv.horas)-9}else{serv.horas=-9}
     console.log(serv);
    if (params.id) {
      dados.colab = params.id
      ColabService.update(params.id, serv)
      FolgasService.create(dados)
    } else {
      console.log("erro de update de horas");
    }

    navigate('/colab')
  }
 
  
  return (
    <div className='fundo'>
      <h1 className='titulo-cidade'>Cadastre a Folga</h1>
      <div className="linha-2 mb-2"></div>
      <Form className='p-lg-5'>
       <Col>
            <div className='linha-form'>
              <Form.Group className="mb-3 marginha" controlId={"descricao"}>
                <Form.Label>Descrição da folga: </Form.Label>
                <Form.Control  type="text" {...register(("descricao"), folgaV.descricao)} />
              </Form.Group>
              <Form.Group className="mb-3 input1" controlId="data">
               <Form.Label>data de entrada: </Form.Label>
               <Form.Control isInvalid={errors.datain} type="date" {...register("data", folgaV.data)} />
               {errors.datain && <span>{errors.datain.message}</span>}
              </Form.Group>
              </div>
        </Col>
        <div className="text-center">
          <Link className='btn btn-danger botao' to={-1}><BsArrowLeftCircleFill /></Link>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success botao'><BsCheckCircleFill /></Button>{' '}
        </div>
      </Form>

    </div>
  )
}

export default HorasForm