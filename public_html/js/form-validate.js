$(document).ready(function() {
	/**
	 * jQuery Validate Function
	 *
	 * This function provides front-end validation for your form.
	 * If all tests set up here pass, the form data is AJAX submitted
	 * to the mailer.php file.
	 *
	 * Update this file as needed for your form.
	 * All ids and name values must match up to your form here.
	 *
	 * @author Rochelle Lewis <rlewis37@cnm.edu>
	 **/

	$("#contactMeForm").validate(
		{
			debug: true,
			errorClass: "alert alert-danger",
			errorLabelContainer: "#output-area",
			errorElement: "div",
			// rules here define what is good or bad input
			// each rule starts with the form input element's NAME attribute
			rules: {
				contactFormName: {
					required: true,
				},
				contactFormEmail: {
					email: true,
					required: true
				},
				contactFormTextarea: {
					required: true,
					maxlength: 2000,
					minlength: 10
				}
			},
			// error messages to display to the end user when rules above don't pass
			messages: {
				contactFormName: {
					required: "Please add a name."
				},
				contactFormEmail: {
					email: "Please add valid email address.",
					required: "Please add valid email address.",
				},
				contactFormTextarea: {
					required: "Please add message.",
					maxlength: "Message is too long.",
					minlength: "Message is too short.",
				}
			},
			submitHandler: function(form) {
				$("#contactMeForm").ajaxSubmit({
					type: "POST",
					url:$("#contactMeForm").attr("action"),
					success: function(ajaxOutput) {
						// clear the output area's formatting
						$("#output-area").css("display","");

						// write the server's reply to the output area
						$("#output-area").html(ajaxOutput);

						// reset the form if it was successful
						if($(".alert-success").length >= 1) {
							$("#contactMeForm")[0].reset();
						}
					}
				})

			}


		});

});