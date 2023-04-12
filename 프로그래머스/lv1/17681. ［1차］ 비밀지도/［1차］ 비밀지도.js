function solution(n, arr1, arr2) {
    var answer = [];
   
   for(let i=0;i<n; i++){
       arr1[i] =arr1[i].toString(2).padStart(n,0)
       arr2[i] =arr2[i].toString(2).padStart(n,0) 
   } 
    console.log(arr1)  
    console.log(arr2)
    for(let i=0; i<n; i++){
         let temp="";
      for(let j=0; j<n; j++){
         if(arr1[i][j]+arr2[i][j]!="00"){
            temp+="#"
         }else{
              temp+=" "
         }
      }
        answer.push(temp)
    }


    return answer;
}