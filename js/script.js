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
function rand(){
	document.getElementsByTagName("td").style.backgroundColor = "red";
	var tabledata = ['first-cell', 'second-cell', 'third-cell', 'fourth-cell', 'fifth-cell', 'sixth-cell', 'seventh-cell', 'eighth-cell', 'ninth-cell'];
	var y = Math.floor(Math.random() * 9);
	document.getElementById("atsitiktinis_skaicius").innerHTML ='Atsitiktinis langelis: <br/>' + tabledata[y]; 
	document.getElementById(tabledata[y]).style.backgroundColor = "green";
}
function raid() {
          var xyz = 0;
          var somearray = ['a','b','c'];
          var content = somearray[xyz];
          document.getElementById('raide').innerHTML = 'gauname tokia raide:' + somearray[xyz];
        }