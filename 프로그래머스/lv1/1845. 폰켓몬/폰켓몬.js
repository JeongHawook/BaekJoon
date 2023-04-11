function solution(nums) {
    var answer = 0;
    let poke=nums.length/2
    let array = [...new Set(nums)];
    console.log(poke)
  //  console.log(array)
    if(poke>array.length){
        return array.length
    }
    return poke
}