import React, { useEffect, useState } from 'react'
import ColabService from '../../services/ColabF';
import { useNavigate, useParams } from 'react-router-dom';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ProdutoPDF = () => {
 
  const [produto, setProduto] = useState([])
  const params = useParams()
  const navigate = useNavigate()
  
 
  useEffect(() => {
    async function data() {
     const dat = await ColabService.get(params.id);
     setProduto(dat)
    }
    data();
  }, [params])

  if (typeof produto == 'undefined') {
    return (<div></div>)
  }
  function fazerPDF() {
    
  
  if (produto.nome !== undefined) {
   const oi = produto.nome
   pdfMake.createPdf({
      content: [
        {text: 'Comanda de atendimento do cliente: '+ oi, style: 'header'},
        {
          ul: [
            'Nome cliente:'+produto.nome,
            'Telefone:'+produto.telefone,
            'Descrição:'+produto.descrição,
            'Email:'+produto.email,
            'Data do atendimento:'+produto.datain,
            'Data de Entrega:'+produto.dataout,
            'Nome do instrumento:'+produto.nomeins,
            'Tipo do instrumento:'+produto.tipo,
            'Tipo das cordas:'+produto.marca,
            
          ]
        }
      ]
    }).open()
    navigate('/produto')
  
  }}
  
  return (
    <div>
      produto {params.id} { produto.nome} PDF
      {fazerPDF()}


    </div>
  )

}

export default ProdutoPDF
