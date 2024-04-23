import React, { useEffect } from 'react'
import { Button,  Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import ComandoService from '../../services/ComandoF';
import { Link, useNavigate, useParams } from 'react-router-dom';
import produtoV from '../../components/validators/produtoV';

const ProdutoForm = () => {

  const params = useParams()
  const navigate = useNavigate()
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

    if (params.id) {
      ProdutoService.update(params.id, dados)
    } else {
      ProdutoService.create(dados)
    }

    navigate('/')
  }

  return (
    var dd = {
      content: [
          {
              style: 'tableExample',
              table: {
                  
                  body: [
                       [{stack:[{text: 'Cliente:', style: 'tableHeader', colSpan:4},{rowSpan:1 ,text: 'bla bla bla nome dele bem grande ', colSpan: 4}]},{stack:['Data de entrada:','blablabla']},{stack:['Data de saida:','blablabla']},{stack:[{text: 'Email:', style: 'tableHeader', colSpan:3},{ text: 'blablabla@gmail.com ', colSpan: 3}]},{stack:[{text: 'Nome instrumento:', style: 'tableHeader', colSpan:4, alignment: 'center'},{rowSpan:1 ,text: 'bla bla bla nome dele bem grande ', colSpan: 4}]}],
                       ]
              }
              ,margin:[0,100,0,0]
          },
          {
              style: 'tableExample',
              table: {
                  widths:['auto','auto','auto','auto','auto',100],
                  body: [
                       [{stack:[{text: 'Telefone:', style: 'tableHeader'},{text: '123456789'}]},{stack:['Tipo instrumento:','blablabla']},{stack:['Cordas:','blablabla']},{stack:[{text: 'Marca das cordas:', style: 'tableHeader', colSpan:3},{ text: 'blablabla ', colSpan: 4}]},{stack:[{text: 'Cep:', style: 'tableHeader', colSpan:4},{rowSpan:1 ,text: '123456789', colSpan: 4}]},{stack:['Quadra:', 'ola']}]
  
                  ]
              }
          },
          {
              style: 'tableExample',
              table: {
                  widths:['auto','auto','auto',250],
                  body: [
                       [{stack:['Conjunto/rua:','blablabla']},{stack:['Numero casa/AP:','blablabla']},{stack:['Referencia:','blablabla']},'',]
                  ]
              }
          },
          {
            style: 'tableExample',
            table: {
                widths:[505],
                body: [
                     [{stack:[{text: 'Descrição do serviço:', style: 'tableHeader'},
                     {text: 'balbalblalasldasdnasduioaubguyidasdasda um texto bem grande aqui para poder descrever o que foi feito no instrumento com cada detalhe para isso ai '}]}]
                ]},
                 margin:[0,20,0,20]
            },
            {
            style: 'tableExample',
            table: {
                widths:[505],
                body: [
                     [{text: 'Serviços prestados:', style: 'tableHeader'},]
                ]
            }
        },{
            style: 'tableExample',
            table: {
                widths:[440,56],
                body: [
                     [{text: 'Nome do serviço'},{text: 'R$ 99,99'}],
                     [{text: 'Nome do serviço'},{text: 'R$ 99,99'}],
                     [{text: 'Nome do serviço'},{text: 'R$ 99,99'}],
                     [{text: 'Nome do serviço'},{text: 'R$ 99,99'}],
                     [{text: 'Nome do serviço'},{text: 'R$ 99,99'}],
                     [{text: 'total:'},{text: 'R$ 99,99'}]
                ]
            }
        },
        
      ]
  }
    
    <div>
        <div className='linha-form'>
        <Form.Group className="mb-3 input1" controlId="nomes">
          <Form.Label>Nome do serviço: </Form.Label>
          <Form.Control  isInvalid={errors.nome} type="text" placeholder='Coloque um nome ai' {...register("nome", produtoV.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3 input1" controlId="preco">
          <Form.Label>Preço: </Form.Label>
          <Form.Control isInvalid={errors.preco} type="number" placeholder='valor sem virgula xxxx' {...register("preco", produtoV.preco)} />
          {errors.preco && <span>{errors.preco.message}</span>}
        </Form.Group>

        </div>
     </div>
  )
}

export default ProdutoForm