// GET AO OTHERMUSICS
var final_url = "http://localhost:8000/othermusics";
var aTracks;
var i;


            $.get(final_url).done( function(data) {
                var jsondata = JSON.parse(data);
                var jsonaTracks = jsondata.aTracks; //GUARDAR RESULTADO NO ARRAY DOS aTracks
                aTracks = jsonaTracks; //PASSAR PARA A VARIÁVEL GLOBAL
                i = aTracks.length-1;
                getData(i);
                //console.log(aTracks);
});

var getData = function (i) {
    
    if (i >= 0) {
        show_html(aTracks, i);
        i--;
        getData(i);
    }
   }

var show_html = function (aTracks, i) {
    $(".othermusics").append("<tr><td>" + aTracks[i].artist_name + "</td><td>" + aTracks[i].track_title + "</td><td>" + aTracks[i].album_title + "</td></tr>");
    i--;
}







