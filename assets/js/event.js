/* ----------- Buat daftar event terdekat -------------- */

// baca database_event
var jumlahEvent = Object.keys(database_event).length;

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


for(var i=0; i<jumlahEvent; i++){
    if(database_event[i].tahun >= tahunDipilih && database_event[i].bulan >= bulanDipilih+1 && database_event[i].tanggal >= tanggalDipilih){
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
        ${eventTerdekat[0].nama_kegiatan} : ${eventTerdekat[0].hari}, ${eventTerdekat[0].tanggal} ${bulan[eventTerdekat[0].bulan - 1]} ${eventTerdekat[0].tahun}
    </p>
    `;
};