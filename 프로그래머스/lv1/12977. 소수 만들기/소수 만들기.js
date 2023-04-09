function solution(nums) {
    var answer = 0;
    let len = nums.length


    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
              const sum =nums[i] + nums[j] + nums[k]
                if(isPrime(sum))
                    answer++;
            }
        }
    }
    return answer;
}

function isPrime(sum) {
    for(let i = 2; i < sum; i++)
    if(sum % i === 0) return false;
    return true;
}