var f_name = document.getElementById("f-name");
var l_name = document.getElementById("l-name");
var e_mail = document.getElementById("e-mail");
var pa_ss = document.getElementById("pa-ss");
const text = document.getElementById("savedText");

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

let data = "";

function save()
{
    data = data + "First name: " + f_name.value +
                  ", Last name: " + l_name.value +
                  ", Email: " + e_mail.value +
                  ", Password: " + pa_ss.value;
    f_name.value = "";
    l_name.value = "";
    e_mail.value = "";
    pa_ss.value = "";

    localStorage.setItem('data', data);
}

function load()
{
    text.innerHTML = localStorage.getItem('data');
}

function loader()
{
    document.getElementById('loader').click();
}
