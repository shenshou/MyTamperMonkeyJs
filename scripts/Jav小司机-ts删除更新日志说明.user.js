// ==UserScript==
// @name         Jav小司机-ts删除更新日志说明
// @namespace    wddd
// @version      1.1.8
// @author       wddd
// @license      MIT
// @match        *://*.javlibrary.com/*
// @match        *://*.javlib.com/*
// @match        *://*.m34z.com/*
// @match        *://*.j41g.com/*
// @match        *://*.h28o.com/*
// @description  Jav小司机。简单轻量速度快！
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        unsafeWindow
// @connect      javscreens.com
// @connect      img.japanese-bukkake.net
// @connect      search.javtrailers.com
// @connect      javtrailers.com
// @homepage     https://github.com/wdwind/JavMiniDriver
// @downloadURL  https://raw.githubusercontent.com/shenshou/MyTamperMonkeyJs/main/scripts/Jav%E5%B0%8F%E5%8F%B8%E6%9C%BA-ts%E5%88%A0%E9%99%A4%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97%E8%AF%B4%E6%98%8E.user.js
// @updateURL    https://raw.githubusercontent.com/shenshou/MyTamperMonkeyJs/main/scripts/Jav%E5%B0%8F%E5%8F%B8%E6%9C%BA-ts%E5%88%A0%E9%99%A4%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97%E8%AF%B4%E6%98%8E.user.js
// ==/UserScript==

// Credit to
//  * https://greasyfork.org/zh-CN/scripts/25781
//  * https://greasyfork.org/zh-CN/scripts/37122

// Utils

function setCookie(cookieName, cookieValue, expireDays) {
    let expireDate =new Date();
    expireDate.setDate(expireDate.getDate() + expireDays);
    let expires = "expires=" + ((expireDays == null) ? '' : expireDate.toUTCString());
    const secure = window.location.protocol === "https:" ? ";Secure" : "";
    document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + ";" + expires + ";path=/;SameSite=Lax" + secure;
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

function removeElementIfPresent(element) {
    if (!element) return;
    if (element instanceof HTMLImageElement && element.src.startsWith('blob:')) {
        URL.revokeObjectURL(element.src);
    }
    return element.parentNode?.removeChild(element);
}

function sanitizeImportedNode(root) {
    if (!root || root.nodeType !== Node.ELEMENT_NODE) return root;
    const elements = [root, ...root.querySelectorAll('*')];
    for (const element of elements) {
        if (['SCRIPT', 'IFRAME', 'OBJECT', 'EMBED'].includes(element.tagName)) {
            element.remove();
            continue;
        }
        for (const attribute of Array.from(element.attributes)) {
            const name = attribute.name.toLowerCase();
            if (name.startsWith('on')) element.removeAttribute(attribute.name);
            else if (['href', 'src', 'xlink:href', 'action', 'formaction'].includes(name)
                && /^(?:javascript|vbscript|data):/i.test(attribute.value.trim())) {
                element.removeAttribute(attribute.name);
            }
        }
        if (element.target === '_blank') element.rel = 'noopener noreferrer';
    }
    return root;
}

async function runWithConcurrency(items, limit, task) {
    let next = 0;
    const count = Math.min(Math.max(1, limit), items.length);
    await Promise.all(Array.from({ length: count }, async () => {
        while (next < items.length) {
            const item = items[next++];
            try { await task(item); } catch { /* Continue processing remaining items. */ }
        }
    }));
}

function parseHTMLText(text) {
    const doc = document.implementation.createHTMLDocument('');
    doc.documentElement.innerHTML = String(text ?? '');
    return doc;
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[char]);
}

function parseBBCode(escapedText) {
    let html = String(escapedText ?? '');
    const safeUrl = value => {
        try {
            const url = new URL(value.replace(/&amp;/g, '&').trim());
            return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
        } catch { return null; }
    };
    html = html.replace(/\[url=(https?:\/\/[^\]\s]+)\]([\s\S]*?)\[\/url\]/gi, (m, url, label) => {
        const safe = safeUrl(url);
        return safe ? `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener noreferrer">${label}</a>` : label;
    });
    html = html.replace(/\[url\]([\s\S]*?)\[\/url\]/gi, (m, value) => {
        const safe = safeUrl(value);
        return safe ? `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener noreferrer">${value}</a>` : value;
    });
    html = html.replace(/\\[img\\]([\\s\\S]*?)\\[\\/img\\]/gi, (m, value) => {
        const safe = safeUrl(value);
        return safe ? `<img src=\"${escapeHtml(safe)}\" alt=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer\" />` : '';
    });
    const tags = [['b','strong'],['i','em'],['u','u'],['s','s'],['quote','blockquote'],['code','code']];
    for (let pass=0; pass<8; pass++) {
        let changed=false;
        for (const [bb,tag] of tags) {
            const re=new RegExp('\\['+bb+'\\]([\\s\\S]*?)\\[\\/'+bb+'\\]','gi');
            html=html.replace(re,(m,content)=>{changed=true;return `<${tag}>${content}</${tag}>`;});
        }
        if(!changed) break;
    }
    return html.replace(/\[br\]/gi,'<br>').replace(/\r?\n/g,'<br>');
}

// https://stackoverflow.com/questions/494143// https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
function createElementFromHTML(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

// For the requests in different domains
// GM_xmlhttpRequest is made from the background page, and as a result, it
// doesn't have cookies in the request header
function gmFetch(obj) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: obj.method || 'GET',
            // timeout in ms
            timeout: obj.timeout || 10000,
            url: obj.url,
            headers: obj.headers ? obj.headers : {},
            data: obj.data,
            onload: (result) => {
                if (result.status >= 200 && result.status < 300) {
                    resolve(result);
                } else {
                    reject(result);
                }
            },
            onerror: reject,
            ontimeout: reject,
        });
    });
}

// For the requests in the same domain
// XMLHttpRequest is made within the page, so it will send the cookies
function xhrFetch(obj) {
    const controller = new AbortController();
    const timeout = Number.isFinite(obj.timeout) && obj.timeout > 0 ? obj.timeout : 15000;
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    return fetch(obj.url, {
        method: obj.method || 'GET',
        headers: obj.headers || {},
        body: obj.data,
        credentials: 'include',
        signal: controller.signal,
    }).finally(() => clearTimeout(timeoutId));
}

async function xhrFetchWithRetry(obj, maxRetries = 3) {
    for (let attempt = 0; ; attempt++) {
        try {
            const response = await xhrFetch(obj);
            if (response.status === 429 || response.status >= 500) {
                const error = new Error(`HTTP ${response.status}`);
                error.status = response.status;
                throw error;
            }
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response;
        } catch (error) {
            const retryable = !error.status || error.status === 429 || error.status >= 500;
            if (!retryable || attempt >= maxRetries) throw error;
            await new Promise(resolve => setTimeout(resolve, Math.min(1000 * (2 ** attempt), 8000)));
        }
    }
}

