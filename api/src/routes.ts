import { Router } from "express"
import clientController from './controllers/client'

const routes = Router()

routes.get('/', clientController.listClients)
routes.get('/find', clientController.findClient)
routes.post('/', clientController.insertClient)
routes.delete('/', clientController.deleteClient)
export default routes