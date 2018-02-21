// ==UserScript==
// @name         哔哩哔哩Html5播放器强制隐藏鼠标指针
// @namespace    http://www.cclfly.cc/
// @version      0.1.5
// @description  哔哩哔哩Html5播放器强制隐藏鼠标指针
// @author       cclfly
// @include        /^https?\:\/\/[\w]+.bilibili\.com/
// @grant        none
// ==/UserScript==
// @require http://code.jquery.com/jquery-3.2.1.min.js

$(function() {
    var isMove  = false;
    var timer   = null;
    var fnTimer = function(){
        console.log(isMove);
        if(isMove == false && $(".bilibili-player-video").css("cursor") == 'default'){
            $(".bilibili-player-video").css("cursor",'url("data:image/ico;base64,AAABAAEAAQEAAAEAIAAwAAAAFgAAACgAAAABAAAAAgAAAAEAIAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAA=="),default');
        }
        isMove = false;
    };
    $("body").on("mouseover",".bilibili-player-video-wrap",function(e){
        timer = setInterval(fnTimer, 1000);
    });
    $("body").on("mouseout",".bilibili-player-video-wrap",function(e){
        clearInterval(timer);
    });
    $("body").on("mousemove",".bilibili-player-video-wrap",function(e){
        isMove = true;
        $(".bilibili-player-video").css("cursor",'default');
    });
});