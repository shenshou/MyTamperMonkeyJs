// ==UserScript==
// @name         网页图片开关 (Display版)
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  点击按钮完全隐藏图片（不占位），再次点击恢复。支持动态加载的内容。
// @author       ts from Gemini
// @match        http*://moxing.chat/*
// @match        http*://www.javbus.com/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    let isHidden = false; // 记录当前状态，初始为不隐藏
    function UrlhasString(text) {//获取当前页面的hostname中是否包含某个字符串
        const domain = window.location.hostname;        
        return domain.includes(text);
    }
    //针对魔性论坛moxing.chat让他的图片不会变形和模糊   
    if (UrlhasString('moxing')) {
        GM_addStyle(`
            a img { object-fit: contain; }
        `);
    } 
    /**
     * 执行隐藏/显示逻辑
     * @param {Document|Element} root - 起始节点
     * @param {boolean} shouldHide - 是否执行隐藏
     */
    function processDisplay(root = document, shouldHide = false) {
        // 目标选择器
        let selectors = [{selector:'.pattl',text:'特定类名.pattl针对魔性论坛',id:'moxing'},{selector:'.nthread_firstpostbox .t_f .zoom',text:'特定类名针对javbus',id:'javbus'},{selector:'.nthread_firstpostbox br',text:'特定类名针对javbus',id:'javbus2'}];
        selectors.forEach(ele => {
            let elements= root.querySelectorAll(ele.selector)
            elements.forEach((el,index) => {
                // 使用 display: none 彻底移除占位
                el.style.display = shouldHide ? 'none' : '';
                if(ele.id=='javbus2'&&(index==0||index==1)){
                    el.style.display = 'inline';
                }
            });
        });

        // 处理同源 Iframe
        const iframes = root.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            try {
                if (iframe.contentDocument) {
                    processDisplay(iframe.contentDocument, shouldHide);
                }
            } catch (e) {
                // 跨域 iframe 无法进入，直接隐藏整个容器
                iframe.style.display = shouldHide ? 'none' : '';
            }
        });
    }

    // --- 创建 UI 按钮 ---
    const btn = document.createElement('button');
    btn.innerText = '隐藏图片不回顶部';
    Object.assign(btn.style, {
        position: 'fixed',
        bottom: '65px',
        right: '40px',
        zIndex: '1000000',
        padding: '8px 16px',
        backgroundColor: '#f44336', // 初始用红色提醒
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
        fontSize: '13px',
        transition: 'all 0.3s'
    });
    let topValue;
    let test=0;
    btn.addEventListener('click', () => {
        topValue= window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        isHidden = !isHidden;
        btn.innerText = isHidden ? '恢复显示图片' : '隐藏图片不回顶部';
        btn.style.backgroundColor = isHidden ? '#2196F3' : '#f44336';
        btn2.innerText = isHidden ? '恢复显示图片和定位' : '隐藏图片回到顶部';
        btn2.style.backgroundColor = isHidden ? '#2196F3' : '#f44336';
        processDisplay(document, isHidden);
        if(isHidden){
            test=topValue
        }
    });

    document.body.appendChild(btn);
    const btn2 = document.createElement('button');
    btn2.innerText = '隐藏图片回到顶部';
    Object.assign(btn2.style, {
        position: 'fixed',
        bottom: '25px',
        right: '40px',
        zIndex: '1000000',
        padding: '8px 16px',
        backgroundColor: '#f44336', // 初始用红色提醒
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
        fontSize: '13px',
        transition: 'all 0.3s'
    });
    btn2.addEventListener('click', () => {
        topValue= window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        isHidden = !isHidden;
        btn2.innerText = isHidden ? '恢复显示图片和定位' : '隐藏图片回到顶部';
        btn2.style.backgroundColor = isHidden ? '#2196F3' : '#f44336';
        btn.innerText = isHidden ? '恢复显示图片' : '隐藏图片不回顶部';
        btn.style.backgroundColor = isHidden ? '#2196F3' : '#f44336';
        processDisplay(document, isHidden);
        if(isHidden){
            window.scrollTo({
                top: 0
            })
            test=topValue
        }else{
            window.scrollTo({
                top: test
            })
        }
    });

    document.body.appendChild(btn2);

    // --- 动态监控机制 ---
    // 针对脚本加载、翻页产生的动态图片执行“即时屏蔽”
    const observer = new MutationObserver(() => {
        if (isHidden) {
            processDisplay(document, true);
        }
    });

    // 监控整个 body 的变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();