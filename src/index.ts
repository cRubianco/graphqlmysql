import app from './app';
import { PORT } from './config';
import { AppDataSource } from "./database/db";

const main = async () => {   
  try {
    await AppDataSource.initialize();
    app.listen(PORT);
    console.log( `Server on port ${PORT}` );
  } catch (error) {
    console.log(error);
  }
}

main();