/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

 $('form[name="sentMessageModal"]').find('input,select,textarea').jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       // get values from FORM
       var nameModal = $("input#nameModal").val();  
       var emailModal = $("input#emailModal").val(); 
       var messageModal = $("textarea#messageModal").val();
        var firstName = nameModal; // For Success/Failure Message
           // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
	   firstName = name.split(' ').slice(0, -1).join(' ');
         }        
	 $.ajax({
                url: "./bin/contact_meModal.php",
            	type: "POST",
            	data: {nameModal: nameModal, emailModal: emailModal, messageModal: messageModal},
            	cache: false,
            	success: function() {  
            	// Success message
            	   $('#successModal').html("<div class='alert alert-success'>");
            	   $('#successModal > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            		.append( "</button>");
            	  $('#successModal > .alert-success')
            		.append("<strong>Your message has been sent. </strong>");
 		  $('#successModal > .alert-success')
 			.append('</div>');
 						    
 		  //clear all fields
 		  $('#contactFormModal').trigger("reset");
 	      },
 	   error: function() {		
 		// Fail message
 		 $('#successModal').html("<div class='alert alert-danger'>");
            	$('#successModal > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	 .append( "</button>");
            	$('#successModal > .alert-danger').append("<strong>Sorry "+firstName+" it seems that the mail server is not responding...</strong> Could you please email me directly <a href='mailto:antonin.lapiche@orange.com?Subject=Message_Me from orangegigastudio.com'>here</a> ? Sorry for the inconvenience!");
 	        $('#successModal > .alert-danger').append('</div>');
 		//clear all fields
 		$('#contactFormModal').trigger("reset");
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
$('#nameModal').focus(function() {
     $('#successModal').html('');
  });