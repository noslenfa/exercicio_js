var final_url = "localhost:3000/users";
$.get(final_url).done( function(data) {
            var jsondata = JSON.parse(data)
            for (var i = 0 ; i < jsondata.length ; i++){
                show_html(jsondata, i)
            };

});

var show_html = function (jsondata, i) {
    $(".users").append("<tr><td>" + jsondata[i].id + "</td><td>" + jsondata[i].username + "</td><td>" + jsondata[i].age + "</td></tr>");
}

