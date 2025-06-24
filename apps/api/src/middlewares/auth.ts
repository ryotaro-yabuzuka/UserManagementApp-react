import { Request, Response, NextFunction } from 'express'

export default function auth(req: Request, _res: Response, next: NextFunction) {
  // TODO: Cognito 認証検証
  console.log('auth placeholder', req.headers.authorization)
  next()
}
