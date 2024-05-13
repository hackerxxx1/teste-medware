import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { BsTrashFill, BsFillBrushFill, BsFillEyeFill } from 'react-icons/bs'
import { MdOutlineMoreTime } from 'react-icons/md'
import {FaRegCalendarCheck  } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ColabService from '../../services/ColabF';
import HorasService from '../../services/HorasF';
import "../css/Projeto.css"
import swal from 'sweetalert';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const CardD = (p) => {
    const [colab, setColab] = useState([])
   
  
 
    useEffect(() => {
      async function data() {
       const dat = await ColabService.get(p.colab);

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
                HorasService.delete(id)
                colab.horas = Number(colab.horas)-Number(p.dados.horas.stringValue)
                ColabService.update(p.colab, colab)
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
         
             {p.dados && <Card.Title>{p.dados.data.stringValue}{' '}{'-'}{' '}{p.dados.servico.stringValue}{' '}{'-'}{' '}{p.dados.horas.stringValue}</Card.Title>}
               <Button className='btn btn-light' onClick={() => apagar(p.id)}><BsTrashFill /></Button>
             </Card.Body>
         </Card>
)
}

export default CardD