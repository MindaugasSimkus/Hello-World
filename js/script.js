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
		white2();
		var d = 1;
		document.getElementById(d).style.backgroundColor = "green";
		document.getElementById('atsitiktinis_skaicius2').innerHTML ='Žalias langelis: ' + d;
		return zalias_langelis = d;
	} 
}
// homework slot machine
var cell = 0;
var sk = 0;
var skaiciu_eile = [];
var skaiciu_eile2 = [];
var kamuoliukas = 0;
var bilieto_skaicius = 0;
var hidden = true;
var hide = true;
var hide1 = true;
var hide2 = true;
var hide3 = true;

function hide_button() {
	if (hidden) {
		document.getElementById('ridenimas').style.visibility = 'hidden';
	} else {
		document.getElementById('ridenimas').style.visibility = 'visible';
	}
}

function hide_cheat_mode() {
	if (hide) {
		document.getElementById('cheater').style.visibility = 'hidden';
	} else {
		document.getElementById('cheater').style.visibility = 'visible';
	}
}

function hide_cheat_mode1() {
	if (hide1) {
		document.getElementById('cheater1').style.visibility = 'hidden';
	} else {
		document.getElementById('cheater1').style.visibility = 'visible';
	}
}

function hide_cheat_mode2() {
	if (hide2) {
		document.getElementById('cheater2').style.visibility = 'hidden';
	} else {
		document.getElementById('cheater2').style.visibility = 'visible';
	}
}

function hide_cheat_mode3() {
	if (hide3) {
		document.getElementById('cheater3').style.visibility = 'hidden';
	} else {
		document.getElementById('cheater3').style.visibility = 'visible';
	}
}

function kamuoliuko_nr() {
	kamuoliukas = ++kamuoliukas;
	return kamuoliukas;
}

function generatorius() {
	cell = Math.floor(Math.random()*10);
	return cell;
}

function generatorius_sk() {
	sk = Math.floor(Math.random()*10);
	return sk;
}

function bilieto_generatorius() {

	for (bilieto_skaicius; bilieto_skaicius < 6; bilieto_skaicius++) {
		generatorius_sk();
		var skaicius_biliete = bilieto_skaicius+201;
		var irasymas = document.getElementById(skaicius_biliete);
		skaiciu_eile2.push(sk);
		irasymas.innerHTML = skaiciu_eile2[bilieto_skaicius];
	}
	bilieto_skaicius = 0;
}

function bilieto_valymas() {

	for (kamuoliukas; kamuoliukas < 6; kamuoliukas++) {
		document.getElementById(kamuoliukas+101).innerHTML = ' ';
	}
	kamuoliukas = 0;
}

function ridenimas() {
	kamuoliuko_nr();
	if (skaiciu_eile.length < 6) {
		generatorius();

		for (a=0; a<=9; ++a) {
			document.getElementById(a).style.backgroundColor = "powderblue";
		}

		document.getElementById(cell).style.backgroundColor = random_color();
		document.getElementById('laimingas_skaicius').innerHTML = cell;
		var numeris = document.getElementById("numeris");

		var kamuoliuko_vieta = kamuoliukas+100;
		var sarasas = document.getElementById(kamuoliuko_vieta);
		skaiciu_eile.push(cell);
		sarasas.innerHTML = skaiciu_eile[kamuoliukas-1];
		if (kamuoliukas == 6) {
			document.getElementById('ridenimas').innerHTML = 'Tikrinti bilietą';
			hide = false;
			hide_cheat_mode();
			hide_cheat_mode1();
			hide_cheat_mode2();
			hide_cheat_mode3();
		} else {
			document.getElementById('ridenimas').innerHTML = 'Ridenam kamuoliuką!';
		}

	} else {
		if (skaiciu_eile2 == skaiciu_eile) {
			document.getElementById("pranesimas").innerHTML = 'Žaidimas baigas. Sveikiname, Jūs laimėjote!!!';
			hide = true;
			hide1 = true;
			hide2 = true;
			hide3 = true;
			hide_cheat_mode();
			hide_cheat_mode1();
			hide_cheat_mode2();
			hide_cheat_mode3();
		} else {
			document.getElementById("pranesimas").innerHTML = 'Žaidimas baigas. Deja Jūs nelaimėjote.';
			hide = true;
			hide1 = true;
			hide2 = true;
			hide3 = true;
			hide_cheat_mode();
			hide_cheat_mode1();
			hide_cheat_mode2();
			hide_cheat_mode3()		
		}

		hidden = true;
		hide_button();
	}
}

function naujas_zaidimas() {
	kamuoliukas = 0;
	document.getElementById('ridenimas').innerHTML = 'Ridenam kamuoliuką!';
	document.getElementById("pranesimas").innerHTML = 'Sėkmės!';
	hidden = false;
	hide_button();
	skaiciu_eile = [];
	skaiciu_eile2 = [];
	skaiciu_eile.length = 0;
	skaiciu_eile2.length = 0;
	bilieto_valymas();
	bilieto_generatorius();
}

function cheat() {
	skaiciu_eile2 = skaiciu_eile;
	document.getElementById('201').innerHTML = skaiciu_eile2[0];
	document.getElementById('202').innerHTML = skaiciu_eile2[1];
	document.getElementById('203').innerHTML = skaiciu_eile2[2];
	document.getElementById('204').innerHTML = skaiciu_eile2[3];
	document.getElementById('205').innerHTML = skaiciu_eile2[4];
	document.getElementById('206').innerHTML = skaiciu_eile2[5];

}

function random_color() {
	var a = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var c = Math.floor(Math.random()*256);

	return ["rgb(",a,",",b,",",c,")"].join("");
}
//namie max 6 sk gali iskrist ir iskritus 6 skaiciams turi matytis pranesimas, jog zaidimas baigas. Viskas bootsrap'e. 
//Dar mygtukas "naujas zaidimas". paspaudus naujas zaidimas, turi susigeneruot naujas bilieto numeris is 6sk. (laimingi skaiciai)  ir juos islaiko iki zaidimo pabaigos.