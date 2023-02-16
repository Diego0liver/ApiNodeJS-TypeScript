import { Router } from "express";
import * as ApiControle from '../controleApi/controleApi'


const router = Router()

router.get('/entrada', ApiControle.entragadaGet)
router.post('/entrada', ApiControle.entradaPost)
router.delete('/entrada/:id_1', ApiControle.entradaDel)


router.get('/saida', ApiControle.saidadaGet)
router.post('/saida', ApiControle.saidaPost)
router.delete('/saida/:id_2', ApiControle.saidaDel)



export default router