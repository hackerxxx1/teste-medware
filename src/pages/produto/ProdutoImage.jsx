import React, { useEffect, useState } from 'react'
import { Button,  Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import ProdutoService from '../../services/ProdutoF';
import { Link, useNavigate, useParams } from 'react-router-dom';
import produtoV from '../../components/validators/produtoV';
import Dropzone, { useDropzone } from 'react-dropzone';
import { DropContainer, UploadMessage } from "./styles";

const ProdutoImage = () => {

  const params = useParams()
  const navigate = useNavigate()
  const [produto, setProduto]= useState({})
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const {acceptedFiles, getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));


  useEffect(() => {
    if (params.id) {
      async function data1(){
        const data= await ProdutoService.get(params.id)
        setProduto(data)
      }
      data1()
    
    }
  }, [params.id, setValue])

  function salvar() {
    
    const path = params.id+"/fotos"
    produto.fotosguitarra = params.id+"/fotos"
    console.log(produto);
    ProdutoService.updateimage(params.id, produto ,acceptedFiles,path)
   navigate("/produto")
    
  }
  function renderDragMessage (isDragActive, isDragReject) {
    if (!isDragActive) {
      return (<UploadMessage>Arraste arquivos aqui...</UploadMessage>);
    }

    if (isDragReject) {
      return (<UploadMessage type="error">Arquivo não suportado</UploadMessage>);
    }

    return (<UploadMessage type="success">Solte os arquivos aqui</UploadMessage>);
  }
  console.log(acceptedFiles);
  console.log(produto);
  return (
    <div className='fundo'>
 
     {produto !=undefined && <h1 className='titulo-cidade'>Coloque as fotos do instrumento {produto.tipo}-{produto.nomeins} de {produto.nome} aqui em baixo:</h1>}
      <div className="linha-2 mb-2"></div>

      <Form className='p-lg-5'>
        
        <Form.Group className="mb-3 input1" controlId="nome">
          <Form.Label>Fotos: </Form.Label>
          <section className="container">
      <DropContainer {...getRootProps({className: 'dropzone'})} 
            isDragActive={isDragActive}
            isDragReject={isDragReject}>
        <input {...getInputProps()} accept="image/*" />
        <p>selecione as fotos que deseja colocar</p>
        {/* {this.renderDragMessage(isDragActive, isDragReject)} */}
      </DropContainer>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
      
        </Form.Group>
        

        

        <div className="text-center">
          <Link className='btn btn-danger botao' to={-1}><BsArrowLeftCircleFill /></Link>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success botao'><BsCheckCircleFill /></Button>{' '}
        </div>
      </Form>

    </div>
  )
}

export default ProdutoImage