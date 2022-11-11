module.exports ={
  index(req,res){
    const roomid = req.params.room
    const questionId = req.params.question
    const action = req.params.action
    const password = req.body.password

    console.log(`room = ${roomid}, questionId= ${questionId}, action ${action} password ${password}`)
  }
}