//// Style

function addStyle() {
    // social media
    GM_addStyle(`
        #toplogo {
            height: 55px;
        }
        .socialmedia {
            display: none !important;
            width: 0% !important;
            height: 0% !important;
        }
        .videothumblist .videos .video {
            height: 290px;
        }
        .thumbnailDetail {
            font-size: 14px;
            margin-top: 2.5em;
            color: #666666;
        }
        .page_selector {
            display: block;
            margin-bottom: 15px;
        }
        .load_more {
            text-align: center;
        }
        #load_next_page {
            margin-bottom: 10px;
        }
        #load_next_page_button {
            display: inline;
        }
        #togglePageSelector {
            margin-left: 20px;
            font-size: 14px;
            vertical-align: text-top;
            display: inline;
        }
        .toggle {
            cursor: pointer;
            color: blue;
        }
        .bottombanner2 {
            display: none !important;
        }
        table.displaymode {
            table-layout: fixed;
        }
        td.mid {
            text-align: left;
            font: bold 12px monospace;
        }
        input.slider {
            direction: rtl;
            height: 10px;
            margin-left: 10px;
        }
        .filter {
            display: inline-block;
        }
        .filterMinValue {
            display: inline-block;
        }
    `);

    // Homepage
    if (!window.location.href.includes('.php')) {
        GM_addStyle(`
            .videothumblist {
                height: 645px !important;
            }
        `);
    }
}

const RESOURCE_CONFIG_KEY = 'mdResourceConfig';
const DEFAULT_RESOURCE_CONFIG = {
    jumpLinks: [],
    torrentSites: [
        { id: 'sukebei', name: 'Sukebei', host: 'sukebei.nyaa.si', template: '/?f=0&c=0_0&q={id}', enabled: true },
        { id: 'btsow', name: 'BTSOW', host: 'btos.pw', template: '/search/{id}', enabled: true },
        { id: 'javbus', name: 'JavBus', host: 'www.javbus.com', template: '/{id}', enabled: true },
        { id: 'torrentkitty', name: 'TorrentKitty', host: 'www.torrentkitty.tv', template: '/search/{id}', enabled: true },
        { id: 'tokyotosho', name: 'TokyoTosho', host: 'www.tokyotosho.info', template: '/search.php?terms={id}', enabled: true },
        { id: 'biedian', name: 'Biedian', host: 'biedian.me', template: '/search?source=%E7%A7%8D%E5%AD%90%E6%90%9C&s=time&p=1&k={id}', enabled: true },
        { id: 'btdig', name: 'BTDig', host: 'btdig.com', template: '/search?q={id}', enabled: true },
        { id: 'idope', name: 'iDope', host: 'idope.se', template: '/torrent-list/{id}/', enabled: true }
    ]
};

function cloneResourceConfig(config) {
    return JSON.parse(JSON.stringify(config));
}

function initializeResourceConfig() {
    if (GM_getValue(RESOURCE_CONFIG_KEY, undefined) !== undefined) return;
    const config = cloneResourceConfig(DEFAULT_RESOURCE_CONFIG);
    const legacyKeys = {
        sukebei: 'sukebei',
        btsow: 'btsow',
        javbus: 'javbus',
        torrentkitty: 'torrentKitty',
        tokyotosho: 'tokyotosho',
        biedian: 'biedian',
        btdig: 'btDigg',
        idope: 'idope'
    };
    for (const site of config.torrentSites) {
        const legacyKey = legacyKeys[site.id];
        const legacyValue = legacyKey ? GM_getValue('mdTorrentSite_' + legacyKey, undefined) : undefined;
        if (legacyValue !== undefined) site.enabled = !!legacyValue;
    }
    GM_setValue(RESOURCE_CONFIG_KEY, config);
}

function getResourceConfig() {
    const saved = GM_getValue(RESOURCE_CONFIG_KEY, undefined);
    if (!saved || typeof saved !== 'object') return cloneResourceConfig(DEFAULT_RESOURCE_CONFIG);
    return {
        jumpLinks: Array.isArray(saved.jumpLinks) ? saved.jumpLinks : [],
        torrentSites: Array.isArray(saved.torrentSites) ? saved.torrentSites : []
    };
}

