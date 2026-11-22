// ==UserScript==
// @name         98图片预览助手-帖子列表时自动加载内部前三张
// @namespace    98imgloader
// @version      1.7.2
// @description  浏览帖子列表时自动加载内部前三张(可配置)图片供预览。如需支持其他免翻地址，请使用@match自行添加连接，如果某个版块不希望预览，请使用@exclude自行添加要排除的版块链接
// @author       sehuatang_chen
// @license      MIT

// @match        https://www.sehuatang.org/*
// @match        https://www.sehuatang.net/*
// @match        https://rgkm7.cs33u.com/*
// @match        https://he2w0.0lr3i.com/*
// @match        https://vsgo.k3ut8.com/*

// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/jquery_lazyload/1.9.7/jquery.lazyload.min.js

// @downloadURL https://raw.githubusercontent.com/shenshou/MyTamperMonkeyJs/main/scripts/98%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88%E5%8A%A9%E6%89%8B-%E5%B8%96%E5%AD%90%E5%88%97%E8%A1%A8%E6%97%B6%E8%87%AA%E5%8A%A8%E5%8A%A0%E8%BD%BD%E5%86%85%E9%83%A8%E5%89%8D%E4%B8%89%E5%BC%A0.user.js
// @updateURL   https://raw.githubusercontent.com/shenshou/MyTamperMonkeyJs/main/scripts/98%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88%E5%8A%A9%E6%89%8B-%E5%B8%96%E5%AD%90%E5%88%97%E8%A1%A8%E6%97%B6%E8%87%AA%E5%8A%A8%E5%8A%A0%E8%BD%BD%E5%86%85%E9%83%A8%E5%89%8D%E4%B8%89%E5%BC%A0.user.js
// ==/UserScript==

