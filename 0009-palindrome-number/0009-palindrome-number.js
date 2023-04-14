/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split("").reverse().join("")
    if(arr==x){
        return true
    }else{
        return false;
    }
};