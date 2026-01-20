// ==UserScript==
// @name         通用元素屏蔽大师-按照元素class id 标签名屏蔽元素
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  支持 Class, ID, 标签名屏蔽，可穿透同源 iframe，采用 DOM 移除方式
// @author       ts from Gemini
// @match        https://supjav.com/
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // ================= [用户配置区] =================
    // 你可以在这里自由添加任何网站的屏蔽规则
    const BLOCK_RULES = [
        '.ad-container',    // 类名屏蔽
        '#footer-banner',   // ID 屏蔽
        'aside',            // 标签名屏蔽
        '[title="广告"]',    // 属性选择器屏蔽
        '.uncloseable-btn'  // 针对某些“无法关闭”的顽固按钮
    ];
    // ===============================================

    /**
     * 执行屏蔽逻辑
     * @param {Document|Element} rootNode - 起始节点
     */
    function applyBlocking(rootNode = document) {
        if (!rootNode) return;

        // 1. 处理当前层级的元素
        BLOCK_RULES.forEach(selector => {
            try {
                const elements = rootNode.querySelectorAll(selector);
                elements.forEach(el => {
                    if (el && el.parentNode) {
                        // 直接从 DOM 中物理移除，防止 CSS 隐藏被 JS 脚本强制恢复
                        el.remove();
                    }
                });
            } catch (e) {
                // 忽略非法的 CSS 选择器报错
            }
        });

        // 2. 深度穿透处理 iframe
        const iframes = rootNode.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            try {
                // 检查 iframe 是否同源且可访问其 document
                if (iframe.contentDocument) {
                    applyBlocking(iframe.contentDocument);
                }
            } catch (e) {
                // 跨域 iframe 由于安全限制无法操作其内部，这是浏览器层面的限制
            }
        });
    }

    // --- 动态监控机制 ---
    // 使用 MutationObserver 监听 DOM 变动，确保异步加载或瀑布流内容也能被屏蔽
    const observer = new MutationObserver((mutations) => {
        applyBlocking();
    });

    // 监控根节点及其所有子节点的变化
    observer.observe(document.documentElement || document, {
        childList: true,
        subtree: true
    });

    // --- 多级补刀机制 ---
    // 1. 节点加载时立即执行一次
    applyBlocking();

    // 2. DOM 内容加载完成执行
    window.addEventListener('DOMContentLoaded', applyBlocking);

    // 3. 页面及资源（如 iframe）完全加载后执行
    window.addEventListener('load', () => {
        applyBlocking();
        // 针对某些延迟生成的 iframe，两秒后再补一次刀
        setTimeout(applyBlocking, 2000);
    });

})();