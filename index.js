//require json server in index.js
const jsonServer=require('json-server')
//create server
const myServer=jsonServer.create()
//setup path for db.json file
const router=jsonServer.router('./db.json')
//create middleware
const middleaware=jsonServer.defaults()
//define aport for running the server
const PORT=3000||process.env.PORT

myServer.use(middleaware)
myServer.use(router)

myServer.listen(PORT,()=>{
    console.log(`my server is running in port ${PORT}`);
    
})