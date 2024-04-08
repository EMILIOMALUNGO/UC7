import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../Api/api'
import './criar.estilo.scss'


export default function CriarUsuarios() {
    const navigation = useNavigate()
    const [nomeInput, setNomeInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [password, setPassword] = useState('')

    async function CriarUsuarios(e) {

        try {
            e.preventDefault()
            let regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/
            if (!nomeInput || !emailInput || !password) {
                toast.warn('Existem Campos em Branco')
                return
            } else if (!regex.exec(password)) {
                toast.info('A senha deve conter no mínimo 1 caractere em maiúsculo, 1 caractere em minusculo, 1 número e 1 caractere especial!')            //document.formulario.senha.focus();
                return
            }
            const nome = nomeInput.toUpperCase()
            const email = emailInput.toLowerCase()
            const resposta = await api.post('/CriarUsuarios', {
                nome,
                email,
                password
            })
            toast.success(resposta.data.dados)
            navigation('/ListarUsuarios')
        } catch (err) {
            toast.warn(err.response.data.message)
            console.log(err.response.data.message)
        }
    }

    return (
        <div className='conteinerCriar'>
            <h1>Criar Usuários</h1>
            <form onSubmit={CriarUsuarios}>
                <label>Nome:</label>
                <input
                    type="text"
                    value={nomeInput}
                    onChange={(e) => setNomeInput(e.target.value)}
                />
                <label>Email:</label>
                <input
                    type="text"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                />
                <label>Senha:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='conteinerButton'>
                    <button className='buttonEnviar' type='submit'>Enviar</button>
                    <button className='buttonInicioCriar' onClick={() => navigation('/Dashboard')} >Dashboard</button>
                </div>
            </form>
        </div>
    )
}