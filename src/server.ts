import  express, {Request, Response}  from "express";
import dotenv from "dotenv"
import rotasApi from './router/api'
import cors from 'cors'



dotenv.config()


const server = express()
server.use((req: Request, res: Response, next) => {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    server.use(cors());
    next();
});
server.use(express.json())
server.use(rotasApi)

server.use((req: Request, res: Response)=>{
    res.status(400)
    res.json({Erro: 'Erro 400 rota nao encontrada'})
})


server.listen(process.env.PORT)