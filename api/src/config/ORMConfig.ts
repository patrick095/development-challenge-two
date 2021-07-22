import { Clients } from "../database/entity/Clients";

interface IORMConfig {
   type: "postgres",
   host: string,
   port: number,
   username: string,
   password: string,
   database: string,
   synchronize: boolean,
   logging: boolean,
   entities: any[],
   migrations: string[],
   subscribers: string[],
   cli: any
};

const ORMConfig: IORMConfig = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "medcloudbr",
    synchronize: true,
    logging: false,
    entities: [
       Clients
    ],
    migrations: [
       "../database/migration/**/*.ts"
    ],
    subscribers: [
       "../database/subscriber/**/*.ts"
    ],
    cli: {
       "entitiesDir": "../database/entity",
       "migrationsDir": "../database/migration",
       "subscribersDir": "../database/subscriber"
    }
}
export default ORMConfig;