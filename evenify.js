// function evenify(list){
//     for( var i = 0; i < list.length; i++ ){
//         var num = list[i];
//         if(num % 2 == 0){
//             console.log(num, '= is even number');
//         }
//         else{
//             console.log(num, '= is odd number');
//         }
//     }
// }


// var age = [25, 44, 56, 78, 88]
// evenify(age)

function evenify(num) {
    if(num % 2 == 0){
        console.log(num, '= is even number');
    }else{
        console.log(num, '= is odd number');
    }
}

function evenify_all(list){
    for( var i = 0; i < list.length; i++ ){
        var num = list[i];
        evenify(num);
    }
}

var item = [98, 83, 35, 48, 88]
evenify_all(item)
