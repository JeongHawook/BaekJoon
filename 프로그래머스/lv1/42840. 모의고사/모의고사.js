function solution(answers) {
    var answer = [];
    
   
    var first=[1,2,3,4,5]
    var second=[2,1,2,3,2,4,2,5]
    var third = [3,3,1,1,2,2,4,4,5,5]
    let a =0;
    let b =0;
    let c =0;
    answers.filter((v,index)=>{
        if(first[index%5]== v){ a++;}
        if(second[index%8]== v){ b++;}
        if(third[index%10]== v){ c++;}
    })
    
    
     let max=Math.max(Math.max(a,b),c)
    if(max==a)answer.push(1)
    if(max==b)answer.push(2)
    if(max==c)answer.push(3)
    
    
    return answer;
}