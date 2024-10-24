import express from 'express'
import { boardValidation } from '~/validations/boardValidation'
import { StatusCodes } from 'http-status-codes'
import { boardController } from '~/controllers/boardController'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({message: 'GET: API get list boards' })
  })
  .post( boardValidation.createNewBoard, boardController.createNew)

export const boardRoute = Router
