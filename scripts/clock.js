function getNowTime(){
    
    var time = new Date();

    var hour = twoDigit(time.getHours());
    var minute = twoDigit(time.getMinutes());
    var second = twoDigit(time.getSeconds());

    document.getElementById("clock_time").textContent = hour + " : " + minute + " : " + second;

}

// 数字を2ケタにそろえる関数
function twoDigit(num){

    var digit
    if( num < 10 ){
        digit = "0" + num;
    } else { 
        digit = num;
    }
    return digit;

}

// getNowTime() を1000ms(=1s)ごとに実行
setInterval(getNowTime, 1000);