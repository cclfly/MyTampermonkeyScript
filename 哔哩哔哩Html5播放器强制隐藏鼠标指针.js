// ==UserScript==
// @name         哔哩哔哩Html5播放器强制隐藏鼠标指针
// @namespace    http://www.cclfly.cc/
// @version      0.1.2
// @description  哔哩哔哩Html5播放器强制隐藏鼠标指针
// @author       cclfly
// @match        http://www.bilibili.com/*
// @grant        none
// ==/UserScript==
// @require http://code.jquery.com/jquery-3.2.1.min.js

$(function() {
    var mousePos = {x:0,y:0};
    var timestamp = new Date().getTime();
    $("body").on("mousemove",".bilibili-player-video-wrap",function(e){
        xx = e.originalEvent.x || e.originalEvent.layerX || 0;
        yy = e.originalEvent.y || e.originalEvent.layerY || 0;
        if(mousePos.x==xx && mousePos.y==yy){
            if(new Date().getTime()-timestamp>1200){
                $(".bilibili-player-video").css("cursor",'url("data:image/ico;base64,AAABAAEAAQEAAAEAIAAwAAAAFgAAACgAAAABAAAAAgAAAAEAIAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAA=="),default');
            }
        }else{
            $(".bilibili-player-video").css("cursor","default");
            timestamp = new Date().getTime();
        }
        mousePos = {x:xx,y:yy};
    });
});