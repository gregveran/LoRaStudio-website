<?php
// check if fields passed are empty
if(empty($_POST['company_name'])  		||
empty($_POST['contact_name'])  		||
empty($_POST['title'])  	||
empty($_POST['phone'])  	||
empty($_POST['project'])  	||
empty($_POST['leverage'])  	||
empty($_POST['from'])  		||
//empty($_POST['to'])  		||
empty($_POST['agree'])		||
   !filter_var($_POST['email_address'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$company_name = $_POST['company_name'];
$contact_name = $_POST['contact_name'];
$title = $_POST['title'];
$email = $_POST['email_address'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$project = $_POST['project'];
$leverage = $_POST['leverage'];
$from = $_POST['from'];
//$to = $_POST['to'];
$agree = $_POST['agree'];

	
//create email body and send it	
$to2 = 'antonin.lapiche@orange.com, david1.martin@orange.com'; // put your email
$email_subject = "GigaStudio - Application form submitted by $company_name";

$email_body = "<html><body> \n <h1>GigaStudi Application: $company_name</h1>\n".
			"<h2>Contact information</h2>\n".
			"<p> Contact name: $contact_name \n ".
			"<p> Title : $title \n".
			"<p> Email : $email \n".
			"<p> Phone : $phone \n".
			"<p> Website : $website \n".
			"<h2>Description</h2>\n".
			"<p> Description of the product / service / project :\n $leverage \n".
			"<p> Please describe specifically how you will leverage the gig (High speed download / upload, low latency) :\n $leverage \n".
			"<h2>Duration</h2>\n".
			"<p>Duration: $from  \n".
			"<p>Agreed to be contacted: $agree \n </body></html>";

$headers = "From: contact@orangegigastudio.com \r\n";
$headers .= "Reply-To: $email \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


mail($to2,$email_subject,$email_body,$headers);
//mail("antonin.lapiche@orange.com","subject","body",$headers);
return true;			
?>