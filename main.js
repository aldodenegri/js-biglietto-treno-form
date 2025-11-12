document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // ← Impedisce il ricaricamento della pagina
    storeData();
});

document.getElementById("cancel").addEventListener("click", cancelInput);
const prezzoKm = 0.21;

function storeData() {
    
    let nc = document.getElementById("NC").value;
    let km = document.getElementById("km").value;
    let eta = document.getElementById("eta").value;
    let prezzoTotale = prezzoKm * km;
    let prezzoScontato = prezzoTotale;
    if (eta < 18) {
        prezzoScontato = prezzoTotale * 0.8; // 20% di sconto
    } else if (eta >= 65) {
        prezzoScontato = prezzoTotale * 0.6; // 40% di sconto
    }
    console.log(nc + " " + km + " " + prezzoScontato.toFixed(2));
}

function cancelInput() {
    document.getElementById("NC").value = "";
    document.getElementById("km").value = "";
    console.log("Valori cancellati");
}






//const divRisultato = document.getElementById("risultato-somma");
//divRisultato.textContent = "Prezzo da pagare: € " + prezzoScontato.toFixed(2);