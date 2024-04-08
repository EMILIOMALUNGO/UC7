import {Router} from 'express'
import  multer  from 'multer'
import uploadConfig from './config/multer'

import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { ListarUsuariosController } from './controllers/Usuarios/ListarUsuariosController'
import { ListarUsuarioUnicoController } from './controllers/Usuarios/ListarUsuarioUnicoController'
import { AlterarUsuarioController } from './controllers/Usuarios/AlterarUsuarioController'
import { ApagarUsuariosController } from './controllers/Usuarios/ApagarUsuariosController'
import { AuthUsuarioController } from './controllers/Usuarios/AuthUsuarioController'

import { ListarClientesController } from './controllers/Clientes/ListarClientesController'
import { CriarClientesController } from './controllers/Clientes/CriarClientesController'
import { CriarProdutosController } from './controllers/Produtos/CriarProdutosController'

import { isAutenticado } from './middleware/isAutenticado'
const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//Usuários
router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.get('/ListarUsuarios', isAutenticado, new ListarUsuariosController().handle)
router.get('/ListarUsuarioUnico/:id', isAutenticado, new ListarUsuarioUnicoController().handle)
router.put('/AlterarUsuario', isAutenticado, new AlterarUsuarioController().handle)
router.delete('/ApagarUsuarios', isAutenticado, new ApagarUsuariosController().handle)
router.post('/AuthLogin', new AuthUsuarioController().handle)

//Clientes
router.post('/CriarClientes', isAutenticado, new CriarClientesController().handle)
router.get('/ListarClientes', isAutenticado, new ListarClientesController().handle)

//Produtos
router.post('/CriarProdutos', isAutenticado, upload.single('file'), new CriarProdutosController().handle)



export {router}