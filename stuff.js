var s = document.getElementById("s");
s.addEventListener("click",connect);

var connect = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    s.appendChild(c);
    c.setAttribute("cx","250");
    c.setAttribute("cy","250");
    c.setAttribute("r","100");
    c.setAttribute("fill","red");
}
