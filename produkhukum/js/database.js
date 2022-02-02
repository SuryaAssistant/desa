// Import Database

const { createClient } = supabase
const _supabase = createClient('https://xnqzrkafpdwivpjtwdvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2ODY1NywiZXhwIjoxOTU5MjQ0NjU3fQ.pkB-RXyZOKGvNeEHbGEjoD9KDeFV_5i4UFiIO7L_--g')

// Read database and save as year order
async function getData() {
    let { data, error } = await _supabase.from('perkades').select('*').order('tahun', { ascending: false })
    return data
  }
  
  getData().then((data) => { 
    perkades = data;
    console.log(perkades);
    updateData();
  }
  
);

function updateData(){
    displayPerkades();
}

