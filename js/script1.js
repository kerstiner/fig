$(document).ready(function(){

	var emailElem = $("#textEmail");
	var passwordElem  = $("#password");
	var passwor2Elem  = $("#password2");
	var submitBtn  = $("#submit");

	var errorEmail = $(".error-email");
	var errorPassword = $(".error-password");
	var errorPassword2  = $(".error-password2");

	var emailVal = emailElem.val();
	var passwordVal  = passwordElem.val();
	var password2Val  = passwor2Elem.val();
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


	function validate_field(field, errorText) {
		if(field == "") {
			errorText.text("This field is required!");
			errorText.css({"display": "inline"});
			errorText.css({"color": "red"});
		} else {
			errorText.css({"display": "none"});
		}
	}

	$(".form").submit(function(){
		validate_field(emailVal, errorEmail);
		validate_field(passwordVal, errorPassword);
		validate_field(password2Val, errorPassword2);


		if (emailVal !="" && !filter.test(emailElem.value)) {
			errorEmail.text("Invalid Email");
			errorEmail.css({"color": "red"});
			errorEmail.css({"display": "inline"});
			emailElem.focus;
		}

		if (passwordVal && password2Val != "") {
			if (passwordVal === password2Val){
				errorPassword.css({"display": "none"});
				errorPassword2.css({"display": "none"});
				window.location.href = "success.html";
			} 
		} else {
			errorPassword.css({"display": "inline"});
			errorPassword2.css({"display": "inline"});
			errorPassword.text("Didn't matched!");
			errorPassword2.text("Didn't matched!");
			errorPassword.css({"color": "red"});
			errorPassword2.css({"color": "red"});
		}
		return false;
	});

});