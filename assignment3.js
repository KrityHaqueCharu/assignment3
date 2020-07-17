function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
let Feet = 100;
console.log(feetToMile(Feet));




function woodCalculator(chair,table,bed){
    var woodforChair=1*chair;
    var woodfortable=3*table;
    var woodforbed=5*bed;
    return (woodforChair+" "+woodfortable+" "+woodforbed);
}
let Chair=30;
let Table=20;
let Bed=10;
console.log(woodCalculator(Chair,Table,Bed));




function brickCalculator(height){
    if(height<10){
        var totalbricks=height*15;
    }
    else if(height<20)
    {
        var secondheight=height-10;//17-10
        var brickforfirstten=10*15;
        var brickforsecondten=secondheight*12;
        totalbricks=brickforfirstten+brickforsecondten;
    }
    else{
        var thirdheight=height-20;
        brickforlastone=thirdheight*10;
        brickforfirstten=10*15;
        brickforsecondten=10*12;
        totalbricks=brickforlastone+brickforfirstten+brickforsecondten;

    }
    return totalbricks;
}
let height=80;
console.log(brickCalculator(height));



function tinyFriend(friendarray){
    var min=friendarray[0]
    for(var i=1;i<friendarray.length;i++){
        if(min.length>friendarray[i].length){
            min=friendarray[i];
        }
    }
    return min;

}
let myfriends=["Esha","Tasnuva","Jaclin","Onika","Omi"];
console.log(tinyFriend(myfriends));
