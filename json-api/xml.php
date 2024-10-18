<?php header('Content-Type: application/xml');
$xml = new SimpleXMLElement('<persons/>');
$person = $xml->addChild('person');
$person->addChild('id', 1);
$person->addChild('name', 'John Doe');
$person->addChild('age', 30);
$address = $person->addChild('address');
$address->addChild('street', 'Jalan ABC');
$address->addChild('city', 'Jakarta');
$hobbies = $person->addChild('hobbies');
$hobbies->addChild('hobby', 'membaca');
$hobbies->addChild('hobby', 'bersepeda');
echo $xml->asXML();
?>