import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import ColabLista from "./pages/produto/ColabLista";
import ProdutoListap from "./pages/produto/ProdutoListap";

import ColabForm from "./pages/produto/ColabForm";
import HorasForm from "./pages/produto/HorasForm";
import FolgasForm from "./pages/produto/FolgasForm";
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
            <Route path="/colab" element={<ColabLista />} />
            <Route path="/produto/lista" element={<ProdutoListap />} />
            <Route path="/colab/:id" element={<ColabDetalhe />} />
            <Route path="/colab/create" element={<ColabForm />} />
            {/* <Route path="/produto/createi" element={<ProdutoImage />} /> */}
            <Route path="/colab/update/:id" element={<ColabForm />} />
            <Route path="/horas/update/:id" element={<HorasForm />} />
            <Route path="/Folgas/update/:id" element={<FolgasForm />} />

            <Route path="/produto/pdf/:id" element={<ProdutoPDF />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
