import Companies from "../entities/Companies";
class CompaniesController {
    async create(req,res){
        const { name } = req.body;
        console.log(name);
        try {
            const companie = await Companies.create({ name, });
            return res.json({companie});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ Error: error.message });
        }
        
    }

}

export default new CompaniesController();