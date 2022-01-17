import { Sequelize } from "sequelize";


export default  new Sequelize(
        process.env.SQL_DB_NAME,
        process.env.SQL_DB_USER,
        process.env.SQL_DB_PASSWORD,
        {
            dialect:'postgres',
            host:  process.env.SQL_DB_HOST,
            port: Number( process.env.SQL_DB_PORT)
        }
    )