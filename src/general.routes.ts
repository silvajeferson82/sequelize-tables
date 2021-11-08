import { Router } from "express";

import Companies from "./app/models/Company/routes";

const routes = Router();

routes.get('/', (req,res) => {
    res.send('App iniciado');
})
routes.use('/companies', Companies);

export default routes;