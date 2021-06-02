const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port:'3307'
});
const Todo = require('./Todomodel')(sequelize);

exports.TodoList = async (req, res) => {
    try {
      const result = await Todo.findAll({});
      res.json(result);
    } catch (e) {
      //console.log(e);
      res.status(404).send("not found");
    }
  }

exports.TodoDoneList = async (req, res) => {
  try {
    const result = await Todo.findAll({ where: { status: 'DONE' }});
    res.json(result);
  } catch (e) {
    //console.log(e);
    res.status(404).send("not found");
  }
}

exports.TodoAdd = async (req, res) => {
  try {
    const { title, status } = req.body;
    const ret = await Todo.create({
        title: title,
        status: status
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

exports.TodoDone = async (req, res) => {
  try {
    const { title } = req.body;
    let result = await Todo.update(
        { status: 'DONE' },
        { where: { title: title }});
    console.log('Modify success :', result);
    res.send(result);
  }
  catch (error) {
    console.log('Error :', error);
  }
}

exports.prepareModel = async () => {
  try {
      await Todo.sync({force:true});
  }
  catch (error) {
      console.log('Todo.sync Error ', error);
  }
}