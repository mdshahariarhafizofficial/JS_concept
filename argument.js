// Arguments !!!!!

var sum = 0;
function addition(num1, num2) {
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum
}
var result = addition(78, 2, 54, 85)
console.log(result);


var fullName = "";
function argument(firstName, lastName){
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        fullName = fullName + " " + element;
        
    }
    return fullName;

}

var result2 = argument('Sogir', 'ahned', 'jogir', 'khan');
console.log(result2);