/* global $ */
$(document).ready(() => {
    GM_script.init_styles();
    GM_script.init_variables();
    GM_script.add_config_menu();

    var url = window.location.href;
    if (/^.*forum\.php\?.*mod=forumdisplay.*$/g.test(url)){
        normalthread.init()
    } else if (/^.*home\.php\?.*do=favorite.*$/g.test(url)) {
        favorite.init()
    } else if (/^((?!type=reply).)*(home\.php\?.*do=thread)((?!type=reply).)*$/g.test(url)) {
        userspace.init()
    } else {
    }

});
const globalpage = {
    set_width: () => {
        if (GM_getValue("reset_width") == 1) {
            $(".wp").css("width",tools.getNumberSetting("reset_width_px",500,5000,1500) + "px")
            $("#nv").css("width",GM_getValue("reset_width_px") + "px")
        }
    }
}
const normalthread = {
    init: () => {
        normalthread.remove_ads();
        normalthread.add_one_key_btn();
        normalthread.add_column();
        globalpage.set_width();
        var $next_btn = $("#autopbn");
        $next_btn.on("click",function(){
            //点击下一页后延迟page_thread_delayed秒再次触发图片加载。
            setTimeout(() => {
                normalthread.each_thread_list()
            }, tools.getNumberSetting("page_thread_delayed",500,5000,1000));
        });
        normalthread.each_thread_list();
    },
    add_one_key_btn: () => {
        var $load_img_btn = $("<a />");
        $load_img_btn.append($('<div>一键加载图片</div>'))
        $load_img_btn.on("click", function(){
            normalthread.each_thread_list(1)
        });
        $("#scrolltop").append($("<span />").append($load_img_btn));
        $load_img_btn.css("background","None");
        $load_img_btn.css("height","35px");
    },
    add_column: () => {
        $("#threadlist > div.th > table tr:eq(0)").append($('<td style="width:40px">操作</td>'))
    },
    remove_ads: () => {
        $("tbody[id*='stick']").remove();
        $("div.show-text2").parent().parent().parent().remove();
        $("tbody[id='separatorline']").remove();
    },
    each_thread_list: (isonekeyload) => {
        var count = 0
        var block_user = 0
        var hide = 0
        $("#threadlist table[id='threadlisttableid'] > tbody:not([id])").each(function(index) {
            var $_tbody=$(this);
            if ($_tbody.find('td[id^="noid_"]').length == 0) {
                $_tbody.find("tr").append($('<td id="noid_1_'+index+'" style="width:20px"></td>'));
                $_tbody.find("tr").append($('<td id="noid_2_'+index+'" style="width:20px"></td>'));
            }
        })
        $("#threadlist table[id='threadlisttableid'] > tbody[id*='normalthread']").each(function(index) {
            var $tbody=$(this);
            var normalMatch=($tbody.attr("id")||"").match(/^normalthread_(\d+)$/);
            if(!normalMatch)return;
            var thread_id=normalMatch[1];
            var info_id = "info_" + thread_id;
            var load_btn_id = "load_" + thread_id;
            var rm_btn_id = "rm_" + thread_id;
            var black_btn_id = "black_" + thread_id;
            var $author_a = $tbody.find("td.by:eq(0) a")
            var authorHref=$author_a.attr("href")||"";
            var userMatch=authorHref.match(/[?&]uid=(\d+)/);
            if(!$author_a.length||!userMatch)return;
            var userid=userMatch[1];
            if(!$author_a.length)return;
            var username = $author_a.text()

            if (GM_getValue("author_control") == 1) {
                var arr = tools.getAuthorList()
                if (arr.findIndex((user) => user["id"] == userid) >= 0) {
                    $tbody.remove();
                    $("#"+info_id).remove();
                    block_user++
                    return;
                }
            }

            var removed_ids = tools.getRemovedIds()
            var removed = removed_ids.includes(thread_id)
            if (removed) {
                if (GM_getValue("hideorgray") == "gray") {
                    $tbody.css("background-color", "rgb(197 179 179)")
                } else {
                    $tbody.remove();
                    $("#"+info_id).remove();
                    hide++
                    return ;
                }
            }

            if ($tbody.find("#"+black_btn_id).length == 0) {
                var $black_btn = $('<span title="7天内不看此作者" id="'+black_btn_id+'" uid="'+userid+'">'+imgs.hideuser_svg+'</span>')

                $black_btn.click(function(){
                    tools.add_user_id($(this).attr("uid"),username)
                    tools.tip("操作成功")
                })
                $author_a.after($black_btn)
            }

            if ($tbody.find("#"+load_btn_id).length == 0) {
                var $load_btn = $('<span title="查看帖内图片" >'+imgs.expand_svg+'</span>')
                $load_btn.on("click", function(){
                    normalthread.load_thread_info($tbody)
                })
                $tbody.find("tr").append($('<td id="'+load_btn_id+'" style="width:20px"></td>').append($load_btn))
            }

            if (GM_getValue("show_hide_btn") == 1 && $tbody.find("#"+rm_btn_id).length == 0) {
                var $rm_btn = $('<span title="隐藏此贴" >'+imgs.hide_svg+'</span>')
                $rm_btn.on("click", function(){
                    tools.add_removed_id(thread_id)
                    $tbody.remove();
                    $("#"+info_id).remove();
                })
                $tbody.find("tr").append($('<td id="'+rm_btn_id+'" style="width:20px"></td>').append($rm_btn));
            }

            if (GM_getValue("switch_autoload") == 1 || isonekeyload == 1) {
                if ($("#"+info_id).length == 0 && !removed) {
                    if (tools.getNumberSetting("load_thread_delayed",0,5000,500) === 0) {
                        normalthread.load_thread_info($tbody)
                    } else {
                        count++;
                        setTimeout(() => {
                            normalthread.load_thread_info($tbody)
                        }, tools.getNumberSetting("load_thread_delayed",0,5000,500) * count)
                    }
                }
            }
        })

        if (!isonekeyload) {
            if (GM_getValue("author_control") == 1 && GM_getValue("hideorgray") == "hide") {
                tools.tip(`已隐藏屏蔽用户帖子${block_user}条，隐藏标记帖子${hide}条`)
            }else if (GM_getValue("author_control") == 1) {
                tools.tip(`已隐藏屏蔽用户帖子${block_user}条`)
            }else if (GM_getValue("hideorgray") == "hide") {
                tools.tip(`已隐藏标记帖子${hide}条`)
            }
        }
    },
    load_thread_info: ($thread_tbody) => {
        var tbody_clone_id = "info_" + $thread_tbody.attr("id").split("_")[1];
        if ($("#"+tbody_clone_id).length != 0) {
            return ;
        }

        var $tbody_clone = $thread_tbody.clone();
        $tbody_clone.attr("id", tbody_clone_id);
        $tbody_clone.find("td,th").remove();
        var $tag_td = $('<td colspan="'+(GM_getValue("show_hide_btn") == 1 ? 7 : 6)+'"></td>');
        $tbody_clone.find("tr:eq(0)").append($tag_td);

        var url = $thread_tbody.find(".icn > a").attr("href");
        tools.request_and_parse_thread(url, $tag_td)
        $thread_tbody.after($tbody_clone);
    }
}

