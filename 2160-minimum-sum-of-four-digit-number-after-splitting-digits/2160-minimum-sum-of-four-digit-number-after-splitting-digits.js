/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let num1 = num.toString().split('').sort()
    let num2 =(num1[0]*10+num1[2]*1) + (num1[1]*10+num1[3]*1)
    console.log(num2)
    return num2
    };