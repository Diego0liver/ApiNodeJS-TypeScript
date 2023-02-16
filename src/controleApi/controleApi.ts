import {Request,Response} from 'express'
import {Entradas} from '../db/models'
import {Saidas} from '../db/models2'


export const entragadaGet = async (req: Request, res: Response)=>{
  try{ let enterGet = await Entradas.findAll()
  res.json(enterGet)}catch (erro) {
    return console.error("Erro na List : ", erro);
}
}



export const saidadaGet = async (req: Request, res: Response)=>{
  let exitGet = await Saidas.findAll()
  res.send(exitGet)
}



export const entradaPost = async (req: Request, res: Response)=>{
    let titulo = req.body.titulo
    let preco = req.body.preco

    let newEnter = await Entradas.create({
        titulo, preco
    })
    res.json({id_1: newEnter.id_1, titulo, preco})
}


export const saidaPost = async (req: Request, res: Response)=>{
  let titulo = req.body.titulo
  let preco = req.body.preco

  let newEnter = await Saidas.create({
      titulo, preco
  })
  res.json({id_2: newEnter.id_2, titulo, preco})
}


export const entradaDel = async (req: Request, res: Response)=>{
  let  {id_1}  = req.params;
  await Entradas.destroy({where:{id_1}})
  res.send({Ok:'Apagado com sucesso'})
}



export const saidaDel = async (req: Request, res: Response)=>{
  let  {id_2}  = req.params;
  await Saidas.destroy({where:{id_2}})
  res.send({Ok:'Apagado com sucesso'})
}