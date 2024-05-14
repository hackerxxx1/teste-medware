import React, { useEffect, useState } from 'react'
import { Button,  Col,  Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill} from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import HorasService from '../../services/HorasF';
import ColabService from '../../services/ColabF';
import { Link, useNavigate, useParams } from 'react-router-dom';
import horasV from '../../components/validators/horasV';


const HorasForm = () => {
 
  const params = useParams()
  const navigate = useNavigate()
  const [serv, setServ] = useState([])
  const [h, setH] = useState([])
  const [tri,setTri] = useState(false)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      async function pegadata () {
        
        const data = await ColabService.get(params.id)
    //    console.log(data);
        if(data !== undefined){
          setServ(data)
        }else{
          const dat = await HorasService.get(params.id)
          const data = await ColabService.get(dat.colab)
  // console.log(dat);
          setTri(true)
          setServ(data)
          setH(dat)
        }

      }
      pegadata()
    }
  }, [params.id])

  useEffect(() => {
    for (let campo in h) {
      setValue(campo, h[campo])
    }
   }, [setValue,h])
//console.log(serv);
//console.log(h);
  function salvar(dados) {
    
    if (params.id && tri === false) {
      //se for create para poder fazer a hora no mesmo componente
      if (serv.horas){serv.horas= Number(dados.horas) + Number(serv.horas)}else if(serv.horas < 0){serv.horas = serv.horas + Number(dados.horas)}else{serv.horas=Number(dados.horas)}
      //console.log(serv);
      dados.colab = params.id
      ColabService.update(params.id, serv)
      HorasService.create(dados)
    } else if(tri === true){
      //se for update dar update tanto nos dados do colab quanto nos dados das horas
      if (serv.horas){serv.horas= (Number(serv.horas)- Number(h.horas))+ Number(dados.horas)}else{alert("voce esta editando algo que não e possivel")}
      ColabService.update(h.colab, serv)
      HorasService.update(params.id,dados)
    }else {
      console.log("erro de update de horas");
    }

    navigate('/colab')
  }
 
  
  return (
    <div className='fundo'>
      <h1 className='titulo-cidade'>Cadastre a hora extra</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
       <Col>
            <div className='linha-form'>
              <Form.Group className="mb-3 marginha" controlId={"servico"}>
                <Form.Label>Nome do serviço prestado: </Form.Label>
                <Form.Control  type="text" {...register(("servico"), horasV.servico)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId={"horas"}>
                <Form.Label>Horas de serviço: </Form.Label>
                <Form.Control type="number" {...register(("horas"), horasV.horas)} />
              </Form.Group>
              <Form.Group className="mb-3 input1" controlId="data">
               <Form.Label>data de entrada: </Form.Label>
               <Form.Control isInvalid={errors.datain} type="date" {...register("data", horasV.data)} />
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