<?php

	$res = json_decode($_REQUEST["data"], true);
		
	$fp = fopen('highscores.json', 'w');
	fwrite($fp, json_encode($res));
	fclose($fp);


?>