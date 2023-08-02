
require("dotenv").config();
class ApiController{
  index(req,res){
    const {hub_challenge} = req.body;
    console.log(req.body);
    res.send(hub_challenge);
  }
}

export default new ApiController();
