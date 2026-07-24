const student={
    id:1011,
    name:"tejas",
    age:19,
    branch:"AIML"
}
const newstudent={...student,
    address:
    {
        street1:"crossing republik",
        city:"ghaziabad",
        state:"UP",
        pincode:20109
    }
}

console.log("Student",student);
console.log("NewStudent",newstudent);