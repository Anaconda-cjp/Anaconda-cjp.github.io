var curIndex = 0;
//两张图片轮换
var timeInterval = 5000; //切换时间 3秒 可以修改

setInterval(changeImg, timeInterval);

function changeImg() {


    if(curIndex==0) {
        curIndex = 1;
        document.body.style.background = "url('image_juese/mengdebg1.jpg')";

    } else{
        curIndex = 0;
        document.body.style.background = "url('image_juese/mengdebg.jpg')";
    }

}