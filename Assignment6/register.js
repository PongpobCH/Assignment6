 

window.onload = pageLoad;

function pageLoad(){

    var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
    
}

function validateForm() {
    
    var x = document.forms["myForm"]["password"];
    var y = document.forms["myForm"]["repassword"];


    if( x.value == y.value  )

    {
        alert(" Register Complete ");

    }
    else if( x.value !== y.value) 
    {

       
        
        var error = document.getElementById("errormsg");
        
        error.textContent = "password not match";
        return false; 
        

    
    }
      
   
}