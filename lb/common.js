var config = [
    {
        width: 600,
        top: 70,
        left: 0,
        opacity: 0.8,
        zIndex: 3,
    },//1
    {
        width: 800,
        top: 0,
        left: 200,
        opacity: 1,
        zIndex: 4,

    },//2
    {
        width: 600,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3,
    }
];

function isTel (){
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
    return isMobile;
}

var txt = '<div class="star" style="top: 80px; left: 800px; animation-delay: 2s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 40px; left: 646px; animation-delay: 3s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 120px; left: 395px; animation-delay: 4s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 160px; left: 765px; animation-delay: 1s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 170px; left: 1200px; animation-delay: 2s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 200px; left: 1000px; animation-delay: 2s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 160px; left: 755px; animation-delay: 1s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 170px; left: 1020px; animation-delay: 2s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 100px; left: 320px; animation-delay: 1s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 210px; left: 1120px; animation-delay: 1s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 160px; left: 355px; animation-delay: 4s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 32px; left: 1100px; animation-delay: 2s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 21px; left: 100px; animation-delay: 1s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 210px; left: 1120px; animation-delay: 1s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 160px; left: 655px; animation-delay: 1s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 42px; left: 1140px; animation-delay: 2s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 52px; left: 320px; animation-delay: 1s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 160px; left: 555px; animation-delay: 3s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 22px; left: 110px; animation-delay: 2s;"></div>\n' +
    '\t\t\t\t<div class="star" style="top: 222px; left: 320px; animation-delay: 3s;"></div>';
$("#lzStar").html(txt);
if(isTel()){
    config = [
        {
            width: 220,
            top: 30,
            left: 0,
            opacity: 0.8,
            zIndex: 3,
        },//1
        {
            width: 280,
            top: 20,
            left: 55,
            opacity: 1,
            zIndex: 4,

        },//2
        {
            width: 220,
            top: 30,
            left: 150,
            opacity: 0.8,
            zIndex: 3,
        }
    ];
    txt = '<div class="star" style="top: 80px; left: 100px; animation-delay: 2s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 40px; left: 136px; animation-delay: 3s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 120px; left: 205px; animation-delay: 4s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 160px; left: 165px; animation-delay: 1s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 160px; left: 155px; animation-delay: 1s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 100px; left: 110px; animation-delay: 1s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 160px; left: 200px; animation-delay: 4s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 21px; left: 100px; animation-delay: 1s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 160px; left: 215px; animation-delay: 1s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 52px; left: 120px; animation-delay: 1s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 160px; left: 125px; animation-delay: 3s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 22px; left: 110px; animation-delay: 2s;"></div>\n' +
        '\t\t\t\t<div class="star" style="top: 122px; left: 120px; animation-delay: 3s;"></div>';
    $("#lzStar").html(txt)
}

var num = 0;
var listData = ['ITIL运维管理平台','智慧信访应用平台','大数据治理平台'];

$(function(){
    var flag = true;//假设所有的动画都执行完毕
                    //图片散开
    var list = my$("slide").getElementsByTagName("li");
    function assign() {
        for (var i = 0; i < list.length; i++) {
            animate(list[i], config[i], function () {
                flag = true;
            });
        }
    }
    assign();
    //鼠标进入，左右焦点显示
    /*my$("slide").onmouseover = function () {
        animate(my$("arrow"), {"opacity": 1});
    };
    //鼠标进入，左右焦点隐藏
    my$("slide").onmouseout = function () {
        animate(my$("arrow"), {"opacity": 0});
    };*/
    animate(my$("arrow"), {"opacity": 1});
    //左按钮点击事件
    my$("arrLeft").onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
            num = 0;
        }
        changeNextMethod(0);
    };
    //右按钮点击事件
    my$("arrRight").onclick = function () {
        if (flag) {
            flag = false;
            config.push(config.shift());
            assign();//重新分配
            num = 0;
        }
        changeNextMethod(1);
    };
});

//切换内容
var changeNextMethod = (num) =>{
    var val = $("#sspans").text();
    //console.log(val)
    if(Number(num) === 1){
        if(val === listData[1]){
            $("#fspans").text(listData[2]);$("#sspans").text(listData[0]);$("#tspans").text(listData[1]);
        }else if(val === listData[0]){
            $("#fspans").text(listData[1]);$("#sspans").text(listData[2]);$("#tspans").text(listData[0]);
        }else{
            $("#fspans").text(listData[0]);$("#sspans").text(listData[1]);$("#tspans").text(listData[2]);
        }
    }else{
        if(val === listData[1]){
            $("#fspans").text(listData[1]);$("#sspans").text(listData[2]);$("#tspans").text(listData[0]);
        }else if(val === listData[0]){
            $("#fspans").text(listData[0]);$("#sspans").text(listData[1]);$("#tspans").text(listData[2]);
        }else{
            $("#fspans").text(listData[2]);$("#sspans").text(listData[0]);$("#tspans").text(listData[1]);
        }
    }
}

//根据id获取对应的元素
function my$(id) {
    return document.getElementById(id);
}
/*
* element---任意的元素
* attr---属性
* */
function getAttrValue(element,attr) {
    return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}

/*
* element----要移动的元素
* target----移动的目标
* 初级版本
* */
/*
* 终极版本的动画函数---有bug
*
* */
function animate(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;//假设都达到了目标
        for(var attr in json){
            if(attr=="opacity"){//判断属性是不是opacity
                var current= getAttrValue(element,attr)*100;
                //每次移动多少步
                var target=json[attr]*100;//直接赋值给一个变量,后面的代码都不用改
                var step=(target-current)/10;//(目标-当前)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){//判断属性是不是zIndex
                element.style[attr]=json[attr];
                if(Number(element.style[attr])==4){
                    element.firstChild.firstChild.style.filter = "none";
                    if(isTel()){
                        element.firstChild.firstChild.style.height = "170px";
                        element.firstChild.firstChild.style.width = "250px";
                    }else{
                        element.firstChild.firstChild.style.height = "410px";
                    }
                }else{
                    element.firstChild.firstChild.style.filter = "contrast(0.4)";
                    if(isTel()){
                        element.firstChild.firstChild.style.height = "150px";
                        element.firstChild.firstChild.style.width = "220px";
                    }else{
                        element.firstChild.firstChild.style.height = "310px";
                    }
                }
                /*if(num >= 3){continue};
                console.log(element.firstChild.firstChild)
                num ++;*/
            }else{//普通的属性
                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current= parseInt(getAttrValue(element,attr))||0;
                //每次移动多少步
                var target=json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step=(target-current)/10;//(目标-当前)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current+"px";
            }
            if(current!=target){
                flag=false;//如果没到目标结果就为false
            }
        }
        if(flag){//结果为true
            clearInterval(element.timeId);
            if(fn){//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
        //console.log("target:"+target+"current:"+current+"step:"+step);
    },10);
}