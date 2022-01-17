var jLength;
var idName;
var numberId;


// Function to read button
function pilihPertanian(){
    // Produk Dipilih
    document.getElementById("produk_dipilih").innerHTML = `
    Produk Pertanian
    `;

    // Baca jumlah data
    jLenght = Object.keys(database_pertanian).length;

    // Hapus tampilan sebelumnya
    document.getElementById("daftar_produk").innerHTML = ``;

    // Buat kolom berdasarkan jumlah data
    for(let i = 1; i <= jLenght; i++)
    {
        idName = "produk_" + String(i);

        document.getElementById("daftar_produk").innerHTML += `
        <div class="col">
            <div class="card h-100 shadow">
                <img src="${database_pertanian[i-1].img}" class="card-img-top" alt="produk">
                <div class="card-body" style="text-align:center">
                    <h5 class="card-title" style="padding-bottom:20px">${database_pertanian[i-1].nama_produk}</h5>
                    <button id="${idName}" type="button" class="btn btn-outline-success pilih-item" onclick="">Pilih</button>
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

   // Baca jumlah data
   jLenght = Object.keys(database_peternakan).length;

   // Hapus tampilan sebelumnya
   document.getElementById("daftar_produk").innerHTML = ``;

   // Buat kolom berdasarkan jumlah data
   for(let i = 1; i <= jLenght; i++)
   {
       idName = "produk_" + String(i);

       document.getElementById("daftar_produk").innerHTML += `
       <div class="col">
           <div class="card h-100 shadow">
               <img src="${database_peternakan[i-1].img}" class="card-img-top" alt="produk">
               <div class="card-body" style="text-align:center">
                   <h5 class="card-title" style="padding-bottom:20px">${database_peternakan[i-1].nama_produk}</h5>
                   <button id="${idName}" type="button" class="btn btn-outline-success pilih-item" onclick="">Pilih</button>
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

   // Baca jumlah data
   jLenght = Object.keys(database_olahan).length;

   // Hapus tampilan sebelumnya
   document.getElementById("daftar_produk").innerHTML = ``;

   // Buat kolom berdasarkan jumlah data
   for(let i = 1; i <= jLenght; i++)
   {
       idName = "produk_" + String(i);

       document.getElementById("daftar_produk").innerHTML += `
       <div class="col">
           <div class="card h-100 shadow">
               <img src="${database_olahan[i-1].img}" class="card-img-top" alt="produk">
               <div class="card-body" style="text-align:center">
                   <h5 class="card-title" style="padding-bottom:20px">${database_olahan[i-1].nama_produk}</h5>
                   <button id="${idName}" type="button" class="btn btn-outline-success pilih-item" onclick="">Pilih</button>
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

   // Baca jumlah data
   jLenght = Object.keys(database_wisata).length;

   // Hapus tampilan sebelumnya
   document.getElementById("daftar_produk").innerHTML = ``;

   // Buat kolom berdasarkan jumlah data
   for(let i = 1; i <= jLenght; i++)
   {
       idName = "produk_" + String(i);

       document.getElementById("daftar_produk").innerHTML += `
       <div class="col">
           <div class="card h-100 shadow">
               <img src="${database_wisata[i-1].img}" class="card-img-top" alt="produk">
               <div class="card-body" style="text-align:center">
                   <h5 class="card-title" style="padding-bottom:20px">${database_wisata[i-1].nama_produk}</h5>
                   <button id="${idName}" type="button" class="btn btn-outline-success pilih-item" onclick="">Pilih</button>
               </div>
           </div>
       </div>
       `;
   };
}