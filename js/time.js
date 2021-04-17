window.onload = ()=>{
    h = 0; m=0; s = 0; mls = 0; timeStarted = 0;
    time = document.getElementById("time-cron");
    btnStart = document.getElementById("btn-start");
    btnStop = document.getElementById("btn-stop");
    btnReset = document.getElementById("btn-reset");
    container__main = document.getElementById('main');
    yellow = document.querySelector('#yellow');
    red = document.querySelector('#red');
    error = document.querySelector('#error');
    // writeflag = true;
    eventt();
};


function eventt(){
    btnStart.addEventListener("click", start);
    btnStop.addEventListener("click", stop);
    btnReset.addEventListener("click", reset);
}       

function write(){
    writeflag = true
    let ht, mt, st, mlst;
    mls++;
   
    if(mls > 99){ s++; mls = 0;}
    if(s > 59){ m++; s = 0;}
    if(m > 59){ h++; m = 0;}
    if(h > 24) h = 0;

    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);

    time.innerHTML = `${ht}:${mt}:${st}`;

    if(m >= parseFloat(yellow.value)){
        // cambiar de color
        container__main.className = 'container__main-yellow';
    }
    if(m >= parseFloat(red.value)){
        // cambiar de color
        container__main.className = 'container__main-red';
    }
}


function validCero(){
    if(yellow.value != 0 && red.value != 0){
        validMayor()
    }else{
        error.style.display = 'block'
        error.innerHTML = '<div>-Se recomienda no colocar valores 0 </div>'
    }
}

function validMayor(){
    if(yellow.value < red.value){
        flag = true
    }else{
        error.style.display = 'block'
        error.innerHTML = '<div>-Se recomienda que el valor de amarillo sea menor que rojo </div>'
    }
}   


function validacion(){
    if(yellow.value == '' && red.value == ''){
        flag = false
        error.style.display = 'block'
        error.innerHTML += '<div>-Por favor ingresa el valor del color amarillo</div>'
        error.innerHTML+= '<div>-Por favor ingresa el valor del color rojo</div>'
    }else if(yellow.value != '' && red.value == ''){
        // ingresar datos en red
        flag = false
        error.style.display = 'block'
        error.innerHTML = '<div>-Por favor ingresa el valor del color rojo</div>'
    }else if(yellow.value == '' && red.value != ''){
        // ingresar datos en yellow
        flag = false
        error.style.display = 'block'
        error.innerHTML = '<div>-Por favor ingresa el valor del color amarillo</div>'
    }else if(yellow.value != '' && red.value != ''){
        // flag = true
        // llamar a la validacion de 0
        error.style.display = 'none'
        validCero()
    }
}



function start(){
    error.innerHTML = ''
    // validY()
    // validR()
    validacion()
    if(flag != false){
        container__main.className = 'container__main-green';
        write();
        timeStarted = setInterval(write, 10);
        btnStart.removeEventListener("click", start);
    }
}   

function stop(){
    clearInterval(timeStarted);
    btnStart.addEventListener("click", start);
} 

function reset(){
    container__main.className = 'container__main';
    clearInterval(timeStarted);
    time.innerHTML = "00:00:00";
    h=0; m =0; s=0; mls =0;
    btnStart.addEventListener("click", start);
}