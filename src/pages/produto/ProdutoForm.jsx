import React, { useEffect, useState } from 'react'
import { Button,  Col,  Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill, BsTrashFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import ProdutoService from '../../services/ProdutoF';
import { Link, useNavigate, useParams } from 'react-router-dom';
import produtoV from '../../components/validators/produtoV';


const ProdutoForm = () => {
 
  const params = useParams()
  const navigate = useNavigate()
  const [n, setN] = useState(0)
  const [serv, setServ] = useState([])
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (params.id) {
      const produto = ProdutoService.get(params.id)

      for (let campo in produto) {
        setValue(campo, produto[campo])
      }
    }
  }, [params.id, setValue])

  function salvar(dados) {
     dados.nome= dados.nome.toLowerCase()
    if (params.id) {
      ProdutoService.update(params.id, dados)
    } else {
      ProdutoService.create(dados)
    }

    navigate('/produto')
  }
  function arrayserv() {
    if(n<10){

      setN(n+1);
      setServ([...serv,n+1]);
    }
    
  }
  function apagar(p) {
    
  }
  return (
    <div className='fundo'>
      <h1 className='titulo-cidade'>Cadastre um novo atendimento</h1>
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
        <div className='linha-form'>
        <Form.Group className="mb-3 input1" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control  isInvalid={errors.nome} type="text" placeholder='Coloque um nome ai' {...register("nome", produtoV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="number" placeholder='(61) xxxxx-xxxx' {...register("telefone", produtoV.telefone)} />
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3 input1" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control isInvalid={errors.email} type="email" placeholder='algumacoisa@gmail.com'{...register("email", produtoV.email)} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3 input1" controlId="data1">
          <Form.Label>data de entrada: </Form.Label>
          <Form.Control isInvalid={errors.datain} type="date" {...register("datain", produtoV.datain)} />
          {errors.datain && <span>{errors.datain.message}</span>}
        </Form.Group>
        </div>
        <div className='linha-form'>
        <Form.Group className="mb-3 input1" controlId="nomeins">
          <Form.Label>Nome do instrumento: </Form.Label>
          <Form.Control  isInvalid={errors.nomeins} type="text" placeholder='Ravello' {...register("nomeins", produtoV.nomeins)} />
          {errors.nomeins && <span>{errors.nomeins.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="tipo">
          <Form.Label>Tipo: </Form.Label>
          <Form.Select isInvalid={errors.tipo}  placeholder='Selecione uma opção' {...register("tipo", produtoV.tipo)} >
            <option value='guitarra'>guitarra</option>
            <option value='violao'>violão</option>
            <option value='viola'>viola</option>
            <option value='violino'>violino</option>
            <option value='cava1quinho'>cavaquinho</option>
            <option value='baixo'>baixo</option>
            <option value='baixolao'>baixolão</option>
            <option value='bandolim'>bandolim</option>
          </Form.Select>  
          {errors.tipo && <span>{errors.tipo.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3 input2" controlId="cordas">
          <Form.Check isInvalid={errors.cordas} type="switch" id="custom-switch" label="Com cordas?" {...register("cordas", produtoV.cordas)} />
          {errors.cordas && <span>{errors.cordas.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="tipo de corda">
          <Form.Label>Selecione a marca de corda: </Form.Label>
          <Form.Select isInvalid={errors.marca}  {...register("marca", produtoV.marca)} >
          <option value='Dario'>d dario</option>
            <option value='gianini'>gianini</option>
            <option value='ernibal'>erniel ball</option>
          </Form.Select>
          {errors.marca && <span>{errors.marca.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="data2">
          <Form.Label>data de saida: </Form.Label>
          <Form.Control isInvalid={errors.dataout} type="date" {...register("dataout", produtoV.dataout)} />
          {errors.dataout && <span>{errors.dataout.message}</span>}
        </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control isInvalid={errors.descricao} type="text" {...register("descricao", produtoV.descricao)} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="fotoc">
          <Form.Label>Url foto capa: </Form.Label>
          <Form.Control isInvalid={errors.fotoc} type="text" {...register("fotoc", produtoV.fotoc)} />
          {errors.fotoc && <span>{errors.fotoc.message}</span>}
        </Form.Group>
        <div className='linha-form'>
        <Form.Group className="mb-3 input1" controlId="cep">
          <Form.Label>Cep: </Form.Label>
          <Form.Control  isInvalid={errors.cep} type="number" placeholder='xxxxx-xxx' {...register("cep", produtoV.cep)} />
          {errors.cep && <span>{errors.cep.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="quadra">
          <Form.Label>Endereço(quadra): </Form.Label>
          <Form.Control isInvalid={errors.quadra} type="text" placeholder='Digite a quadra' {...register("quadra", produtoV.quadra)} />
          {errors.quadra && <span>{errors.quadra.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="conjunto">
          <Form.Label>Endereço(conjunto): </Form.Label>
          <Form.Control isInvalid={errors.conjunto} type="text" placeholder='Digite o conjunto' {...register("conjunto", produtoV.conjunto)} />
          {errors.conjunto && <span>{errors.conjunto.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3 input1" controlId="complemento">
          <Form.Label>Complemento(casa/apartamento): </Form.Label>
          <Form.Control isInvalid={errors.complemento} type="text" placeholder=''{...register("complemento", produtoV.complemento)} />
          {errors.complemento && <span>{errors.complemento.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="referencia">
          <Form.Label>Ponto de Referencia: </Form.Label>
          <Form.Control isInvalid={errors.referencia} type="text" placeholder=''{...register("referencia", produtoV.referencia)} />
          {errors.referencia && <span>{errors.referencia.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3 input1" controlId="cidade">
          <Form.Label>Cidade: </Form.Label>
          <Form.Select isInvalid={errors.cidade}  placeholder='Selecione uma opção' {...register("cidade", produtoV.cidade)} >
            <option value='Águas Claras'>Águas Claras</option>
            <option value='Arniqueira'>Arniqueira</option>
            <option value='Brazlândia'>Brazlândia</option>
            <option value='Candangolândia'>Candangolândia</option>
            <option value='Ceilândia'>Ceilândia</option>
            <option value='Cruzeiro'>Cruzeiro</option>
            <option value='Fercal'>Fercal</option>
            <option value='Itapoã'>Itapoã</option>
            <option value='Jardim Botânico'>Jardim Botânico</option>
            <option value='Lago Norte'>Lago Norte</option>
            <option value='Lago Sul'>Lago Sul</option>
            <option value='Núcleo Bandeirante'>Núcleo Bandeirante</option>
            <option value='Paranoá'>Paranoá</option>
            <option value='Park Way'>Park Way</option>
            <option value='Planaltina'>Planaltina</option>
            <option value='Plano Piloto'>Plano Piloto</option>
            <option value='Pôr do Sol'>Pôr do Sol</option>
            <option value='Riacho Fundo II'>Riacho Fundo II</option>
            <option value='Riacho Fundo I'>Riacho Fundo I</option>
            <option value='Recanto das Emas'>Recanto das Emas</option>
            <option value='Samambaia'>Samambaia</option>
            <option value='Santa Maria'>Santa Maria</option>
            <option value='São Sebastião'>São Sebastião</option>
            <option value='SCIA'>SCIA</option>
            <option value='SIA'>SIA</option>
            <option value='Sobradinho'>Sobradinho</option>
            <option value='Sobradinho II'>Sobradinho II</option>
            <option value='Sol Nascente'>Sol Nascente</option>
            <option value='Sudoeste/Octogonal'>Sudoeste/Octogonal</option>
            <option value='Taguatinga'>Taguatinga</option>
            <option value='Varjão'>Varjão</option>
            <option value='Vicente Pires'>Vicente Pires</option>
            <option value='Vicente Pires'>Outras</option>
          </Form.Select>  
          {errors.cidade && <span>{errors.cidade.message}</span>}
        </Form.Group>
        </div>
        <Col className='py-4'>
          <Button className='btn btn-warning '  onClick={()=>{arrayserv()}}><FaPlus /> Novo serviço</Button>          
        </Col>
         
        {serv.map((p) => (
         <Col>
         <div className='linha-form'>
         <Form.Group className="mb-3 marginha" controlId={"servico"+p}>
           <Form.Label>Nome do serviço {p}: </Form.Label>
           <Form.Control  type="text" {...register(("servico"+p), produtoV.servico)} />
         </Form.Group>
         <Form.Group className="mb-3" controlId={"precoserv"+p}>
           <Form.Label>Preço do serviço {p}: </Form.Label>
           <Form.Control type="number" {...register(("precoserv"+p), produtoV.precoserv)} />
         </Form.Group>
         
         </div>
         </Col>
        ))}
        

        <div className="text-center">
          <Link className='btn btn-danger botao' to={-1}><BsArrowLeftCircleFill /></Link>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success botao'><BsCheckCircleFill /></Button>{' '}
        </div>
      </Form>

    </div>
  )
}

export default ProdutoForm