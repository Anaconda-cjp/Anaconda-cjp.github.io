var arrs=["tongrenimg/1.jpg","tongrenimg/2.jpg","tongrenimg/3.jpg","tongrenimg/4.jpg"
,"tongrenimg/5.jpg","tongrenimg/6.jpg","tongrenimg/7.jpg","tongrenimg/8.jpg"]
var arrs1=["tongrenimg/9 .jpg","tongrenimg/10 .jpg","tongrenimg/11 .jpg","tongrenimg/12.jpg"
    ,"tongrenimg/13 .jpg","tongrenimg/14.jpg","tongrenimg/15.jpg","tongrenimg/16.jpg"]
var arrs2=["tongrenimg/17.jpg","tongrenimg/18.jpg","tongrenimg/19.jpg","tongrenimg/20.jpg"
    ,"tongrenimg/21.jpg","tongrenimg/22.jpg","tongrenimg/23.jpg","tongrenimg/24.jpg"]
var t = 0;



$("#btn1").click(function () {
    if(t==2) {
        change_click(t);

        t=0;
    } else if(t==1) {
        change_click(t);

        t+=1;
    } else {
        change_click(t);

        t+=1;
    }
})
function change_click(t) {
    var index1 = 0;

    if(t==0) {
        $(".tongren").each(function () {
            $(this).attr("src",arrs1[index1]);
            index1+=1;
        })
    } else if(t==1) {
        $(".tongren").each(function () {
            $(this).attr("src",arrs2[index1]);
            index1+=1;
        })
    } else {
        $(".tongren").each(function () {
            $(this).attr("src",arrs[index1]);
            index1+=1;
        })
    }
}

// 封装动画函数(用到jquery的animate函数)

//为了达到渐渐显示的效果
function addchange1() {
    $(".tongren").each(function () {
        $(this).animate({opacity:0.7},2000,'linear');
    })

}
function addchange2() {
    $(".tongren").each(function () {
        $(this).animate({opacity:1},2000,'linear');
    })

}

//自动加change1
setInterval(addchange1,1000);
setInterval(addchange2,500);