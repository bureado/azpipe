<?php
	include("proton.php");

	// Split the connection string manually:
	// Endpoint=sb://$namespace/;SharedAccessKeyName=$username;SharedAccessKey=$password
	$username  = "...";
	$password  = "...";
	$namespace = "...";
	$topic     = "..."; // Name of the topic, queue, etc.

	$messenger = new Messenger();
	$messenger->start();

	while( $f = fgets(STDIN) ){ // Iterates on STDIN
		$message = new Message();
		$message->address = "amqps://$username:$password@$namespace/$topic";
		$message->body = $f;
		$messenger->put($message);
	        echo $f;
	}

	$messenger->send();
	$messenger->stop();
?>
