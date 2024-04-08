import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../Api/api'
import { toast } from 'react-toastify'
import './login.estilo.scss'

export default function Login() {
    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function AuthLogin(e) {
        e.preventDefault()
        if(!email || !password){
            toast.warn('Existem Campos em Branco')
            return
        }
        try {
            const resposta = await api.post('/AuthLogin', {
                email,
                password
            })
            navigation('/Dashboard')
            toast.success(resposta.data.dados)
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }

    return (
        <div className='conteinerLogin' >
            <h1>Login</h1>

            <form onSubmit={AuthLogin}>
                <label>Email:</label>
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Senha:</label>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='conteinerButton'>
                    <button className='buttonEnviarLogin' type='submit'>Enviar</button>
                    <button className='buttonInicioLogin' onClick={() => navigation('/')} >Início</button>
                </div>
            </form>

        </div>
    )
}