var produkdesaDatabase;
var referensiProduk;

var databaseDipilih;
var jumlahProduk;
var idProduk;
var kategoriTerpilih;

// ---------------------- RESCTRICTED AREA -------------------------------
// ------------------------EDIT CAREFULLY--------------------------------


function displayAllData(){

    document.getElementById("row_daftar_produk").innerHTML = ``;

    document.getElementById("row_daftar_produk").innerHTML = `
    <div id="daftar_produk" class="row row-cols-1 row-cols-2 g-4" style="" align="center"> 
    </div>
    `;

    for(let i=0; i<produkdesaDatabase.length; i++)
    {
        document.getElementById("daftar_produk").innerHTML += `
        <div class="col">
            <div id="${i}" class="card shadow h-100" onclick="klikProduk(this.id)">
                <img src="./img/${produkdesaDatabase[i].img}" class="card-img-top" alt="produk" style="height:150px; object-fit:cover">
                <div class="card-body" style="padding-top:10px; padding-bottom:10px; text-align:left">
                    <h5 class="card-title" style="font-size:12px; text-align:center">${produkdesaDatabase[i].nama_produk}</h5>
                    <span class="badge bg-secondary" style="font-size:8px; margin-bottom:5px">${produkdesaDatabase[i].kategori}</span>
                    <p style="font-size:10px; text-align:left"><i class='bx bxs-map'></i> Dusun ${produkdesaDatabase[i].dusun}</p>
                </div>
            </div>
        </div>
        `;
    };

}



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
    displayAllData();
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
                    <img src="./img/${produkdesaDatabase[idProduk].img}" class="card-img-top" alt="produk" style="height:100%; object-fit:cover">
                </div>
                <div class="col">
                    <div class="row" style="text-align:right">
                        <div class="col" style="padding-top:20px; padding-right:40px; padding-bottom:20px">
                            <button type="button" class="btn btn-outline-success pilih-produk" onclick="kembaliKeDaftarProduk()" style="max-width:100px; font-size:10px">Kembali</button>
                        </div>
                    </div>
                    <div class="row" style="padding-left:20px">
                        <p style="font-size:12px"> 
                        ${produkdesaDatabase[idProduk].nama_produk}
                        <br>
                        Kontak :  ${produkdesaDatabase[idProduk].kontak}
                        </p>
                        <div class="row">
                            <div class="col" id="marketplace" style="font-size:25px">
                            </div>
                        </p>

                        <p style="font-size:12px">Peta Lokasi : </p>
                        <div class="col" style="padding-bottom:20px" id="buttonMap">
                            <button type="button" class="btn btn-outline-success pilih-produk" onclick="showMap(${idProduk})" style="max-width:75px;font-size:15px"><i class='bx bx-map-alt'></i></button>
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

    if(produkdesaDatabase[idProduk].facebook != "" && produkdesaDatabase[idProduk].facebook!= undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${produkdesaDatabase[idProduk].facebook} target="_blank"><i class='bx bxl-facebook-square'></i></a>
        `;
    }
    if(produkdesaDatabase[idProduk].instagram != "" && produkdesaDatabase[idProduk].instagram != undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${produkdesaDatabase[idProduk].instagram} target="_blank"><i class='bx bxl-instagram'></i></a>
        `;
    }
    if(produkdesaDatabase[idProduk].tokopedia != "" && produkdesaDatabase[idProduk].tokopedia != undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${produkdesaDatabase[idProduk].tokopedia} target="_blank"><img src="../assets/img/tokopedia.svg" style="padding-bottom:6px;padding-left:5px;padding-right:5px;height:25px"></a>
        `;
    }
    if(produkdesaDatabase[idProduk].shopee != "" && produkdesaDatabase[idProduk].shopee != undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${produkdesaDatabase[idProduk].shopee} target="_blank"><img src="../assets/img/shopee.svg" style="padding-bottom:7px;padding-left:5px;padding-right:5px;height:25px"></a>
        `;
    }
}

function showMap(idProduk){
    document.getElementById("peta_lokasi").innerHTML = ``;

    document.getElementById("peta_lokasi").innerHTML += `
    <div class="map-responsive">
        <iframe width="500" height="300" src="${produkdesaDatabase[idProduk].lokasi}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    `;
}