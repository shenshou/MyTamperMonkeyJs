// ==UserScript==
// @name         网页背景图片清除Pro(含伪元素检测)--ts创建修改
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  强制删除所有网页标签及其伪元素(::before, ::after)的背景图
// @author       ts-from_Gemini
// @match        https://zh.moegirl.org.cn/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==
(function() {
    'use strict';
    // 1. 核心 CSS 注入：利用通配符选择器及其伪元素分支
    // 这种写法能从浏览器渲染层级强行将所有背景图设为 none
    const css = `
        *, *::before, *::after {
            background-image: none !important;
        }
    `;

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(css);
    } else {
        const style = document.createElement('style');
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);
    }
    // 2. 动态监测逻辑：针对通过 JavaScript 动态插入 style 标签的行为
    // 某些网站（如幻天领域或网盘）可能会在加载后通过 JS 生成新的 <style> 覆盖全局规则
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // 监控 style 属性
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const target = mutation.target;
                if (target.style.backgroundImage && target.style.backgroundImage !== 'none') {
                    target.style.setProperty('background-image', 'none', 'important');
                }
            }
            // 监控新插入的 style 或 link 标签（供应链防御逻辑）
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'STYLE' && !node.textContent.includes('background-image: none')) {
                        // 如果发现新样式试图设定背景图，立即追加我们的强制规则
                        node.textContent += css;
                    }
                });
            }
        });
    });

    // 启动高性能监听
    observer.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['style']
    });

})();
