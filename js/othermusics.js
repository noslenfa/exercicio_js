var j=0;
var final_url = "http://localhost:8000/othermusics";
$.get(final_url).done( function(data) {
            var jsondata = JSON.parse(data);
            //console.log(jsondata.aTracks[10].track_title);
            for (var i = 0 ; i < jsondata.length ; i++){
                show_html(jsondata, aTracks, i)
            };
});


var show_html = function (jsondata, aTracks, i) {
	console.log(jsondata.aTracks[10].track_title);
    $(".othermusics").append("<tr><td>" + jsondata.aTracks[i].artist_name + "</td><td>" + jsondata[i].aTracks.track_title + "</td><td>" + jsondata.aTracks[i].album_title + "</td></tr>");
}

