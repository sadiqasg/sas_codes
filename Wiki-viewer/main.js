//variables
let searchQuery;
let url;

//enter key no-jutsu
$("#input").keyup(function(event) {
    if (event.keyCode == 13) {
        $("#search").click();
    }
});

//search button
$("#search").on("click", function() {
    $("#results").empty();
    submit();
});

//function that runs when form is submitted
function submit() {
    searchQuery = $("#input").val();
    url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&titles=&utf8=1&srsearch=' + searchQuery + '&srlimit=15';
    $.ajax({
        url: url,
        dataType: "jsonp", //indicates that its a jsonp request.
        success: function(response) {
            for (var i = 0; i < 15; i++) {
                $("#results").append("<div class='box'></div>");
                $(".box:last-child").addClass("animated fadeIn");
                $(".box:last-child").append('<a class="title" target="_blank" href="https://en.wikipedia.org/wiki/' + response.query.search[i].title + '">' + response.query.search[i].title + '</a>');
                $(".box:last-child").append('<p id="demo">' + response.query.search[i].snippet + '</p>');
            }

        }

    });
}
