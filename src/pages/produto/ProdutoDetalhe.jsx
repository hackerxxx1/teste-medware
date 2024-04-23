// import React, { useEffect, useState } from 'react'
// import ProdutoService from '../../services/ProdutoF';
// import DetalheP from '../../components/cardsDetalhes/DetalheP';
// import { useParams } from 'react-router-dom';

// const ProdutoDetalhe = () => {
//   const [produto, setProduto] = useState([])
//   const [foto, setFotos] = useState([])
//   const [url ,setUrl] = useState([])
//   const params = useParams()

//   useEffect(() => {
//     async function data() {
//      const dat = await ProdutoService.get(params.id);
//      const dat1 = await ProdutoService.getimgs(dat.fotosguitarra);
          
  
//      setProduto(dat)
//      setFotos(dat1.items)
//     }
//     async function data1() {
//       let urls = []
//       for (let index = 0; index < foto.length; index++) {
//         console.log();
//         urls [index] = await ProdutoService.geturlimg(foto[index].fullPath)
       
//       }
//       setUrl(urls)
//     }
//     data();
//     data1();
//   }, [params])
  
  
  
// return (
//     {produto = undefined && <div><h1>Carregando</h1></div>}
//     {produto && <div className='fundo'>
//       {url&&<DetalheP
//         id={params.id}
//         nome={produto.nome}
//         descricao={produto.descricao}
//         telefone={produto.telefone}
//         datain={produto.datain}
//         dataout={produto.dataout}
//         nomeins={produto.nomeins}
//         tipo={produto.tipo}
//         cordas={produto.cordas}
//         tipocorda={produto.marca}
//         email={produto.email}
//         cep={produto.cep}
//         quadra={produto.quadra}
//         conjunto={produto.conjunto}
//         casa={produto.complemento}
//         referencia={produto.referencia}
//         cidade={produto.cidade}
//         fotoc={produto.fotoc}
//         ur={url}
//       />
//     </div>}
      

//    }
// )
// }

// export default ProdutoDetalhe
