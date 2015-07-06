//var final_url = "http://localhost:8000/othermusics";
//var otheri;
/*$.get(final_url).done( function(data) {
            var jsondata = JSON.parse(data);
            var jsonaTracks = jsondata.aTracks;
            for (var i = 0 ; i < jsonaTracks.length ; i++){
                show_html(jsonaTracks, i)
            };
});*/


/*$.get(final_url).done( function(data) {
            var jsondata = JSON.parse(data);
            var jsonaTracks = jsondata.aTracks;
            var i = jsonaTracks.length;
            console.log(i);
});*/


/*var show_html = function (jsonaTracks, i) {
    $(".othermusics").append("<tr><td>" + jsonaTracks[i].artist_name + "</td><td>" + jsonaTracks[i].track_title + "</td><td>" + jsonaTracks[i].album_title + "</td></tr>");
    i--;
}

var getData = function (i) {

            var final_url = "http://localhost:8000/othermusics";
            $.get(final_url).done( function(data) {
                var jsondata = JSON.parse(data);
                var jsonaTracks = jsondata.aTracks;
                var i = jsonaTracks.length;
                if ( i >= 0 ) {
                    console.log(i);
                    show_html(jsonaTracks, i);
                }
                console.log(i);
                getData(i);
                i--;
            });
     

}*/

// GET AO OTHERMUSICS
var final_url = "http://localhost:8000/othermusics";
var aTracks;
            $.get(final_url).done( function(data) {
                var jsondata = JSON.parse(data);
                var jsonaTracks = jsondata.aTracks; //GUARDAR RESULTADO NO ARRAY DOS aTracks
                aTracks = jsonaTracks; //PASSAR PARA A VARIÁVEL GLOBAL
                //console.log(aTracks);
});


















