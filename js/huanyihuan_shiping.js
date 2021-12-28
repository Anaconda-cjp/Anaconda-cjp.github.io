var aarrs=["image/5.jpg","image/6.jpg","image/7.jpg","tongrenimg/8.jpg"
    ,"image/9.jpg","image/10.jpg","image/11.jpg","tongrenimg/12.jpg"]
var aarrs1=["image/1.jpg","image/2.jpg","image/daoqi.png","image/liyue1.png"
    ,"image/news4.jpg","image/xl.jpg","image/5.jpg","image/hytr.jpg"]
var html1=["https://www.bilibili.com/video/BV12b4y1y7pY/?spm_id_from=333.788.recommend_more_video.1",
"https://www.bilibili.com/video/BV1th411n7Zz/?spm_id_from=333.788.recommend_more_video.1",
"https://www.bilibili.com/video/BV1fq4y1Q7Fa?from=search&seid=14555708921486903911&spm_id_from=333.337.0.0",
"https://www.bilibili.com/video/BV1rv411C77n?from=search&seid=4363620777300270033&spm_id_from=333.337.0.0",
"https://www.bilibili.com/video/BV1eZ4y1Q7jD?from=search&seid=6351240323549736909&spm_id_from=333.337.0.0",
"https://www.bilibili.com/video/BV1pv411G7RR/?spm_id_from=333.788.recommend_more_video.-1",
"https://www.bilibili.com/video/BV17M4y1M7Lv/?spm_id_from=333.788",
"https://www.bilibili.com/video/BV1Q64y1o7eW/?spm_id_from=333.788.recommend_more_video.3"]
var names=[
    "万叶手书","刻晴手书","魈手书","长空","甘雨手书","让风告诉你","提瓦特指令","Love is gone"
]
var names1=["繁星闪耀序章","万叶/稻妻群像","稻妻解密","璃月宝箱","荒泷一斗攻略","香菱动画","fate原神动画"]
var html0=["https://www.bilibili.com/video/BV17M4y1M7Lv/?spm_id_from=333.788",
    "https://www.bilibili.com/video/BV1ZK4y1S7cU/?spm_id_from=333.788",
    "https://www.bilibili.com/video/BV1Hr4y1N7oU/?spm_id_from=333.788",
    "https://www.bilibili.com/video/BV19f4y167jC/?spm_id_from=333.788",
    "https://www.bilibili.com/video/BV18z4y1S77y?from=search&seid=11248173018588561301&spm_id_from=333.337.0.0",
    "https://www.bilibili.com/video/BV18X4y1N7Yh/?spm_id_from=333.788.recommend_more_video.0",
    "https://www.bilibili.com/video/BV1jv4y1Z7Jd/?spm_id_from=333.788.recommend_more_video.10",
    "https://www.bilibili.com/video/BV1fN411R7Hb/?spm_id_from=333.788.recommend_more_video.10"]

var mm=0;
$("#btn2").click(function () {
    if(mm==0) {
        change_click1(mm);
        mm+=1;
    }  else {
        change_click1(mm);
        mm=0;
    }
})
function change_click1(mm) {
    var index1 = 0;

    if(mm==0) {
        $(".shiping").each(function () {
            $(this).attr("src",aarrs1[index1]);
            index1+=1;
        })
        index1=0;
        //改视频名字和连接
        $(".words1").each(function (){
            $(this).html(names1[index1]);
            index1+=1;
            }
        )
        index1=0;
        $(".a01").each(function () {
            $(this).attr("href",html1[index1]);
            index1+=1
        })
    } else {
        $(".shiping").each(function () {
            $(this).attr("src",aarrs[index1]);
            index1+=1;
        })
        index1=0;
        //改视频名字和连接
        $(".words1").each(function (){
            $(this).html(names[index1]);
            index1+=1;
            }
        )
        index1=0;
        $(".a01").each(function () {
            $(this).attr("href",html0[index1]);
            index1+=1;
        })
    }
}