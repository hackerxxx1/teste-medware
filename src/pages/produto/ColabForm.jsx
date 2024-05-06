import React, { useEffect, useState } from 'react'
import { Button,  Col,  Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill, BsTrashFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import ColabService from '../../services/ColabF';
import { Link, useNavigate, useParams } from 'react-router-dom';
import colabV from '../../components/validators/colabV';


const ProdutoForm = () => {
 
  const params = useParams()
  const navigate = useNavigate()
  const [n, setN] = useState(0)
  const [serv, setServ] = useState([])
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      async function pegadata () {
        
        const data = await ColabService.get(params.id)
        console.log(data)
        setServ(data)
      }
      pegadata()
      
    }
  }, [params.id])
 useEffect(() => {
  for (let campo in serv) {
    setValue(campo, serv[campo])
  }
 }, [setValue,serv])
 
  function salvar(dados) {
     dados.nome= dados.nome.toLowerCase()
     if(serv.horas){dados.horas = serv.horas}else{dados.horas = 0}
     console.log(dados);
    if (params.id) {
      ColabService.update(params.id, dados)
    } else {
      ColabService.create(dados)
    }

    navigate('/colab')
  }
  function arrayserv() {
    if(n<10){

      setN(n+1);
      setServ([...serv,n+1]);
    }
    
  }
  
  return (
    <div className='fundo'>
      <h1 className='titulo-cidade'>Cadastre um novo colaborador</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
        <div className='linha-form'>
        <Form.Group className="mb-3 input1" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control  isInvalid={errors.nome} type="text" placeholder='Coloque um nome ai' {...register("nome", colabV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="number" placeholder='(61) xxxxx-xxxx' {...register("telefone", colabV.telefone)} />
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="fotoc">
          <Form.Label>Link da foto: </Form.Label>
          <Form.Control isInvalid={errors.fotoc} type="fotoc" placeholder='algumacoisa@gmail.com'{...register("fotoc", colabV.fotoc)} />
          {errors.fotoc && <span>{errors.fotoc.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control isInvalid={errors.email} type="email" placeholder='algumacoisa@gmail.com'{...register("email", colabV.email)} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="tipo">
          <Form.Label>Tipo: </Form.Label>
          <Form.Select isInvalid={errors.tipo}  placeholder='Selecione uma opção' {...register("tipo", colabV.tipo)} >
            <option value='colaborador'>colaborador</option>
            <option value='lider'>lider</option>
            <option value='supervisor'>supervisor</option>
            <option value='gestor'>gestor</option>
          </Form.Select>  
          {errors.tipo && <span>{errors.tipo.message}</span>}
        </Form.Group>
        </div>
        <div className="text-center">
          <Link className='btn btn-danger botao' to={-1}><BsArrowLeftCircleFill /></Link>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success botao'><BsCheckCircleFill /></Button>{' '}
        </div>
      </Form>

    </div>
  )
}

export default ProdutoForm