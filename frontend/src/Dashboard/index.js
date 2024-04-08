import { Link } from 'react-router-dom'
import './dash.estilo.scss'

export default function Dashboard() {


    return (
        <div className='conteinerDashboard'>
            <h1>Dashboard</h1>
            <div className='linksDashboard'>
                <h2><Link to='/ListarUsuarios'>Listar Usuários</Link></h2>
                <h2><Link to='/ListarUsuarioNome'>Listar Usuário Por Nome</Link></h2>
                <h2><Link to='/CriarUsuarios'>Criar Usuários</Link></h2>
            </div>
        </div>
    )
}