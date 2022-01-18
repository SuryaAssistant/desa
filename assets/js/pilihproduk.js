var jLength;

var idProduk;

var produkDipilih;
var databaseDipilih;

displayKategori();


/*---------------------------FUNGSI---------------------------*/
/*---------------------Edit dengan Hati-Hati------------------*/

function displayKategori(){
    // Baca database_kategori
    jLength = Object.keys(database_kategori).length;

    // Hapus data sebelumnya
    document.getElementById("kategori_produk").innerHTML = ``;

    for(let i=0; i<jLength; i++){
        idKategori = i;

        document.getElementById("kategori_produk").innerHTML += `
        <div class="col-sm mb-3">
        <button id="${idKategori}" type="button" class="btn btn-outline-success pilih-produk" onclick="pilihKategori(this.id)">${database_kategori[i].nama_kategori}</button>
        </div>
        `;
    };
}

function pilihKategori(idKategori){
    // Display Produk berdasarkan Kategori terpilih
    databaseDipilih = database_kategori[idKategori].referensi;

    // Baca jumlah data
    jLenght = Object.keys(databaseDipilih).length;

    // Hapus tampilan sebelumnya
    document.getElementById("daftar_produk").innerHTML = ``;

    // Buat kolom berdasarkan jumlah data
    for(let i = 0; i < jLenght; i++)
    {
        idProduk =  String(i);

        document.getElementById("daftar_produk").innerHTML += `
        <div class="col">
            <div class="card h-100 shadow">
                <img src="${databaseDipilih[i].img}" class="card-img-top" alt="produk">
                <div class="card-body" style="text-align:center">
                    <h5 class="card-title" style="padding-bottom:20px">${databaseDipilih[i].nama_produk}</h5>
                    <button id="${idProduk}" href="#peta" type="button" class="btn btn-outline-success pilih-item" onclick="klikProduk(this.id)">Pilih</button>
                </div>
            </div>
        </div>
        `;
    };

    // Hapus Pilihan Kategori
    document.getElementById("kategori_produk").innerHTML=`
    <div class="col-sm mb-3">
    <button type="button" class="btn btn-outline-success pilih-produk" onclick="pilihKembali()">Kembali</button>
    </div>
    `;
}

function pilihKembali(){
    // Tampilkan Kategori
    displayKategori();

    // Hapus Produk
    document.getElementById("daftar_produk").innerHTML = ``;

    // Hapus Map
    document.getElementById("peta_lokasi").innerHTML = ``;

    // Hapus Nama Lokasi
    document.getElementById("nama_lokasi").innerHTML = ``;

    // Kembalikan Judul
    document.getElementById("produk_dipilih").innerHTML = `
    Produk Desa
    `;
}


// Untuk mendapatkan ID Produk yang dipilih
function klikProduk(idProduk){
    produkDipilih = idProduk;
    showMap(produkDipilih);
}


// Untuk menampilkan peta lokasi
function showMap(idProduk){
        // Hapus Map Sebelumnya
        document.getElementById("peta_lokasi").innerHTML = ``;

        // Tampilkan Map baru
        document.getElementById("peta_lokasi").innerHTML += `
        <div class="map-responsive">
            <iframe width="500" height="300" src="${databaseDipilih[idProduk].lokasi}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        `;

        // Tampilkan nama lokasi
        document.getElementById("nama_lokasi").innerHTML = ``;
        document.getElementById("nama_lokasi").innerHTML += `
        ${databaseDipilih[idProduk].nama_produk}             
        <p>Kontak : ${databaseDipilih[idProduk].kontak}</p>
        `;
}