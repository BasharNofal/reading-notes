

var name = prompt("enter your name");
var pass
var order

WriteYourPass();

function WriteYourPass(){
    
    pass = prompt("enter your password");
    PassCheck();
    
}

    function PassCheck(){

    while (pass !== "123"){
       
       alert("Wrong password, please enter your password again");
       WriteYourPass() ;

    }
} 
alert("Welcome " + name);

let pickOrder =  function (){

   let order=prompt("What would you like to eat (burger/steak) ?") ;

   let food='';

while(order !== "burger" && order !== "steak"){
    order=prompt("sorry, what you have picked is not available today, please pick something else");
}  


if(order==="burger"){
     
    food='<img src ="burger.png"> ' ;
} else if (order ==="steak")
    food='<img src="steak.png"/>';

    return food ;
}

let showOrder = function(){

    let food=pickOrder();
    document.write(food);
}
        




