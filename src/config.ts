/** 
 * Para poder importar las variables de entorno
 * 
 * Las variables de entorno tambien se pueden importar acá
 *  dela siguiente manera:
 * import dotenv from "dotenv";
 *
 * // configurar dotenv
 * dotenv.config();
 * 
 * // --------- también puedo importar solo config  -------
 * import {config} from "dotenv";
 * y lo ejecuto
 * config()
 * 
*/
import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;

export const DB_NAME = process.env.DB_NAME;
export const DB_USERNAME = process.env.DB_USERNAME || "admin";
export const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 3306;