const favorite = {
    init: () => {
        favorite.add_one_key_btn();
        favorite.each_thread_list();
    },
    add_one_key_btn: () => {
        var $delete_select_btn = $("button[name='delsubmit']");
        var $load_img_btn = $("<a />");
        $load_img_btn.text("一键加载图片");
        $load_img_btn.on("click", function(){
            favorite.each_thread_list(1)
        });
        $load_img_btn.appendTo($delete_select_btn.parent())
    },
    each_thread_list: (isonekeyload) => {
        var count = 0
        $("div.bm > form:eq(0) > ul[id='favorite_ul'] > li[id*='fav_']").each(function(index) {
            var $li=$(this);
            var favoriteMatch=($li.attr("id")||"").match(/^fav_(\d+)$/);
            if(!favoriteMatch)return;
            var thread_id=favoriteMatch[1];
            var info_id = "info_" + thread_id;
            var load_btn_id = "load_" + thread_id;

            if ($li.find("#"+load_btn_id).length == 0) {
                var $load_btn = $("<a />");
                $load_btn.text("加载");
                $load_btn.attr("id", load_btn_id);
                $load_btn.addClass("y")
                $load_btn.css("margin","0 5px")
                $load_btn.on("click", function(){
                    favorite.load_thread_info($li)
                })
                $li.find("#a_delete_"+thread_id).after($load_btn)
            }

            if (GM_getValue("switch_autoload") == 1 || isonekeyload == 1) {
                if ($("#"+info_id).length == 0) {
                    if (GM_getValue("load_thread_delayed") == 0) {
                        favorite.load_thread_info($li)
                    } else {
                        count++;
                        setTimeout(() => {
                            favorite.load_thread_info($li)
                        }, GM_getValue("load_thread_delayed") * count)
                    }
                }
            }
        })
    },
    load_thread_info: ($thread_li) => {
        var info_id = "info_" + $thread_li.attr("id").split("_")[1];
        if ($("#"+info_id).length != 0) {
            return ;
        }

        var $li_clone = $thread_li.clone();
        $li_clone.attr("id", info_id);
        $li_clone.children("*").remove();

        var url = $thread_li.find("a:not([id]):eq(0)").attr("href");
        tools.request_and_parse_thread(url, $li_clone)
        $thread_li.after($li_clone);
    }
}

const userspace = {
    init: () => {
        userspace.add_one_key_btn();
        userspace.add_column();
        userspace.each_thread_list();
    },
    add_one_key_btn: () => {
        var $load_img_btn = $("<a />");
        $load_img_btn.append($('<div>一键加载图片</div>'))
        $load_img_btn.on("click", function(){
            userspace.each_thread_list(1)
        });
        $("#scrolltop").append($("<span />").append($load_img_btn));
        $load_img_btn.css("background","None");
        $load_img_btn.css("height","35px");
    },
    add_column: () => {
        $("#ct div.tl table:eq(0) > tbody:eq(0) > tr:eq(0)").append($('<td style="width:30px">展开</td>'))
    },
    each_thread_list: (isonekeyload) => {
        var count = 0
        $("#ct div.tl table:eq(0) > tbody:eq(0) > tr:not([id]):gt(0)").each(function(index) {
            var $tr=$(this);
            var threadHref=$tr.find("th:eq(0) > a").attr("href")||"";
            var userThreadMatch=threadHref.match(/[?&]tid=(\d+)/);
            if(!userThreadMatch)return;
            var thread_id=userThreadMatch[1];
            var info_id = "info_" + thread_id;
            var load_btn_id = "load_" + thread_id;

            if ($tr.find("#"+load_btn_id).length == 0) {
                var $load_btn = $('<span title="查看帖内图片" >'+imgs.expand_svg+'</span>')
                $load_btn.on("click", function(){
                    userspace.load_thread_info($tr, info_id)
                })
                $tr.append($('<td id="'+load_btn_id+'" style="width:20px"></td>').append($load_btn))
            }

            if (GM_getValue("switch_autoload") == 1 || isonekeyload == 1) {
                if ($tr.find(":contains('求片问答悬赏区')").length == 0 && $("#"+info_id).length == 0) {
                    if (GM_getValue("load_thread_delayed") == 0) {
                        userspace.load_thread_info($tr, info_id)
                    } else {
                        count++;
                        setTimeout(() => {
                            userspace.load_thread_info($tr, info_id)
                        }, GM_getValue("load_thread_delayed") * count)
                    }
                }
            }
        })
    },
    load_thread_info: ($thread_tr, info_id) => {
        if ($("#"+info_id).length != 0) {
            return ;
        }

        var $tr_clone = $thread_tr.clone();
        $tr_clone.attr("id", info_id);
        $tr_clone.children("*").remove();

        var $tag_td = $('<td colspan="6"></td>');
        $tag_td.appendTo($tr_clone)

        var url = $thread_tr.find("th:eq(0) > a").attr("href")
        tools.request_and_parse_thread(url, $tag_td)
        $thread_tr.after($tr_clone);
    }
}

