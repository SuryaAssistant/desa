var jLength;
var idName;
var numberId;
var produkDipilih;
var databaseDipilih;


// Function to read button
function pilihPertanian(){
    // Produk Dipilih
    document.getElementById("produk_dipilih").innerHTML = `
    Produk Pertanian
    `;
    databaseDipilih = 0;

    // Baca jumlah data
    jLenght = Object.keys(database_pertanian).length;

    // Hapus tampilan sebelumnya
    document.getElementById("daftar_produk").innerHTML = ``;

    // Buat kolom berdasarkan jumlah data
    for(let i = 0; i < jLenght; i++)
    {
        idName =  String(i);

        document.getElementById("daftar_produk").innerHTML += `
        <div class="col">
            <div class="card h-100 shadow">
                <img src="${database_pertanian[i].img}" class="card-img-top" alt="produk">
                <div class="card-body" style="text-align:center">
                    <h5 class="card-title" style="padding-bottom:20px">${database_pertanian[i].nama_produk}</h5>
                    <button id="${idName}" type="button" class="btn btn-outline-success pilih-item" onclick="klikProduk(this.id)">Pilih</button>
                </div>
            </div>
        </div>
        `;
    };
}

function pilihPeternakan(){
   // Produk Dipilih
   document.getElementById("produk_dipilih").innerHTML = `
   Produk Peternakan
   `;
   databaseDipilih = 1;

   // Baca jumlah data
   jLenght = Object.keys(database_peternakan).length;

   // Hapus tampilan sebelumnya
   document.getElementById("daftar_produk").innerHTML = ``;

   // Buat kolom berdasarkan jumlah data
   for(let i = 0; i < jLenght; i++)
   {
       idName = String(i);

       document.getElementById("daftar_produk").innerHTML += `
       <div class="col">
           <div class="card h-100 shadow">
               <img src="${database_peternakan[i].img}" class="card-img-top" alt="produk">
               <div class="card-body" style="text-align:center">
                   <h5 class="card-title" style="padding-bottom:20px">${database_peternakan[i].nama_produk}</h5>
                   <button id="${idName}" type="button" class="btn btn-outline-success pilih-item" onclick="klikProduk(this.id)">Pilih</button>
               </div>
           </div>
       </div>
       `;
   };
}

function pilihOlahan(){
   // Produk Dipilih
   document.getElementById("produk_dipilih").innerHTML = `
   Produk Olahan
   `;
   databaseDipilih = 2;

   // Baca jumlah data
   jLenght = Object.keys(database_olahan).length;

   // Hapus tampilan sebelumnya
   document.getElementById("daftar_produk").innerHTML = ``;

   // Buat kolom berdasarkan jumlah data
   for(let i = 0; i < jLenght; i++)
   {
       idName = String(i);

       document.getElementById("daftar_produk").innerHTML += `
       <div class="col">
           <div class="card h-100 shadow">
               <img src="${database_olahan[i].img}" class="card-img-top" alt="produk">
               <div class="card-body" style="text-align:center">
                   <h5 class="card-title" style="padding-bottom:20px">${database_olahan[i].nama_produk}</h5>
                   <button id="${idName}" type="button" class="btn btn-outline-success pilih-item" onclick="klikProduk(this.id)">Pilih</button>
               </div>
           </div>
       </div>
       `;
   };
}

function pilihWisata(){
   // Produk Dipilih
   document.getElementById("produk_dipilih").innerHTML = `
   Destinasi Wisata
   `;
   databaseDipilih = 3;

   // Baca jumlah data
   jLenght = Object.keys(database_wisata).length;

   // Hapus tampilan sebelumnya
   document.getElementById("daftar_produk").innerHTML = ``;

   // Buat kolom berdasarkan jumlah data
   for(let i = 0; i < jLenght; i++)
   {
       idName = String(i);

       document.getElementById("daftar_produk").innerHTML += `
       <div class="col">
           <div class="card h-100 shadow">
               <img src="${database_wisata[i].img}" class="card-img-top" alt="produk">
               <div class="card-body" style="text-align:center">
                   <h5 class="card-title" style="padding-bottom:20px">${database_wisata[i].nama_produk}</h5>
                   <button id="${idName}" type="button" class="btn btn-outline-success pilih-item" onclick="klikProduk(this.id)">Pilih</button>
               </div>
           </div>
       </div>
       `;
   };
}

// Untuk mendapatkan ID Produk yang dipilih
function klikProduk(idProduk){
    produkDipilih = idProduk;
    showMap(databaseDipilih, produkDipilih);
}


// Untuk menampilkan peta lokasi
function showMap(jenisDatabase, kodeProduk){
    if(jenisDatabase == 0){
        // Hapus Map Sebelumnya
        document.getElementById("peta_lokasi").innerHTML = ``;
        document.getElementById("peta_lokasi").innerHTML += `
        <div class="map-responsive">
            <iframe width="500" height="300" id="gmap_canvas" src="${database_pertanian[kodeProduk].lokasi}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen></iframe>
        </div>
        `;
        // Tampilkan nama lokasi
        document.getElementById("nama_lokasi").innerHTML = ``;
        document.getElementById("nama_lokasi").innerHTML += `
        ${database_pertanian[kodeProduk].nama_produk}
        `;
    }
    if(jenisDatabase == 1){
        // Hapus Map Sebelumnya
        document.getElementById("peta_lokasi").innerHTML = ``;
        document.getElementById("peta_lokasi").innerHTML += `
        <div class="map-responsive">
            <iframe width="500" height="300" id="gmap_canvas" src="${database_peternakan[kodeProduk].lokasi}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen></iframe>
        </div>
        `;
        // Tampilkan nama lokasi
        document.getElementById("nama_lokasi").innerHTML = ``;
        document.getElementById("nama_lokasi").innerHTML += `
        ${database_peternakan[kodeProduk].nama_produk}
        `;
    }
    if(jenisDatabase == 2){
        // Hapus Map Sebelumnya
        document.getElementById("peta_lokasi").innerHTML = ``;
        document.getElementById("peta_lokasi").innerHTML += `
        <div class="map-responsive">
            <iframe width="500" height="300" id="gmap_canvas" src="${database_olahan[kodeProduk].lokasi}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen></iframe>
        </div>
        `;
        // Tampilkan nama lokasi
        document.getElementById("nama_lokasi").innerHTML = ``;
        document.getElementById("nama_lokasi").innerHTML += `
        ${database_olahan[kodeProduk].nama_produk}
        `;
    }
    if(jenisDatabase == 3){
        // Hapus Map Sebelumnya
        document.getElementById("peta_lokasi").innerHTML = ``;
        document.getElementById("peta_lokasi").innerHTML += `
        <div class="map-responsive">
            <iframe width="500" height="300" id="gmap_canvas" src="${database_wisata[kodeProduk].lokasi}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen></iframe>
        </div>
        `;
        // Tampilkan nama lokasi
        document.getElementById("nama_lokasi").innerHTML = ``;
        document.getElementById("nama_lokasi").innerHTML += `
        ${database_wisata[kodeProduk].nama_produk}
        `;
    }
}