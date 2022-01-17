import sequelize from '../config/db.config'
export default async () =>{
    await sequelize.authenticate(),
    await sequelize.sync()
}