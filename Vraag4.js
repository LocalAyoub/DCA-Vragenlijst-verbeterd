let nummer = 5;
let spatie = "";
function recursie(x) {

    if (x === 0) {
        return 1;
    }
    else {
        return x * recursie(x - 1);
    }
}

if (nummer > 0) {
    let result = recursie(nummer);
    console.log("De recursie van", spatie + nummer + spatie, "is", result);
}

//Recursie is een programmeer techniek waarbij een functie zichzelf aanroept tijdens de uitvoering. 
//Het concept van recursie is gebaseerd op het oplossen van een probleem door het op te splitsen in kleinere deelproblemen die met dezelfde methode kunnen worden opgelost. 