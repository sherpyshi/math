// 调用三次同名函数 实现不同功能 判断 参数的多少
const addMethod =require('./函数重载addMethod')
const searcher = {}
addMethod(searcher,'find',()=>{
  console.log('查所有用户')
})
addMethod(searcher,'find',(name)=>{
  console.log('按姓名查用户')
})
addMethod(searcher,'find',(firstName,lastName)=>{
  console.log('按姓和名查用户')
})

searcher.find('ad','da')
