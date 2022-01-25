// Create sidebar element
document.getElementById("sidebar").innerHTML = `
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
            </div>
        </div>
    </div>
</div>
`;

// Cari artikel

// Informasi Umum
document.getElementById("berita_baru").innerHTML = `
<p align="left"><Strong>Berita Terbaru</Strong></p>
`;

for(let i=0; i<3; i++)
{
    document.getElementById("berita_baru").innerHTML += `
    <a style="text-decoration:none;color:#182c2d" href="./berita/${database_berita[i].link}">
    <p style="font-size:14px; margin-bottom:10px">${database_berita[i].judul}</p>
    </a>
    `;
}

// Informasi Umum
document.getElementById("info_desa").innerHTML = `
<p align="left"><Strong>Info Desa</Strong></p>
<img src="./assets/img/logopacitan.png" align="center" width="200px" style="padding-bottom:20px">
`;

