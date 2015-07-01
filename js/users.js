var final_url = "https://raw.githubusercontent.com/noslenfa/exvasco/master/users.json";
$.get(final_url).done( function(data) {
            var jsondata = JSON.parse(data)
            for (var i = 0 ; i < jsondata.length ; i++){
                show_html(jsondata, i)
            };

});


var show_html = function (jsondata, i) {
    $("body").append("<div>");
    $("body").append("<p>" + jsondata[i].id + "</p>");
    $("body").append("<p>" + jsondata[i].username + "</p>");
    $("body").append("<p>" + jsondata[i].age + "</p>");
    $("body").append("</div>");
}
