// ==UserScript==
// @name         全局css样式控制
// @namespace    https://sleazyfork.org/users/1461640
// @version      1.0
// @description  通过 GM_addStyle 高效控制页面样式
// @author       ts from gemini
// @match        *://www.9dmgamemod.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const domain = window.location.hostname;//获取当前网页的域名
    // 在这里定义你的 CSS 规则
    let myCss=''
    if(domain.includes('9dmgamemod')){
       myCss=`
        div#hd div.hdc.cl{
            min-height: 60px;
        }
        body .wp{
            
        }
        .hdc:before{
            background: none;
        } 
        #hd h2{
            display: none;
        } 
        div.hdc.cl .c1search{
            position: absolute;
            right: 20px;
            top: 60px;
            margin-top: auto;
        } 
        html, #hd, .c1navblur:before{
            background: none !important;
            background-color:#9b9393 !important;
        }  
        #mn_F528 a{
            color: red !important;
        }
        body .c1wp{
            margin:0;
            padding:0;
        }
        body .fl_tb td{
            padding:15px 0;
        }
        .fl_g dl a{
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            white-space: nowrap;
        }
        .fl_tb dl a{
            white-space: normal;
        }
        .fl_g dl dt em{
            display: none;
        }
        body .bm{
            border-radius: 8px;
        }
       `
    }else if(domain.includes('example.com')){
       myCss=`
        img {
            display: none !important;
        }
       `
    }else if(domain.includes('example2.com')){
       myCss=`
        img {
            display: none !important;
        }
       `
    }else{
       
    }
    // 执行注入
    GM_addStyle(myCss);
})();