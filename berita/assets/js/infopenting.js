const { createClient } = supabase
const _supabase = createClient('https://xnqzrkafpdwivpjtwdvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2ODY1NywiZXhwIjoxOTU5MjQ0NjU3fQ.pkB-RXyZOKGvNeEHbGEjoD9KDeFV_5i4UFiIO7L_--g')

// Read database and save as year order
async function getData() {
    let { data, error } = await _supabase.from('info').select('*')
    return data
  }
  
  getData().then((data) => { 
    if(data[0].info != "" && data[0].info != undefined){
        document.getElementById("info_penting").innerHTML = `
        <div class="alert alert-primary" role="alert" style="font-size:12px">
            <Strong><img src="../assets/img/speaker.svg" style="max-width:15px"> INFO PENTING</Strong>
            <br>
            ${data[0].info}
        </div>
        `;
    };
  }
  
);
