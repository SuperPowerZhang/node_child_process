const child_process =require('child_process');
const {exec}=child_process
const utli=require('utli')


const exec2=utli.promisify(exec)
exec2("ls ../").then(data=>{
    console.log(data)
})