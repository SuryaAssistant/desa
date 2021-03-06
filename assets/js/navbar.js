document.getElementById("mainNav").innerHTML = `
<div class="container-fluid">
    <a class="navbar-brand" href="${homepage}" >
        <div class="row">
            <div class="col" style="text-align:center">
                <img src="${homepage}/assets/img/lambang_pacitan_small.png" alt="" width="auto" height="50" class="d-inline-block align-text-top">
            </div>
            <div class="col">
                <Strong>Desa Jetis Lor</Strong>
                <br>
                <p style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; font-size:9px; color:#ffffff !important">Kecamatan Nawangan</p>
                <p style="padding-top:0px; padding-bottom:0px; margin-bottom:0px; font-size:9px; color:#ffffff !important">Kabupaten Pacitan</p>
            </div>
        </div>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end navbar-menu" id="navbarSupportedContent" >
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="${homepage}/profildesa.html" style="color:#ffffff">Profil</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${homepage}/pemerintahan.html" style="color:#ffffff">Pemerintahan</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${homepage}/produkhukum" style="color:#ffffff">Produk Hukum</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${homepage}/produkdesa" style="color:#ffffff">Produk Desa</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${homepage}/berita" style="color:#ffffff">Berita</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${homepage}/statistik" style="color:#ffffff">Statistik</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#kontak" style="color:#ffffff">Kontak</a>
            </li>
            
        </ul>
    </div>
</div>

`;