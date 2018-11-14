 var form = document.querySelector(".form");
 form.onsubmit = function(){
 	var email = form.email.value;
 	var textEmail = document.getElementById('textEmail')
 	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 	var errorEmail = document.querySelector(".error-email");
 	var password = form.password.value;
 	var passwordInput = document.getElementById('password');
 	var errorPassword = document.querySelector(".error-password");
 	var password2 = form.password2.value;
 	var password2Input = document.getElementById('password2');
 	var errorPassword2 = document.querySelector(".error-password2");

 	
 	if (email === "") {
 		errorEmail.style.display='inline';
 		errorEmail.innerHTML = 'This field is required!';
 		errorEmail.style.color = 'red';
 		textEmail.classList.add('error-input-box');
 	} else{
 		 errorEmail.style.display='none';
 	}

 	if (password === "") {
 		errorPassword.style.display='inline';
 		errorPassword.innerHTML = "This field is required!";
 		errorPassword.style.color = 'red';
 		passwordInput.classList.add('error-input-box');
 	} else{
 		 errorPassword.style.display='none';
 	}

 	if (password2 === "") {
 		errorPassword2.style.display='inline';
 		errorPassword2.innerHTML = "This field is required!";
 		errorPassword2.style.color = 'red';
 		password2Input.classList.add('error-input-box');
 	} else{
 		 errorPassword2.style.display='none';
 	}
            
 	if (email !="" && !filter.test(textEmail.value)) {
	   	errorEmail.innerHTML = 'Invalid Email';
	   	errorEmail.style.color = 'red';
	   	errorEmail.style.display = 'inline';
	   	textEmail.classList.add('error-input-box');
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
			passwordInput.classList.add('error-input-box');
			
	  	}
	}
 	return false;
 }



 