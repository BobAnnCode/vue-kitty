import  Mock from 'mockjs';

Mock.mock('http://localhost:8080/login',{
  data: {
    'token': '1231231231231213'
  }
});

Mock.mock('http://localhost:8080/user',{
  'name':'@name',
  'email':'@email',
  'age|1-10':5
});

Mock.mock('http://localhost:8080/menu',{
  'id':'@increment',
  'name':'@name',
  'order|10-20':12
});
