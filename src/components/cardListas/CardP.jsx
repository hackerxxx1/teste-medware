import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill, BsFillEyeFill } from 'react-icons/bs'
import { MdOutlineMoreTime } from 'react-icons/md'
import {FaRegCalendarCheck  } from 'react-icons/fa'
import ColabService from '../../services/ColabF';
import { Link } from 'react-router-dom'
import "../css/Projeto.css"
import swal from 'sweetalert';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const CardP = (p) => {
    
   
  
 
    useEffect(() => {
    
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
              {/* {console.log(p)} */}
            <Card.Img className='img-detalhe' src={p.dados.fotoc? p.dados.fotoc.stringValue:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZD3GRLux4pFIJSaAt2uB-rfaguxJm9D_1jWHJ493cow&s'}></Card.Img>
               {p.dados && <Card.Title>{p.dados.nome.stringValue}{' '}{'-'}{' '}{p.dados.tipo.stringValue}</Card.Title>}
                <Link to={'/colab/' + p.id} className='btn btn-light botao'><BsFillEyeFill /></Link>
                <Link to={'/colab/update/' + p.id} className='btn btn-light botao'><BsFillBrushFill /></Link>
                <Link to={'/horas/create/' + p.id} className='btn btn-light botao'><MdOutlineMoreTime /></Link>
                <Link to={'/Folgas/update/' + p.id} className='btn btn-light botao'><FaRegCalendarCheck /></Link>
                <Button className='btn btn-light' onClick={() => apagar(p.id)}><BsTrashFill /></Button>
            </Card.Body>
        </Card>
    )
}

export default CardP