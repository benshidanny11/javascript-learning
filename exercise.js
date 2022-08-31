// function sum(x,y) {
//     var results;
//     results=x+y;
//     return results;
// }
// console.log(sum(67,23));

// if (1) {
//     console.log("Monday");
// }
// else {
//     console.log("Not on manday")
// }


function guesDayName(day){
    let dayName="";
 if(day==1){
 dayName="Monday"
 }else if(day==2){
    dayName="Tuesday"
 }else if(day==3){
    dayName="Wednesday"
 }else if(day==4){
    dayName="Thursday"
 }else if(day==5){
    dayName="Friday"
 }else if(day==6){
    dayName="Saturday"
 }else if(day==7){
    dayName="Sunday"
 }else{
    dayName="Invalid"
 }
 return dayName;
}

console.log(guesDayName(2))