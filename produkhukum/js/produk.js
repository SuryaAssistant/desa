var peraturan;
var searchedDatabase=[{}];

var max_value=10;
var classbutton = "bg-success";
var downloadFiture = "Tidak Tersedia";

// ---------------------- RESCTRICTED AREA -------------------------------
// ------------------------EDIT CAREFULLY--------------------------------

function displayPeratutan(){
    if(peraturan.length <= max_value){
        max_value = peraturan.length;
    };

    updateTable(max_value, peraturan);
}

function showAll(){
    document.getElementById("searchquery").value = "";
    document.getElementById("searchword").value = "";

    updateTable(peraturan.length, peraturan)
}

function updateTable(tableLength, tableDatabase){
    document.getElementById("peraturantable").innerHTML = `
    `;

    for(let i=0; i<tableLength; i++){
        classbutton = "bg-success";

        if(tableDatabase[i].status != "Berlaku"){
            classbutton = "bg-danger"
        }

        downloadFiture = "Tidak Tersedia";
        
        if(tableDatabase[i].unduh != null){
            downloadFiture = `<a type="button" class="btn btn-success" href=${tableDatabase[i].unduh} target="_blank" style="font-size:12px"><i class='bx bxs-file-pdf'></i></button>`;
        }

        document.getElementById("peraturantable").innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${tableDatabase[i].nama_peraturan}</td>
            <td>${tableDatabase[i].tahun}</td>
            <td><span class="badge ${classbutton}">${tableDatabase[i].status}</span></td>
            <td>${downloadFiture}</td>
        </tr>
        `;

    }
}