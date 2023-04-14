/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split("").reverse().join("")
    console.log(arr)
    if(arr==x){
        return true
    }else{
        return false;
    }
};