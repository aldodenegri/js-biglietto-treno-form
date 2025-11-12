document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // ← Impedisce il ricaricamento della pagina
    storeData();
});

document.getElementById("cancel").addEventListener("click", cancelInput);

function storeData() {
  let nc= document.getElementById("NC").value;
  let km= document.getElementById("km").value;
  console.log(nc + " " + km);
}

function cancelInput(){
    document.getElementById("NC").value="";
    document.getElementById("km").value="";
    console.log("Valori cancellati");
}