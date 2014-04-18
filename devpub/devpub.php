<?php
	include("proton.php");

	$username  = "vm";
	$password  = "8vFQaK4gthWf9yoRdjOD2yx7VMmjXBP9uZvTZwKBAHo=";
	$namespace = "eg-pre-01.servicebus.windows.net";
	$topic     = "alpha";

	$messenger = new Messenger();
	$messenger->start();

	while( $f = fgets(STDIN) ){
		$message = new Message();
		$message->address = "amqps://$username:$password@$namespace/$topic";
		$message->body = $f;
		$messenger->put($message);
	        echo $f;
	}

	$messenger->send();
	$messenger->stop();
?>