const imgs = {
    load_img_data: "data:image/gif;base64,R0lGODlhEAAQAPQAAP///2FhYfv7+729vdbW1q2trbe3t/Dw8OHh4bKystHR0czMzPX19dzc3Ovr68LCwsfHxwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/h1CdWlsdCB3aXRoIEdJRiBNb3ZpZSBHZWFyIDQuMAAh/hVNYWRlIGJ5IEFqYXhMb2FkLmluZm8AIfkECQoAAAAsAAAAABAAEAAABVAgII5kaZ6lMBRsISqEYKqtmBTGkRo1gPAG2YiAW40EPAJphVCREIUBiYWijqwpLIBJWviiJGLwukiSkDiEqDUmHXiJNWsgPBMU8nkdxe+PQgAh+QQJCgAAACwAAAAAEAAQAAAFaCAgikfSjGgqGsXgqKhAJEV9wMDB1sUCCIyUgGVoFBIMwcAgQBEKTMCA8GNRR4MCQrTltlA1mCA8qjVVZFG2K+givqNnlDCoFq6ioY9BaxDPI0EACzxQNzAHPAkEgDAOWQY4Kg0JhyMhACH5BAkKAAAALAAAAAAQABAAAAVgICCOI/OQKNoUSCoKxFAUCS2khzHvM4EKOkPLMUu0SISC4QZILpgk2bF5AAgQvtHMBdhqCy6BV0RA3A5ZAKIwSAkWhSwwjkLUCo5rEErm7QxVPzV3AwR8JGsNXCkPDIshACH5BAkKAAAALAAAAAAQABAAAAVSICCOZGmegCCUAjEUxUCog0MeBqwXxmuLgpwBIULkYD8AgbcCvpAjRYI4ekJRWIBju22idgsSIqEg6cKjYIFghg1VRqYZctwZDqVw6ynzZv+AIQAh+QQJCgAAACwAAAAAEAAQAAAFYCAgjmRpnqhADEUxEMLJGG1dGMe5GEiM0IbYKAcQigQ0AiDnKCwYpkYhYUgAWFOYCIFtNaS1AWJESLQGAKq5YWIsCo4lgHAzFmPEI7An+A3sIgc0NjdQJipYL4AojI0kIQAh+QQJCgAAACwAAAAAEAAQAAAFXyAgjmRpnqhIFMVACKZANADCssZBIkmRCLCaoWAIPm6FBUkwJIgYjR5LN7INSCwHwYktdIMqgoNFGhQQpMMt0WCoiGDAAvkQMYkIGLCXQI8OQzdoCC8xBGYFXCmLjCYhADsAAAAAAAAAAAA=",
    expand_svg  : '<svg viewBox="0 0 1024 1024" width="16px" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" ><path fill="currentColor" d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"></path></svg>',
    hide_svg    : '<svg viewBox="0 0 1024 1024" width="16px" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" ><path d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z" fill="currentColor"></path><path d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z" fill="currentColor"></path></svg>',
    close_svg   : '<svg viewBox="0 0 1024 1024" width="16px" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" ><path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></svg>',
    upload_svg  : '<svg viewBox="0 0 1024 1024" width="16px" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" ><path fill="currentColor" d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"></path></svg>',
    hideuser_svg: '<svg viewBox="0 0 1024 1024" width="16px" style="cursor:pointer" xmlns="http://www.w3.org/2000/svg" ><path d="M730.614 612.961c-27.79 14.626-52.036 35.076-71.115 59.728C615.725 648.664 565.459 635 512 635c-169.551 0-307 137.449-307 307 0 24.3-19.7 44-44 44s-44-19.7-44-44c0-163.047 98.787-303.02 239.774-363.332C279.812 528.088 229 440.978 229 342c0-156.297 126.703-283 283-283s283 126.703 283 283c0 98.978-50.812 186.088-127.774 236.668a394.09 394.09 0 0 1 63.388 34.293zM512 537c107.696 0 195-87.304 195-195s-87.304-195-195-195-195 87.304-195 195 87.304 195 195 195z m252.887 268.8l-64.974-64.973c-17.183-17.183-17.183-45.043 0-62.226s45.043-17.183 62.226 0l64.974 64.974 64.974-64.974c17.183-17.183 45.042-17.183 62.225 0s17.183 45.043 0 62.226L889.338 805.8l64.974 64.974c17.183 17.183 17.183 45.042 0 62.225s-45.042 17.183-62.225 0l-64.974-64.974L762.139 933c-17.183 17.183-45.043 17.183-62.226 0s-17.183-45.042 0-62.225l64.974-64.974z" fill="#000000" p-id="4945"></path></svg>'
}
const tools = {
    base_selector: "#postlist > div[id^=post_]:eq(0) ",
    headers: {
        'User-agent': navigator.userAgent,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    },
    activeRequests: new Set(),
    request_and_parse_thread: (url, $tag) => {
        let targetUrl;
        try { targetUrl = new URL(url, window.location.href); }
        catch (error) { $tag.text("帖子地址无效"); return; }
        if (!["http:", "https:"].includes(targetUrl.protocol) || targetUrl.origin !== window.location.origin) {
            $tag.text("已阻止非本站帖子请求"); return;
        }
        const requestKey = targetUrl.href;
        if (tools.activeRequests.has(requestKey)) return;
        tools.activeRequests.add(requestKey);
        let finished = false;
        const finish = () => { if (!finished) { finished = true; tools.activeRequests.delete(requestKey); } };
        GM_xmlhttpRequest({
            method: "GET", url: requestKey, headers: tools.headers, timeout: 20000,
            onload: (result) => {
                finish();
                if (result.status !== 200) {
                    $tag.text(result.status === 404 ? "此贴不存在或已被删除或正在被审核" : "帖子内容加载失败（HTTP " + result.status + "）"); return;
                }
                try {
                    const doc = new DOMParser().parseFromString(result.responseText, "text/html");
                    tools.load_img($(doc).find(tools.base_selector), $tag, targetUrl.href);
                } catch (error) { $tag.text("帖子内容解析失败"); }
            },
            onerror: () => { finish(); $tag.text("帖子请求失败，请稍后重试"); },
            ontimeout: () => { finish(); $tag.text("帖子请求超时，请稍后重试"); },
            onabort: () => { finish(); $tag.text("帖子请求已取消"); }
        });
    },
    load_img: ($from_con, $to_con, threadUrl) => {
        const imgMaxHeight = tools.getNumberSetting("img_max_height", 200, 1000, 300);
        const imgMaxWidth = tools.getNumberSetting("img_max_width", 200, 1000, 300);
        const imgMaxCount = tools.getNumberSetting("img_max_count", 0, 10, 3);
        const lazyLoadEnabled = GM_getValue("switch_lazy_load_img") == 1;
        const $tag_div = $("<div></div>").css({width:"100%","margin-bottom":"5px","overflow-x":"auto","max-height":(imgMaxHeight+10)+"px"});
        $to_con.append($tag_div);
        const $inner_tag_div = $('<div style="display:flex;align-items:center;"></div>');
        const $imgs = $from_con.find('img.zoom[file^="http"]:not([file*="static/image"])');
        if ($imgs.length >= imgMaxCount && imgMaxCount > 0) $("<span></span>").css("writing-mode","vertical-lr").text("共"+$imgs.length+"张图").appendTo($inner_tag_div);
        $imgs.slice(0,imgMaxCount).each(function() {
            const rawUrl=$(this).attr("zoomfile")||$(this).attr("file")||$(this).attr("src");
            if(!rawUrl)return;
            let imageUrl;
            try { const parsed=new URL(rawUrl,threadUrl); if(!["http:","https:"].includes(parsed.protocol))return; imageUrl=parsed.href; }
            catch(error){return;}
            const $tag_img=$("<img />").attr({"data-original":imageUrl,"src":lazyLoadEnabled?imgs.load_img_data:imageUrl});
            $tag_img.on("click",function(){if(typeof window.zoom==="function")window.zoom(this,this.src,0,0,0);});
            $tag_img.css({"max-width":imgMaxWidth+"px","max-height":imgMaxHeight+"px",cursor:"pointer","margin-right":"3px",float:"left"});
            $inner_tag_div.append($tag_img);
            if(lazyLoadEnabled)$tag_img.lazyload({threshold:50});
        });
        if($inner_tag_div.children().length===0)$tag_div.text("未识别到图片"); else $tag_div.append($inner_tag_div);
    },
    getNumberSetting: (key,min,max,fallback) => {
        const value=Number(GM_getValue(key));
        return Number.isFinite(value)?Math.min(max,Math.max(min,value)):fallback;
    },
    getAuthorList: () => {
        try {
            const value=JSON.parse(GM_getValue("author_list")||"[]");
            return Array.isArray(value)?value.filter(user=>user&&/^\\d+$/.test(String(user.id))&&Number.isFinite(Number(user.date))):[];
        } catch(error){return [];}
    },
    getRemovedIds: () => {
        const value=GM_getValue("removed_ids");
        return typeof value==="string"?value.split(",").filter(Boolean):[];
    },
    add_removed_id: (thread_id) => {
        var max_length = tools.getNumberSetting("max_hide_history",0,5000,500)
        var removed_ids = GM_getValue("removed_ids").split(",")
        if (max_length == 0) {
            GM_setValue("removed_ids", "")
            return ;
        }
        if (!removed_ids.includes(thread_id)) {
            removed_ids.push(thread_id);
        }
        if (removed_ids.length > max_length) {
            removed_ids = removed_ids.slice(0 - max_length)
        }
        GM_setValue("removed_ids", removed_ids.join(","))
    },
    add_user_id: (userid, userName) => {
        var arr = JSON.parse(GM_getValue("author_list"))
        if (arr.findIndex((user) => user["id"] == userid) < 0) {
            arr.push({
                "id":userid,
                "name":userName,
                "date":parseInt(+new Date()/1000)
            })
            GM_setValue("author_list", JSON.stringify(arr))
        }
    },
    _tipTimerId:null,
    tip: (content,time) => {
        $("#msg").remove(); clearTimeout(tools._tipTimerId);
        const $tipcon=$("<div></div>").attr("id","msg").text(String(content));
        $tipcon.css({opacity:0,transition:"all 0.5s",position:"fixed",top:"10%",left:"50%",transform:"translate(-50%,-50%)",background:"#000",color:"#fff","border-radius":"4px","text-align":"center",padding:"10px 20px","z-index":10000});
        $("body").append($tipcon); setTimeout(()=> $tipcon.css("opacity",0.8));
        tools._tipTimerId=setTimeout(()=>{$tipcon.css("opacity",0);$tipcon.on("transitionend",function(){$(this).remove();});},time||2000);
    }
}

