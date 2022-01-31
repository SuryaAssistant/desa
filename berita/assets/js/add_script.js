var fileName = location.pathname.split("/").slice(-1);
var artikelJs = fileName[0].replace('.html','');

add_artikel = '<script src="./' + (artikelJs) + '.js"></script>';
$('body').append( add_artikel );

add_posting = '<script src="./assets/js/posting.js"></script>';
$('body').append( add_posting );