$('#read').click(function() {
    $.ajax('/match', {
        data: { id: $('#id').val() }
    }).done(function(json) {
        $('#id').val(json.id);
        $('#date').val(json.date);
        $('#place').val(json.place);
        $('#hometeam').val(json.hometeam);
        $('#awayteam').val(json.awayteam);
        $('#homescore').val(json.homescore);
        $('#awayscore').val(json.awayscore);
    });
});

$('#create').click(function() {
    $.ajax('/match', {
        data: {
            date: $('#date').val(),
            place: $('#place').val(),
            hometeam: $('#hometeam').val(),
            awayteam: $('#awayteam').val(),
            homescore: $('#homescore').val(),
            awayscore: $('#awayscore').val()
        },
        method: 'post'
    }).done(function(json) {
        $('#id').val(json.id);
        $('#date').val(json.date);
        $('#place').val(json.place);
        $('#hometeam').val(json.hometeam);
        $('#awayteam').val(json.awayteam);
        $('#homescore').val(json.homescore);
        $('#awayscore').val(json.awayscore);
    });
});

function populateTable(object) {

    var obj = object;
    var table = $("<table />");
    table[0].border = "2";
    //bepalen van het aantal kolommen en rijen
    var columns = Object.keys(obj[0]);
    var columnCount = columns.length;
    var row = $(table[0].insertRow(-1));
    
    // loop door de kolommen (= var columns) en maak van elke kolom een header
    for (var i = 0; i < columnCount; i++) {
        var headerCell = $("<th />");
        headerCell.html([columns[i]]);
        row.append(headerCell);
    }

    //loop door 
    for (var i = 0; i < obj.length; i++) {
        row = $(table[0].insertRow(-1));
        for (var j = 0; j < columnCount; j++) {
            var cell = $("<td />");
            cell.html(obj[i][columns[j]]);
            row.append(cell);
        }
    }
    
    var dvTable = $("#dvCSV");
    dvTable.html("");
    dvTable.append(table);
}

function getData(surl, callback) {
    $.ajax({
        url: surl,

        method: 'GET',
        dataType: 'json',
        success: callback,
        error: function (requestObject, error, errorThrown) {

            console.log("error thrown, add handler to exit gracefully");
        },
        timeout: 3000 //to do: research and develop further in combination with error handling
    });
    return false;
}

getData("http://localhost:8080/matches", populateTable);