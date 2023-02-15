import Usuario from './models/usuario.js'
import Tarefa from './models/tarefa.js'

// cria vários objetos e os adicona a um array pra simular uma lista de objetos

const bdUsuarios = []
const bdTarefas = []

// cria um obj do tipo Usuario e adicona a lista de usuarios
const usuario = new Usuario("Larissa Benedita Assis", "larissabeneditaassis@reginfo.com.br", "123")
bdUsuarios.push(usuario)

const usuario2 = new Usuario("Juan Luan Gustavo Ribeiro", "juan.luan.ribeiro@carubelli.com.br", "456")
bdUsuarios.push(usuario2)

const usuario3 = new Usuario("Gael Francisco Fernandes", "gaelfranciscofernandes@defensoria.sp.gov.br","456")
bdUsuarios.push(usuario3)

const usuario4 = new Usuario("Juliana Fernanda Alice Nunes", "juliana-nunes84@ideiaviva.com.br","456")
bdUsuarios.push(usuario4)

// cria um obj do tipo Tarefa e adiconaa lista de tarefas
const tarefa = new Tarefa('Modelar BD', 'Modelar BD Projeto A', 'A fazer', new Date())
bdTarefas.push(tarefa)

const tarefa2 = new Tarefa('Estilização site', 'Page de usuário', 'A fazer', new Date())
bdTarefas.push(tarefa2)

// exportando
export {bdUsuarios, bdTarefas}