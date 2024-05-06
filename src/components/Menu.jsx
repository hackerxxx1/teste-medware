import React from 'react'
import { Container, Nav, Navbar, NavDropdown ,Form, Button} from 'react-bootstrap'
import { RiSearchEyeLine } from 'react-icons/ri'
import { Link ,Navigate, useLocation, useNavigate} from 'react-router-dom'
// import MenuItemUsuario from './MenuItemUsuario';
import { useForm } from "react-hook-form";

const Menu = () => {

  const { register, handleSubmit, getValues } = useForm();
  const navigate = useNavigate();
  function receiveData() {
    const values = getValues();
    navigate("/produto/lista", { state: values.busca });
  }
  return (
    <div  >

      <Navbar bg="dark" variant="dark" fixed="top" className="mb-3">
        <Container>
          <Navbar.Brand href="/" className='logo' >Medware</Navbar.Brand>

          <Nav className="me-auto">
            
            
              <NavDropdown.Item href="/colab" className='text-white colabut' >Colaboradores</NavDropdown.Item>
              <div className="search-division d-flex justify-content-end">
              <form
                  
                  controlId="busca"
                  placeholder="Buscar..."
                >
                  <input type="text" id="divbusca" {...register("busca")} />
                </form>
                {
                  document.addEventListener("keypress", function(e) {
                    if(e.key === 'Enter') {
                    
                        var btn = document.querySelector("#submit");
                      
                      btn.click();
                    
                    }
                  })
                }
                <Button type="submit" id="submit" onClick={handleSubmit(receiveData)} className="search-button btn btn-light btn-outline-danger">
                     <RiSearchEyeLine className='iconi'/>Pesquisar
                </Button>
          </div>
            
          </Nav>


        </Container>
      </Navbar>

    </div>
  )

}

export default Menu