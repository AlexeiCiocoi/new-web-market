import Logger from './logger'
import expressLoader from './express'
import dependencyInjector from './dependencyInjector';
import sequelize from './sequelize';

export default async ({expressApp}) =>{

    await expressLoader({ app: expressApp });
    Logger.info('Express loaded');

    await dependencyInjector();
    Logger.info('dependencyInjector loaded');

    await sequelize()
    Logger.info('database loaded and connected');
}