// Import Database

const { createClient } = supabase
const _supabase = createClient('https://xnqzrkafpdwivpjtwdvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2ODY1NywiZXhwIjoxOTU5MjQ0NjU3fQ.pkB-RXyZOKGvNeEHbGEjoD9KDeFV_5i4UFiIO7L_--g')

// Read database and save as year order
async function getData() {
    let { data, error } = await _supabase.from('artikel').select('*').order('created_at', { ascending: false })
    return data
  }
  
  getData().then((data) => { 
    database_berita = data;
    updateData();
  }
  
);

function updateData(){
    startShoWPost();
    update_sidebar();

    // Update Carousel
    carousel_data[0].img = database_berita[0].gambar;
    if(database_berita.length > 1){
      carousel_data[1].img = database_berita[1].gambar;
    }
    if(database_berita.length > 2){
      carousel_data[2].img = database_berita[2].gambar;
    }  
}

