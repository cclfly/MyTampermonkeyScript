// ==UserScript==
// @name         bilibili动态封面大图
// @namespace    http://www.cclfly.cc/
// @version      0.1.2
// @description  哔哩哔哩动态鼠标移入封面显示大图
// @author       cclfly
// @match        http://www.bilibili.com/
// @grant        none
// ==/UserScript==
// @require http://code.jquery.com/jquery-3.2.1.min.js

$(function(){
    var oDiv = $('<div id="ccf-bilibili-surfaceImg"><img/></div>');
    oDiv.css({position:"fixed",right:"50vw",top:"50px",width:"40vw",height:"40vh","z-index":"10000",display:"none"});
    oDiv.find("img").css({width:"100%","border-radius":"2vmin"});
    oDiv.appendTo($("body"));
    var timer = null;
    $("body").on("mouseover","#dyn_wnd img",function(e){
        clearTimeout(timer);
        oDiv.find("img").attr("src",$(this).attr("src"));
        timer = setTimeout(function(){oDiv.show();},300);
    });
    $("body").on("mouseout","#dyn_wnd img",function(e){
        clearTimeout(timer);
        timer = setTimeout(function(){oDiv.hide();},300);
    });
    oDiv.mouseover(function(e){
        clearTimeout(timer);
        timer = setTimeout(function(){oDiv.show();},300);
    });
    oDiv.mouseout(function(e){
        clearTimeout(timer);
        timer = setTimeout(function(){oDiv.hide();},300);
    });
});