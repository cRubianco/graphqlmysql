import app from './app';
import { AppDataSource } from "./database/db";

const port = process.env.PORT || 3000;

const main = async () => {
  
  try {
    await AppDataSource.initialize();
    app.listen(port);
    console.log( `Server on port ${port}` );
  } catch (error) {
    console.log(error);
    
  }
}

main();