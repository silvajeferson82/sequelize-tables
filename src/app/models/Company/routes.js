import { Router } from 'express'
import companiesController from './controllers/CompaniesController';

const routes = Router();

routes.post('/create', companiesController.create);

export default routes;