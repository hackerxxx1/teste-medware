import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill, BsFillEyeFill } from 'react-icons/bs'
import { FaFilePdf,FaRegImages } from 'react-icons/fa'
import ProdutoService from '../../services/ProdutoF';
import { Link } from 'react-router-dom'
import "../css/Projeto.css"
import swal from 'sweetalert';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const CardP = (p) => {
    const [produto, setProduto] = useState([])
   
  
 
    useEffect(() => {
      async function data() {
       const dat = await ProdutoService.get(p.id);
       setProduto(dat)
      }
      data();
    }, [p]) 

    function apagar(id) {
        swal({
            title: "Tem certeza?",
            text: "Uma vez excluído, você não será capaz de recuperar este arquivo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((podeApagar) => {
            if (podeApagar) {
                ProdutoService.delete(id)
                swal("Bom trabalho!", "Você excluiu o produto!", "success")
                    .then(function () { window.location.reload() });
            } else {
                swal("Tudo bem!", "Você decidiu não excluir a cidade!", "info");
            }
        })
    }
    
    async function fazerPdf() {
    
        if (produto.nome !== undefined) {
     var soma = Number(produto.precoserv1)
    

      if (produto.servico2 !== undefined) {
        soma = soma + Number(produto.precoserv2)
      }
      if (produto.servico3 !== undefined) {
        soma = soma + Number(produto.precoserv3)
      }
      if (produto.servico4 !== undefined) {
        soma = soma + Number(produto.precoserv4)
      }
      if (produto.servico5 !== undefined) {
        soma = soma + Number(produto.precoserv5)
      }
      if (produto.servico6 !== undefined) {
        soma = soma + Number(produto.precoserv6)
      }
      if (produto.servico7 !== undefined) {
        soma = soma + Number(produto.precoserv7)
      }
      if (produto.servico8 !== undefined) {
        soma = soma + Number(produto.precoserv8)
      }
      if (produto.servico9 !== undefined) {
        soma = soma + Number(produto.precoserv9)
      }
      if (produto.servico10 !== undefined) {
        soma = soma + Number(produto.precoserv10)
      }
     
    await pdfMake.createPdf({
      
        content: [
            {
                style: 'tableExample',
                table: {
                    widths:[70,70,70,130,130],
                    body: [
                         [{stack:[{text: 'Cliente:', style: 'tableHeader', colSpan:4},{rowSpan:1 ,text: String(produto.nome), colSpan: 4}]},{stack:['Data de entrada:',String(produto.datain)]},{stack:['Data de saida:',String(produto.dataout)]},{stack:[{text: 'Email:', style: 'tableHeader', colSpan:3},{ text: String(produto.email), colSpan: 3}]},{stack:[{text: 'Nome instrumento:', style: 'tableHeader', colSpan:4, alignment: 'center'},{rowSpan:1 ,text: String(produto.nomeins), colSpan: 6}]}],
                         ]
                }
                ,margin:[0,100,0,0]
            },
            {
                style: 'tableExample',
                table: {
                    widths:['auto','auto','auto','auto','auto',100],
                    body: [
                         [{stack:[{text: 'Telefone:', style: 'tableHeader'},{text: String(produto.telefone)}]},{stack:['Tipo instrumento:',String(produto.tipo)]},{stack:['Com Cordas:',produto.cordas? "Sim":"Não"]},{stack:[{text: 'Marca das cordas:', style: 'tableHeader', colSpan:3},{ text: String(produto.marca), colSpan: 4}]},{stack:[{text: 'Cep:', style: 'tableHeader', colSpan:4},{rowSpan:1 ,text: String(produto.cep), colSpan: 4}]},{stack:['Quadra:', String(produto.quadra)]}]
    
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths:['auto','auto','auto',250],
                    body: [
                         [{stack:['Conjunto/rua:',String(produto.conjunto)]},{stack:['Numero casa/AP:',String(produto.complemento)]},{stack:['Referencia:',String(produto.referencia)]},'',]
                    ]
                }
            },
            {
              style: 'tableExample',
              table: {
                  widths:[505],
                  body: [
                       [{stack:[{text: 'Descrição do serviço:', style: 'tableHeader'},
                       {text: String(produto.descrição)}]}]
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
                      [{text: String(produto.servico1)},{text: ('R$ '+String(produto.precoserv1))}],
                      [{text: produto.servico2?String(produto.servico2):''},{text: (produto.precoserv2?'R$ '+String(produto.precoserv2):'0')}],
                      [{text: produto.servico3?String(produto.servico3):''},{text: (produto.precoserv3?'R$ '+String(produto.precoserv3):'0')}],
                      [{text: produto.servico4?String(produto.servico4):''},{text: (produto.precoserv4?'R$ '+String(produto.precoserv4):'0')}],
                      [{text: produto.servico5?String(produto.servico5):''},{text: (produto.precoserv5?'R$ '+String(produto.precoserv5):'0')}],
                      [{text: produto.servico6?String(produto.servico6):''},{text: (produto.precoserv6?'R$ '+String(produto.precoserv6):'0')}],
                      [{text: produto.servico7?String(produto.servico7):''},{text: (produto.precoserv7?'R$ '+String(produto.precoserv7):'0')}],
                      [{text: produto.servico8?String(produto.servico8):''},{text: (produto.precoserv8?'R$ '+String(produto.precoserv8):'0')}],
                      [{text: produto.servico9?String(produto.servico9):''},{text: (produto.precoserv9?'R$ '+String(produto.precoserv9):'0')}],
                      [{text: produto.servico10?String(produto.servico10):''},{text: (produto.precoserv10?'R$ '+String(produto.precoserv10):'0')}],
                       [{text: 'total:'},{text: ('R$ ' + soma)}]
                  ]
              }
          },
          
        ]
    
      
      
    }).open();
    
  
  }
        
    }

    return (
        <Card>
           
            {p.dados && <Card.Img src={p.dados.fotoc.stringValue? p.dados.fotoc.stringValue:'https://upload.wikimedia.org/wikipedia/commons/2/27/Instrument_Placeholder.png'}></Card.Img>}
            <Card.Body className='cor-card'>
               {p.dados && <Card.Title>{p.dados.nome.stringValue}{' '}{'-'}{' '}{p.dados.nomeins.stringValue}</Card.Title>}
                <Link to={'/produto/' + p.id} className='btn btn-light botao'><BsFillEyeFill /></Link>
                <Link to={'/produto/update/' + p.id} className='btn btn-light botao'><BsFillBrushFill /></Link>
                <Button onClick={fazerPdf} className='btn btn-light botao'><FaFilePdf /></Button>
                <Link to={'/produto/updatei/' + p.id} className='btn btn-light botao'><FaRegImages /></Link>
                <Button className='btn btn-light' onClick={() => apagar(p.id)}><BsTrashFill /></Button>
            </Card.Body>
        </Card>
    )
}

export default CardP