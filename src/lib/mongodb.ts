import mongoose from "mongoose";

const uri=process.env.MONGODB_URL

if(!uri) throw new Error("تنظیمات دیتابیس را بررسی کنید");

let isConnected=false;


export async function connectedToDataBase(){
    if(isConnected) return console.log("قبلا متصل شده");


    try{
        await mongoose.connect(uri! , {dbName: "text"});
        isConnected=true;
        console.log("اتصال موفق");
}

    catch(error){
        console.error(error)
        process.exit(1);
    }

}