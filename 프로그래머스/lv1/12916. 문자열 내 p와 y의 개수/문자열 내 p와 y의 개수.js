function solution(s){
    
let letters = s.toLocaleLowerCase().split("")
console.log(letters)
let p = 0;
let y = 0;
for (let index = 0; index < letters.length; index++) {
    if(letters[index]=='p'){
        p++;
    }else if( letters[index] == 'y'){
        y++;
    }
}

y == p ? answer= true: answer= false;
    
    return answer;
   
}