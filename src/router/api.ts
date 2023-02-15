import { Router } from "express";
import * as ApiControle from '../controleApi/controleApi'


const router = Router()

router.get('/entrada', ApiControle.entragadaGet)
router.post('/entrada', ApiControle.entradaPost)


router.get('/saida', ApiControle.saidadaGet)
router.post('/saida', ApiControle.saidaPost)



export default router