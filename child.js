process.send({hello:'world'})



process.on('message',(m)=>{
    console.log('爸爸给的数据',m)
})