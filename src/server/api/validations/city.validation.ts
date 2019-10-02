import Joi from 'joi';

export default {
  // GET /v1/city/:id
  cityOneGET: {
    options: {
      contextRequest: true,
    },
    params: Joi.object().keys({
      id: Joi.string().required()
    })
    /*
    Joi.array()
      .items(Joi.object().keys({
        _id: Joi.string().required(),
        count: Joi.number().min(0).required(),
      }))
      .required(),
      */
  },

};
