var tahunSekarang = new Date().getFullYear();
var jumlahProdukHukum = 0;

// update jumlah produk hukum
document.getElementById("jumlahProdukHukum").innerHTML = `0`;
readDatabase('perdes', tahunSekarang);
readDatabase('perkades', tahunSekarang);

function readDatabase(nama_database, tahun){
    const { createClient } = supabase
    const _supabase = createClient('https://xnqzrkafpdwivpjtwdvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2ODY1NywiZXhwIjoxOTU5MjQ0NjU3fQ.pkB-RXyZOKGvNeEHbGEjoD9KDeFV_5i4UFiIO7L_--g')
    
    async function getData() {
        let { data, error } = await _supabase.from(nama_database).select('*').eq('tahun', tahun)
            return data
    }
        
    getData().then((data) => { 
        jumlahProdukHukum += data.length;
        document.getElementById("jumlahProdukHukum").innerHTML = `${jumlahProdukHukum}`;
    });
}


// update jumlah produk desa
var jumlahProdukDesa = 0;
document.getElementById("jumlahProdukDesa").innerHTML = `0`;
readProdukDesa('produkdesa');

function readProdukDesa(nama_database){
    const { createClient } = supabase
    const _supabase = createClient('https://xnqzrkafpdwivpjtwdvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2ODY1NywiZXhwIjoxOTU5MjQ0NjU3fQ.pkB-RXyZOKGvNeEHbGEjoD9KDeFV_5i4UFiIO7L_--g')
    
    async function getData() {
        let { data, error } = await _supabase.from(nama_database).select('*')
            return data
    }
        
    getData().then((data) => { 
        jumlahProdukDesa += data.length;
        document.getElementById("jumlahProdukDesa").innerHTML = `${jumlahProdukDesa}`;
    });
}