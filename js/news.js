var link = document.getElementById("zuixin2");
var link2 = document.getElementById("xinwen2");
var link3 = document.getElementById("gonggao2");
var link4 = document.getElementById("huodong2");
link.onclick=function () {
    return false;//阻止超链接跳转
}
link2.onclick=function () {
    return false;//阻止超链接跳转
}
link3.onclick=function () {
    return false;//阻止超链接跳转
}
link4.onclick=function () {
    return false;//阻止超链接跳转
}
document.getElementById("zuixin").onclick=function (){
    var zuixin=document.getElementById("zuixin1");
    var xinwen=document.getElementById("xinwen1");
    var gonggao=document.getElementById("gonggao1");
    var huodong=document.getElementById("huodong1");
    zuixin.innerText="《原神》小剧场——「璃月雅集」第四期";
    xinwen.innerText="《原神》2.4版本前瞻特别节目预告";
    gonggao.innerText="《原神》特别信件——【12.24】开发组座谈会";
    huodong.innerText="《原神》「导能原盘·跋尾」玩法说明";
}
document.getElementById("xinwen").onclick=function (){
    var zuixin=document.getElementById("zuixin1");
    var xinwen=document.getElementById("xinwen1");
    var gonggao=document.getElementById("gonggao1");
    var huodong=document.getElementById("huodong1");
    zuixin.innerText="《原神》表情包「派蒙的画作第11弹」现已上线";
    xinwen.innerText="《原神》2.4版本前瞻特别节目预告";
    gonggao.innerText="《原神》特别信件——【12.24】开发组座谈会";
    huodong.innerText="《原神》「导能原盘·跋尾」玩法说明";
}
document.getElementById("gonggao").onclick=function (){
    var zuixin=document.getElementById("zuixin1");
    var xinwen=document.getElementById("xinwen1");
    var gonggao=document.getElementById("gonggao1");
    var huodong=document.getElementById("huodong1");
    zuixin.innerText="《原神》祈愿概率公示";
    xinwen.innerText="《原神》「皑尘与雪影」2.3版本更新说明";
    gonggao.innerText="《原神》「皑尘与雪影」2.3版本更新通知";
    huodong.innerText="《原神》「雾海悬谜境」2.2版本活动说明";
}
document.getElementById("huodong").onclick=function (){
    var zuixin=document.getElementById("zuixin1");
    var xinwen=document.getElementById("xinwen1");
    var gonggao=document.getElementById("gonggao1");
    var huodong=document.getElementById("huodong1");
    zuixin.innerText="「岩港奇珍行记」网页活动说明";
    xinwen.innerText="《原神》月夕祝颂-万份空月祝福相赠";
    gonggao.innerText="“在尘世的相逢”抖音《原神》公测主播招募";
    huodong.innerText="“在尘世的相逢”斗鱼直播《原神》主播招募活动开启";
}