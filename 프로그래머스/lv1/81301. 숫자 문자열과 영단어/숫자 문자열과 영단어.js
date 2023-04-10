function solution(s) {
    var answer = s;
    let arr=""
   let number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
for(let i=0; i<number.length; i++){
  answer = answer.replaceAll(number[i],i)
console.log(answer)
}


    
    return answer/1;
}