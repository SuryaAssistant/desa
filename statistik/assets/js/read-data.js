var kategori_database = "";
var pilihanTahun = [{}];
var databaseTerpilih = [{}];

// Create place to display data
function readData(get_kategori_database){
    document.getElementById("dataView").innerHTML = ``;
    pilihanTahun = [{}];

    kategori_database = get_kategori_database;

    getYearOnDatabase(kategori_database);

}

function getYearOnDatabase(kategori_database){
    const { createClient } = supabase
    const _supabase = createClient('https://xnqzrkafpdwivpjtwdvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2ODY1NywiZXhwIjoxOTU5MjQ0NjU3fQ.pkB-RXyZOKGvNeEHbGEjoD9KDeFV_5i4UFiIO7L_--g')
    
    // Read database and save as year order
    async function getData() {
        let { data, error } = await _supabase.from(kategori_database).select('tahun_anggaran').order('tahun_anggaran', { ascending: false })
        return data
      }
      
      getData().then((data) => { 

          for(let i=0; i<data.length; i++){
              for(let j=0; j<pilihanTahun.length; j++){
                if (pilihanTahun[j] != data[i]){
                    pilihanTahun[j+1] = data[i];
                }
              }
          }


          document.getElementById("dataView").innerHTML = `
          <!-- Pilih Tahun -->
          <div class="row" style="margin-bottom:20px">
              <div class="col">
  
              <div class="dropdown" style="font-size:12px">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="tahun" data-bs-toggle="dropdown" aria-expanded="false" style="font-size:12px">
                      Pilih Tahun
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="tahun" id="daftar_tahun" style="font-size:12px">
                  </ul>
              </div>
  
              </div>
          </div>
          `;

          for(let i=0; i<pilihanTahun.length; i++){
              if(pilihanTahun[i].tahun_anggaran != undefined){
                document.getElementById("daftar_tahun").innerHTML += `
                <li><button class="dropdown-item" type="button" id="${pilihanTahun[i].tahun_anggaran}" onclick="showDataBasedOnYear(kategori_database, this.id)">${pilihanTahun[i].tahun_anggaran}</button></li>
                `;
              }
          }
      }
    );
}

function showDataBasedOnYear(kategori_database, tahun_anggaran){
    
    databaseTerpilih = [{}];

    const { createClient } = supabase
    const _supabase = createClient('https://xnqzrkafpdwivpjtwdvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY2ODY1NywiZXhwIjoxOTU5MjQ0NjU3fQ.pkB-RXyZOKGvNeEHbGEjoD9KDeFV_5i4UFiIO7L_--g')
    
    // Read database and save as year order
    async function getData() {
        let { data, error } = await _supabase.from(kategori_database).select('*').eq('tahun_anggaran', tahun_anggaran)
            return data
        }
        
        getData().then((data) => { 
            databaseTerpilih = data;
            updateData(kategori_database);
        });
}

function updateData(kategori_database){

    if (kategori_database == "statistik_keuangan"){
        // create graph components
        var data_doughnut = {
            labels: [
            ],
            datasets: [{
            label: 'Anggaran',
            data: [],
            backgroundColor: [
            ],
            hoverOffset: 4
            }]
        };
        
        for (let i=0; i<databaseTerpilih.length; i++){
            data_doughnut.labels[i] = databaseTerpilih[i].nama_anggaran;
            data_doughnut.datasets[0].data[i] = databaseTerpilih[i].nilai_anggaran;

            var r = () => Math.random() * 256 >> 0;
            var color = `rgb(${r()}, ${r()}, ${r()})`;
            data_doughnut.datasets[0].backgroundColor[i] = color;
        }


        document.getElementById("dataView").innerHTML += `

        <!-- Row for chart -->
        <div class="row" style="margin-bottom:20px">

            <!-- Doughnut Chart -->
            <div class="col-lg-6" id="doughnut_chart">
            <canvas id="chart" width="400" height="400"></canvas>
            </div>

            <!-- Table Here -->
            <div class="col-lg-6" >
            </div>

        </div>

        <!-- Row for table -->
        <div class="row">
            <div class="col">
                <table class="table table-hover" style="font-size:14px">
                <thead>
                    <tr>
                        <th>Nama Anggaran</th>
                        <th>Kategori Anggaran</th>
                        <th>Nilai Anggaran (Rp)</th>
                        <th>Realisasi Anggaran (Rp)</th>
                        <th>Selisih (Rp)</th>
                    </tr>
                </thead>
                <tbody id="table_data">
                </tbody>
                </table>
            </div>
        </div>

        `;

        var ctx = document.getElementById('chart');
        var chart = new Chart(ctx, {
            type: 'doughnut',
            data: data_doughnut,
        
        });

        // update table
        for(let i=0; i<databaseTerpilih.length; i++){
            document.getElementById("table_data").innerHTML += `
            <tr>
                <td>${databaseTerpilih[i].nama_anggaran}</td>
                <td>${databaseTerpilih[i].kategori_anggaran}</td>
                <td>${databaseTerpilih[i].nilai_anggaran}</td>
                <td>${databaseTerpilih[i].realisasi_anggaran}</td>
                <td>${(databaseTerpilih[i].nilai_anggaran - databaseTerpilih[i].realisasi_anggaran).toFixed(2)}</td>

            </tr>
            `;
        }
    }
}