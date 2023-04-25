function ulozData() {
    var jmeno = document.getElementById("jmeno").value;
    var prijmeni = document.getElementById("prijmeni").value;
    var telefon = document.getElementById("telefon").value;
    var vek = document.getElementById("vek").value;

    var table = document.getElementById("tabulka");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = jmeno + " " + prijmeni;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = telefon;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = vek;

    document.getElementById("jmeno").value = "";
    document.getElementById("prijmeni").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("vek").value = "";
}

function ulozData() {
    var jmeno = document.getElementById("jmeno").value;
    var prijmeni = document.getElementById("prijmeni").value;
    var telefon = document.getElementById("telefon").value;
    var vek = document.getElementById("vek").value;

    // Kontrola, jestli jsou všechna políčka vyplněna
    if (jmeno === "" || prijmeni === "" || telefon === "" || vek === "") {
        alert("Prosím vyplňte všechna data.");
        return;
    }

    let table = document.getElementById("tabulka");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = jmeno + " " + prijmeni;
    let cell2 = row.insertCell(1);
    cell2.innerHTML = telefon;
    let cell3 = row.insertCell(2);
    cell3.innerHTML = vek;

    document.getElementById("jmeno").value = "";
    document.getElementById("prijmeni").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("vek").value = "";
}
