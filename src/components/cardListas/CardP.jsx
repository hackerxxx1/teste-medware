import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill, BsFillEyeFill } from 'react-icons/bs'
import { FaFilePdf,FaRegImages } from 'react-icons/fa'
import ColabService from '../../services/ColabF';
import { Link } from 'react-router-dom'
import "../css/Projeto.css"
import swal from 'sweetalert';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const CardP = (p) => {
    const [colab, setColab] = useState([])
   
  
 
    useEffect(() => {
      async function data() {
       const dat = await ColabService.get(p.id);
       setColab(dat)
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
                ColabService.delete(id)
                swal("Bom trabalho!", "Você excluiu o produto!", "success")
                    .then(function () { window.location.reload() });
            } else {
                swal("Tudo bem!", "Você decidiu não excluir a cidade!", "info");
            }
        })
    }
    return (
        <Card>
            
            <Card.Body className='cor-card'>
               {p.dados && <Card.Title>{p.dados.nome.stringValue}{' '}{'-'}{' '}{p.dados.tipo.stringValue}</Card.Title>}
                <Link to={'/produto/' + p.id} className='btn btn-light botao'><BsFillEyeFill /></Link>
                <Link to={'/produto/update/' + p.id} className='btn btn-light botao'><BsFillBrushFill /></Link>
                <Button className='btn btn-light' onClick={() => apagar(p.id)}><BsTrashFill /></Button>
            </Card.Body>
        </Card>
    )
}

export default CardP