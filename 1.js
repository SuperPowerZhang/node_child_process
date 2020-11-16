const child_process =require('child_process');
const {exec}=child_process


const stream=exec('ls ../')
stream.stdout.on('data',(chunk)=>{
        console.log('1次')
        console.log(chunk)
    }

)
stream.stderr.on('data',(chunk)=>{
    console.log(chunk)
})
