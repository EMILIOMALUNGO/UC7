import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import { toast } from 'react-toastify'
import api from '../../Api/api'
import './listar.estilo.scss'

export default function ListarUsuarios() {
    const navigation = useNavigate()

    const [usuarios, setUsuarios] = useState([''])

    useEffect(() => {
        async function listarUsuarios() {
            const resposta = await api.get('/ListarUsuarios')
            setUsuarios(resposta.data)
        }
        listarUsuarios()
    }, [usuarios])

    async function excluirUsuarios(id) {
        const resposta = await api.delete('/ApagarUsuarios', {
            data: {
                remover: id
            }
        })
        toast.success(resposta.data.dados)
    }

    return (
        <div className='conteinerListar'>
            <h1>Listar Usuários</h1>
            <div className='listarUsuarios'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-Mail</th>
                            <th>Criado</th>
                            <th>Alterado</th>
                            <th className='icones'>Editar</th>
                            <th className='icones'>Apagar</th>
                        </tr>
                        {usuarios.map((resultado) => {
                            return (
                                <tr>
                                    <td>{resultado.id}</td>
                                    <td>{resultado.nome}</td>
                                    <td>{resultado.email}</td>
                                    <td>{resultado.create_at}</td>
                                    <td>{resultado.update_at}</td>
                                    <td className='icones'><Link to={`/AlteraUsuario/${resultado.id}`}><FiEdit color='blue' size={20} /></Link></td>
                                    <td className='icones'><FiTrash2 color='red' size={20} onClick={() => excluirUsuarios(resultado.id)} /></td>
                                </tr>

                            )
                        })}
                    </thead>
                </table>
            </div>
            <button className='buttonInicioListar' onClick={() => navigation('/Dashboard')} >Dashboard</button>
        </div>
    )
}