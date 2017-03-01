var s = document.getElementById("s");

var firstClick = true;

var connect = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;

    //circle
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    s.appendChild(c);
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r","50");
    c.setAttribute("fill","red");

    console.log(firstClick);
    //line
    if (firstClick = false) {
	d = d + "L" + x.toString() + " " + y.toString();
	p.setAttribute("d",d);
    } else {
	var p = document.createElementNS("http://www.w3.org/2000/svg","path");
	s.appendChild(p);
	p.setAttribute("stroke","black");
	var d = "M" + x.toString() + " " + y.toString();
	p.setAttribute("d",d);
	firstClick = false;
    };
            
};

s.addEventListener("click",connect);