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

	/* begin validate function here */

	$("#contactCard").validate({
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",
		rules: {
			contactFormName: {
				require: true
			},
			contactFormEmail: {
				email: true,
				required: true
			},
			contactFormControlTextarea: {
				required: true,
				maxLength: 2000,
				minLength: 10
			}
		},
		//error message to display to the end user when rules above dont pass
		messages: {
			contactFormName: {
				required: "Y u no add name?"
			},
			contactFormEmail: {
				email: "Y u no use real email?",
				required: "Y u no add email?"
			},
			contactFormControlTextarea: {
				required: "Y u no add message?",
				maxLength: "Y u write so much?",
				minLength: "Y u write so little?"
			}
		},
		submitHandler: function(form) {
			$("#contactCard").ajaxSubmit({
				type: "POST",
				url: $("#contactCard").attr("action"),

				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#output-area").css("display", "");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#contactCard")[0].reset();
					}
				}
			})
		}
	});
});