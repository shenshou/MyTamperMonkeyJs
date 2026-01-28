// ==UserScript==
// @name         防跳转补丁
// @namespace    https://sleazyfork.org/users/1461640
// @version      0.1
// @description  拦截首次点击跳转、清理属性广告、阻止非必要弹窗
// @author       ts from gemini
// @match        *://*/*
// @exclude      *://*.google.com/*
// @exclude      *://*.baidu.com/*
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    const config = {
        debug: true,
        // 排除掉不希望拦截弹窗的白名单（例如支付跳转等）
        whiteList: ['pay', 'login', 'auth']
    };

    const logger = (msg) => config.debug && console.log(`%c[防劫持]%c ${msg}`, "color: #fff; background: #f64f59; padding: 2px 4px; border-radius: 4px;", "color: default;");

    /**
     * 方案 C：拦截重定向与弹窗
     * 锁定 window.open，防止脚本在后台偷偷开启广告页
     */
    const interceptPopup = () => {
        const originalOpen = unsafeWindow.open;
        unsafeWindow.open = function(url, name, specs) {
            // 如果 URL 包含白名单关键词，放行
            if (url && config.whiteList.some(key => url.includes(key))) {
                return originalOpen.apply(this, arguments);
            }
            logger(`拦截到弹窗请求: ${url}`);
            return null; // 返回 null 模拟窗口打开失败或被拦截
        };
    };

    /**
     * 方案 B：清理属性广告
     * 扫描 DOM 中直接写在 HTML 里的恶意点击代码
     */
    const cleanInlineAds = () => {
        const tags = document.querySelectorAll('[onclick], [onmousedown]');
        tags.forEach(el => {
            const clickAttr = el.getAttribute('onclick') || '';
            const mousedownAttr = el.getAttribute('onmousedown') || '';
            
            // 匹配常见的劫持特征代码
            const hijackPattern = /window\.open|location\.href|openWindow|popunder/i;
            
            if (hijackPattern.test(clickAttr)) {
                el.removeAttribute('onclick');
                logger(`清理 HTML onclick 劫持: ${el.tagName}`);
            }
            if (hijackPattern.test(mousedownAttr)) {
                el.removeAttribute('onmousedown');
                logger(`清理 HTML onmousedown 劫持: ${el.tagName}`);
            }
        });
    };

    /**
     * 方案 A：拦截全局事件监听
     * 阻止网站向 window/body 绑定“一触即发”的劫持监听器
     */
    const shieldEventListeners = () => {
        const originalAddEventListener = unsafeWindow.EventTarget.prototype.addEventListener;
        
        unsafeWindow.EventTarget.prototype.addEventListener = function(type, listener, options) {
            // 劫持者通常喜欢在 window 或 body 上监听首次点击
            const isTargetGlobal = (this === unsafeWindow || this === unsafeWindow.document || this === unsafeWindow.document.body);
            const isClickEvent = (type === 'click' || type === 'mousedown');

            if (isTargetGlobal && isClickEvent) {
                // 如果是在全局绑定的点击事件，我们进行拦截提示
                logger(`拦截到全局事件绑定: ${type}`);
                // 这里的处理逻辑：可以选择跳过（不执行绑定），从而废掉网站的劫持脚本
                return; 
            }
            
            return originalAddEventListener.apply(this, arguments);
        };
    };

    // 执行拦截逻辑
    try {
        shieldEventListeners(); // 抢在网页脚本运行前修改底层 API
        interceptPopup();      // 锁定弹窗权限
        
        // 针对动态生成的元素，使用定时器或 MutationObserver 持续清理
        window.addEventListener('load', () => {
            cleanInlineAds();
            // 监控后续注入的广告属性
            const observer = new MutationObserver(() => cleanInlineAds());
            observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['onclick', 'onmousedown'] });
        });

        logger("拦截引擎已就绪");
    } catch (e) {
        console.error("[防劫持] 初始化失败:", e);
    }

})();