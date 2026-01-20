// ==UserScript==
// @name         网页背景图片清除-ts创建修改
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  强制删除所有网页的 background-image，保护视觉纯净。
// @author       ts-from_Gemini
// @match        https://h-ciyuan.com/
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 1. 底层逻辑：通过注入全局最高优先级的 CSS 直接抹除背景图
    // 使用 !important 确保覆盖大多数内联样式和外部样式表
    const css = `
        * {
            background-image: none !important;
        }
    `;

    // 在文档开始加载时立即注入，减少页面闪烁
    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(css);
    } else {
        const style = document.createElement('style');
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);
    }

    // 2. 增强逻辑：针对动态生成的 DOM 节点进行实时清理
    // 某些复杂的 Web 应用（如 React/Vue）可能会动态修改内联 style
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const target = mutation.target;
                if (target.style.backgroundImage && target.style.backgroundImage !== 'none') {
                    target.style.setProperty('background-image', 'none', 'important');
                }
            }
        });
    });

    // 监听全局根节点及其子节点属性变化
    observer.observe(document.documentElement, {
        attributes: true,
        subtree: true,
        attributeFilter: ['style']
    });

})();