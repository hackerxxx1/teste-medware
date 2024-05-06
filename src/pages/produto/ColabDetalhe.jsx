import React, { useEffect, useState } from 'react'
import ColabService from '../../services/ColabF';
import DetalheP from '../../components/cardsDetalhes/DetalheP';
import { useParams } from 'react-router-dom';

const ProdutoDetalhe = () => {
const [colab, setColab] = useState([])
const [foto, setFotos] = useState([])
const [url ,setUrl] = useState([])
const params = useParams()

useEffect(() => {
async function data() {
const dat = await ColabService.get(params.id);
// const dat1 = await ColabService.getimgs(dat.fotosguitarra);
setColab(dat)

// setFotos(dat1.items)
}
async function data1() {
let urls = []
for (let index = 0; index < foto.length; index++) {
console.log();
// urls [index] = await ColabService.geturlimg(foto[index].fullPath)
}
setUrl(urls)
}
data();
data1();
}, [params])

return (

  <div className='fundo'>
       {url&&<DetalheP
         id={params.id}
         nome={colab.nome}
         descricao={colab.descricao}
         telefone={colab.telefone}
         email={colab.email}
         tipo={colab.tipo}
         fotoc={colab.fotoc}
         horas={colab.horas}
         ur={url}
       />}
     </div>
)

}

export default ProdutoDetalhe
