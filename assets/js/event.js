/* ----------- Buat daftar event terdekat -------------- */

var database_event = [{}];

// buat database baru untuk event terdekat
eventTerdekat = [
    {
    },
];

const d = new Date();

var eventTerdekatNumber = 0;
let day = d.getDate();
var tanggalDipilih = day;
let month = d.getMonth();
var bulanDipilih = month;
let year = d.getFullYear();
var tahunDipilih = year;


var tanggalEvent;
var bulanEvent;
var tahunEvent;



function showEvent(){
    // baca database_event
    var jumlahEvent = Object.keys(database_event).length;

    for(var i=0; i<jumlahEvent; i++){
        tahunEvent = parseInt(database_event[i].date.substr(0,4));
        bulanEvent = parseInt(database_event[i].date.substr(5,2));
        tanggalEvent = parseInt(database_event[i].date.substr(8,2));

        if(tahunEvent >= tahunDipilih && bulanEvent >= bulanDipilih+1 && tanggalEvent >= tanggalDipilih){
            eventTerdekat[eventTerdekatNumber] = database_event[i];
            eventTerdekatNumber += 1;
        }
    }


    // Convert bulan
    var bulan = ["Januari", "Februari", 'Maret', "April", "Mei", "Juni", "Juli", 
        "Agustus", "September", "Oktober", "November", "Desember"];


    // Tampilkan ke index.html
    if(eventTerdekat[0].nama_kegiatan != undefined){
        document.getElementById("event_desa").innerHTML = `
        <p class="text-white" style="padding-top:70px; font-size:12px; margin-bottom:0px">
            ${eventTerdekat[0].nama_kegiatan} : ${eventTerdekat[0].date.substr(8,2)} ${bulan[parseInt(eventTerdekat[0].date.substr(5,2)) - 1]} ${eventTerdekat[0].date.substr(0,4)}
        </p>
        `;
    };
};