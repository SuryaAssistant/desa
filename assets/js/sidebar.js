// Create sidebar element


document.getElementById("sidebar").innerHTML = `
<!-- Video Layanan Masyarakat-->

<div class="row" style="margin-bottom:20px; margin-left:0px; margin-right:0px" align="left">
    <div class="card shadow-sm" style="border:none">
        <div class="card-body">
        <p align="left"><Strong><i class='bx bx-video'></i> IKLAN LAYANAN MASYARAKAT</Strong></p>
        <iframe src="https://drive.google.com/file/d/1QDgUu1rD4b4wWhBF8zELcmE0lFI25rQa/preview" width="100%" allow="autoplay"></iframe>
        </div>
    </div>
</div>

<!-- Pengumuman -->
<div class="row" style="margin-bottom:20px; margin-left:0px; margin-right:0px" align="left">
    <div class="card shadow-sm" style="border:none">
        <div class="card-body">
            <div class="col" id="pengumuman">
            <p align="left"><Strong><i class='bx bx-pin'></i> PENGUMUMAN</Strong></p>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${homepage}/berita/pengumuman/pengumuman1.jpg" class="d-block w-100" style="max-height:250px; max-width:100%;">
                </div>
                <div class="carousel-item">
                  <img src="${homepage}/berita/pengumuman/pengumuman2.jpg" class="d-block w-100" style="max-height:250px; max-width:100%;">
                </div>
                <div class="carousel-item">
                  <img src="${homepage}/berita/pengumuman/pengumuman3.jpg" class="d-block w-100" style="max-height:250px; max-width:100%;">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
            </div>
        </div>
    </div>
</div>
<!-- Berita Terbaru -->
<div class="row" style="margin-bottom:20px; margin-left:0px; margin-right:0px" align="left">
    <div class="card shadow-sm" style="border:none">
        <div class="card-body">
            <div class="col" id="berita_baru">
            </div>
        </div>
    </div>
</div>
<!-- Informasi Desa -->
<div class="row" style="margin-bottom:20px; margin-left:0px; margin-right:0px" align="center">
    <div class="card shadow-sm" style="border:none">
        <div class="card-body">
            <div class="col" id="info_desa">
            <p align="left"><Strong><i class='bx bx-info-circle'></i> INFO DESA</Strong></p>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${homepage}/berita/info_desa/image1.jpg" class="d-block w-100" style="max-height:250px; max-width:100%;">
                </div>
                <div class="carousel-item">
                  <img src="${homepage}/berita/info_desa/image2.jpg" class="d-block w-100" style="max-height:250px; max-width:100%;">
                </div>
                <div class="carousel-item">
                  <img src="${homepage}/berita/info_desa/image3.jpg" class="d-block w-100" style="max-height:250px; max-width:100%;">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
    </div>
</div>
`;


// berita baru
var jumlahBeritaBaru = 3;

document.getElementById("berita_baru").innerHTML = `
<p align="left"><Strong><i class='bx bx-book-open'></i> BERITA TERBARU</Strong></p>
`;

for(let i=0; i<jumlahBeritaBaru; i++)
{
    document.getElementById("berita_baru").innerHTML += `
    <a style="text-decoration:none;color:#182c2d" href="${homepage}/berita/${database_berita[i].link}">
    <p style="font-size:14px; margin-bottom:10px">${database_berita[i].judul}</p>
    </a>
    `;

    if(i < (jumlahBeritaBaru-1)){
      document.getElementById("berita_baru").innerHTML += `
      <hrblog></hrblog>
      `;
    };
}


