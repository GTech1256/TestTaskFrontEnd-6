import { config } from 'dotenv';
config();
import sequelize from './config/sequelize';
import logger from './config/logger';
import app from './config/express';
import Weather from './api/models/Weather.model';

sequelize.addModels([Weather])
 
// listen to requests
app.listen(process.env.PORT, () => logger.info(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`));

/**
* Exports express
* @public
*/
export default app;
