


// var myName = "mohamed"
// var myAddress = "cairo"
// var myAge = "20"

// p.innerHTML = 
// "<span style='color: red'>" + "My name: " + "</span>" + myName + "<br>" +
// "<span style='color: red'>"  + "  My address: " + "</span>" + myAddress + 
// "<br>" +
// "<span style='color: red'>" + "my Age: " + "</span>" + myAge;




// function myArea(width, height) {
    //     var myArea = width * height;
    //     return myArea
    // }

    // console.log(myArea(20, 10));
    
    
    // function write(myname) {
//         document.getElementById("p").innerHTML = myname
// }





// var dynamicAge = prompt("your age ?")

// function days(age) {
//     var days = 365
// document.getElementById("p").innerHTML = days(dynamicAge)
//     return days * age
// }






var input = document.getElementById("input")
var button = document.getElementById("button")
let p = document.getElementById("p")


button.onclick = function () {
    // console.log(input.value) 
    var dol = input.value;
    p.innerHTML = dol * 40;
}





var x = 20 ; 
var y = 5 ;

if (x === "20" || y === "5") {
    console.log("yes")
    
}else if ( x == 20 && y === "5") {    
    console.log("no")
} else {
    console.log("default")

}






