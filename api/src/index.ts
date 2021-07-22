import 'reflect-metadata';
import dotenv from 'dotenv'
import server from './app'

dotenv.config()

const PORT = process.env.PORT || 3001
server.listen(PORT, () => console.log('server running on port '+PORT) )