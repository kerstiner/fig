 var form = document.querySelector(".form");
 form.onsubmit = function(){
 	var email = form.email.value;
 	var textEmail = document.getElementById('textEmail')
 	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 	var errorEmail = document.querySelector(".error-email");
 	var password = form.password.value;
 	var errorPassword = document.querySelector(".error-password");
 	var password2 = form.password2.value;
 	var errorPassword2 = document.querySelector(".error-password2");

 	
 	if (email === "") {
 		errorEmail.style.display='inline';
 		errorEmail.innerHTML = 'This field is required!';
 		errorEmail.style.color = 'red';
 	} else{
 		 errorEmail.style.display='none';
 	}

 	if (password === "") {
 		errorPassword.style.display='inline';
 		errorPassword.innerHTML = "This field is required!";
 		errorPassword.style.color = 'red';
 	} else{
 		 errorPassword.style.display='none';
 	}

 	if (password2 === "") {
 		errorPassword2.style.display='inline';
 		errorPassword2.innerHTML = "This field is required!";
 		errorPassword2.style.color = 'red';
 	} else{
 		 errorPassword2.style.display='none';
 	}

 	if (email !="" && !filter.test(textEmail.value)) {
	   	errorEmail.innerHTML = 'Invalid Email';
	   	errorEmail.style.color = 'red';
	   	errorEmail.style.display = 'inline';
	    textEmail.focus;
	}

	if(password && password2 != "") {
		if (password === password2) {
			errorPassword.style.display='none';
			errorPassword2.style.display='none';
			window.location.href = "success.html";
	  	}else {
	  		errorPassword.style.display='inline';
			errorPassword2.style.display='inline'
	   		errorPassword.innerHTML = "Didn't matched!";
			errorPassword2.innerHTML = "Didn't matched!";
			errorPassword.style.color = 'red';
			errorPassword2.style.color = 'red';
	  	}
	}
 	return false;
 }



 