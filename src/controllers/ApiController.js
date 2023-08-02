
require("dotenv").config();
class ApiController{
  index(req,res){
    const dados = req.query['hub.challenge'];
    console.log('query',req.query);
    console.log('body',req.body);
    const {entry} = req.body;
    console.log('\n\n',entry[0].changes,'\n\n');
    console.log('\n\n',JSON.stringify(entry),'\n\n')
    console.log('params',req.params);

    res.send(dados);
  }
}

export default new ApiController();
