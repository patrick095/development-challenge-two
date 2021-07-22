import { Request, Response } from 'express'
import { createConnection, Like } from 'typeorm'
import { Clients } from '../database/entity/Clients'
import ORMConfig from '../config/ORMConfig'

type Client = {
    name: string;
    age: number;
    phone: string;
    email: string;
}
export default {
    async insertClient(req: Request, res: Response) {
        const { name, age, phone, email }: Client = req.body
        if (!name || !age || !phone || !email) {
            return res.json('dados incorretos')
        }
        const connection = await createConnection(ORMConfig)
        let clientsRepository = connection.getRepository(Clients)
        const client = await clientsRepository.find({
            where:[
                { name },
                { phone },
                { email }
            ]
        })
        if (client.length > 0) {
            connection.close()
            return res.json({message: "dado já cadastrado."})
        }
        const Client = new Clients
        Client.age = age
        Client.name = name
        Client.email = email
        Client.phone = phone
        Client.createdAt = new Date()
        Client.updatedAt = new Date()
        await connection.manager.save(Client)
        connection.close()
        return res.json({
            Client,
            message: 'Cliente inserido com sucesso!'
        }) 
    },
    async listClients(req: Request, res: Response){
        const connection = await createConnection(ORMConfig)
        let clientsRepository = connection.getRepository(Clients)
        const allClients = await clientsRepository.find()
        connection.close()
        return res.json(allClients)
    },
    async findClient(req: Request, res: Response){
        const name = req.query.name as string
        const connection = await createConnection(ORMConfig)
        let clientsRepository = connection.getRepository(Clients)
        const client = await clientsRepository.find({ where: [
            { name: Like(`%${name}%`)}
        ]})
        connection.close()
        return res.json(client)
    },
    async deleteClient(req: Request, res: Response){
        const email = req.query.email as string
        const connection = await createConnection(ORMConfig)
        let clientsRepository = connection.getRepository(Clients)
        const client = await clientsRepository.delete({ email })
        connection.close()
        if (client.affected > 0) {
            return res.json({ message: "success"})
        }
        else {
            return res.json({ message: "failure"})
        }
    }
}