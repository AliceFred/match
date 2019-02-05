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