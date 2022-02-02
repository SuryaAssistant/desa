var perkades;

// ---------------------- RESCTRICTED AREA -------------------------------
// ------------------------EDIT CAREFULLY--------------------------------

function displayPerkades(){
    document.getElementById("perkadestable").innerHTML = ``;

    for(let i=0; i<perkades.length; i++){
        document.getElementById("perkadestable").innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${perkades[i].nama_peraturan}</td>
            <td>${perkades[i].tahun}</td>
            <td>${perkades[i].status}</td>
            <td>${perkades[i].unduh}</td>
        </tr>
        `;
    }
}