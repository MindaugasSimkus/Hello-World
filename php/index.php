<?php



$skaicius = 3.66666;

$suapvalintas = round($skaicius, 2); // 3.67
$apvalintasAukstyn = ceil($skaicius); // 4
$apvalintasZemyn = floor($skaicius); // 3

$plyteles_plotas = 0.33; //m3
$patalpos_plotis = 4; //m
$patalpos_ilgis = 8.5;
$plyteles_kaina = 3; // Eur

$kaina = (ceil(($patalpos_plotis * $patalpos_ilgis) / $plyteles_plotas)) * $plyteles_kaina;




//echo "Kaina " . $kaina;

rand(5, 230);
mt_rand(5, 230); // sudetingesnis generatorius, sunkiau atsekt ir greiciau veikia

echo rand(1, 1000);

// kintamieji

$skaicius = 2;
$skaicius += 30; // 32
$string = " <br>Mano " . "vardas " . "Mindaugas";
$string .= " ir as nemegstu operos";
echo $string;

// indexed array
$sudetis = array("Mieles", "Pienas", "Druska");

// Associative array 
$pazymiai = array("Tomas"=>3, "Marius"=>9, "Jonas"=>8);

echo " Jonas gavo " . $pazymiai["Jonas"];
?> 