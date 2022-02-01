var kategoriProdukHukum;

var umkmDatabase;
var referensiProduk;

var databaseDipilih;
var jumlahProduk;
var idProduk;
var kategoriTerpilih;

// ---------------------- RESCTRICTED AREA -------------------------------
// ------------------------EDIT CAREFULLY--------------------------------


function displayKategori(){
    // Hapus Info Produk
    document.getElementById("row_daftar_produk").innerHTML = ``;

    // Hapus data sebelumnya
    document.getElementById("kategori_produk").innerHTML = `
    <div id="chooseKategori" class="row row-cols-1 row-cols-md-4 g-4" style="margin-left:10%; margin-right:10%;" align="center">
    </div>
    `;

    for(let i=0; i<kategoriProdukHukum.length; i++)
    {
        document.getElementById("chooseKategori").innerHTML += `
        <div class="col">
            <div id="${i}" class="card shadow h-100" onclick="pilihKategori(this.id)">
                <div class="card-body" style="padding-top:70px; padding-bottom:70px">
                    <i class='bx bxs-book' style="font-size:40px"></i>
                    <br>
                    <br>
                    <h5 class="card-title" style="font-size:14px">${kategoriProdukHukum[i].kategori_produk_hukum}</h5>
                </div>
            </div>
        </div>
        `;
    };
};
