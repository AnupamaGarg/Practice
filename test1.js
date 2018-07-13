// function makepizza( topping , type){
// document.write( "I love " + type + " crust pizza with " + topping + " topping on it " );
// }

// makepizza( "onoin", "thin");
// ------------------------------------------------------------------------------------------------------



// var makepizza = function( topping , type){
//     return "I love " + type + " crust pizza with " + topping + " topping on it " ;
//     };

//     var custompizza =makepizza( "tomato", "hand tosed");
//    document.write(custompizza);
// -----------------------------------------------------------------------------------------------------------


//    function go(){
//        alert("hello");
//        alert("how are you?");
//    }

//    go();
//    go();
// ------------------------------------------------------------------------------------------------------


//    function fullname( firstname, lastname){
//        alert(firstname);
//        alert(lastname);
//     }
//     fullname("aaaa", "bbbb");

// -----------------------------------------------------------------------------------------------------------


// var firstname = "aaaa";
// var lastname = "bbbb";

// function fullname(){
//     alert(firstname);
//     alert(lastname);
// };
//      fullname();

// --------------------------------------------------------------------------------------------------------
//   var sum =   function(a,b){
//         return a+b
//     };

//    var addno = sum(4,5);
// alert(addno);
// ----------------------------------------------------------------------------------------------------

// var food = prompt("myFavoritFood");
// alert(food);

// const pasta = true;
// if( pasta === true){
//     alert("I will have lasagns ,please");
// }
// else{
//     alert("I will have todays special");
// }
// -------------------------------------------------------chicken monkey example---------------------------
var count = 0;
for (let i = 0; i <= 100; i++) {
    var currentnumber = count += 1;
    if (currentnumber % 5 === 0 && currentnumber % 7 === 0) {
        document.write("chickenMonkey!");
    }
    else if (currentnumber % 5 === 0) {
        document.write("chicken!");
    } else if (currentnumber % 7 === 0) {
        document.write("Monkey!");
    }
    else {
        document.write(currentnumber);
    }

}


// ----------------------carSpeedExample----------------------------------

// function go(direction,speed){

// document.write( "The car is moving in " + direction +" at "+ speed + " mph");

// }
// go(forward, 25);

// -----------------------CarSpeedExample2---------------------------------
// function go(direction,speed){

//     if(speed > 75){
//         document.write( "The car is moving in " + direction +" at "+ speed + " mph "+ "slow down")
//     }
//     else{
//         document.write( "The car is moving in " + direction +" at "+ speed + " mph "+ " you are good")
//     }

    
//     }
//     go(
//         "forward", 80
//     );