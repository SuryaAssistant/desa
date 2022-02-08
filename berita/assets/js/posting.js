// ------------------READ DATABASE BASED on Posting HTML Address ---------
var alamat_post = location.pathname.split("/").slice(-1);
var database_post = [{}];
var database_berita = [{}];

function update_artikel(){
    // -----------------------------META---------------------------------------------
    var meta_description;
    var meta_keywords;
    var web_title;

    // Setting meta tag
    web_title = '<title>' + String(database_post[0].judul) + '</title>';
    $('head').append( web_title );

    meta_description = '<meta name="description" content="' + String(database_post[0].deskripsi) + '">';
    $('meta[name=description]').remove();
    $('head').append( meta_description );

    meta_keywords = '<meta name="keywords" content="' + String(database_post[0].keyword) + '">'
    $('meta[name=keywords]').remove();
    $('head').append( meta_keywords );

    //----------------------BLOG--------------------------------------------------------

    // Tampilkan judul
    document.getElementById("judulPost").innerHTML=`
    ${database_post[0].judul}
    `;

    // Tampilkan penulis
    document.getElementById("penulisPost").innerHTML = `
    <i class='bx bxs-pencil'></i> ${database_post[0].penulis}
    `;

    var bulan = ["Januari", "Februari", 'Maret', "April", "Mei", "Juni", "Juli", 
        "Agustus", "September", "Oktober", "November", "Desember"];

    // Tampilkan tanggal publikasi
    var tahunPost = parseInt(database_post[0].created_at.substr(0,4));
    var bulanPost = parseInt(database_post[0].created_at.substr(5,2));
    var tanggalPost = parseInt(database_post[0].created_at.substr(8,2));
    var jamPost = database_post[0].created_at.substr(11);

    document.getElementById("tanggalPost").innerHTML = `
    <i class='bx bx-time-five'></i> ${tanggalPost} ${bulan[bulanPost - 1]} ${tahunPost} ${jamPost}
    `;

    // Isi Postingan
    document.getElementById('isiPost').innerHTML=`
    <img src="./assets/img/${database_post[0].gambar}" style="object-fit:cover; width:100%">
    <br>
    <br>
    ${database_post[0].isi_post}
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

}