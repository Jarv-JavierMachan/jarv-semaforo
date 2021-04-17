
function clock(){
    var hours = document.getElementById('hour')   
    var min = document.getElementById('min')   
    var seconds = document.getElementById('seconds')
    var ampm = document.getElementById('ampm')

    var h = new Date().getHours()
    var m = new Date().getMinutes()
    var s = new Date().getSeconds()
    var am = 'AM'

    if (h >12 ){
        h = h - 12
        am = 'PM'
    }

    h = (h <10) ? "0" + h : h
    m = (m <10) ? "0" + m : m
    s = (s <10) ? "0" + s : s

    hours.innerHTML = h
    min.innerHTML = m
    seconds.innerHTML = s
    ampm.innerHTML = am
}
var interval = setInterval(clock, 1000)
