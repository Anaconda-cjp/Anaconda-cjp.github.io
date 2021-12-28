var v = document.getElementById("bgmusic");
var b = document.getElementById("btn1");
var b1 = document.getElementById("btn2");
var b2 = document.getElementById("btn3");
var b3 = document.getElementById("btn4");
var b4 = document.getElementById("btn5");
var b5 = document.getElementById("btn6");
var b6 = document.getElementById("btn7");
var arrs1=[b,b1,b2,b3,b4,b5,b6]
function playPause() {
    for (var i = 0; i < 7; i++) {
        if(i==0) continue;
        arrs1[i].style.background="url('image/play_close.png')";
        arrs1[i].style.backgroundSize = "100% 100%";
    }
    if (v.paused) {
        v.src = "music/daoqibg1.mp3";
        v.play();
        b.style.background = "url('image/play_start.png')";
        b.style.backgroundSize = "100% 100%";
    } else {
        v.pause()//这里注意了,一般script代码放在对应事件后面比较好,防止事件还没加载就读了代码！！！！！！！！比如这里放开头就无效！
        b.style.background = "url('image/play_close.png')";
        b.style.backgroundSize = "100% 100%";
    }
}



function playPause1() {
    for (var i = 0; i < 7; i++) {
        if(i==1) continue;
        arrs1[i].style.background="url('image/play_close.png')";
        arrs1[i].style.backgroundSize = "100% 100%";
    }
    if (v.paused) {
        v.src = "music/daoqibg2.mp3";
        v.play();
        b1.style.background = "url('image/play_start.png')";
        b1.style.backgroundSize = "100% 100%";
    } else {
        v.pause()//这里注意了,一般script代码放在对应事件后面比较好,防止事件还没加载就读了代码！！！！！！！！比如这里放开头就无效！
        b1.style.background = "url('image/play_close.png')";
        b1.style.backgroundSize = "100% 100%";
    }
}

function playPause3() {
    for (var i = 0; i < 7; i++) {
        if(i==2) continue;
        arrs1[i].style.background="url('image/play_close.png')";
        arrs1[i].style.backgroundSize = "100% 100%";
    }
    if (v.paused) {
        v.src = "music/liyuebg1.mp3";
        v.play();
        b2.style.background = "url('image/play_start.png')";
        b2.style.backgroundSize = "100% 100%";
    } else {
        v.pause()//这里注意了,一般script代码放在对应事件后面比较好,防止事件还没加载就读了代码！！！！！！！！比如这里放开头就无效！
        b2.style.background = "url('image/play_close.png')";
        b2.style.backgroundSize = "100% 100%";
    }
}

function playPause4() {
    for (var i = 0; i < 7; i++) {
        if(i==3) continue;
        arrs1[i].style.background="url('image/play_close.png')";
        arrs1[i].style.backgroundSize = "100% 100%";
    }
    if (v.paused) {
        v.src = "music/liyuebg2.mp3";
        v.play();
        b3.style.background = "url('image/play_start.png')";
        b3.style.backgroundSize = "100% 100%";
    } else {
        v.pause()//这里注意了,一般script代码放在对应事件后面比较好,防止事件还没加载就读了代码！！！！！！！！比如这里放开头就无效！
        b3.style.background = "url('image/play_close.png')";
        b3.style.backgroundSize = "100% 100%";
    }
}

function playPause5() {
    for (var i = 0; i < 7; i++) {
        if(i==4) continue;
        arrs1[i].style.background="url('image/play_close.png')";
        arrs1[i].style.backgroundSize = "100% 100%";
    }
    if (v.paused) {
        v.src = "music/mengdebg2.mp3";
        v.play();
        b4.style.background = "url('image/play_start.png')";
        b4.style.backgroundSize = "100% 100%";
    } else {
        v.pause()//这里注意了,一般script代码放在对应事件后面比较好,防止事件还没加载就读了代码！！！！！！！！比如这里放开头就无效！
        b4.style.background = "url('image/play_close.png')";
        b4.style.backgroundSize = "100% 100%";
    }
}

function playPause6() {
    for (var i = 0; i < 7; i++) {
        if(i==5) continue;
        arrs1[i].style.background="url('image/play_close.png')";
        arrs1[i].style.backgroundSize = "100% 100%";
    }
    if (v.paused) {
        v.src = "music/Snow_Buried.mp3";
        v.play();
        b5.style.background = "url('image/play_start.png')";
        b5.style.backgroundSize = "100% 100%";
    } else {
        v.pause()//这里注意了,一般script代码放在对应事件后面比较好,防止事件还没加载就读了代码！！！！！！！！比如这里放开头就无效！
        b5.style.background = "url('image/play_close.png')";
        b5.style.backgroundSize = "100% 100%";
    }
}

function playPause7() {
    for (var i = 0; i < 7; i++) {
        if(i==6) continue;
        arrs1[i].style.background="url('image/play_close.png')";
        arrs1[i].style.backgroundSize = "100% 100%";
    }
    if (v.paused) {
        v.src = "music/MoonSmile.mp3";
        v.play();
        b6.style.background = "url('image/play_start.png')";
        b6.style.backgroundSize = "100% 100%";
    } else {
        v.pause()//这里注意了,一般script代码放在对应事件后面比较好,防止事件还没加载就读了代码！！！！！！！！比如这里放开头就无效！
        b6.style.background = "url('image/play_close.png')";
        b6.style.backgroundSize = "100% 100%";
    }
}