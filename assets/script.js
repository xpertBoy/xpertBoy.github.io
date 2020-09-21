var f_name = document.getElementById("f-name");
var l_name = document.getElementById("l-name");
var e_mail = document.getElementById("e-mail");
var pa_ss = document.getElementById("pa-ss");


function setDefaults()
{
    f_name.value = "";
    l_name.value = "";
    e_mail.value = "";
    pa_ss.value = "";
}

const cookieBanner = document.getElementById("cookie-consent");

if(!localStorage.getItem('cookieAccepted'))
{
    cookieBanner.style.bottom = "0";
}

function cookieAccepted()
{
    cookieBanner.style.bottom = "-100%";
    localStorage.setItem('cookieAccepted', 'true');
}
