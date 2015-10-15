<?php
// check if fields passed are empty
if(empty($_POST['nameModal'])  		||
   empty($_POST['emailModal']) 		||
   empty($_POST['messageModal'])	||
   !filter_var($_POST['emailModal'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['nameModal'];
$email_address = $_POST['emailModal'];
$message = $_POST['messageModal'];
	
// create email body and send it	
$to = 'antonin.lapiche@orange.com, david1.martin@orange.com'; // put your email
$email_subject = "GigaStudio - Contact form submitted by:  $name";
$email_body = "You have received a new message. \n\n".
				  " Here are the details:\n \nName: $name \n ".
				  "Email: $email_address\n Message \n $message";
$headers = "From: contact@orangegigastudio.com \r\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>