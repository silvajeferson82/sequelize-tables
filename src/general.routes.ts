import { Router } from "express";

const routes = Router();

routes.get('/', (req,res) => {
    res.send('App iniciado');
})
export default routes;