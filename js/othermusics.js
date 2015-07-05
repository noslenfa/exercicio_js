var i=0;
var final_url = "http://localhost:8000/othermusics";
$.get(final_url).done( function(data) {
            var jsondata = JSON.parse(data);
            var jsonaTracks = jsondata.aTracks;
            for (var i = 0 ; i < jsonaTracks.length ; i++){
                show_html(jsonaTracks, i)
            };
});


var show_html = function (jsonaTracks, i) {
    $(".othermusics").append("<tr><td>" + jsonaTracks[i].artist_name + "</td><td>" + jsonaTracks[i].track_title + "</td><td>" + jsonaTracks[i].album_title + "</td></tr>");
    i++;
}

var getData = function (i) {

    $.get(final_url).done( function(jsonaTracks) {
        var final_url = "http://localhost:8000/othermusics";
        if (jsonaTracks.artist_name !== undefined && jsonaTracks.track_title !== undefined && jsonaTracks.album_title !== undefined) {
            show_html(jsonaTracks);
            i++;
        } 
        getData(i);
    }).fail( function(error){
        getData(i);
    });
}