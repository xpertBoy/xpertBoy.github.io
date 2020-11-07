let resToggleOpenC = false;

function fadeTheLoader(){
    $('#res-splash').fadeOut();
    document.getElementById('res-main').style.display = "block";
    document.getElementById('res-nav-toggle-btn').style.background = "#c7c7c7";
}

function handleToggleResCont(){
    if(!resToggleOpenC){
        document.getElementById('res-nav-toggle-btn').style.background = "#a3a3a3";
        document.getElementById('res-nav-res-mob').style.display = 'block';
        resToggleOpenC = true;
    }
    else if(resToggleOpenC){
        document.getElementById('res-nav-toggle-btn').style.background = " #c7c7c7";
        document.getElementById('res-nav-res-mob').style.display = 'none';
        resToggleOpenC = false;
    }
}