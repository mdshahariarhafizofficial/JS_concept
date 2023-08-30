// Without Function

var nums = [45, 78, 85,47, 96, 62, 35]

for( var i = 0; i < nums.length; i++){
    var num = nums[i];
    if (num % 2 == 0) {
        console.log(num,": is even number");
    }else{
        console.log(num*2,": is odd number");
    }
}

var friend_age = [12, 25, 45, 32, 26, 26]
for (let i = 0; i < friend_age.length; i++) {
    const age = friend_age[i];
    if (age % 2 == 0) {
        console.log(age,": is even number");
    }else{
        console.log(age*2,": is odd number");
    }
}

// With Function
function evenify(number){
    for( var i = 0; i < number.length; i++){
        var num = number[i];
        if (num % 2 == 0) {
            console.log(num,": is even number");
        }else{
            console.log(num*2,": is odd number");
        }
    }
}

var list = [45, 78, 85,47, 96, 62, 35]
evenify(list)

// list Sum

var arr = [14, 54, 45, 85, 21, 78];
var sum = 0;

for( var i = 0; i < arr.length; i++ ){
    var Element = arr[i];
    sum = sum+Element;
    console.log(sum); 
}
