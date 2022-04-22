import { DataSource } from "typeorm";
import { DB_NAME, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT } from '../config';
import { Users } from "../entities/users";

export const AppDataSource = new DataSource({
  type: "mysql",
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(DB_PORT),
  // logging: true,
  synchronize: true,
  entities: [Users],
  ssl: false,
});