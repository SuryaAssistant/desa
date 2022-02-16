function search(){
    var produkDicari;
    var j=0;

    produkDicari = document.getElementById("cari_produk").value;

    var searchedDatabase=[{}];

    if(produkDicari != ""){
        // save as new database;
        for(let i=0; i<produkdesaDatabase.length; i++){
            if(produkdesaDatabase[i].nama_produk.toLowerCase().includes(produkDicari.toLowerCase()) == true){
                searchedDatabase[j] = produkdesaDatabase[i];

                j++;
            }
        };

        // Show searched value
        //updateTable(searchedDatabase.length, searchedDatabase)
        displayData(searchedDatabase);
    };
}