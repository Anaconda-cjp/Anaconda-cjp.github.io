var canvas = document.createElement("canvas")
var ctx = canvas.getContext("2d")
window.document.body.appendChild(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.setAttribute('style', 'position:fixed;left:0;top:0;pointer-events:none;filter:blur(2px);')

var points = [] //定义粒子数组
var live = 200 //存活200个周期
function drawpoints() { //绘制粒子
    ctx.clearRect(0, 0, canvas.width, canvas.height) //清屏
    for (var i = 0; i < 5; i++) { //5个粒子
        points.push({
            sx: Math.random()*2000, //鼠标当前坐标作为粒子坐标
            sy: Math.random()*500,
            vx: Math.random()*0.2, //雪花右飘
            vy: 0.5 ,//雪花稍微向上停一下
            life: live, //存活周期
            color: "255,255 ,255",
            size: Math.random() * 3 //随机粒子尺寸，取值范围为0~5
        })
    }
    for (var i = 0; i < points.length; i++) { //遍历粒子
        point = points[i] //定义单个粒子
        ctx.beginPath()
        ctx.arc(point.sx, point.sy, point.size, Math.PI * 2, false) //根据粒子属性画圆
        ctx.fillStyle = "rgba(" + point.color + "," + point.life / live + ")" //根据粒子属性设置填充颜色及透明度
        ctx.fill() //填充颜色
        point.life-- //生命值减1
        if (point.life <= 0) { //生命值为0则从粒子数组中删除
            points.splice(i, 1)
        }
        point.sx += point.vx * 3  //根据向量值改变粒子位置
        point.sy += point.vy * 1
        point.vy += 0.01//下落时慢慢加速
    }

}
setInterval(drawpoints, 30) //30毫秒绘制一次