import express from 'express';
import validate from 'express-validation';
import controller from '../../controllers/city.controller';
import validation from '../../validations/city.validation';

const router = express.Router();


export default router
  /**
   * @api {get} v1/city
   * @apiDescription Получение
   * @apiVersion 1.0.0
   * @apiName City
   *
   * @apiSuccess {Object}  city     city desc
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   */
  .get('/', controller.getTodayFiveCities)

/*
router
  .route('/:id')
  .get(validate(validation.getOne) controller.getOne);*/
