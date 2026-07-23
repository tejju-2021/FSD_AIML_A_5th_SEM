function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();   
            console.log("register here"); 
        },6000)
    })
    
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("login here");
        },8000)
    })
    
}
function getData(cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("fetch data");
        },6000);
    })  
}
function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("display data");
        },1000);
    })
   
}

// register().then(login)
//            .then(getData)
//            .then(displayData)
//            .catch((err)=>{
//             console.log("Error: ",err);
//            })

async function test(){
    try{
        await register();
        await login();
        await getData();
        await displayData();
    }
    catch(err){
        console.log("Error: ",err);
    }
}
test();
console.log("call another App");