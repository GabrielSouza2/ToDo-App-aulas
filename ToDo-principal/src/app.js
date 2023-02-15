// Importando o packages
import express from 'express'

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
// Usando Middleware
app.use(express.json())

// importando os controllers
import usuarioController from './controllers/usuario-controller.js'
import tarefaController from './controllers/tarefa-controller.js'

usuarioController.rotas(app)
tarefaController.rotas(app)

export default app