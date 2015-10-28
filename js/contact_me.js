/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs
  */
$(function() {

  $('form[name="sentMessage"]').find('input,select,textarea').jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       // get values from FORM
		var company_name = $("input#company_name").val();
		var contact_name = $("input#contact_name").val();
		var title = $("input#title").val();
		var email_address = $("input#email_address").val();
		var phone = $("input#phone").val();
		var website = $("input#website").val();
		var project = $("textarea#project").val();
		var leverage = $("textarea#leverage").val();
		var from = $("input#from").val();
		//var to = $("input#to").val();
		var agree = $("input#agree").val();


       /*var name = $("input#name").val();
       var email = $("input#email").val();
       var message = $("textarea#message").val();*/

        var firstName = contact_name; // For Success/Failure Message
           // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
	   firstName = contact_name.split(' ').slice(0, -1).join(' ');
         }

	 $.ajax({
                url: "./bin/contact_me.php",
            	type: "POST",
            	data: {company_name: company_name, contact_name: contact_name, title: title,  email_address: email_address, phone: phone, website: website, project: project, leverage: leverage, from: from, agree: agree},
            	cache: false,
            	success: function() {
            	// Success message
            	   $('#success').html("<div class='alert alert-success'>");
            	   $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            		.append( "</button>");
            	  $('#success > .alert-success')
            		.append("<strong>Your application has been sent. </strong>");
 		  $('#success > .alert-success')
 			.append('</div>');

 		  //clear all fields
 		  $('#contactForm').trigger("reset");
 	      },
 	   error: function() {
 		// Fail message
 		 $('#success').html("<div class='alert alert-danger'>");
            	$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	 .append( "</button>");
            	$('#success > .alert-danger').append("<strong>Sorry "+firstName+" it seems that the mail server is not responding...</strong> Could you please email me directly <a href='mailto:jameson.buffmire@orange.com?Subject=Message_Me from orangegigastudio.com'>here</a> ? Sorry for the inconvenience!");
 	        $('#success > .alert-danger').append('</div>');
 		//clear all fields
 		$('#contactForm').trigger("reset");
 	    },
           })
         },
         filter: function() {
                   return $(this).is(":visible");
         },
       });

      $("a[data-toggle=\"tab\"]").click(function(e) {
                    e.preventDefault();
                    $(this).tab("show");
        });
  });


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
     $('#success').html('');
  });
