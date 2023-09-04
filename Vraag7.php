<?php
    function search($hooiberg, $speld) {
        $hoogte = count($hooiberg);

        for ($i = 0; $i < $hoogte; $i++) {
            if ($hooiberg[$i] === $speld) {
                return $i;
            }
        }
        return 0;
    }
    $arr = array(4, 2, 5, 6, 14, 7, 15, 3);
    $gezochtenummer = 2;
    $result = search($arr, $gezochtenummer);

    if ($result !== 0) {
        echo "$gezochtenummer is gevonden in $result";
    } else {
        echo "$gezochtenummer is niet gevonden in $result";
    }

?>