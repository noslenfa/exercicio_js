// GET AO OTHERMUSICS
var final_url = "http://localhost:8000/othermusics";
var aTracks;
var i=0;
var jsonArray = [];


            $.get(final_url).done( function(data) {
                var jsondata = JSON.parse(data);
                var jsonaTracks = jsondata.aTracks; //GUARDAR RESULTADO NO ARRAY DOS aTracks
                aTracks = jsonaTracks; //PASSAR PARA A VARIÁVEL GLOBAL
                getData(i);
                //console.log(aTracks);
});

var getData = function (i) {
    
    if (i < aTracks.length) {
        show_html(aTracks, i);
        //var jsonVar = "{track_id: '" + aTracks[i].track_id + "', artist_name: '" + aTracks[i].artist_name + "', track_title: '" + aTracks[i].track_title + "', album_title: '"  + aTracks[i].album_title + "'}";
        jsonArray.push(aTracks[i]);
        // console.log(jsonVar);
        console.log(aTracks[i]);
        console.log(jsonArray);
        i++
        getData(i);
        
    }
   }


var show_html = function (aTracks, i) {
    var element1 = "<tr id='" + aTracks[i].track_id + "' class='musictable'><td>" + aTracks[i].artist_name + "</td><td>" + aTracks[i].track_title + "</td><td>" + aTracks[i].album_title + "</td></tr>";

    $(".othermusics").append(element1);
    i++;
}

$(document).on("click", ".musictable", function(e){
    var currentId = $(this).attr('id');
    $(this).remove();
    console.log(jsonArray);
    //findAndRemove(jsonArray, 'track_id', currentId);
    findAndRemove(jsonArray, currentId);
    e.preventDefault();
});

//function findAndRemove(jsonArray, property, value) {
function findAndRemove(jsonArray, value) {
   $.each(jsonArray, function(index) {
   //$.each(jsonArray, function(index, result) {
    //if(result[property] == value) {
    if($(this).attr('track_id') == value) {
          //Remove from array
          jsonArray.splice(index, 1);
          
      }    
   });
}