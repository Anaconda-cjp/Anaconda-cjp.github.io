var cur_index=1;//全局变量当前是第几个
var run = document.getElementsByClassName("role_img");

change_click(cur_index);//开始时自动执行

$(".touxiang").each(function (index,e) {
    // 头像更换
    $(this).attr("src",imgtx_arr[index]);
    $(this).click(function (){
        cur_index=index;
        change_click(cur_index);
    })
})
// 左右按钮
$(".arrow_left").click(function () {
    if(cur_index>0){
        cur_index-=1;
        change_click(cur_index);
    }

})
$(".arrow_right").click(function () {
    if(cur_index<5){
        cur_index+=1;
        change_click(cur_index);
    }
})


function change_click(cur_index) {
    if(!($(".role_img").hasClass("change1")))
        $(".role_img").addClass("change1");
    else {
        $(".role_img").removeClass("change1");
    }
    $(".selected").removeClass("selected");
    $(".role_img").attr("src",img_arr[cur_index]);
    //改名字
    $(".role_name").html(names_arr[cur_index]);
    $(".jueseintroduce").html(introduce_arr[cur_index]);
    $(".touxiang:eq("+cur_index+")").addClass("selected");//注意，需要拼接一下才能作为序号，否则只是字符串

}
//为了达到渐渐显示的效果
function addchange1() {
    $(".role_img").addClass("change1");
}
//自动加change1
setInterval(addchange1,500);