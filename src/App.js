import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import ColabLista from "./pages/produto/ColabLista";
import ProdutoListap from "./pages/produto/ProdutoListap";

import ColabForm from "./pages/produto/ColabForm";
import ColabDetalhe from "./pages/produto/ColabDetalhe";
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
            <Route path="/produto" element={<ColabLista />} />
            <Route path="/produto/lista" element={<ProdutoListap />} />
            <Route path="/produto/:id" element={<ColabDetalhe />} />
            <Route path="/colab/create" element={<ColabForm />} />
            {/* <Route path="/produto/createi" element={<ProdutoImage />} /> */}
            <Route path="/colab/update/:id" element={<ColabForm />} />
            
            <Route path="/produto/pdf/:id" element={<ProdutoPDF />} />

           

          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
