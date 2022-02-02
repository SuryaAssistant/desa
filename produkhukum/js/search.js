function search(){
    var yearSearch;
    var j=0;

    yearSearch = document.getElementById("searchquery").value;

    var searchedDatabase=[{}];

    if(yearSearch != ""){
        // save as new database;
        for(let i=0; i<perkades.length; i++){
            if(perkades[i].tahun == yearSearch){
                searchedDatabase[j] = perkades[i];
                j++;
            }
        };

        // Show searched value
        document.getElementById("perkadestable").innerHTML = ``;

        updateTable(searchedDatabase.length, searchedDatabase)
    };

}