import React, { useEffect, useState } from 'react'
import { Button,  Col,  Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill, BsTrashFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import HorasService from '../../services/HorasF';
import { Link, useNavigate, useParams } from 'react-router-dom';
import colabV from '../../components/validators/colabV';


const HorasForm = () => {
 
  const params = useParams()
  const navigate = useNavigate()
  const [n, setN] = useState(0)
  const [serv, setServ] = useState([])
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const produto = ColabService.get(params.id)

      for (let campo in produto) {
        setValue(campo, produto[campo])
      }
    }
  }, [params.id, setValue])

  function salvar(dados) {
     dados.nome= dados.nome.toLowerCase()
    if (params.id) {
      ColabService.update(params.id, dados)
    } else {
      ColabService.create(dados)
    }

    navigate('/produto')
  }
  function arrayserv() {
    if(n<10){

      setN(n+1);
      setServ([...serv,n+1]);
    }
    
  }
  
  return (
    <div className='fundo'>
      <h1 className='titulo-cidade'>Cadastre a hora extra</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
      <Col className='py-4'>
        <Button className='btn btn-warning '  onClick={()=>{arrayserv()}}><FaPlus /> Novo serviço</Button>          
      </Col>
            <div className='linha-form'>
              <Form.Group className="mb-3 marginha" controlId={"servico"}>
                <Form.Label>Nome do serviço {p} prestado: </Form.Label>
                <Form.Control  type="text" {...register(("servico"), HorasV.servico)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId={"precoserv"+p}>
                <Form.Label>Preço do serviço {p}: </Form.Label>
                <Form.Control type="number" {...register(("precoserv"+p), HorasV.precoserv)} />
              </Form.Group>
              </div>
        </Col>
        </div>
        <div className="text-center">
          <Link className='btn btn-danger botao' to={-1}><BsArrowLeftCircleFill /></Link>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success botao'><BsCheckCircleFill /></Button>{' '}
        </div>
      </Form>

    </div>
  )
}

export default HorasForm