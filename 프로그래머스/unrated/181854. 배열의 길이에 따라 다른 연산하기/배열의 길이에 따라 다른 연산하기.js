function solution(arr, n) {
    
    
    var answer = [];
    
    for(i = 0; i<arr.length; i+=2){
        if(arr.length%2){
          arr[i] += n   //0,2,4
        }else{
          arr[i+1] +=n     //1,3
        }
    }
    console.log(arr)
    return arr;
}