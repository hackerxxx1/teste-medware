import React , { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UsuarioService from '../services/Usuario';

const MenuItemUsuario = () => {
  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    setUsuario(UsuarioService.getAutenticado())
  }, [])

  if (usuario == null) {
    return (<Link className="nav-link" to={"/usuario/login"}>
      {/* Login */}
    </Link>)
  } else {
    return (
      <Link className="nav-link" to={"/usuario/" + usuario.id}>
        {/* {usuario.nome} */}
      </Link>
    )
  }

}

export default MenuItemUsuario