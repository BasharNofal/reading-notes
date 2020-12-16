

var name = prompt("enter your name");// typical login commands

var pass = prompt("enter your password"); 

 if (pass == 123){
    
     alert( "hello " + name);
    
 }else {
     
     alert("wrong password");// any password other than 123 it will reload the page 
     ReloadThePage();
}

var HungOrNot = prompt ("are you hungry ? (y/n)");// asking the user whether he is hungry or not, if he was hungry the site will show up, 
if (HungOrNot =="y"){                             //if not the site will ask him to chenck the menu, if he changed his mind the site will show up,
                                                  // if not the site will be closed
                                                  
     alert("You made the right choice by choosing us,here is our menu, and enjoy your food (:");
     

}else  if (HungOrNot == "n"){
 
    alert("I'm sure you will after checking our menu, just take a look ");
     
    var ChngUrMind = prompt("Did you change your mind ? (y/n)");
    if (ChngUrMind != "y"){
    
        alert ("Why would you visit a restuarant website if you are not hungry then !");
        window.close() ;
    
    } else {
        alert( "you won't be disappointed, enjoy your food :)");
    }    

}else {
    ReloadThePage;
 }



function ReloadThePage (){
    location.reload();
}


