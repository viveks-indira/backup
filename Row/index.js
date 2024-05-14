import http from 'http';


const data1=[
    {
        "id":"1",
        "name":"bob"
    },
    {
        "id":"2",
        "name":"oggy"
    },
    {
        "id":"3",
        "name":"jack"
    },
]
const server=http.createServer();
server.on('request',(req,res)=>{
    // const url=req.url;  
    // console.log(url);
    // res.end("data");
    if(req.method=='POST'){
        req.on('data',(data)=>{
            const d1=data.toString();
            console.log(d1);
            data1.push(JSON.parse(d1));
        })
    }
})

server.listen(3000,()=>{
    console.log("Server on 3000");
})
