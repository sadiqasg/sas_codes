alert("Wait patiently and watch the color change according to the hex equiv. of the time :) ");

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (h <= 9) h = "0" + h;
    if (s <= 9) s = "0" + s;
    if (m <= 9) m = "0" + m;
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

    var color = "#" + h + m + s;
    document.body.style.background = color;
    document.getElementById("color").innerHTML = color

}