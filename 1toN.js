//
// Sequelize를 이용한 관계
//
var Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'dev', 'secret', { dialect: 'mysql', host: '127.0.0.1',port:3307 });

const Group = sequelize.define('Group', {
   name: Sequelize.STRING(100)
}, { tablename:'groups',timestamps: false });

const Todo = sequelize.define('Todo', {
   name: Sequelize.STRING(100),
   done: Sequelize.BOOLEAN
}, { tablename:'todos',timestamps: false });

async function doOneToMany1() {
   Group.hasMany(Todo, { foreignKey: 'groupId' });
   // Todos에 GroupId FK 생성

   try {
      await Group.sync();
      await Todo.sync();

      const group = await Group.create({ name: '공부' });
      const todo1 = await Todo.create({ name: 'nodejs공부' , done:true});
      const todo2 = await Todo.create({ name: 'react공부' , done:true});

      await group.addTodo(todo1);
      await group.addTodo(todo2);

      // include를 넣으면 자동으로 join 한다.
      const ret1 = await Group.findAll({
         include: [{model: Todo}]});
      
      const findGroup1 = ret1[0];

      console.log('group name:', findGroup1.name);
      
      // 프로퍼티로 바로 접근
      const todos = findGroup1.Todos;

      for(item of todos) {
         console.log('member name:', item.name);
      }
   }
   catch (error) {
      console.log('Error :', error);
   }
}

async function doOneToMany2() {
   Member.belongsTo(Team, { foreignKey: 'teamId' });
   // Memebers에 teamId FK 생성

   try {
      await Team.sync();
      await Member.sync();

      const team = await Team.create({ name: 'team1' });
      const member1 = await Member.create({ name: 'member1' });
      const member2 = await Member.create({ name: 'member2' });

      await member1.setTeam(team);
      await member2.setTeam(team);

      // include가 없으면 Join 하지 않은 결과만 전달
      const ret1 = await Member.findAll({});
      const findMember1 = ret1[0];
      console.log('member1 name:', findMember1.name);
      
      // include하지 않은 경우 get 함수를 사용한다. select 동작
      const findTeam1 = await findMember1.getTeam();
      console.log('member name:', findMember1.name, 'team name:', findTeam1.name);

      const findMember2 = ret1[1];
      console.log('member2 name:', findMember2.name);

      const findTeam2 = await findMember2.getTeam();
      console.log('member name:', findMember2.name, 'team name:', findTeam2.name);
   }
   catch (error) {
      console.log('Error :', error);
   }
}

(async () => {
   await doOneToMany1();
   // await doOneToMany2();
   sequelize.close();
})();
