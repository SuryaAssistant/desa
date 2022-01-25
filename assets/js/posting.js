var meta_description;
var meta_keywords;

// Setting meta tag
meta_description = '<meta name="description" content="' + String(deskripsi[0].deskripsi) + '">';
$('meta[name=description]').remove();
$('head').append( meta_description );

meta_keywords = '<meta name="keywords" content="' + String(deskripsi[0].keywords) + '">'
$('meta[name=keywords]').remove();
$('head').append( meta_keywords );


// Tampilkan judul
document.getElementById("judulPost").innerHTML=`
${deskripsi[0].judul}
`;

// Tampilkan penulis
document.getElementById("penulisPost").innerHTML = `
Ditulis oleh : ${deskripsi[0].penulis}
`;

// Tampilkan tanggal publikasi
document.getElementById("tanggalPost").innerHTML = `
Pada ${deskripsi[0].tanggal} ${deskripsi[0].jam}
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

// Prev Post
document.getElementById("prev_post").innerHTML = `
<br>
Lorep Ipsum
`;

// Next Post
document.getElementById("next_post").innerHTML = `
<br>
Dolor sit amet
`;