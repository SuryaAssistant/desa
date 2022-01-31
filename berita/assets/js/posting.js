// -----------------------------META---------------------------------------------
var meta_description;
var meta_keywords;

// Setting meta tag
meta_description = '<meta name="description" content="' + String(deskripsi[0].deskripsi) + '">';
$('meta[name=description]').remove();
$('head').append( meta_description );

meta_keywords = '<meta name="keywords" content="' + String(deskripsi[0].keywords) + '">'
$('meta[name=keywords]').remove();
$('head').append( meta_keywords );

//----------------------BLOG--------------------------------------------------------

// Tampilkan judul
document.getElementById("judulPost").innerHTML=`
${deskripsi[0].judul}
`;

// Tampilkan penulis
document.getElementById("penulisPost").innerHTML = `
<i class='bx bxs-pencil'></i> ${deskripsi[0].penulis}
`;

var bulan = ["Januari", "Februari", 'Maret', "April", "Mei", "Juni", "Juli", 
    "Agustus", "September", "Oktober", "November", "Desember"];

// Tampilkan tanggal publikasi
document.getElementById("tanggalPost").innerHTML = `
<i class='bx bx-time-five'></i> ${deskripsi[0].tanggal} ${bulan[deskripsi[0].bulan - 1]} ${deskripsi[0].tahun} ${deskripsi[0].jam}
`;

// Share Post
document.getElementById("sharePost").innerHTML = `
<p><Strong>Share</Strong> </p>

<div class="a2a_kit a2a_kit_size_32 a2a_default_style">
<a class="a2a_dd" href="https://www.addtoany.com/share"></a>
<a class="a2a_button_facebook"></a>
<a class="a2a_button_twitter"></a>
<a class="a2a_button_email"></a>
<a class="a2a_button_whatsapp"></a>
<a class="a2a_button_telegram"></a>
<a class="a2a_button_linkedin"></a>
</div>
`;


var postId = deskripsi[0].id;
var postNumber;

for(let i=0; i<database_berita.length; i++){
    if(database_berita[i].id == postId){
        postNumber = i;
    };
};

// Prev Post
document.getElementById("prev_post").innerHTML = `
<br>
<a href="./${database_berita[postNumber+1].link}">
${database_berita[postNumber+1].judul}
</a>
`;

// Next Post
document.getElementById("next_post").innerHTML = `
<br>
<a href="./${database_berita[postNumber-1].link}">
${database_berita[postNumber-1].judul}
</a>
`;