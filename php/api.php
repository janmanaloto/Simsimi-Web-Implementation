<?php 

// ALLOWS ALL REQUESTS, CHANGE ACCORDINGLY
header('Access-Control-Allow-Origin: *');

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: json');
    echo file_get_contents('http://sandbox.api.simsimi.com/request.p?key='.$_GET['api'].'&lc=en&ft=1.0&text='.$_GET['text']);
?>