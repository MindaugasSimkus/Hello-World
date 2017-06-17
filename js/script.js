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
} // HOMEWORK FUNCTIONS
function rand(){ // function for painting random cell of the table
	white();
	var tabledata = ['first-cell', 'second-cell', 'third-cell', 'fourth-cell', 'fifth-cell', 'sixth-cell', 'seventh-cell', 'eighth-cell', 'ninth-cell'];
	var y = Math.floor(Math.random() * 9);
	document.getElementById('atsitiktinis_skaicius').innerHTML ='Atsitiktinis langelis: <br/>' + tabledata[y]; 
	document.getElementById(tabledata[y]).style.backgroundColor = "green";
}
function white() { // paints all cells in white
	var tabledata = ['first-cell', 'second-cell', 'third-cell', 'fourth-cell', 'fifth-cell', 'sixth-cell', 'seventh-cell', 'eighth-cell', 'ninth-cell'];
	for (var i = 0; i <= tabledata.length-1; i++) {
		document.getElementById(tabledata[i]).style.backgroundColor = "white";
	}
}
function findgreencell() {
	var tabledata = ['first-cell', 'second-cell', 'third-cell', 'fourth-cell', 'fifth-cell', 'sixth-cell', 'seventh-cell', 'eighth-cell', 'ninth-cell'];
	var i=0;
	document.getElementById(tabledata[i]).style.backgroundColor;
	while (document.getElementById(tabledata[i]).style.backgroundColor == 'white') {
		i++;
	}
	var green_cell_index = i;
	document.getElementById('zaliacele').innerHTML ='Zalio langelio numeris: ' + green_cell_index;
	return green_cell_index;
}
function sequence() {
	var tabledata = ['first-cell', 'second-cell', 'third-cell', 'fourth-cell', 'fifth-cell', 'sixth-cell', 'seventh-cell', 'eighth-cell', 'ninth-cell'];
	var i = findgreencell();

	document.getElementById('spalva').innerHTML ='Zalio langelio numeris: ' + i;
	if (i == 0) {
		document.getElementById(tabledata[++i]).style.backgroundColor = "green";		
	} else {
		if (i <= 8) {
			document.getElementById(tabledata[i]).style.backgroundColor = "white";
			document.getElementById(tabledata[++i]).style.backgroundColor = "green";
		} else if (i == 0) {
			document.getElementById(tabledata[i]).style.backgroundColor = "green";
		} else {
			i = 0;
		}
	}
}
