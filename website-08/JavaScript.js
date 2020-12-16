

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


let item='';
Order();

function Order(){

    order=prompt("What would you like to eat (burger/shawrma/healthy food/steaks) ?") ;

    if (order="burger"){

       item='<img>src="burger.png">';

    }
    


        


}

