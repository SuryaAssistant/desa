carousel_data = [
    {
        "img" : "0000001.jpg",
    },
    {
        "img" : "0000001.jpg",
    },
    {
        "img" : "0000001.jpg",
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
    <img src="./assets/img/${carousel_data[i-1].img}" style="object-fit:cover; max-height:400px; width:100%">

    <div class="carousel-caption">
        <div class="container position-relative">
            <div class="row" style="text-align:center;">
                <div class="col">
                </div>
            </div>
        </div>
    </div>
    `;

};
