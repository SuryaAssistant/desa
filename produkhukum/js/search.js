function search(){
    var yearSearch;
    var j=0;

    yearSearch = document.getElementById("searchquery").value;

    var searchedDatabase=[{}];

    if(yearSearch != ""){
        // save as new database;
        for(let i=0; i<peraturan.length; i++){
            if(peraturan[i].tahun == yearSearch){
                searchedDatabase[j] = peraturan[i];

                j++;
            }
        };

        // Show searched value
        updateTable(searchedDatabase.length, searchedDatabase)
    };

}

function searchWord(){
    var wordSearch;
    var j=0;

    wordSearch = document.getElementById("searchword").value;

    var searchedDatabase = [{}];

    if(wordSearch != ""){
        // save as new database;
        for(let i=0; i<peraturan.length; i++){

            if(peraturan[i].nama_peraturan.toLowerCase().includes(wordSearch.toLowerCase()) == true ){
                searchedDatabase[j] = peraturan[i];
                j++;
            }
        };

        // Show searched value
        updateTable(searchedDatabase.length, searchedDatabase)
    };

}