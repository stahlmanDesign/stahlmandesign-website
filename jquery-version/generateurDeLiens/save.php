<?php
	$dataString = json_decode($_REQUEST["formData"], true);
	$fp = file_put_contents('lien.html', ($dataString));
	echo ($dataString);
?>