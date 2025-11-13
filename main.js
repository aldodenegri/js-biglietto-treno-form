document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // ← Impedisce il ricaricamento della pagina
    storeData();
});

document.getElementById("cancel").addEventListener("click", cancelInput);
const prezzoKm = 0.21;
const valDiv= document.getElementById("values");
function storeData() {

    const nc = document.getElementById("NC").value.trim();
    const km = parseFloat(document.getElementById("km").value);
    const eta = parseInt(document.getElementById("eta").value);
    
    if (!nc || isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
        alert("Compila tutti i campi correttamente!");
        return;
    }

    let prezzoTotale = prezzoKm * km;
    let prezzoScontato = prezzoTotale;
    let sconto = "";

    if (eta < 18) {
        prezzoScontato = prezzoTotale * 0.8;
        sconto = "Sconto 20% (Minorenne)";
    } else if (eta >= 65) {
        prezzoScontato = prezzoTotale * 0.6;
        sconto = "Sconto 40% (Over 65)";
    } else {
        sconto = "Prezzo pieno";
    }
    
    valDiv.innerHTML = `
        <h3>Biglietto Treno</h3>
        <ul>
            <li><strong>Passeggero:</strong> ${nc}</li>
            <li><strong>Distanza:</strong> ${km} km</li>
            <li><strong>Età:</strong> ${eta} anni</li>
            <li><strong>Sconto applicato:</strong> ${sconto}</li>
            <li><strong>Prezzo finale:</strong> €${prezzoScontato.toFixed(2)}</li>
        </ul>
    `;
    valDiv.classList.remove("d-none");
    console.log(nc, km, eta, "€" + prezzoScontato.toFixed(2));
}

function cancelInput() {
    document.getElementById("NC").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value="";
    valDiv.classList.add("d-none");
    console.log("Valori cancellati");

}