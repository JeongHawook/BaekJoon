/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split("") 
    if(arr.join("")===arr.reverse().join("")){
        return true
    }else{
        return false;
    }
};