import { Router } from "express";
import * as ApiControle from '../controleApi/controleApi'


const router = Router()

router.get('/entrada', ApiControle.entragadaGet)
router.get('/entrada/:id_1', ApiControle.entraGetId)
router.post('/entrada', ApiControle.entradaPost)
router.delete('/entrada/:id_1', ApiControle.entradaDel)
router.put('/entrada/:id_1', ApiControle.entradaPut)



router.get('/saida', ApiControle.saidadaGet)
router.get('/saida/:id_2', ApiControle.saidaGetId)
router.post('/saida', ApiControle.saidaPost)
router.delete('/saida/:id_2', ApiControle.saidaDel)
router.put('/saida/:id_2', ApiControle.saidaPut)



export default router