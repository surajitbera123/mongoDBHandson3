const mongoose = require('mongoose');
const User = require('./index.js');
const Data = require('./Data');


async function run(){
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/Human_Resource");

    const gradExp = await User.find({
        yearGrad : { $gt : 2015 },
        overaallExp : { $gt : 1 }
    })
    console.log(gradExp);



    const response6 = await User.deleteMany({
        lastCompany: "Y",
      });
      console.log(response6);
  


    } catch(er){
        console.log(er);
    }
}
run();
