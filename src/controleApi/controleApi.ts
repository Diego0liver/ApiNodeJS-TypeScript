import {Request,Response} from 'express'
import {Entradas} from '../db/models'
import {Saidas} from '../db/models2'


export const entragadaGet = async (req: Request, res: Response)=>{
  try{ let enterGet = await Entradas.findAll()
  res.json(enterGet)}catch (erro) {
    return console.error("Erro na List : ", erro);
}
}

export const entraGetId = async (req:Request, res:Response)=>{
  let  {id_1}  = req.params;
  let forId = await Entradas.findByPk(id_1)
  res.send(forId)
  }

export const entradaPost = async (req: Request, res: Response)=>{
    let titulo = req.body.titulo
    let preco = req.body.preco

    let newEnter = await Entradas.create({
        titulo, preco
    })
    res.json({id_1: newEnter.id_1, titulo, preco})
}

export const entradaDel = async (req: Request, res: Response)=>{
  let  {id_1}  = req.params;
  await Entradas.destroy({where:{id_1}})
  res.send({Ok:'Apagado com sucesso'})
}

export const entradaPut = async (req: Request, res: Response)=>{
  let  {id_1}  = req.params;
  let {titulo, preco } = req.body
  let entradaEdit = await Entradas.findByPk(id_1)
  if(entradaEdit){
  entradaEdit.titulo = titulo
  entradaEdit.preco = preco
  await entradaEdit.save()
  res.send(entradaEdit)}else{
      res.send("Error")
  }
}

  




export const saidadaGet = async (req: Request, res: Response)=>{
  let exitGet = await Saidas.findAll()
  res.send(exitGet)
}



export const saidaGetId = async (req:Request, res:Response)=>{
    let  {id_2}  = req.params;
    let forId = await Saidas.findByPk(id_2)
    res.send(forId)
    }
    
  
export const saidaPost = async (req: Request, res: Response)=>{
  let titulo = req.body.titulo
  let preco = req.body.preco

  let newEnter = await Saidas.create({
      titulo, preco
  })
  res.json({id_2: newEnter.id_2, titulo, preco})
}


export const saidaDel = async (req: Request, res: Response)=>{
  let  {id_2}  = req.params;
  await Saidas.destroy({where:{id_2}})
  res.send({Ok:'Apagado com sucesso'})
}

export const saidaPut = async (req: Request, res: Response)=>{
  let  {id_2}  = req.params;
  let {titulo, preco } = req.body
  let saidaEdit = await Saidas.findByPk(id_2)
  if(saidaEdit){
  saidaEdit.titulo = titulo
  saidaEdit.preco = preco
  await saidaEdit.save()
  res.send(saidaEdit)}else{
      res.send("Error")
  }
}
