/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let number =[]
var twoSum = function(nums, target) {
    let map = new Map();

    for(let i = 0; i<nums.length; i++){
        if(!map.has(target-nums[i])){
            map.set(nums[i],i)
        }else{
           return [map.get(target-nums[i]),i]
        }
    }
    return number
};