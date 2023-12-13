import express, { Application } from 'express';
import cors from "cors"
import TestRouter from './src/router/TestRouter';


const app: Application = express();

const PORT = 8000;

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors({}));
// Routers
app.use("/api/test", TestRouter)

// Run application
app.listen(PORT, () => {
    console.log("listening to port ", PORT);
});