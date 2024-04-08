import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './Inicio'
import Dashboard from './Dashboard'
import Produtos from './Produtos'
import Clientes from './Clientes/CriarClientes'
import Login from './Login'
import CriarUsuarios from './Usuarios/CriarUsuarios'
import ListarUsuarios from './Usuarios/ListarUsuarios'
import AlterarUsuario from './Usuarios/AlterarUsuario'
import ListarUsuarioNome from './Usuarios/ListarUsuarioNome'

export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Produtos' element={<Produtos />} />
                <Route path='/Clientes' element={<Clientes />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/CriarUsuarios' element={<CriarUsuarios />} />
                <Route path='/ListarUsuarios' element={<ListarUsuarios />} />
                <Route path='/ListarUsuarioNome' element={<ListarUsuarioNome />} />
                <Route path='/AlteraUsuario/:id' element={ <AlterarUsuario /> } />
            </Routes>
        </BrowserRouter>
    )
}