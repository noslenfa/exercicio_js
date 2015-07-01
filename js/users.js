/*$.ajax({
    url: "users.html",
    success: function (data) { $('body').append(data); },
    dataType: 'html'
});*/

var final_url = "https://raw.githubusercontent.com/noslenfa/exvasco/master/users.json";
$.get(final_url).done( function(data) {
            var jsondata = JSON.parse(data)
            for (var i = 0 ; i < jsondata.length ; i++){
                show_html(jsondata, i)
            };

});


var show_html = function (jsondata, i) {
    $(".users").append("<div>");
    $(".users").append("<p>" + jsondata[i].id + "</p>");
    $(".users").append("<p>" + jsondata[i].username + "</p>");
    $(".users").append("<p>" + jsondata[i].age + "</p>");
    $(".users").append("</div>");
}
