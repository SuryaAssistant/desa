var produkdesaDatabase;

var idProduk;

var mapPosition;

// ---------------------- RESCTRICTED AREA -------------------------------
// ------------------------EDIT CAREFULLY--------------------------------


function displayData(database){

    document.getElementById("row_daftar_produk").innerHTML = ``;

    document.getElementById("row_daftar_produk").innerHTML = `
    <div id="daftar_produk" class="row row-cols-2 row-cols-md-5 g-2" style="" align="center"> 
    </div>
    `;

    for(let i=0; i<database.length; i++)
    {
        document.getElementById("daftar_produk").innerHTML += `
        <div class="col">
            <div id="${database[i].id}" class="card shadow h-100" onclick="klikProduk(this.id)">
                <img src="./img/${database[i].img}" class="card-img-top" alt="produk" style="height:150px; object-fit:cover">
                <div class="card-body" style="padding-top:10px; padding-bottom:10px; text-align:left">
                    <h5 class="card-title" style="font-size:12px; text-align:center">${database[i].nama_produk}</h5>
                    <span class="badge bg-secondary" style="font-size:8px; margin-bottom:5px">${database[i].kategori}</span>
                    <p style="font-size:10px; text-align:left"><i class='bx bxs-map'></i> Dusun ${database[i].dusun}</p>
                </div>
            </div>
        </div>
        `;
    };

}



function kembaliKeDaftarProduk(){
    // Hapus info produk
    document.getElementById("info_produk").innerHTML = ``;

    // tampilkan daftar produk kembali
    displayData(produkdesaDatabase);
}


// Untuk mendapatkan ID Produk yang dipilih
function klikProduk(idProduk){
    var produkTerpilih = [{}];

    const { createClient } = supabase
    const _supabase = createClient('https://xnqzrkafpdwivpjtwdvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2ODY1NywiZXhwIjoxOTU5MjQ0NjU3fQ.pkB-RXyZOKGvNeEHbGEjoD9KDeFV_5i4UFiIO7L_--g')
    
    // Read database and save as year order
    async function getData() {
        let { data, error } = await _supabase.from('produkdesa').select('*').eq('id', idProduk)
            return data
    }
        
    getData().then((data) => { 
            produkTerpilih = data;
            showInfo(produkTerpilih);
    });
}


// MENAMPILKAN DESKRIPSI DARI PRODUK YANG DIPILIH
function showInfo(produkTerpilih){

    mapPosition = produkTerpilih[0].lokasi;

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
                    <img src="./img/${produkTerpilih[0].img}" class="card-img-top" alt="produk" style="height:100%; object-fit:cover">
                </div>
                <div class="col">
                    <div class="row" style="text-align:right">
                        <div class="col" style="padding-top:20px; padding-right:40px; padding-bottom:20px">
                            <button type="button" class="btn btn-outline-success pilih-produk" onclick="kembaliKeDaftarProduk()" style="max-width:100px; font-size:10px">Kembali</button>
                        </div>
                    </div>
                    <div class="row" style="padding-left:20px">
                        <p style="font-size:12px"> 
                        ${produkTerpilih[0].nama_produk}
                        <br>
                        Kontak :  ${produkTerpilih[0].kontak}
                        </p>
                        <div class="row">
                            <div class="col" id="marketplace" style="font-size:25px">
                            </div>
                        </p>

                        <p style="font-size:12px">Peta Lokasi : </p>
                        <div class="col" style="padding-bottom:20px" id="buttonMap">
                            <button type="button" class="btn btn-outline-success pilih-produk" onclick="showMap()" style="max-width:75px;font-size:15px"><i class='bx bx-map-alt'></i></button>
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

    if(produkTerpilih[0].facebook != "" && produkTerpilih[0].facebook!= undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${produkTerpilih[0].facebook} target="_blank"><i class='bx bxl-facebook-square'></i></a>
        `;
    }
    if(produkTerpilih[0].instagram != "" && produkTerpilih[0].instagram != undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${produkTerpilih[0].instagram} target="_blank"><i class='bx bxl-instagram'></i></a>
        `;
    }
    if(produkTerpilih[0].tokopedia != "" && produkTerpilih[0].tokopedia != undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${produkTerpilih[0].tokopedia} target="_blank"><img src="../assets/img/tokopedia.svg" style="padding-bottom:6px;padding-left:5px;padding-right:5px;height:25px"></a>
        `;
    }
    if(produkTerpilih[0].shopee != "" && produkTerpilih[0].shopee != undefined)
    {
        document.getElementById("marketplace").innerHTML += `
        <a href=${produkTerpilih[0].shopee} target="_blank"><img src="../assets/img/shopee.svg" style="padding-bottom:7px;padding-left:5px;padding-right:5px;height:25px"></a>
        `;
    }
}

function showMap(){
    document.getElementById("peta_lokasi").innerHTML = ``;

    document.getElementById("peta_lokasi").innerHTML += `
    <div class="map-responsive">
        <iframe width="500" height="300" src="${mapPosition}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    `;
}

function showAll(){
    displayData(produkdesaDatabase);
}