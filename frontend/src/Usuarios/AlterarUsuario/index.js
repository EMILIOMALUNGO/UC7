import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../Api/api'
import './altera.estilo.scss'

export default function AlterarUsuario() {
    const navigation = useNavigate()
    const { id } = useParams()
    const [listaUsuario, setListaUsuario] = useState('')
    const [alteraNome, setAlteraNome] = useState('')
    const [alteraEmail, setAlteraEmail] = useState('')

    useEffect(() => {
        async function listarUsuario() {
            const resposta = await api.get(`/ListarUsuarioUnico/${id}`)
            setListaUsuario(resposta.data)
        }
        listarUsuario()
    }, [id])

    useEffect(() => {
        setAlteraNome(listaUsuario.nome)
        setAlteraEmail(listaUsuario.email)
    }, [listaUsuario])

    async function AlterarUsuario(e) {
        e.preventDefault()
        const resposta = await api.put('/AlterarUsuario', {
            id,
            alteraNome,
            alteraEmail
        })
        toast.info(resposta.data.dados)
        navigation('/ListarUsuarios')
    }

    return (
        <div className='conteinerAlterar'>
            <h1>Altera Usuário</h1>
            <form onSubmit={AlterarUsuario}>
                <label>Nome:</label>
                <input type="text"
                    value={alteraNome}
                    onChange={(e) => setAlteraNome(e.target.value)}
                />

                <label>Email:</label>
                <input type="text"
                    value={alteraEmail}
                    onChange={(e) => setAlteraEmail(e.target.value)}

                />
                <div className='conteinerButton'>
                    <button className='buttonEnviarAlterar' type='submit'>Enviar</button>
                    <button className='buttonInicioAlterar' onClick={() => navigation('/ListarUsuarios')} >Listar Usuários</button>
                </div>
            </form>
        </div>
    )
}