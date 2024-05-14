// const promiseOne=new Promise(function(resolve ,reject){
//     setTimeout(()=>{
//         console.log("Async task")
//     },1000)
//     resolve()
// })

 
// promiseOne.then(()=>{
//     console.log("Promised resolve 1");
// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async task 2")
//     }, 1000);
//     resolve()
// })
// .then(()=>{
//     console.log("resolved 2 promise")
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({"name":"bob","email":"bob.com"})
//     },1000)
// })
// promiseThree.then((user)=>{
//     console.log(user);
// })
// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let val=true
//         if(val){
//             resolve({name:"jack",email:"jack.com"})
//         }else{
//             reject("rejected data")
//         }  
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.name;
// }).then((userName)=>{
//     console.log(userName)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(() => {
//     console.log("Program finished");
// });


const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let val=false
        if(!val){
            resolve({name:"jack",email:"jack.com"})
        }else{
            reject('Error : js went wrong ')
        }
    },1000)
})
async function handlePromiseFive(){
    try {
        const res= await promiseFive
    console.log(res);
    } catch (error) {
        console.log(error)
    }
}
handlePromiseFive();