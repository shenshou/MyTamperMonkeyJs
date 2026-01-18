// ==UserScript==
// @name         网页图片开关 (Display版)
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  点击按钮完全隐藏图片（不占位），再次点击恢复。支持动态加载的内容。
// @author       Gemini
// @match        http*://moxing.chat/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    let isHidden = false; // 记录当前状态，初始为不隐藏

    /**
     * 执行隐藏/显示逻辑
     * @param {Document|Element} root - 起始节点
     * @param {boolean} shouldHide - 是否执行隐藏
     */
    function processDisplay(root = document, shouldHide = false) {
        // 目标选择器
        let selectors = [{selector:'.pattl',text:'特定类名.pattl针对魔性论坛'}];
        selectors.forEach(ele => {      
            let elements= root.querySelectorAll(ele.selector)
            elements.forEach(el => {
                // 使用 display: none 彻底移除占位
                el.style.display = shouldHide ? 'none' : '';
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
    btn.innerText = '完全隐藏图片';
    Object.assign(btn.style, {
        position: 'fixed',
        bottom: '25px',
        right: '25px',
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

    btn.addEventListener('click', () => {
        isHidden = !isHidden;
        btn.innerText = isHidden ? '恢复显示图片' : '完全隐藏图片';
        btn.style.backgroundColor = isHidden ? '#2196F3' : '#f44336';
        processDisplay(document, isHidden);
    });

    document.body.appendChild(btn);

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