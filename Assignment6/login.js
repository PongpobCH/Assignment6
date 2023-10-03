window.onload = loginLoad;
function loginLoad(){

	var login = document.getElementById("myLogin");
	login.onsubmit = checkLogin;
	
	
}

function checkLogin(){

	// URL parameter
	const queryString = window.location.search;
	//console.log(queryString);
   
	const urlParams = new URLSearchParams(queryString);
	const usernamecheck = urlParams.get('username')
	const passwordcheck = urlParams.get('password')
	
	
	
	var x = document.forms["myLogin"]["username"];
    var y = document.forms["myLogin"]["password"];

	if (x.value == usernamecheck && y.value == passwordcheck)
	{
		alert("Proceed to next Page")
	}
	else if (x.value != usernamecheck ^ y.value != passwordcheck)
	{
		alert("Username or Password is not Correct")

		return false; 
	}
	

	
}

			