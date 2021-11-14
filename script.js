function load() {
    var msg =  window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var time = new Date();
    var hour = time.getHours();
    //hour = 20;
    clock();
    if (hour >= 6 && hour < 12) {
        msg.innerHTML = '<strong>Bom dia!</strong>';
        img.src = 'imagens/manha.png';
        img.alt = 'alt="manhã do dia';
        window.document.body.style.background = '#E8D3C7';
        window.document.getElementsByTagName('h1')[0].style.color = '#000000';
        window.document.getElementById('ftr').style.color = '#000000';
    } else if (hour >= 12 && hour <= 18){
        msg.innerHTML = '<strong>Boa tarde!</strong>';
        img.src = 'imagens/tarde.png';
        img.alt = 'alt="tarde do dia';
        window.document.body.style.background = '#CA5A0E';
    } else {
        msg.innerHTML = '<strong>Boa noite!</strong>';
        img.src = 'imagens/noite.png';
        img.alt = 'alt="noite do dia';
        window.document.body.style.background = '#171F2C';
    }    
}

function clock() {
    var hr = window.document.getElementById('hr');
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    hr.innerHTML = `<strong>${hours}:${minutes}:${seconds}</strong>`;
}

setInterval(clock, 100); 