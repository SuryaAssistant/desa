var jLength;

var idProduk;
var choosedKategori;

var produkDipilih;
var databaseDipilih;

var marketplace_facebook;
var marketplace_instagram;
var marketplace_tokopedia;
var marketplace_shopee;

displayKategori();


/*---------------------------FUNGSI---------------------------*/
/*---------------------Edit dengan Hati-Hati------------------*/

// DISPLAY KATEGORI PRODUK
// JANGAN DIUBAH
function displayKategori(){
    // Hapus Info Produk
    document.getElementById("row_daftar_produk").innerHTML = ``;

    // Baca database_kategori
    jLength = Object.keys(database_kategori).length;

    // Hapus data sebelumnya
    document.getElementById("kategori_produk").innerHTML = `
    <div id="chooseKategori" class="row row-cols-1 row-cols-2 g-4" style="margin-left:10%; margin-right:10%;" align="center">
    </div>
    `;

    for(let i=0; i<jLength; i++)
    {
        idKategori = i;

        document.getElementById("chooseKategori").innerHTML += `
        <div class="col">
            <div class="card shadow h-100">
                <div id="${idKategori}" class="card-body" style="padding-top:70px; padding-bottom:70px" onclick="pilihKategori(this.id)">
                    <h5 class="card-title" style="font-size:14px">${database_kategori[i].nama_kategori}</h5>
                </div>
            </div>
        </div>
        `;
    };

}


// KETIKA MEMILIKI KATEGORI,
// TAMPILKAN DAFTAR PRODUK

function pilihKategori(idKategori){
    // Display Produk berdasarkan Kategori terpilih
    databaseDipilih = database_kategori[idKategori].referensi;
    choosedKategori = idKategori;

    // Baca jumlah data
    jLenght = Object.keys(databaseDipilih).length;

    // Hapus tampilan sebelumnya
    document.getElementById("row_daftar_produk").innerHTML = ``;

    document.getElementById("row_daftar_produk").innerHTML = `
        <div id="daftar_produk" class="row row-cols-1 row-cols-md-4 g-4" style="padding-bottom:40px">
        </div>
    `;

    // Buat kolom berdasarkan jumlah data
    for(let i = 0; i < jLenght; i++)
    {
        idProduk =  String(i);

        document.getElementById("daftar_produk").innerHTML += `
        <div class="col">
            <div id="${idProduk}" class="card h-100 shadow" onclick="klikProduk(this.id)">
                <img src="./database/img/${databaseDipilih[i].img}" class="card-img-top" alt="produk" style="height:150px; object-fit:cover">
                <div class="card-body" style="text-align:center">
                    <h5 class="card-title" style="padding-bottom:20px; font-size:14px">${databaseDipilih[i].nama_produk}</h5>
                </div>
            </div>
        </div>
        `;
    };

    // Hapus Pilihan Kategori
    document.getElementById("kategori_produk").innerHTML=`
    <div class="col-sm mb-3" style="text-align:center">
    <button type="button" class="btn btn-outline-success pilih-produk" onclick="pilihKembali()">Kembali</button>
    </div>
    `;
}

// KETIKA KELUAR DARI DAFTAR PRODUK
// MASUK KE PILIHAN KATEGORI
function pilihKembali(){
    // Tampilkan Kategori
    displayKategori();

    // Hapus Info Produk
    document.getElementById("row_daftar_produk").innerHTML = ``;

    // Kembalikan Judul
    document.getElementById("produk_dipilih").innerHTML = `
    Produk Desa
    `;

}

function kembaliKeDaftarProduk(){
    // Hapus info produk
    document.getElementById("info_produk").innerHTML = ``;

    // tampilkan daftar produk kembali
    pilihKategori(choosedKategori);
}


// Untuk mendapatkan ID Produk yang dipilih
function klikProduk(idProduk){
    produkDipilih = idProduk;
    showInfo(produkDipilih);
}


// MENAMPILKAN DESKRIPSI DARI PRODUK YANG DIPILIH
function showInfo(idProduk){
    // Hapus Pilihan Kategori
    // Hapus Pilihan Kategori
    document.getElementById("kategori_produk").innerHTML=``;

    // Hapus Daftar Produk
    document.getElementById("row_daftar_produk").innerHTML = ``;

    // Hapus Info Sebelumnya
    document.getElementById("info_produk").innerHTML = ``;

    // Tampilkan informasi produk
    document.getElementById("info_produk").innerHTML += `
    <div class="col">
        <div class="card shadow">
            <!-- Deskripsi Produk -->
            <div class="row">
                <div class="col-sm-4" align="center">
                    <img src="./database/img/${databaseDipilih[idProduk].img}" class="card-img-top" alt="produk" style="height:100%; object-fit:cover">
                </div>
                <div class="col">
                    <div class="row" style="text-align:right">
                        <div class="col" style="padding-top:20px; padding-right:40px; padding-bottom:20px">
                            <button type="button" class="btn btn-outline-success pilih-produk" onclick="kembaliKeDaftarProduk()" style="max-width:100px; font-size:10px">Kembali</button>
                        </div>
                    </div>
                    <div class="row" style="padding-left:20px">
                        <p style="font-size:12px"> 
                        Nama Produk : ${databaseDipilih[idProduk].nama_produk}
                        <br>
                        Kontak :  ${databaseDipilih[idProduk].kontak}
                        <br>
                        Link Pembelian : 
                        </p>
                        <div class="row">
                            <div class="col" id="marketplace" style="font-size:25px">
                            </div>
                        </p>

                        <p style="font-size:12px">Peta Lokasi : </p>
                        <div class="col" style="padding-bottom:20px" id="buttonMap">
                            <button type="button" class="btn btn-outline-success pilih-produk" onclick="showMap(${idProduk})" style="max-width:75px;font-size:20px"> <i class='bx bx-map-alt'></i></button>
                        </div>
                    </div>
                </div> 
            </div>
            <div id="peta_lokasi" class="row" style="margin-left:auto; margin-right:auto">
            </div>           
        </div>
    </div>
    `;

    // Marketplace
    document.getElementById("marketplace").innerHTML = ``;

    if(databaseDipilih[idProduk].facebook != "" && databaseDipilih[idProduk].facebook!= undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${databaseDipilih[idProduk].facebook} target="_blank"><i class='bx bxl-facebook-square'></i></a>
        `;
    }
    if(databaseDipilih[idProduk].instagram != "" && databaseDipilih[idProduk].instagram != undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${databaseDipilih[idProduk].instagram} target="_blank"><i class='bx bxl-instagram'></i></a>
        `;
    }
    if(databaseDipilih[idProduk].tokopedia != "" && databaseDipilih[idProduk].tokopedia != undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${databaseDipilih[idProduk].tokopedia} target="_blank"><img src="./assets/img/tokopedia_small.png" style="padding-bottom:12px;padding-left:5px;padding-right:5px"></a>
        `;
    }
    if(databaseDipilih[idProduk].shopee != "" && databaseDipilih[idProduk].shopee != undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${databaseDipilih[idProduk].shopee} target="_blank"><img src="./assets/img/shopee_small.png" style="padding-bottom:12px;padding-left:5px;padding-right:5px"></a>
        `;
    }
}

function showMap(idProduk){
    document.getElementById("buttonMap").innerHTML = ``;

    document.getElementById("peta_lokasi").innerHTML += `
    <div class="map-responsive">
        <iframe width="500" height="300" src="${databaseDipilih[idProduk].lokasi}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    `;
}