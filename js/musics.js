var final_url = "localhost:8000/musics";
$.get(final_url).done( function(data) {
            var jsondata = JSON.parse(data)
            for (var i = 0 ; i < jsondata.length ; i++){
                show_html(jsondata, i)
            };

});

var show_html = function (jsondata, i) {
    $(".musics").append("<tr><td>" + jsondata[i].id + "</td><td>" + jsondata[i].title + "</td><td>" + jsondata[i].artist + "</td></tr>");
}