function normalizeResourceHost(value) {
    const host = String(value || '').trim().replace(/^https?:\/\//i, '').split('/')[0].toLowerCase();
    if (!/^[a-z0-9.-]+(?::[0-9]{1,5})?$/i.test(host) || host.includes('..') || host.startsWith('.') || host.endsWith('.')) return '';
    return host;
}

function buildResourceUrl(resource, editionNumber) {
    if (!resource || resource.enabled === false) return '';
    const host = normalizeResourceHost(resource.host);
    const template = String(resource.template || '').trim() || '/';
    if (!host || !template.startsWith('/') || template.startsWith('//') || /[\u0000-\u001f]/.test(template)) return '';
    const fullId = String(editionNumber || '').trim();
    const code = fullId.replace(/-/g, '');
    const path = template.replace(/\{id\}/g, encodeURIComponent(fullId)).replace(/\{code\}/g, encodeURIComponent(code));
    try {
        const url = new URL('https://' + host + path);
        return url.protocol === 'https:' && url.hostname === host.split(':')[0] ? url.href : '';
    } catch (error) {
        return '';
    }
}

function openResourceManager() {
    const existing = document.getElementById('md-resource-manager-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'md-resource-manager-overlay';
    overlay.setAttribute('role', 'presentation');
    const dialog = document.createElement('section');
    dialog.className = 'md-resource-dialog';
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    dialog.setAttribute('aria-labelledby', 'md-resource-title');

    const style = document.createElement('style');
    style.id = 'md-resource-manager-style';
    style.textContent = [
        '#md-resource-manager-overlay{position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,.58);display:flex;align-items:center;justify-content:center;padding:14px;box-sizing:border-box;font:14px/1.5 Arial,sans-serif;color:#222;}',
        '#md-resource-manager-overlay *{box-sizing:border-box;}',
        '#md-resource-manager-overlay .md-resource-dialog{width:min(960px,100%);max-height:calc(100vh - 28px);display:flex;flex-direction:column;background:#fff;border-radius:10px;box-shadow:0 12px 48px rgba(0,0,0,.35);overflow:hidden;}',
        '#md-resource-manager-overlay .md-resource-header,#md-resource-manager-overlay .md-resource-footer{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 16px;border-bottom:1px solid #ddd;}',
        '#md-resource-manager-overlay .md-resource-header h2{margin:0;font-size:18px;}',
        '#md-resource-manager-overlay .md-resource-body{padding:14px 16px;overflow:auto;}',
        '#md-resource-manager-overlay .md-resource-note{margin:0 0 14px;color:#666;font-size:12px;}',
        '#md-resource-manager-overlay h3{margin:18px 0 6px;font-size:16px;}',
        '#md-resource-manager-overlay .md-resource-help{margin:0 0 10px;color:#666;font-size:12px;}',
        '#md-resource-manager-overlay .md-resource-row{display:grid;grid-template-columns:minmax(110px,1fr) minmax(150px,1.2fr) minmax(180px,2fr) auto auto;gap:8px;align-items:end;padding:10px 0;border-bottom:1px solid #eee;}',
        '#md-resource-manager-overlay .md-resource-field{display:flex;flex-direction:column;gap:4px;min-width:0;font-size:12px;color:#555;}',
        '#md-resource-manager-overlay input[type=text]{width:100%;min-width:0;height:34px;padding:6px 8px;border:1px solid #bbb;border-radius:5px;font-size:13px;color:#222;}',
        '#md-resource-manager-overlay .md-resource-enabled{display:flex;align-items:center;gap:5px;white-space:nowrap;padding-bottom:8px;font-size:12px;}',
        '#md-resource-manager-overlay button{border:1px solid #aaa;border-radius:5px;background:#f7f7f7;color:#222;padding:7px 11px;cursor:pointer;font-size:13px;}',
        '#md-resource-manager-overlay button:hover{background:#eaeaea;}',
        '#md-resource-manager-overlay .md-resource-delete{color:#a22;}',
        '#md-resource-manager-overlay .md-resource-add{margin-top:10px;}',
        '#md-resource-manager-overlay .md-resource-footer{border-top:1px solid #ddd;border-bottom:0;justify-content:flex-end;flex-wrap:wrap;}',
        '#md-resource-manager-overlay .md-resource-primary{background:#1677d2;color:#fff;border-color:#1677d2;}',
        '#md-resource-manager-overlay .md-resource-primary:hover{background:#0867bd;}',
        '@media(max-width:680px){#md-resource-manager-overlay .md-resource-row{grid-template-columns:1fr 1fr;}#md-resource-manager-overlay .md-resource-row .md-resource-field:nth-child(3){grid-column:1/-1;}#md-resource-manager-overlay .md-resource-row .md-resource-enabled{padding-bottom:0;}#md-resource-manager-overlay .md-resource-delete{justify-self:start;}}'
    ].join('\n');

    const header = document.createElement('header');
    header.className = 'md-resource-header';
    const title = document.createElement('h2');
    title.id = 'md-resource-title';
    title.textContent = '站点与资源管理';
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = '关闭';
    close.addEventListener('click', () => overlay.remove());
    header.append(title, close);

    const body = document.createElement('div');
    body.className = 'md-resource-body';
    const note = document.createElement('p');
    note.className = 'md-resource-note';
    note.textContent = '管理脚本生成的普通跳转链接和种子搜索入口。路径模板支持 {id}（完整番号）与 {code}（去掉连字符的番号）。这里修改的是浏览器打开的链接；截图、JavTrailers 等跨域请求受脚本 @connect 授权限制，JavLibrary 运行域名受 @match 限制，新增或更换这些请求/运行域名需要更新脚本元数据。';
    body.appendChild(note);

    function makeField(labelText, value, placeholder) {
        const label = document.createElement('label');
        label.className = 'md-resource-field';
        const caption = document.createElement('span');
        caption.textContent = labelText;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = value || '';
        input.placeholder = placeholder || '';
        input.autocomplete = 'off';
        label.append(caption, input);
        return { label, input };
    }

    function makeResourceRow(resource, list, type) {
        const row = document.createElement('div');
        row.className = 'md-resource-row';
        row.dataset.resourceId = resource.id || ('custom-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7));
        const name = makeField('名称', resource.name, '网站名称');
        const host = makeField('域名', resource.host, '例如 www.example.com');
        const template = makeField(type === 'torrent' ? '搜索路径模板' : '跳转路径模板', resource.template, '/search/{id}');
        const enabledLabel = document.createElement('label');
        enabledLabel.className = 'md-resource-enabled';
        const enabled = document.createElement('input');
        enabled.type = 'checkbox';
        enabled.checked = resource.enabled !== false;
        const enabledText = document.createElement('span');
        enabledText.textContent = '启用';
        enabledLabel.append(enabled, enabledText);
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'md-resource-delete';
        remove.textContent = '删除';
        remove.addEventListener('click', () => row.remove());
        row.append(name.label, host.label, template.label, enabledLabel, remove);
        list.appendChild(row);
        return row;
    }

    function makeResourceSection(titleText, helpText, type, items) {
        const section = document.createElement('section');
        const heading = document.createElement('h3');
        heading.textContent = titleText;
        const help = document.createElement('p');
        help.className = 'md-resource-help';
        help.textContent = helpText;
        const list = document.createElement('div');
        list.className = 'md-resource-list';
        for (const item of items) makeResourceRow(item, list, type);
        const add = document.createElement('button');
        add.type = 'button';
        add.className = 'md-resource-add';
        add.textContent = type === 'torrent' ? '＋ 添加种子搜索网站' : '＋ 添加跳转资源';
        add.addEventListener('click', () => {
            const row = makeResourceRow({
                id: 'custom-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
                name: '自定义网站',
                host: 'example.com',
                template: '/{id}',
                enabled: true
            }, list, type);
            row.querySelector('input').focus();
        });
        section.append(heading, help, list, add);
        body.appendChild(section);
        return list;
    }

    const config = getResourceConfig();
    const jumpList = makeResourceSection(
        '普通跳转资源',
        '可添加任意通过浏览器打开的站点。域名与路径模板分开填写；不需要请求解析器。',
        'jump',
        config.jumpLinks
    );
    const torrentList = makeResourceSection(
        '种子搜索网站',
        '这些入口只负责打开对应网站的搜索页面，因此可以直接新增、删除或修改域名和搜索模板。',
        'torrent',
        config.torrentSites
    );

    const footer = document.createElement('footer');
    footer.className = 'md-resource-footer';
    const restore = document.createElement('button');
    restore.type = 'button';
    restore.textContent = '恢复脚本内置默认配置';
    restore.addEventListener('click', () => {
        if (!confirm('恢复默认会清除自定义跳转资源，并重置种子搜索网站清单。是否继续？')) return;
        jumpList.replaceChildren();
        torrentList.replaceChildren();
        for (const item of DEFAULT_RESOURCE_CONFIG.jumpLinks) makeResourceRow(item, jumpList, 'jump');
        for (const item of DEFAULT_RESOURCE_CONFIG.torrentSites) makeResourceRow(item, torrentList, 'torrent');
    });
    const cancel = document.createElement('button');
    cancel.type = 'button';
    cancel.textContent = '取消';
    cancel.addEventListener('click', () => overlay.remove());
    const save = document.createElement('button');
    save.type = 'button';
    save.className = 'md-resource-primary';
    save.textContent = '保存并应用';
    save.addEventListener('click', () => {
        function collect(list, type) {
            const result = [];
            for (const row of list.querySelectorAll('.md-resource-row')) {
                const fields = row.querySelectorAll('input');
                const name = fields[0].value.trim();
                const host = normalizeResourceHost(fields[1].value);
                const template = fields[2].value.trim() || '/';
                const enabled = fields[3].checked;
                if (!name || !host) throw new Error('名称和有效域名不能为空。');
                if (!template.startsWith('/') || template.startsWith('//') || /[\u0000-\u001f]/.test(template)) {
                    throw new Error('路径模板必须以 / 开头，不能以 // 开头，也不能包含控制字符。');
                }
                if (type === 'torrent' && !/\{(?:id|code)\}/.test(template)) {
                    throw new Error('种子搜索模板必须包含 {id} 或 {code} 占位符。');
                }
                const testUrl = buildResourceUrl({ host, template, enabled: true }, 'ABC-123');
                if (!testUrl) throw new Error('域名或路径模板无效：' + name);
                result.push({
                    id: row.dataset.resourceId || ('custom-' + Date.now()),
                    name,
                    host,
                    template,
                    enabled
                });
            }
            return result;
        }

        try {
            const nextConfig = {
                jumpLinks: collect(jumpList, 'jump'),
                torrentSites: collect(torrentList, 'torrent')
            };
            GM_setValue(RESOURCE_CONFIG_KEY, nextConfig);
            overlay.remove();
            alert('资源配置已保存，页面将刷新以应用更改。');
            location.reload();
        } catch (error) {
            alert(error.message || '配置无效，请检查后重试。');
        }
    });
    footer.append(restore, cancel, save);
    dialog.append(header, body, footer);
    overlay.append(style, dialog);
    overlay.addEventListener('click', event => {
        if (event.target === overlay) overlay.remove();
    });
    document.body.appendChild(overlay);
    const firstInput = dialog.querySelector('input');
    if (firstInput) firstInput.focus();
}

initializeResourceConfig();

if (typeof GM_registerMenuCommand === 'function') {
    GM_registerMenuCommand('设置 JavTrailers API Token', () => {
        const current = GM_getValue('javTrailersApiToken', '');
        const value = prompt('输入你自己获得的 JavTrailers API Token。留空则清除。', current);
        if (value !== null) GM_setValue('javTrailersApiToken', value.trim());
    });
    GM_registerMenuCommand(`设置视频列表请求并发数（当前：${GM_getValue('mdVideoConcurrency', 4)}）`, () => {
        const current = GM_getValue('mdVideoConcurrency', 4);
        const value = prompt('设置视频列表详情请求并发数（1-8）。数值越低，请求越平缓。', String(current));
        if (value === null) return;
        const limit = Number.parseInt(value, 10);
        if (Number.isInteger(limit) && limit >= 1 && limit <= 8) GM_setValue('mdVideoConcurrency', limit);
        else alert('请输入 1 到 8 之间的整数。');
    });
    GM_registerMenuCommand(GM_getValue('mdEnablePreview', true) ? '关闭视频预览' : '开启视频预览',
        () => GM_setValue('mdEnablePreview', !GM_getValue('mdEnablePreview', true)));
    GM_registerMenuCommand(`设置截图来源（当前：${GM_getValue('mdScreenshotSource', 'both')}）`, () => {
        const current = GM_getValue('mdScreenshotSource', 'both');
        const value = prompt('选择截图来源：\n both = 两个来源依次尝试\n javscreens = 仅 JavScreens\n japanese = 仅 Japanese-Bukkake\n off = 不加载截图', current);
        if (value === null) return;
        const normalized = value.trim().toLowerCase();
        if (['both', 'javscreens', 'japanese', 'off'].includes(normalized)) GM_setValue('mdScreenshotSource', normalized);
        else alert('无效选项，请输入 both、javscreens、japanese 或 off。');
    });
    GM_registerMenuCommand('站点与资源管理', openResourceManager);
}

// Thumbnail
class MiniDriverThumbnail {

    constructor() {
        this.filterKeys = ['minScore', 'minViewer'];
        this.filterConfigs = {'minScore': {'value' : GM_getValue('minScore', 0), 'max': 10},
                                'minViewer': {'value' : GM_getValue('minViewer', 0), 'max': 100}};
        this.videoStats = {};
    }

    execute() {
        let videos = document.getElementsByClassName('videos')[0];
        document.getElementsByClassName('videothumblist')[0].innerHTML = `<div class="videothumblist">
                                                                            <div class="videos"></div>
                                                                        </div>`;
        let pageSelector = document.getElementsByClassName('page_selector')[0];
        this.updatePageContent(videos, pageSelector);
        this.addFilters();
    }

    addFilters() {
        let filters = createElementFromHTML(
            `<td class="mid">
                <div class="filter">
                    显示 <label for="score">评分 &gt; </label>
                    <div class="filterMinValue">0</div>
                        <input type="range" id="minScore" min="0" class="slider">
                </div>
                <div class="filter">
                    <label for="viewers">观看人数 &gt; </label>
                    <div class="filterMinValue">0</div>
                        <input type="range" id="minViewer" min="0" class="slider">
                </div>
            </td>`);
        
        
        let sliders = filters.getElementsByClassName('slider');
        let valueDiv = filters.getElementsByClassName('filterMinValue');

        function round(num) {
            return Math.round(num * 100) / 100;
        }
        function getSliderValue(input, max) {
            return round(100 - input * (100 / max));
        }
        function getConfigValue(input, max) {
            return round(max - input / (100 / max));
        }

        for (let i = 0; i < sliders.length; i++) {
            let config = this.filterConfigs[this.filterKeys[i]];

            sliders[i].value = getSliderValue(config['value'], config['max']);
            valueDiv[i].innerText = config['value'];

            sliders[i].addEventListener('change', () => {
                let updatedConfig = getConfigValue(sliders[i].value, config['max']);
                valueDiv[i].innerText = updatedConfig;
                GM_setValue(this.filterKeys[i], updatedConfig);

                this.applyFilters();
            });
        }

        // Insert filter to the page
        let mode = document.getElementsByClassName('displaymode');
        if (mode.length > 0) {
            let leftMode = mode[0].getElementsByClassName('left');
            if (leftMode.length > 0) {
                insertAfter(filters, leftMode[0]);
            }
        }
    }

    applyFilters() {
        for (let key in this.videoStats) {
            this.applyFilterOn(key);
        }
    }

    applyFilterOn(videoKey) {
        let video = document.getElementById(videoKey);
        if (video) {
            let show = true;
            
            for (let filter of this.filterKeys) {
                let config = GM_getValue(filter, 0);

                if (config > 0) {
                    if (!(filter in this.videoStats[videoKey]) 
                            || !this.videoStats[videoKey][filter] 
                            || Number.isNaN(this.videoStats[videoKey][filter]) 
                            || this.videoStats[videoKey][filter] < config) {
                        show = false;
                        if (!show) {
                            break;
                        }
                    }
                }
            }

            video.style.display = show ? 'inline-block' : 'none';
        }
    }

    async updatePageContent(videos, pageSelector) {
        // Add videos to the page
        let currentVideos = document.getElementsByClassName('videos')[0];
        if (videos && currentVideos) {
            const items = Array.from(videos.children);
            for (const video of items) {
                currentVideos.appendChild(sanitizeImportedNode(video));
                this.updateVideoEvents(video);
            }
            await runWithConcurrency(items, GM_getValue('mdVideoConcurrency', 4), video => this.updateVideoDetail(video));
        }

        // Replace page selector content
        let pageSelectorId = 'pageSelectorThumbnail';
        let showPageSelector = GM_getValue(pageSelectorId, 'none') != 'block' ? 'none' : 'block';
        const currentSelector = document.getElementsByClassName('page_selector')[0];
        if (currentSelector && pageSelector) {
            currentSelector.replaceChildren(...Array.from(pageSelector.childNodes).map(node => sanitizeImportedNode(document.importNode(node, true))));
            currentSelector.id = pageSelectorId;
            currentSelector.style.display = showPageSelector;
        }
    }

    async updateVideoDetail(video) {
        if (video.id.includes('vid_')) {
            let request = {url: `/cn/?v=${video.id.substring(4)}`};
            let response = await xhrFetchWithRetry(request).catch(() => null);
            if (!response) return;
            let responseText = await response.text();
            let videoDetailsDoc = parseHTMLText(responseText);

            // Video date
            let videoDate = '';
            if (videoDetailsDoc.getElementById('video_date')) {
                videoDate = videoDetailsDoc.getElementById('video_date').getElementsByClassName('text')[0].innerText;
            }

            // Video score
            let videoScore = '';
            if (videoDetailsDoc.getElementById('video_review')?.getElementsByClassName('score')[0]) {
                let videoScoreStr = videoDetailsDoc.getElementById('video_review').getElementsByClassName('score')[0].innerText;
                videoScore = videoScoreStr.substring(1, videoScoreStr.length - 1);
                if (!(video.id in this.videoStats)) {
                    this.videoStats[video.id] = {};
                }
                this.videoStats[video.id]['minScore'] = parseFloat(videoScore);
            }

            // Video watched
            let videoWatched = '0';
            if (videoDetailsDoc.getElementById('watched')?.getElementsByTagName('a')[0]) {
                videoWatched = videoDetailsDoc.getElementById('watched').getElementsByTagName('a')[0].innerText;
                if (!(video.id in this.videoStats)) {
                    this.videoStats[video.id] = {};
                }
                this.videoStats[video.id]['minViewer'] = parseFloat(videoWatched);
            }

            const videoDetails = document.createElement('div');
            videoDetails.className = 'thumbnailDetail';
            const date = document.createElement('span');
            date.textContent = videoDate;
            const score = document.createElement('span');
            score.style.color = 'red';
            score.textContent = videoScore;
            const watched = document.createElement('span');
            watched.textContent = `${videoWatched} 人看过`;
            videoDetails.append(date, document.createTextNode('  '), score, document.createElement('br'), watched);
            video.insertBefore(videoDetails, video.getElementsByClassName('toolbar')[0]);

            // Apply filter
            this.applyFilterOn(video.id);
        }
    }

    updateVideoEvents(video) {
        if (video) {
            // Prevent existing listeners https://stackoverflow.com/a/46986927/4214478
            video.addEventListener('mouseout', (event) => {
                event.stopImmediatePropagation();
                video.getElementsByClassName('toolbar')[0].style.display = 'none';
            }, true);
            video.addEventListener('mouseover', (event) => {
                event.stopImmediatePropagation();
                video.getElementsByClassName('toolbar')[0].style.display = 'block';
            }, true); 
        }
    }

    async getNextPage(url) {
        // Update page URL and history
        history.pushState(history.state, window.document.title, url);

        // Fetch next page
        let response = await xhrFetchWithRetry({url: url}).catch(() => null);
        if (!response) return;
        let responseText = await response.text();
        let nextPageDoc = parseHTMLText(responseText);

        // Update page content
        let videos = nextPageDoc.getElementsByClassName('videos')[0];
        let pageSelector = nextPageDoc.getElementsByClassName('page_selector')[0];
        this.updatePageContent(videos, pageSelector);
    }
}

class MiniDriver {
    
    execute() {
        let javUrl = new URL(window.location.href);
        this.javVideoId = javUrl.searchParams.get('v');

        // Video page
        if (this.javVideoId != null) {
            this.addStyle();
            this.setEditionNumber();
            this.updateTitle();
            this.addScreenshot();
            this.addJumpLinks();
            this.addTorrentLinks();
            this.updateReviews();
            this.updateComments();
            if (GM_getValue('mdEnablePreview', true)) this.getPreview();
        }
    }

    addStyle() {
        // left menu
        GM_addStyle(`
            #leftmenu {
                display: none;
                width: 0%;
            }
            #rightcolumn {
                margin-left: 10px;
            }
            /*
            #video_title .post-title:hover {
                text-decoration: underline;
                text-decoration-color: #CCCCCC;
            }
            */
            #video_id .text {
                color: red;
            }
            #torrents > table {
                width:100%;
                text-align: center;
                border: 2px solid grey;
            }
            #torrents tr td + td {
                border-left: 2px solid grey;
            }
            #video_favorite_edit {
                margin-bottom: 20px;
            }
            #torrents {
                margin-bottom: 20px;
            }
            #preview {
                margin-bottom: 20px;
            }
            #preview video {
                max-width: 100%;
                max-height: 80vh;
                display: block;
                margin-right: auto;
            }
            .screenshot {
                cursor: pointer;
                max-width: 25%;
                display: block;
            }
            .clickToCopy {
                cursor: pointer;
            }
        `);
    }

    setEditionNumber() {
        let edition = document.getElementById('video_id').getElementsByClassName('text')[0];
        this.editionNumber = edition.innerText;
    }

    async updateTitle() {
        let videoTitle = document.getElementById('video_title');
        let postTitle = videoTitle.getElementsByClassName('post-title')[0];
        postTitle.innerText = postTitle.getElementsByTagName('a')[0].innerText;

        // Add English title
        if (!window.location.href.includes('/en/')) {
            let request = {url: `/en/?v=${this.javVideoId}`};
            let response = await xhrFetchWithRetry(request).catch(() => null);
            if (!response) return;
            let responseText = await response.text();
            let videoDetailsDoc = parseHTMLText(responseText);
            let englishTitleLink = videoDetailsDoc.getElementById('video_title')
                ?.getElementsByClassName('post-title')[0]
                ?.getElementsByTagName('a')[0];
            if (!englishTitleLink) return;
            let englishTitle = englishTitleLink.innerText;
            postTitle.append(document.createElement('br'), document.createTextNode(englishTitle));
        }
    }

    scrollToTop(element) {
        let distanceToTop = element.getBoundingClientRect().top;
        if (distanceToTop < 0) {

            window.scrollBy(0, distanceToTop);
        }
    }

    screenShotOnclick(element) {
        if (element.style['max-width'] != '100%') {
            element.style['max-width'] = '100%';
        } else {
            element.style['max-width'] = '25%';
        }
        this.scrollToTop(element);
    }

    async addScreenshot() {
        const source = GM_getValue('mdScreenshotSource', 'both');
        if (source === 'off') return;
        const sources = [];
        if (source === 'both' || source === 'javscreens') {
            sources.push(`https://javscreens.com/images/${encodeURIComponent(this.editionNumber)}.jpg`);
        }
        if (source === 'both' || source === 'japanese') {
            const dateText = document.getElementById('video_date')?.getElementsByClassName('text')[0]?.innerText;
            const videoDates = dateText ? dateText.split('-') : [];
            if (videoDates.length >= 2) sources.push(`https://img.japanese-bukkake.net/${encodeURIComponent(videoDates[0])}/${encodeURIComponent(videoDates[1])}/${encodeURIComponent(this.editionNumber)}_s.jpg`);
        }
        for (let url of sources) {
            let img = await this.loadImg(url).catch(() => null);
            if (img && img.naturalHeight > 200) {
                insertBefore(img, document.getElementById('rightcolumn').getElementsByClassName('socialmedia')[0]);
                img.addEventListener('click', () => this.screenShotOnclick(img));
                // Valid screenshot loaded, break the loop
                break;
            }
            removeElementIfPresent(img);
        }
    }

    loadImg(url) {
        return new Promise(function (resolve, reject) {
            GM_xmlhttpRequest({
                method: 'GET',
                responseType: 'blob',
                url: url,
                onload: (result) => {
                    if (result.status >= 200 && result.status < 300) {
                        let img = createElementFromHTML(`<img class="screenshot" title="">`);
                        insertBefore(img, document.getElementById('rightcolumn').getElementsByClassName('socialmedia')[0]);
                        img.src = window.URL.createObjectURL(result.response);
                        
                        img.onload = () => resolve(img);
                        img.onerror = () => reject(img);
                    } else {
                        reject();
                    }
                },
                onerror: reject,
                ontimeout: reject,
                timeout: 10000,
            });
        });
    }

    addJumpLinks() {
        const config = getResourceConfig();
        const enabledLinks = config.jumpLinks.filter(item => item && item.enabled !== false);
        const links = enabledLinks.map(item => ({ item, url: buildResourceUrl(item, this.editionNumber) })).filter(entry => entry.url);
        if (!links.length) return;
        const container = document.createElement('div');
        container.id = 'md-custom-jump-links';
        const table = document.createElement('table');
        const row = table.insertRow();
        const heading = row.insertCell();
        const strong = document.createElement('strong');
        strong.textContent = '跳转:';
        heading.appendChild(strong);
        for (const entry of links) {
            const cell = row.insertCell();
            const link = document.createElement('a');
            link.href = entry.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = entry.item.name;
            link.title = entry.item.host;
            cell.appendChild(link);
        }
        container.appendChild(table);
        const anchor = document.getElementById('video_favorite_edit');
        if (anchor) insertAfter(container, anchor);
    }

    addTorrentLinks() {
        const config = getResourceConfig();
        const enabledSites = config.torrentSites
            .filter(site => site && site.enabled !== false)
            .map(site => ({ site, url: buildResourceUrl(site, this.editionNumber) }))
            .filter(entry => entry.url);
        const torrents = document.createElement('div');
        torrents.id = 'torrents';
        if (!enabledSites.length) {
            torrents.textContent = '没有启用的种子搜索入口，可在油猴菜单「站点与资源管理」中配置。';
        } else {
            const table = document.createElement('table');
            const row = table.insertRow();
            const heading = row.insertCell();
            const strong = document.createElement('strong');
            strong.textContent = '种子:';
            heading.appendChild(strong);
            for (const entry of enabledSites) {
                const cell = row.insertCell();
                const link = document.createElement('a');
                link.href = entry.url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = entry.site.name;
                link.title = entry.site.host;
                cell.appendChild(link);
            }
            torrents.appendChild(table);
        }
        const anchor = document.getElementById('video_favorite_edit');
        if (anchor) insertAfter(torrents, anchor);
    }
    updateReviews() {
        this.addDeferredLoadButton('video_reviews', 'md-load-rating-trigger', '加载评价', 'reviews');
    }

    updateComments() {
        this.addDeferredLoadButton('video_comments', 'md-load-cmt-trigger', '加载评论', 'comments');
    }

    addDeferredLoadButton(containerId, buttonId, label, pageType) {
        const container = document.getElementById(containerId);
        if (!container || document.getElementById(buttonId)) return;
        const button = document.createElement('button');
        button.id = buttonId;
        button.type = 'button';
        button.textContent = label;
        button.style.cssText = 'margin:8px 0;padding:5px 12px;cursor:pointer;';
        button.addEventListener('click', async () => {
            button.disabled = true;
            button.textContent = '正在加载…';
            try {
                Array.from(container.children).forEach(child => {
                    const marker = pageType === 'reviews' ? 'review' : 'comment';
                    if (child.id && child.id.includes(marker)) child.remove();
                });
                const loaded = await this.getNextPage(1, pageType);
                if (loaded) button.remove();
                else throw new Error('Unable to load ' + pageType);
            } catch {
                button.disabled = false;
                button.textContent = label + '（重试）';
            }
        });
        container.appendChild(button);
    }

    async getNextPage(page, pageType) {
        let pageSelectorId = 'page_selector_' + pageType;
        let urlPath = 'video' + pageType;
        let elementsId = 'video_' + pageType;

        // Load more reviews
        let request = {url: `/cn/${urlPath}.php?v=${this.javVideoId}&mode=2&page=${page}`};
        let response = await xhrFetchWithRetry(request).catch(() => null);
        if (!response) return false;
        let responseText = await response.text();
        let doc = parseHTMLText(responseText);

        // Remove the page selector div in current page
        let oldPageSelectorDiv = document.getElementById(pageSelectorId);
        if (oldPageSelectorDiv != null) {
            oldPageSelectorDiv.parentNode.removeChild(oldPageSelectorDiv);
        }

        // Get comments/reviews in the next page
        let elements = doc && doc.getElementById(elementsId);
        if (!elements || !elements.getElementsByClassName('t')[0] || !doc.getElementsByClassName('page_selector')[0]) {
            return false;
        }

        // Set element texts
        Array.from(elements.getElementsByClassName('t')).forEach(element => {
            const commentText = element.getElementsByTagName('textarea')[0]?.innerText ?? '';
            let elementText = parseBBCode(escapeHtml(commentText));
            let elementHtml = createElementFromHTML(`<div>${parseHTMLText(elementText).body.innerHTML}</div>`);
            element.getElementsByClassName('text')[0].replaceWith(this.processUrls(elementHtml));
        });

        // Append elements to the page
        let currentElements = document.getElementById(elementsId);
        if (!currentElements) return false;
        let bottomLine = currentElements.getElementsByClassName('grey')[0];
        Array.from(elements.children).forEach(element => {
            if (element.tagName == 'TABLE' || element.tagName == 'TD') {
                currentElements.insertBefore(element, bottomLine);
            }
        });

        // Append page selector
        let showPageSelector = GM_getValue(pageSelectorId, 'none') != 'block' ? 'none' : 'block';
        let pageSelector = doc.getElementsByClassName('page_selector')[0];
        if (pageSelector) {
            pageSelector.style.display = showPageSelector;
            pageSelector.id = pageSelectorId;
            let as = pageSelector.getElementsByTagName('a');
            for (let a of as) {
                let nextPage = (new URL(a.href, a.href.includes('https') ? undefined : 'https://www.javlibrary.com/')).searchParams.get('page');
                a.removeAttribute('href');
                a.style.cursor = 'pointer';
                a.addEventListener('click', async () => this.getNextPage(nextPage ? parseInt(nextPage) : 1, pageType));
            }
            insertAfter(pageSelector, currentElements);
        }
        return true;
    }



    processUrls(content) {
        Array.from(content.getElementsByTagName('a')).forEach(a => {
            if (a.href.includes('redirect.php?url=')) {
                try {
                    const redirectUrl = new URL(a.href);
                    const target = redirectUrl.searchParams.get('url');
                    if (!target) return;
                    const realUrl = new URL(target, window.location.origin);
                    if (!['http:', 'https:'].includes(realUrl.protocol)) return;
                    realUrl.searchParams.delete('ver');
                    a.href = realUrl.href;
                    a.rel = 'noopener noreferrer';
                    a.target = '_blank';
                } catch {
                    a.removeAttribute('href');
                }
            }
        });
        return content;
    }

    extractContentIdFromPreviewThumbs() {
        try {
            // 1. Find previewthumbs div
            const previewThumbsDiv = document.querySelector('.previewthumbs');
            if (!previewThumbsDiv) {
                
                return null;
            }

            // 2. Get all image URLs from the div
            const divContent = previewThumbsDiv.innerHTML;

            // 3. Extract content ID from image URL pattern
            // Pattern: https://pics.dmm.co.jp/digital/video/{contentId}/{contentId}jp-{number}.jpg
            const pattern = /https:\/\/pics\.dmm\.co\.jp\/digital\/video\/([a-zA-Z0-9]+)\/[a-zA-Z0-9]+jp-\d+\.jpg/g;
            const matches = divContent.match(pattern);

            if (!matches || matches.length === 0) {
                
                return null;
            }

            // 4. Parse content ID from first valid URL
            const firstUrl = matches[0];
            const contentIdMatch = firstUrl.match(/https:\/\/pics\.dmm\.co\.jp\/digital\/video\/([a-zA-Z0-9]+)\//);

            if (!contentIdMatch || contentIdMatch.length < 2) {
                
                return null;
            }

            const contentId = contentIdMatch[1];

            
            return contentId;

        } catch (error) {
            
            return null;
        }
    }

    async extractContentIdFromSearchApi() {
        try {
            // Use search API from test.js reference implementation
            const javId = this.editionNumber;
            if (!/^[a-zA-Z0-9-]+$/.test(javId)) return null;
            const url = `https://search.javtrailers.com/indexes/videos/search?q=${javId}&page=1&sort=releaseDate:desc&hitsPerPage=1`;

            

            const response = await gmFetch({
                url: url,
                timeout: 10000, // 10 second timeout
                headers: GM_getValue('javTrailersApiToken', '')
                    ? { authorization: `Bearer ${GM_getValue('javTrailersApiToken', '')}` }
                    : {}
            });

            if (response.status >= 200 && response.status < 300) {
                const data = JSON.parse(response.responseText);

                // Extract content ID from API response (pattern from test.js)
                if (data.hits && data.hits.length > 0 && data.hits[0].contentId) {
                    const contentId = data.hits[0].contentId;
                    
                    return contentId;
                } else {
                    
                    return null;
                }
            } else {
                
                return null;
            }
        } catch (error) {
            
            return null;
        }
    }


    async extractVideoUrlFromJavTrailers(contentId) {
        try {
            // Fetch the javtrailers page with timeout
            if (!/^[a-zA-Z0-9_-]+$/.test(String(contentId))) return null;
            const url = `https://javtrailers.com/video/${encodeURIComponent(contentId)}`;
            const response = await gmFetch({
                url: url,
                timeout: 10000 // 10 second timeout
            });

            if (response.status >= 200 && response.status < 300) {
                const html = response.responseText;

                // Find the __NUXT_DATA__ script tag
                const nuxtDataMatch = html.match(/<script type="application\/json" id="__NUXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);

                if (nuxtDataMatch && nuxtDataMatch[1]) {
                    try {
                        const nuxtData = JSON.parse(nuxtDataMatch[1]);

                        // The JSON is a complex array where numeric indices reference other positions
                        // We need to find the trailerG reference and then look up the actual value

                        // First, let's try to find the trailerG reference in the array
                        // The structure appears to be: [array with data...]
                        // We need to search through the array for an object containing "trailerG"

                        function findTrailerGReference(arr) {
                            for (let i = 0; i < arr.length; i++) {
                                const item = arr[i];
                                if (typeof item === 'object' && item !== null) {
                                    // Check if this object has trailerG property
                                    if ('trailerG' in item) {
                                        return item.trailerG; // This should be a numeric index
                                    }

                                    // Search recursively in nested objects
                                    if (Array.isArray(item)) {
                                        const result = findTrailerGReference(item);
                                        if (result !== null) return result;
                                    } else if (typeof item === 'object') {
                                        // Search in object values
                                        for (const key in item) {
                                            if (typeof item[key] === 'object' && item[key] !== null) {
                                                if ('trailerG' in item[key]) {
                                                    return item[key].trailerG;
                                                }
                                            } else if (Array.isArray(item[key])) {
                                                const result = findTrailerGReference(item[key]);
                                                if (result !== null) return result;
                                            }
                                        }
                                    }
                                }
                            }
                            return null;
                        }

                        const trailerGIndex = findTrailerGReference(nuxtData);

                        if (trailerGIndex !== null && typeof trailerGIndex === 'number') {
                            // The index should point to the actual URL in the array
                            if (trailerGIndex >= 0 && trailerGIndex < nuxtData.length) {
                                const trailerGUrl = nuxtData[trailerGIndex];
                                if (typeof trailerGUrl === 'string' && trailerGUrl.startsWith('http')) {
                                    
                                    return trailerGUrl;
                                }
                            }
                        }

                        // Alternative approach: search for the URL pattern directly in the JSON string
                        // Look for "trailerG": followed by a number, then find that index in the array
                        const trailerGPattern = /"trailerG"\s*:\s*(\d+)/;
                        const trailerGMatch = nuxtDataMatch[1].match(trailerGPattern);

                        if (trailerGMatch && trailerGMatch[1]) {
                            const index = parseInt(trailerGMatch[1]);
                            if (index >= 0 && index < nuxtData.length) {
                                const trailerGUrl = nuxtData[index];
                                if (typeof trailerGUrl === 'string' && trailerGUrl.startsWith('http')) {
                                    
                                    return trailerGUrl;
                                }
                            }
                        }

                        // Fallback: search for media.javtrailers.com URLs in the entire JSON
                        const mediaUrlPattern = /https:\/\/media\.javtrailers\.com\/[^"]+/g;
                        const mediaUrls = nuxtDataMatch[1].match(mediaUrlPattern);
                        if (mediaUrls && mediaUrls.length > 0) {
                            // Return the first media.javtrailers.com URL
                            
                            return mediaUrls[0];
                        }

                        // Last resort: search for any video URL pattern
                        const videoUrlPattern = /https:\/\/[^"]+\.(mp4|m3u8|webm)[^"]*/gi;
                        const videoUrls = nuxtDataMatch[1].match(videoUrlPattern);
                        if (videoUrls && videoUrls.length > 0) {
                            // Prefer media.javtrailers.com URLs
                            const mediaUrl = videoUrls.find(url => url.includes('media.javtrailers.com'));
                            if (mediaUrl) {
                                
                                return mediaUrl;
                            }
                            // Otherwise return the first video URL
                            
                            return videoUrls[0];
                        }

                    } catch (parseError) {
                        

                        // Fallback: try to find trailerG URL in the entire HTML
                        const trailerGUrlPattern = /"trailerG"\s*:\s*"([^"]+)"/;
                        const trailerGUrlMatch = html.match(trailerGUrlPattern);
                        if (trailerGUrlMatch && trailerGUrlMatch[1]) {
                            
                            return trailerGUrlMatch[1];
                        }
                    }
                }

                // Alternative: try to find video URLs in the entire HTML
                const videoUrlPattern = /https:\/\/[^"]+\.(mp4|m3u8|webm)[^"]*/gi;
                const videoUrls = html.match(videoUrlPattern);
                if (videoUrls && videoUrls.length > 0) {
                    // Prefer media.javtrailers.com URLs
                    const mediaUrl = videoUrls.find(url => url.includes('media.javtrailers.com'));
                    if (mediaUrl) {
                        
                        return mediaUrl;
                    }
                    // Otherwise return the first video URL
                    
                    return videoUrls[0];
                }

                
                return null;
            } else {
                
                return null;
            }
        } catch (error) {
            
            return null;
        }
    }

    async getPreview() {
        // Helper function to create video preview
        const createVideoPreview = (videoUrl) => {
            // Create video element
            const videoElement = document.createElement('video');
            let parsedVideoUrl;
            try { parsedVideoUrl = new URL(videoUrl); } catch { return; }
            if (parsedVideoUrl.protocol !== 'https:' || parsedVideoUrl.username || parsedVideoUrl.password) return;
            videoElement.src = parsedVideoUrl.href;
            videoElement.controls = true;
            videoElement.volume = 0.5;

            // Create preview container
            const previewContainer = document.createElement('div');
            previewContainer.id = 'preview';
            previewContainer.appendChild(videoElement);

            // Insert after torrents section
            insertAfter(previewContainer, document.getElementById('torrents'));

            
        };

        // 1. Try primary method (extract from previewthumbs div)
        let contentId = this.extractContentIdFromPreviewThumbs();

        // 2. Try to get video with extracted content ID
        if (contentId) {
            const videoUrl = await this.extractVideoUrlFromJavTrailers(contentId);
            if (videoUrl) {
                // Success - create video preview
                createVideoPreview(videoUrl);
                return;
            }
            // Video extraction failed - content ID is invalid
            
        } else {
            
        }

        // 3. Try search API method
        contentId = await this.extractContentIdFromSearchApi();
        if (contentId) {
            const videoUrl = await this.extractVideoUrlFromJavTrailers(contentId);
            if (videoUrl) {
                // Success - create video preview
                createVideoPreview(videoUrl);
                return;
            }
            // Video extraction failed - content ID is invalid
            
        }

        // 4. All methods failed
        
    }


}

function blockAds() {
    // Not open ad url
    // https://stackoverflow.com/a/9172526
    // https://stackoverflow.com/a/4658196

    let adSites = ['yuanmengbi', 'zhaijv', 'henanlvyi'];

    let scope = (typeof unsafeWindow === "undefined") ? window : unsafeWindow;
    scope.open = function(open) {
        return function(url, name, features) {
            if (typeof url === 'string' && adSites.some(site => url.includes(site))) {
                return;
            }
            return open.call(scope, url, name, features);
        };
    }(scope.open);
}

// Block ad
blockAds();

// Adult check
setCookie('over18', 18);

// Style change
addStyle();
if (!window.location.href.includes('.php')
        && (window.location.href.includes('?v=') || window.location.href.includes('&v='))) {
    new MiniDriver().execute();
} else {
    new MiniDriverThumbnail().execute();
}
