import { Request, Response } from 'express'

export const login = async (req: Request, res: Response) => {
  res.status(200).send('login route')
}

export default {
  login,
}
