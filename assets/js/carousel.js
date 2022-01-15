carousel_data = [
    {
        "img" : "https://www.pegipegi.com/travel/wp-content/uploads/2018/09/sawah.jpg",
        "deskripsi" : "Sentra Pertanian di Atas Awan Pacitan"
    },
  
    {
        "img" : "https://t-2.tstatic.net/jateng/foto/bank/images/pemandangan-sawah-di-desa-gumelem-wetan-kecamatan-susukan-banjarnegara.jpg",
        "deskripsi" : "Menawarkan Pemandangan yang Memanjakan Mata"
    },

    {
        "img" : "https://www.pegipegi.com/travel/wp-content/uploads/2017/07/foto-wisata-sawah-teras-sering-jatiluwih-tabanan-161203m-001.jpg",
        "deskripsi" : "Kenali Lebih Dekat Desa Jetis Lor"
    },

  ]

// =================================================================================
// --------------------------- DISPLAY GAMBAR --------------------------------------
// =================================================================================
var idName;

// DISPLAY IN CAROUSEL

for(let i = 1; i <= 3; i++)
{
    idName = "carousel_" + String(i);

    document.getElementById(idName).innerHTML = `
    <img src="${carousel_data[i-1].img}" class="d-block center-crop" style="opacity:0.4">

    <div class="carousel-caption">
        <div class="container position-relative">
            <div class="row" style="text-align:center;">
                <div class="col">
                        <h1><Strong>${carousel_data[i-1].deskripsi}</Strong></h1>
                        <br>
                        <br>
                        <h6 style="font-size:12px">Kecamatan Nawangan, Kabupaten Pacitan</h6>
                        <br>
                    <a class="btn btn-success" href="#profil_desa" role="button" style="border-radius:20px; font-size:14px">Lihat Selengkapnya</a>
                </div>
            </div>
        </div>
    </div>
    `;

};
