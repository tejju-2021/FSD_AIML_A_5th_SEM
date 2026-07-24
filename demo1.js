const num=[1,2,3,4,5];
// const b=num[0];
// const c=num[1];
//array desturcturing
const[b,c]=num;
console.log("b=",b);
console.log("c=",c);
const student={
    name:"tejas",
    age:19,
    branch:"AIML"
}
// const name=student.name;
// const age=student.age;
// const branch=student.branch;
const {name,age,branch}=student;
console.log("name:",name);
console.log("age:",age);
console.log("branch:",branch);