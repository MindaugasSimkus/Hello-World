function teisingai() {
    document.getElementById('klausimas').innerHTML = '<h1>Kiek bus du plius du? <br> Atsakymas teisingas</h1>';

}
function neteisingai() {
    document.getElementById('klausimas').innerHTML = '<h1>Kiek bus du plius du? <br> Atsakymas neteisingas</h1>';
    alert("Išmok skaičiuot");
}
function teisingai2() {
   console.log("Buvo atsakyta teisingai.");
}
function neteisingai2() {
    console.log("Buvo atsakyta neteisingai.");
}