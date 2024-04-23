import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProdutoLista from "./pages/produto/ProdutoLista";
import ProdutoListap from "./pages/produto/ProdutoListap";

import ProdutoImage from "./pages/produto/ProdutoImage";
import ProdutoForm from "./pages/produto/ProdutoForm";
import ProdutoDetalhe from "./pages/produto/ProdutoDetalhe";
import Home from "./pages/home/Home";
import ProdutoPDF from "./pages/produto/ProdutoPDF";



function App() {

  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            
            {/* Rotas das páginas */}
            <Route path="/" element={<Home />} />
            <Route path="/produto" element={<ProdutoLista />} />
            <Route path="/produto/lista" element={<ProdutoListap />} />
            <Route path="/produto/:id" element={<ProdutoDetalhe />} />
            <Route path="/produto/create" element={<ProdutoForm />} />
            {/* <Route path="/produto/createi" element={<ProdutoImage />} /> */}
            <Route path="/produto/update/:id" element={<ProdutoForm />} />
            <Route path="/produto/updatei/:id" element={<ProdutoImage />} />
            <Route path="/produto/pdf/:id" element={<ProdutoPDF />} />

           

          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
