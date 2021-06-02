const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port:'3307'
});
const Group = require('./Groupmodel')(sequelize);

exports.GroupList = async (req, res) => {
    try {
      const result = await Group.findAll({});
      res.json(result);
    } catch (e) {
      //console.log(e);
      res.status(404).send("not found");
    }
  }

// exports.GroupTodoList = async (req, res) => {
//   try {
//     const result = await Group.findAll({ where: { status: 'DONE' }});
//     res.json(result);
//   } catch (e) {
//     //console.log(e);
//     res.status(404).send("not found");
//   }
// }

exports.GroupAdd = async (req, res) => {
  try {
    const { title } = req.body;
    const ret = await Group.create({
        title: title
    }, {logging: false});
    const newData = ret.dataValues;
    console.log(newData);
    console.log('Create success');
    res.send(newData);
  }
  catch (error) {
    console.log('Error : ', error);
  }
}

exports.prepareModel = async () => {
  try {
      await Group.sync({force:true});
      console.log("group table 생성");
  }
  catch (error) {
      console.log('Group.sync Error ', error);
  }
}