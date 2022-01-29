carousel_data = [
    {
        "img" : "./assets/img/carousel/carousel_1.jpeg",
        "deskripsi" : ""
    },
    {
        "img" : "./assets/img/carousel/carousel_2.jpeg",
        "deskripsi" : ""
    },
    {
        "img" : "./assets/img/carousel/carousel_3.jpeg",
        "deskripsi" : ""
    }
];

// =================================================================================
// --------------------------- DISPLAY GAMBAR --------------------------------------
// =================================================================================
var idName;

// DISPLAY IN CAROUSEL

for(let i = 1; i <= 3; i++)
{
    idName = "carousel_" + String(i);

    document.getElementById(idName).innerHTML = `
    <img src="${carousel_data[i-1].img}" style="object-fit:cover; max-height:400px; width:100%">

    <div class="carousel-caption">
        <div class="container position-relative">
            <div class="row" style="text-align:center;">
                <div class="col">
                    <h1><Strong>${carousel_data[i-1].deskripsi}</Strong></h1>
                </div>
            </div>
        </div>
    </div>
    `;

};
