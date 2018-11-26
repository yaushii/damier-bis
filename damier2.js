var btnsolver = document.querySelector("#btn-solver");
var maindamier = document.querySelector("#damier");
var inputSize = document.querySelector("#size");

btnsolver.addEventListener("click", solve);

function solve() {
    console.log("nimporte");
    maindamier.innerHTML = "";
    //genere les lignes
    for (var i = 0; i < inputSize.value; i++) {
        var row = document.createElement("div");
        row.className = "row"
        // genere les colonnes
        for (var j = 0; j <inputSize.value; j++) {
            var cell = document.createElement("div");
            cell.className = "cell"
            row.appendChild(cell);
        }

        maindamier.appendChild(row);
    }
}























