
// Import Database
const { createClient } = supabase
const _supabase = createClient('https://xnqzrkafpdwivpjtwdvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2ODY1NywiZXhwIjoxOTU5MjQ0NjU3fQ.pkB-RXyZOKGvNeEHbGEjoD9KDeFV_5i4UFiIO7L_--g')

// Read database and save as year order
async function getData() {
    let { data, error } = await _supabase.from('artikel').select('*').eq('alamat_artikel', alamat_post)
    return data
  }
  
  getData().then((data) => { 
    database_post = data;
    updateData();
  }
  
);

function updateData(){
    update_artikel();
}


// Read database and save as year order
async function newPost() {
    let { data, error } = await _supabase.from('artikel').select('*').order('created_at', { ascending: false })
    return data
  }

  newPost().then((data) => { 
    database_berita = data;
    update_sidebar();
  }

);
