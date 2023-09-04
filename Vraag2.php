<?php


$wachtwoord = 'Doei02!';

$gebruikerinvoer = 'Doei02!';

$wachtwoordgehasht = password_hash($wachtwoord, PASSWORD_DEFAULT);



if (password_verify($gebruikerinvoer, $gebruikerinvoer)){
    Ingelogged();
}
if($wachtwoord === $gebruikerinvoer) {
    Ingelogged();
} else {
    throw new Exception('Wachtwoord onjuist');
    exit;
}


function Ingelogged() {
        echo "je bent ingelogged";
        echo password_hash("wachtwoord:", $wachtwoordgehasht);

}
?>
