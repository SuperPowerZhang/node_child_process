const child_process =require('child_process')


const n=child_process.fork('./child.js')
n.on('message',(m)=>{
    console.log('拿到数据了')
    console.log(m)
})
n.send({info:'morning'})