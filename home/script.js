var h = document.getElementById("h");
var m = document.getElementById("m");
var s = document.getElementById("s");

function timeChanger()
{
    s.innerHTML = parseInt(s.innerHTML) - 1;

    if(parseInt(s.innerHTML) == -1)
    {
        s.innerHTML = 59;
        m.innerHTML = parseInt(m.innerHTML) - 1;
    }

    if(parseInt(m.innerHTML) == -1)
    {
        m.innerHTML = 59;
        h.innerHTML = parseInt(h.innerHTML) - 1;
    }

    if(parseInt(h.innerHTML) == -1)
    {
        document.getElementById("time").style.visibility = "hidden";
        document.getElementById("congrat").style.visibility = "visible";
    }
}

setInterval(timeChanger, "1000");