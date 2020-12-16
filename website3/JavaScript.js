var name = prompt("enter your name");


var pass = prompt("enter your password "); //any password other than 123 it will relod the page 

 if (pass == 123){
    
     alert( "hello " + name);
    
 }else {
     
     alert("wrong password");
     location.reload();
}










