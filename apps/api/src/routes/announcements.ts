import { Router } from 'express'
const router = Router()

router.post('/', (req, res) => {
  console.log(req.body)
  res.sendStatus(201)
})

export default router
