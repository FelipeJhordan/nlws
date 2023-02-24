import express from 'express';
import knex from './database/connection';
import multer from 'multer';
import multerConfig from '../src/config/multer';
import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';
import { celebrate, Joi} from 'celebrate'
const routes = express.Router();
const upload = multer(multerConfig);
const pointsController = new PointsController();
const itensController = new ItemsController();

// index = allList || show = show one obj || create || update ||  remove
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.get('/', (request,response)=> {
    response.send("Funcionando...");
})
routes.get('/items', itensController.index);


routes.post('/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            whatsapp: Joi.number().required(),
            numero: Joi.number().required(),
            longitude: Joi.number().required(),
            latitude: Joi.number().required(),
            city: Joi.string().required(),
            uf:Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }), 
    pointsController.create);

export default routes;