const GM_script = {
    init_styles: () => {
        GM_addStyle(`
            .setting-remark{
                color: gray;
                font-style: italic;
            }
       `);
    },
    init_variables: () => {
        GM_script.set_default_value("switch_autoload", 0);
        GM_script.set_default_value("page_thread_delayed", 1000);
        GM_script.set_default_value("switch_lazy_load_img", 1);
        GM_script.set_default_value("load_thread_delayed", 500);
        GM_script.set_default_value("img_max_height", 300);
        GM_script.set_default_value("img_max_width", 300);
        GM_script.set_default_value("img_max_count", 3);
        GM_script.set_default_value("show_hide_btn", 1);
        GM_script.set_default_value("reset_width", 0);
        GM_script.set_default_value("reset_width_px", 1500);
        GM_script.set_default_value("removed_ids", "");
        GM_script.set_default_value("max_hide_history", 500);
        GM_script.set_default_value("hideorgray", "gray");
        GM_script.set_default_value("author_control", 0);
        GM_script.set_default_value("author_list", "[]");
        var max_length = parseInt(GM_getValue("max_hide_history"));
        if (max_length == 0) {
            GM_setValue("removed_ids", "");
        } else {
            var removed_ids = GM_getValue("removed_ids").split(",");
            if (removed_ids.length > max_length) {
                removed_ids = removed_ids.slice(0 - max_length);
                GM_setValue("removed_ids", removed_ids.join(","));
            }
        }
        var now = parseInt(+new Date()/1000)
        var arr = JSON.parse(GM_getValue("author_list"))
        var newarr = arr.filter(user => (now - user["date"]) < 60*60*24*7 )
        GM_setValue("author_list", JSON.stringify(newarr))
    },
    set_default_value: (key, value) => {
        if ( GM_getValue(key) == undefined) {
            GM_setValue(key, value);
        }
    },
    add_config_menu: () => {
        GM_registerMenuCommand("设置", function() {
            var $config_madel = $('<div />');
            $config_madel.css({
                "width": "100%",
                "height": "100%",
                "background": "rgba(0, 0, 0, 0.4)",
                "position": "fixed",
                "top": "0",
                "left": "0",
                "visibility": "hidden",
                "opacity": "0",
                "z-index": "999",
                "transition": "all 0.3s",
            })
            $config_madel.on("click", function() {
                $config_madel.remove();
            })
            $config_madel.keyup(function(e){
                var key = e.which || e.keyCode;
                if(key == 27){
                    $config_madel.remove();
                }
            });

            var $config_window = $('<div />');
            $config_window.css({
                "position": "fixed",
                "top": "50%",
                "left": "50%",
                "padding"       : "10px 20px",
                "background-color": "#fff",
                "border-radius": "10px",
                "transform": "translate(-50%,-50%)",
            });
            $config_window.on("click", function(event) {
                event.stopPropagation()
            })
            $config_window.appendTo($config_madel)

            var $config_title = $(`
                <div>
                    <span style="font-weight: bold">设置 -- 98图片浏览助手</span>
                    <span id="close_cfg_window" title="关闭设置窗口" >${imgs.close_svg}</span>
                </div>
            `);
            $config_title.css({
                "border-bottom": "1px solid gray",
                "font-size": "20px",
                "display": "flex",
                "justify-content": "space-between"
            });
            $config_title.find("#close_cfg_window").on("click", function(){
                $config_madel.remove();
            })
            $config_title.appendTo($config_window)

            var $form = $(`
                <form style="padding: 10px 20px; max-height:600px; overflow-y: auto;">
                    <div>
                        <input type="checkbox" id="reset_width" name="reset_width" />
                        <label for="reset_width">适应宽屏，将内容宽度设置为</label>
                        <input type="number" id="reset_width_px" name="reset_width_px" min="500" max="5000"/>
                        <label for="reset_width_px">px</label>
                        <div class="setting-remark">* 勾选后将会把内容区域的宽度设置为给定值。取值范围500-5000</div>
                    </div>
                    <div>
                        <input type="checkbox" id="show_hide_btn" name="show_hide_btn" />
                        <label for="show_hide_btn">显示隐藏按钮，最多纪录</label>
                        <input type="number" id="max_hide_history" name="max_hide_history" min="0" max="5000"/>
                        <label for="max_hide_history">条隐藏历史 -- 当前已记录 ${tools.getRemovedIds().length} 条 </label>
                        <button id="clear_hide" type=button>清空</button>
                        <div class="setting-remark">* 按钮点击后可以暂时隐藏帖子，并记录此贴ID。取值范围0-5000</div>
                        <div style="margin-left:24px">
                            <span>刷新页面后，自动</span>
                            <input type="radio" id="hide" name="hideorgray" value="hide" />
                            <label for="hide">隐藏</label>
                            <input type="radio" id="gray" name="hideorgray" value="gray" />
                            <label for="gray">置灰</label>
                            <span>标记过的帖子</span>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="switch_autoload" name="switch_autoload" />
                        <label for="switch_autoload">开启自动加载</label>
                        <div class="setting-remark">* 进入帖子列表或翻页后，自动加载所有未加载过的帖子</div>
                    </div>
                    <div>
                        <label for="load_thread_delayed">帖子列表遍历延迟</label>
                        <input type="number" id="load_thread_delayed" name="load_thread_delayed" min="0" max="5000"/>
                        <label for="load_thread_delayed">毫秒</label>
                        <div class="setting-remark">* 间隔多少毫秒加载下个帖子。0为不设延迟，取值范围0-5000</div>
                    </div>
                    <div>
                        <label for="page_thread_delayed">点击下一页后延迟</label>
                        <input type="number" id="page_thread_delayed" name="page_thread_delayed" min="500" max="5000"/>
                        <label for="page_thread_delayed">毫秒再次触发加载</label>
                        <div class="setting-remark">* 在开启自动加载的前提下，点击下一页后如果没有自动加载新出的帖子，可以适当调大该值。取值范围500-5000</div>
                    </div>
                    <div>
                        <input type="checkbox" id="switch_lazy_load_img" name="switch_lazy_load_img" />
                        <label for="switch_lazy_load_img">开启图片懒加载</label>
                        <div class="setting-remark">* 只有图片将要进入显示区时才会下载</div>
                    </div>
                    <div>
                        <label for="img_max_count">每个帖子最多加载</label>
                        <input type="number" id="img_max_count" name="img_max_count" min="0" max="10"/>
                        <label for="img_max_count">张图片</label>
                        <div class="setting-remark">* 取值范围0-10</div>
                    </div>
                    <div>
                        <label for="img_max_width">每行图片最宽占用</label>
                        <input type="number" id="img_max_width" name="img_max_width" min="200" max="1000"/>
                        <label for="img_max_width">像素</label>
                        <div class="setting-remark">* 图片最宽占用多少空间。单位像素，取值范围200-1000</div>
                    </div>
                    <div>
                        <label for="img_max_height">每行图片最高占用</label>
                        <input type="number" id="img_max_height" name="img_max_height" min="200" max="1000"/>
                        <label for="img_max_height">像素</label>
                        <div class="setting-remark">* 图片最高占用多少空间。单位像素，取值范围200-1000</div>
                    </div>
                    <div>
                        <input type="checkbox" id="author_control" name="author_control" />
                        <label for="author_control">开启作者筛选  --  当前小黑屋 ${tools.getAuthorList().length} 人</label>
                        <button id="clear_black" type=button>清空小黑屋</button>
                        <div class="setting-remark">* 点击帖子作者后方的图标即可在7天内自动隐藏此人的帖子</div>
                    </div>
                </form>
            `);
            $form.appendTo($config_window);
            var $clear_hide_btn = $form.find("#clear_hide");
            $clear_hide_btn.click(function() {
                GM_setValue("removed_ids", "");
                tools.tip("清理成功");
            });
            var $clear_blackbtn = $form.find("#clear_black");
            $clear_blackbtn.click(function() {
                GM_setValue("author_list", "[]");
                tools.tip("清理成功");
            });

            var $btns = $(`
                <div>
                    <button id="confirm_btn">确认</button>
                    <button id="cancel_btn">取消</button>
                </div>
            `);
            $btns.css({
                "display": "flex",
                "justify-content": "flex-end",
            })
            var css_btn = {
                "margin-right": "10px",
                "border-radius": "4px",
                "border": "none",
                "min-height": "1em",
                "padding": "6px 12px",
                "cursor": "pointer"
            }
            var $confirm_btn = $btns.find("#confirm_btn")
            var $cancel_btn = $btns.find("#cancel_btn")
            $confirm_btn.css(css_btn);
            $confirm_btn.css({
                "color": "#FFF",
                "background-color": "#2ecc71",
            });
            $cancel_btn.css(css_btn);
            $cancel_btn.css({
                "color": "#000",
                "background-color": "#ecf0f1",
            });

            $confirm_btn.click(function() {
                const specs=[["max_hide_history",0,5000],["reset_width_px",500,5000],["load_thread_delayed",0,5000],["page_thread_delayed",500,5000],["img_max_height",200,1000],["img_max_width",200,1000],["img_max_count",0,10]];
                const values={};
                for(const [key,min,max] of specs){const raw=$form.find("#"+key).val(),value=Number(raw);if(raw===""||!Number.isInteger(value)||value<min||value>max){tools.tip(key+" 超出允许范围（"+min+"-"+max+"）");return;}values[key]=value;}
                const hideMode=$form.find("input[name='hideorgray']:checked").val();
                if(!["hide","gray"].includes(hideMode)){tools.tip("请选择隐藏或置灰模式");return;}
                GM_setValue("show_hide_btn",$form.find("#show_hide_btn").prop("checked")?1:0);
                GM_setValue("max_hide_history",values.max_hide_history);GM_setValue("hideorgray",hideMode);
                GM_setValue("reset_width",$form.find("#reset_width").prop("checked")?1:0);GM_setValue("reset_width_px",values.reset_width_px);
                GM_setValue("switch_autoload",$form.find("#switch_autoload").prop("checked")?1:0);GM_setValue("author_control",$form.find("#author_control").prop("checked")?1:0);
                GM_setValue("switch_lazy_load_img",$form.find("#switch_lazy_load_img").prop("checked")?1:0);
                GM_setValue("load_thread_delayed",values.load_thread_delayed);GM_setValue("page_thread_delayed",values.page_thread_delayed);
                GM_setValue("img_max_height",values.img_max_height);GM_setValue("img_max_width",values.img_max_width);GM_setValue("img_max_count",values.img_max_count);
                tools.tip("保存成功");$config_madel.remove();
            });
            $cancel_btn.click(function(){
                tools.tip("已取消")
                $config_madel.remove()
            });
            $btns.appendTo($config_window)

            $form.find("#show_hide_btn").prop("checked",GM_getValue("show_hide_btn") == 1);
            $form.find("#max_hide_history").val(GM_getValue("max_hide_history"));
            $form.find("#reset_width").prop("checked",GM_getValue("reset_width") == 1);
            $form.find("#reset_width_px").val(GM_getValue("reset_width_px"));
            $form.find("#switch_autoload").prop("checked",GM_getValue("switch_autoload") == 1);
            $form.find("#author_control").prop("checked",GM_getValue("author_control") == 1);
            $form.find("#switch_lazy_load_img").prop("checked",GM_getValue("switch_lazy_load_img") == 1 );
            $form.find("#load_thread_delayed").val(GM_getValue("load_thread_delayed"));
            $form.find("#page_thread_delayed").val(GM_getValue("page_thread_delayed"));
            $form.find("#img_max_height").val(GM_getValue("img_max_height"));
            $form.find("#img_max_width").val(GM_getValue("img_max_width"));
            $form.find("#img_max_count").val(GM_getValue("img_max_count"));
            $form.find("input[id='"+GM_getValue("hideorgray")+"']").attr('checked', 'true');

            $config_madel.appendTo($("body"));
            $config_madel.css('visibility', 'visible');
            $config_madel.css('opacity', '1');
            $config_madel.css('transform', 'scale(1)');
        })
    }
}
