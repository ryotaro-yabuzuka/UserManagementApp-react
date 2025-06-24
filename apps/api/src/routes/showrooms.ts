import { Router } from 'express'
import { getClient } from '../services/dynamo'

const router = Router()

router.get('/', async (_req, res) => {
  const db = getClient()
  const result = await db.scan({ TableName: process.env.TABLE_NAME! })
  res.json(result.Items)
})

export default router
