function solution(s, n) {
    var answer = '';
    let letters ='abcdefghijklmnopqrstuvwxyz'
    let regex = /[A-Z]/
    
   // console.log(s)
    for(let i=0; i<s.length; i++){
     
   
        if(s[i]==" "){
            answer +=" ";
        }else if(regex.test(s[i])){
              
            let small = s[i].toLowerCase();
            let theIndex = letters.indexOf(small);
            let theLetter = letters[(theIndex+n)%26].toUpperCase();
            answer+=theLetter
        }else{
                console.log(s[i])
             let theIndex = letters.indexOf(s[i])
             let theLetter = letters[(theIndex+n)%26]
             answer+=theLetter
        }
        
        
        
    }
      console.log(answer)
    return answer;
}