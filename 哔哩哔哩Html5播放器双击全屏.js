// ==UserScript==
// @name         哔哩哔哩Html5播放器双击全屏
// @namespace    http://www.cclfly.cc/
// @version      0.1.4
// @description  哔哩哔哩Html5播放器双击全屏
// @author       cclfly
// @match        /^https?\:\/\/[\w]+.bilibili\.com/
// @grant        none
// ==/UserScript==
// @require http://code.jquery.com/jquery-3.2.1.min.js

$(function(){
    $("body").on("dblclick",".bilibili-player-video-wrap",function(e){
        $(".bilibili-player-iconfont.bilibili-player-iconfont-fullscreen.icon-24fullscreen.player-tooltips-trigger").click();
    });
});