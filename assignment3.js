function feetToMile(feet) {
    if(feet<0){
        return "Distance cannot be negative"
    }else{
    var mile = feet / 5280;
    return mile;
    }
}
let Feet = 1000;
console.log(feetToMile(Feet));




function woodCalculator(chair,table,bed){
    var woodforChair=1*chair;
    var woodfortable=3*table;
    var woodforbed=5*bed;
    var totalwoods=woodforChair+woodfortable+woodforbed;
    return totalwoods;
}
let Chair=30;
let Table=20;
let Bed=10;
console.log(woodCalculator(Chair,Table,Bed));




function brickCalculator(height){
    var brick=1000;
    if(height<=10){
        var totalbricks=height*15*brick;
    }
    else if(height<=20)
    {
        var secondheight=height-10;//17-10
        var brickforfirstten=10*15*brick;
        var brickforsecondten=secondheight*12*brick;
        totalbricks=brickforfirstten+brickforsecondten;
    }
    else{
        var thirdheight=height-20;
        brickforlastone=thirdheight*10*brick;
        brickforfirstten=10*15*brick;
        brickforsecondten=10*12*brick;
        totalbricks=brickforlastone+brickforfirstten+brickforsecondten;

    }
    return totalbricks;
}
let height=17;
console.log(brickCalculator(height));



function tinyFriend(friendarray){
    var min=friendarray[0];
    for(var i=1;i<friendarray.length;i++){
        if(min.length>friendarray[i].length){
            min=friendarray[i];
        }
    }
    return min;

}
let myfriends=["Esha","Tasnuva","Jaclin","Onika","Omi","U"];
console.log(tinyFriend(myfriends));
