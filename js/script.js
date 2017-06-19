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
// HOMEWORK FUNCTIONS
function rand(){ // function for painting random cell of the table
	clickcounter();
	white();
	var tabledata = ['first-cell', 'second-cell', 'third-cell', 'fourth-cell', 'fifth-cell', 'sixth-cell', 'seventh-cell', 'eighth-cell', 'ninth-cell'];
	var y = Math.floor(Math.random() * 9);
	var z = y+1;
	document.getElementById('atsitiktinis_skaicius').innerHTML ='Žalias langelis: ' + z; 
	document.getElementById(tabledata[y]).style.backgroundColor = "green";
}
function white() { // paints all cells in white
	var tabledata = ['first-cell', 'second-cell', 'third-cell', 'fourth-cell', 'fifth-cell', 'sixth-cell', 'seventh-cell', 'eighth-cell', 'ninth-cell'];
	for (var i = 0; i <= tabledata.length-1; i++) {
		document.getElementById(tabledata[i]).style.backgroundColor = "white";
	}
}
function findgreencell() { // finds green cell
	var tabledata = ['first-cell', 'second-cell', 'third-cell', 'fourth-cell', 'fifth-cell', 'sixth-cell', 'seventh-cell', 'eighth-cell', 'ninth-cell'];
	var i = 0;
	document.getElementById(tabledata[i]).style.backgroundColor;
	while (document.getElementById(tabledata[i]).style.backgroundColor == 'white') {
		i++;
	}
	var green_cell_index = i;
	var j = green_cell_index + 1;
	return [green_cell_index, j];
} // click counter to know when the page is loaded for the first time
var clicks = 0;
function clickcounter() {
	clicks = ++clicks;
	return clicks;
} // paints following cell in green
function sequence() {
	var tabledata = ['first-cell', 'second-cell', 'third-cell', 'fourth-cell', 'fifth-cell', 'sixth-cell', 'seventh-cell', 'eighth-cell', 'ninth-cell'];
	var a = findgreencell()[0];
	var b = findgreencell()[1];
	var c = clickcounter();
	if (a <= 7 && (c > 1)) {
		var f = b + 1;
		document.getElementById(tabledata[a]).style.backgroundColor = "white";
		document.getElementById(tabledata[b]).style.backgroundColor = "green";
		document.getElementById('atsitiktinis_skaicius').innerHTML ='Žalias langelis: ' + f;
	} else {
		white()
		var d = 0;
		var e = d + 1;
		document.getElementById(tabledata[d]).style.backgroundColor = "green";
		document.getElementById('atsitiktinis_skaicius').innerHTML ='Žalias langelis: ' + e;
	} 
}
// HOMEWORK FUNCTIONS variant 2
var zalias_langelis = 0;
function rand2(){ // function for painting random cell of the table
	white2();
	zalias_langelis = Math.floor((Math.random() * 9) + 1);
	document.getElementById('atsitiktinis_skaicius2').innerHTML ='Žalias langelis: ' + zalias_langelis; 
	document.getElementById(zalias_langelis).style.backgroundColor = "green";
	return zalias_langelis;
}
function white2() { // paints all cells in white
	for (var i = 1; i <= 9; i++) {
		document.getElementById(i).style.backgroundColor = "white";
	}
}
function sequence2() { // paints following cell in green
	var a = zalias_langelis + 1;
	if (a <= 9 && (zalias_langelis !== 0)) {
		document.getElementById(zalias_langelis).style.backgroundColor = "white";
		document.getElementById(a).style.backgroundColor = "green";
		document.getElementById('atsitiktinis_skaicius2').innerHTML ='Žalias langelis: ' + a;
		return zalias_langelis = a;
	} else {
		white2()
		var d = 1;
		document.getElementById(d).style.backgroundColor = "green";
		document.getElementById('atsitiktinis_skaicius2').innerHTML ='Žalias langelis: ' + d;
		return zalias_langelis = d;
	} 
}