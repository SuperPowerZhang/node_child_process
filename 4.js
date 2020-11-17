const child_process =require('child_process');
const {spawn}=child_process

const userInput="."


const stream=spawn("ls",["-la",userInput],{
    cwd:'C:\\',
    env:{NODE_ENV:'development'},
    maxBuffer:1024*1024
})

stream.stdout.on('data',(chunk)=>{
    console.log(chunk.toString())
})