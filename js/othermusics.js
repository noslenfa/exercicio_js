var j=0;
var final_url = "http://localhost:8000/othermusics";
$.get(final_url).done( function(data) {
            var jsondata = JSON.parse(data);
            var jsonaTracks = jsondata.aTracks;
            //console.log(jsondata.aTracks[10].track_title);
            for (var i = 0 ; i < jsonaTracks.length ; i++){
                show_html(jsonaTracks, i)
            };
});


var show_html = function (jsonaTracks, i) {
	//console.log(jsondata.aTracks[10].track_title);
    $(".othermusics").append("<tr><td>" + jsonaTracks[i].artist_name + "</td><td>" + jsonaTracks[i].track_title + "</td><td>" + jsonaTracks[i].album_title + "</td></tr>");
}

