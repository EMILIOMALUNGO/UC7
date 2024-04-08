import { Link } from 'react-router-dom'
import './inicio.estilo.scss'

export default function Inicio() {


    return (
        <div className='conteinerInicio'>
            <h1>Início</h1>
            <div className='linksInicio'>
                <h2><Link to='/Login'>Login</Link></h2>
            </div>
        </div>
    )
}