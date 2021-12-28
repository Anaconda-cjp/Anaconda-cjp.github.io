
function close1() {
    var v = document.getElementById('video');//获取视频节点
    $('.videos').css("display", "none");//点击关闭按钮关闭暂停视频
    v.pause();
    $('.videos').html();
    // 关闭视频时把遮罩层隐藏
    $('#cover').css('display', 'none');   //隐藏遮罩层


}

$('.one').each(function () { //遍历视频列表
    $(this).click(function () { //这个视频被点击后执行
        //视频打开后关闭背景音乐
        var v1 = document.getElementById("bgmusic");
        v1.pause();
        var b =document.getElementById("btn1");//要先定义才可以改属性
        b.style.background="url('image/play_close.png')";
        b.style.backgroundSize="100% 100%";
        //var img = $(this).attr('vpath');//获取视频预览图
        var video = $(this).attr('ipath');//获取视频路径. 这里改一下，把点击这个视频改为点击按钮，否则导致关闭不能生效。
        $('.videos').html("<video id=\"video\" poster='"  + "' style='width: 100%;' src='" + video + "' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video> <button type=\"button\" onclick=\"close1()\" >\t&#10006</button>");
        $('.videos').show();
        $('#cover').css('display', 'block'); //显示遮罩层
        $('#cover').css('height', document.body.clientHeight*2 + 'px'); //设置遮罩层的高度为当前页面高度


    });
});