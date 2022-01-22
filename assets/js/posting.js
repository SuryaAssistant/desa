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
