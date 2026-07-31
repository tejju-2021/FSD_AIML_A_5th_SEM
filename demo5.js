export const sum=(...num)=>{
    const s=num.reduce((s,i)=>s+i);
    return s;
}
export const add=(...num)=>{
    let s=0;
    for(i of num){
        s+=i;
    }
    return s;
}