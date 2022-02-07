// Info Penting ----------------------------------------------------------------
var info_penting = "";

//------------------------------------------------------------------------------

// Read database
var database_berita = [{}];
var jumlahBerita = Object.keys(database_berita).length;
var max_number = 10;

// page total
var max_page_number = Math.floor(jumlahBerita / max_number) + 1;
var current_page = 1;

var bulan = ["Januari", "Februari", 'Maret', "April", "Mei", "Juni", "Juli", 
    "Agustus", "September", "Oktober", "November", "Desember"];


function startShoWPost(){
    if(jumlahBerita <= max_number){
        max_number = jumlahBerita;
    };

    // Set pagination based on page number
    document.getElementById("pagination").innerHTML = `
    <a onclick="page(current_page-1)">&laquo;</a>
    `;

    for(let i=0; i<max_page_number; i++){
        document.getElementById("pagination").innerHTML += `
        <a id="${i + 1}" onclick="page(${i + 1})"> ${i+1} </a>
        `;
    }

    document.getElementById("pagination").innerHTML += `
    <a onclick="page(current_page+1)">&raquo;</a>
    `;

    update_post();
    document.getElementById(1).classList.add("active");
}

// Show berita based page number
function update_post(){
    var start_number = (current_page-1) * max_number;
    var finish_number = (current_page) * max_number;

    if(finish_number > jumlahBerita){
        finish_number = jumlahBerita;
    };

    document.getElementById("recent_post").innerHTML = ``;

    for(let i=start_number; i<finish_number; i++){
        
        var tahunPost = parseInt(database_berita[i].created_at.substr(0,4));
        var bulanPost = parseInt(database_berita[i].created_at.substr(5,2));
        var tanggalPost = parseInt(database_berita[i].created_at.substr(8,2));
        
        document.getElementById("recent_post").innerHTML += `
        <div class="row" style="padding-bottom:10px">
            <div class="col-sm-9">
                <a style="text-decoration:none;color:#182c2d" href="./${database_berita[i].alamat_artikel}"><h4 style="font-size:14px; padding-bottom:5px">${database_berita[i].judul}</h4></a>
                <p style="font-size:12px; margin-bottom:0px; opacity:0.5"><i class='bx bx-time-five'></i> ${tanggalPost} ${bulan[bulanPost-1]} ${tahunPost}</p>
            </div>
        </div>
        `;

        if(i<(finish_number-1)){
            document.getElementById("recent_post").innerHTML += `
            <hrblog></hrblog>
            `;
        }
    };
}


// moving page function
function page(pageId){
    if(pageId < 1){
        pageId = 1;
    };
    if(pageId > max_page_number){
        pageId = max_page_number;
    };

    current_page = pageId;
    document.getElementById(current_page).classList.add("active");

    //delete other active class
    for(let i=1; i<=max_page_number; i++)
    {
        if(i != pageId)
        {
            document.getElementById(i).classList.remove("active");
        }
    }
    update_post();
}