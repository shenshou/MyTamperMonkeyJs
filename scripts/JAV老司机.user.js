// ==UserScript==
// @name         JAV老司机
// @namespace    https://sleazyfork.org/zh-CN/users/25794
// @version      3.8.17
// @downloadURL  https://raw.githubusercontent.com/shenshou/MyTamperMonkeyJs/main/scripts/JAV%E8%80%81%E5%8F%B8%E6%9C%BA.user.js
// @updateURL    https://raw.githubusercontent.com/shenshou/MyTamperMonkeyJs/main/scripts/JAV%E8%80%81%E5%8F%B8%E6%9C%BA.user.js
// @supportURL   https://sleazyfork.org/zh-CN/scripts/25781/feedback
// @source       https://github.com/shenshou/MyTamperMonkeyJs
// @description  JAV老司机多站点增强、影片信息补充、高清预览与多资源站磁力搜索。
// @author       MyTamperMonkeyJs
// @require      https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js
// @include      *://*javlibrary.com/*
// @include      *://*javlib.com/*
// @include      *://*r86m.com/*
// @include      *://*s87n.com/*
// @include      *://*javbus.com/*
// @include      *://www.*bus*/*
// @include      *://www.*javsee*/*
// @include      *://www.*seejav*/*
// @include      *://*onejav.com/*
// @include      *://*avsox.*/*
// @include      *://*jav321.com/video/*
// @include      *://*javdb*.com/*
// @include      *://*javstore.*/*
// @include      *://*avmoo.*/*
// @include      *://tellme.pw/avmoo*
// @include      *://www.*dmm*/*
// @run-at       document-idle
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_notification
// @grant        GM_setClipboard
// @grant        GM_registerMenuCommand
// @grant        GM_info
// @grant        GM_openInTab
// @connect      *
// @copyright    hobby 2016-12-18
// @license      GPL-3.0
// @compatible   chrome V52+ & Tampermonkey
// ==/UserScript==
/* jshint -W097 */
(function () {
    'use strict';
    const EMPTY_IMAGE_DATA = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAB4CAMAAABsOSjPAAAAn1BMVEUAAAD/lgD/x3f/zoj/nRH/3Kr/+e7/sD//68z/1Zj/qzP/skT/uVX/9eX/pCL/oh3/wGb/8d3/4LL/5Lv/2aL/tUv/kAD/0o//9uj/v2L/mQn//vv//Pf/rjf/+vL/1pn/2pT/mAX/kwD/+/X/9OH/4rb/qzD/qSX/mAH/6sn/6cL/26f/y4D/nxr/vV7/uU//wnH/7tb/1YX/wEL/nypWdfcGAAAAAXRSTlMAQObYZgAABOdJREFUeNrs2F1TgkAYhmGeRMRWLbDlS5BAUPysqf7/b6sYt600dQ8a3nW4T3Teo2uWHRYw2tquMOiU5mhDl64ADR36jdZhsVv0X7XoFn2iFt2iT9Si/wG93AxY73Q8fLAooW2GizI7MRm0j4tLCiJoBTPyN4sE2s6h0o4EmkMprySAXmaK6CcC6A0UG1nNowdQLFo2j2aQmTxMKpyrbB7dk5rd54VfLXAmlxI6NOqKrUZocygOG43QXEycSB90KCZTUx90Mvk6bvRBV+P95F6jPY1RUQ9SrW55uPOdqR3id3kUEUYDkZkdmu8da731KrLoI3mPxkfDV486Ovthrps800aPUrs7l2ZR6uV00XPrc2GZMMtWC7Lo26Aez7gwyyxGFJ0MxWHOhVlmlW7pugE1dL03hPpl/y/wA2KfxX6gk++62cSoixkShxba9fuywjgsfgKwHZNCHyuYfVtvjjqfOHqdSWHMsG8XU0Z3I6Av98ZXi5vOR5uNQxDtVoBQzzhk+f63Sw+9juQenjKiz9Pj/oNsnQ4qYeNpZ0H1JYBBsWzVPPoZim2L5tElFOsRuOXFc6iVEkAbXSiVTCigjRAKmTaNE/G9nfNtbRsGwnjudBKW5Gk2ZtCtsJcb7N2+/5ebHv1JXROEkkFxih6IkSr57ufrnaQ2Ia93UP/4c5pt3Ar16dvfE509XpT/Hb62FX593852YHp9+dLWz3MfTfc686cQbmpAD+iGBvSAbmhAD+iGBvSAbmhAD+iGBvSAbuhjoDdKErYPmDSBttISWRvzhJI899m1tDShFRW5B6AnomBqSzXn3fWWANPchDbMMxF74segq3khf/h3X3g3b+Ek02V3aUFX+2QuD2l9e6vFH35VimjaQaPTr7mVHtW+XB6TAXRO5uVgRP8fNPdCM81WyCsp0dOeiBaDGY4o28GgqB00C7l8s5RhHx8iUFK4BW0dkdMpoyY493E4TJ5ydFUgCoFUL/RMQkViriXKGKgIS26pN2ht4a1Az7WkpZg5FuIGs8XBlrocp2uC59LNsv3QlO/2uH9DgwEINws7kmSdWWqZAE7jQRSMlGGPJULzgnv0EVqn1W9B6WP2CqcuuaJkZioOSN8BHVZHHoZtZIELXEL8cQ7JQrIiVXgPfXGYBCOeJKWGOmYEoANHpUBbuPKANrUFCy6aVWkJNdIPzYBzIArx4hBPQJucDj72HYVdduThtMXQpsjF4SVX0RFaJ9LqJLl0FTqatQgDPNdlowNaXyPtk5EKyPl2kzyuggdBytj96pGjKiTLFdqRugFt3kFzju+a/Sm0MnTOvP5IAzVlAeotxF6YLlYigaDAHfh8gpw8rhU6Q0U5pIdGKekMvd2ABqCCWcYMC9S5ACAxVS38diEaR1kqBwoGcImvrAAbUC7J2ny/eVtAgw1yZUjfgjZCZXE3lOUL9BxdrVIdNKEnKuIYX1egLZy4sphMBq0ggAB13bprOCu1zwsWCqORHmiXM8hSn9HCZ/aspdC000Nx1npZGVXFKl0AwmwvVuU5a4lcXgOqlLqy8ARUZnUcgnjXMdcjiI4ty7q4W9kWHjXx2oDul+rdiU/yR4C28SV9B5SzQJtr0nfoLNDlIOFNz9zTQKfi031TzwN9hwb0gG5oQA/oDxR9iq80ehI9PfQT6amhh4Y+k/4BYXA+w/0JM4sAAAAASUVORK5CYII=';
    const JAVDB_ITEM_SELECTOR = '.movie-list.v.cols-4.vcols-8 .item, .movie-list.v.cols-4.vcols-5 .item, .movie-list.h.cols-4.vcols-8 .item, .movie-list.h.cols-4.vcols-5 .item';
    const BTSOW_DOMAIN = 'btsow.motorcycles';
    const JAVDB_DOMAIN = 'javdb368.com';
    const TORRENTKITTY_DOMAIN = 'www.torrentkitty.one';
    const MMTV_DOMAIN = '7mmtv.sx';

    const SITE_CONFIG_KEY = 'javOldDriver_siteConfig';
    const DEFAULT_SITE_CONFIG = [{"id":"javlib","name":"JavLibrary","host":"www.javlibrary.com","template":"/cn/vl_searchbyid.php?keyword={id}","groups":["jump"],"enabled":true},{"id":"javbus","name":"JavBus","host":"www.javbus.com","template":"/{id}","groups":["jump"],"enabled":true},{"id":"avsox","name":"AVSOX","host":"avsox.click","template":"/cn/search/{id}","groups":["jump"],"enabled":true},{"id":"onejav","name":"OneJAV","host":"onejav.com","template":"/search/{code}","groups":["jump"],"enabled":true},{"id":"jav321","name":"JAV321","host":"www.jav321.com","template":"/search","groups":["jump"],"enabled":true,"dynamic":true},{"id":"javstore","name":"JavStore","host":"javstore.net","template":"/search/{id}.html","groups":["jump"],"enabled":true,"dynamic":true},{"id":"missav","name":"MissAV","host":"missav.com","template":"/cn/{id}","groups":["preview"],"enabled":true},{"id":"mmtv","name":"7mmtv","host":"7mmtv.sx","template":"/zh/censored_search/all/{id}/1.html","groups":["preview"],"enabled":true},{"id":"supjav","name":"SupJav","host":"supjav.com","template":"/zh/?s={id}","groups":["preview"],"enabled":true},{"id":"njav","name":"NJAV","host":"njav.tv","template":"/zh/search?keyword={id}","groups":["preview"],"enabled":true}];
    const LEGACY_SITE_KEYS = {javlib_url:'javlib',javbus_url:'javbus',avsox_url:'avsox',onejav_url:'onejav',jav321_url:'jav321',javstore_url:'javstore',missav_url:'missav',mmtv_url:'mmtv',supjav_url:'supjav',njav_url:'njav'};
    function normalizeSiteHost(value) {
        const host=String(value||'').trim().replace(/^https?:\/\//i,'').split('/')[0];
        if(!/^[a-z0-9.-]+(?::[0-9]{1,5})?$/i.test(host)||host.includes('..')) return '';
        return host.toLowerCase();
    }
    function readSiteConfig() {
        const saved=GM_getValue(SITE_CONFIG_KEY,undefined);
        if(Array.isArray(saved)) return saved.map(site=>({...site,host:normalizeSiteHost(site.host)})).filter(site=>site.id&&site.name&&site.host);
        return DEFAULT_SITE_CONFIG.map(site=>{
            const legacyKey=Object.keys(LEGACY_SITE_KEYS).find(key=>LEGACY_SITE_KEYS[key]===site.id);
            const legacyHost=legacyKey?GM_getValue(legacyKey,site.host):site.host;
            return {...site,host:normalizeSiteHost(legacyHost)||site.host};
        });
    }
    function escapeSiteHtml(value) {
        return String(value==null?'':value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    }
    function buildSiteUrl(siteOrId, avid, templateOverride) {
        const site=typeof siteOrId==='string'?readSiteConfig().find(item=>item.id===siteOrId):siteOrId;
        if(!site||!site.enabled||!site.host) return '';
        const full=String(avid||'').trim();
        const code=site.id==='onejav'?full.replace(/-|FC2|PPV/g,''):full.replace(/-/g,'');
        const path=String(templateOverride!==undefined?templateOverride:(site.template||'')).trim()||'/';
        if(!path.startsWith('/')||path.startsWith('//')||/[\u0000-\u001f]/.test(path)) return '';
        const expanded=path.replace(/\{(id|code)\}/g,(_,key)=>encodeURIComponent(key==='code'?code:full));
        try {
            const url=new URL('https://'+site.host+expanded);
            if(url.protocol!=='https:'||url.hostname!==site.host.split(':')[0]) return '';
            return url.href;
        } catch(error) { return ''; }
    }
    function isCurrentConfiguredSite(site) {
        if(!site) return false;
        const canonical=value=>String(value||'').toLowerCase().replace(/^www\./,'').split(':')[0];
        if(canonical(site.host)===canonical(location.hostname)) return true;
        const title=document.title||'';
        const titleMatchers={
            javlib:/JAVLibrary/i,javbus:/JavBus/i,avsox:/AVSOX|AVMOO/i,onejav:/OneJAV/i,
            jav321:/JAV321/i,javstore:/JavStore/i,missav:/MissAV/i,mmtv:/7mmtv|MMTV/i,
            supjav:/SupJav/i,njav:/NJAV/i
        };
        return !!(titleMatchers[site.id]&&titleMatchers[site.id].test(title));
    }
    function isSiteEnabled(id, group) {
        const site=readSiteConfig().find(item=>item.id===id);
        return !!(site&&site.enabled&&!isCurrentConfiguredSite(site)&&Array.isArray(site.groups)&&site.groups.includes(group));
    }
    function renderSiteLinks(avid, group) {
        return readSiteConfig().filter(site=>site.enabled&&!site.dynamic&&!isCurrentConfiguredSite(site)&&Array.isArray(site.groups)&&site.groups.includes(group))
            .map(site=>{const url=buildSiteUrl(site,avid);return url?'<a href="'+escapeSiteHtml(url)+'" target="_blank" rel="noopener noreferrer" title="'+escapeSiteHtml(site.name)+'">'+escapeSiteHtml(site.name)+'&nbsp;</a>':'';}).join('');
    }
    const MAGNET_SOURCES = [
        {id:'javdb', label:'JavDB', nameKey:'javdb_magnet_name', domainKey:'javdb_url', enabledKey:'javdb_magnet_enabled', templateKey:'javdb_search_template', defaultName:'JavDB', defaultDomain:JAVDB_DOMAIN, defaultTemplate:'/search?f=download&q={query}'},
        {id:'btsow', label:'BTSOW', nameKey:'btsow_magnet_name', domainKey:'btsow_url', enabledKey:'btsow_magnet_enabled', templateKey:'btsow_search_template', defaultName:'BTSOW', defaultDomain:BTSOW_DOMAIN, defaultTemplate:'/search/{query}'},
        {id:'btdig', label:'BTDig', nameKey:'btdig_magnet_name', domainKey:'btdig_url', enabledKey:'btdig_magnet_enabled', templateKey:'btdig_search_template', defaultName:'BTDig', defaultDomain:'www.btdig.com', defaultTemplate:'/search?q={query}'},
        {id:'nyaa', label:'Nyaa', nameKey:'nyaa_magnet_name', domainKey:'nyaa_url', enabledKey:'nyaa_magnet_enabled', templateKey:'nyaa_search_template', defaultName:'Nyaa', defaultDomain:'sukebei.nyaa.si', defaultTemplate:'/?f=0&c=0_0&q={query}'},
        {id:'torrentkitty', label:'TorrentKitty', nameKey:'torrentkitty_magnet_name', domainKey:'torrentkitty_url', enabledKey:'torrentkitty_magnet_enabled', templateKey:'torrentkitty_search_template', defaultName:'TorrentKitty', defaultDomain:TORRENTKITTY_DOMAIN, defaultTemplate:'/search/{query}'}
    ];
    function magnetSourceHost(source) {
        return normalizeSiteHost(GM_getValue(source.domainKey,source.defaultDomain)||source.defaultDomain);
    }
    function magnetSourceName(source) {
        return String(GM_getValue(source.nameKey,source.defaultName)||source.defaultName).trim();
    }
    function magnetSourceTemplate(source) {
        return String(GM_getValue(source.templateKey,source.defaultTemplate)||'').trim();
    }
    function buildMagnetSearchUrl(sourceId, keyword) {
        const source=MAGNET_SOURCES.find(item=>item.id===sourceId);
        if(!source) return '';
        const host=magnetSourceHost(source),template=magnetSourceTemplate(source);
        if(!host||!template||!template.startsWith('/')||template.startsWith('//')||!template.includes('{query}')||/[\u0000-\u001f]/.test(template)) return '';
        try {
            const url=new URL('https://'+host+template.replace(/\{query\}/g,encodeURIComponent(String(keyword||''))));
            return url.protocol==='https:'&&url.hostname===host.split(':')[0]?url.href:'';
        } catch(error) { return ''; }
    }
    function enabledMagnetSources() {
        return MAGNET_SOURCES.filter(source=>GM_getValue(source.enabledKey,true))
            .map(magnetSourceHost).filter(Boolean);
    }
    function magnetSourceLabel(host) {
        const value=String(host||'').toLowerCase();
        const source=MAGNET_SOURCES.find(item=>magnetSourceHost(item).toLowerCase()===value);
        return source?magnetSourceName(source):(host||'未知来源');
    }

    function bindTampermonkeyOpenLinks(root) {
        if (!root) return;
        root.querySelectorAll('a[href]').forEach(link => {
            if (link.dataset.tmOpenBound === '1') return;
            link.dataset.tmOpenBound = '1';
            link.addEventListener('click', event => {
                if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
                const href = link.href;
                let protocol;
                try { protocol = new URL(href, location.href).protocol; } catch (error) { return; }
                if (protocol !== 'http:' && protocol !== 'https:') return;
                event.preventDefault();
                GM_openInTab(href, { active: true, insert: true, setParent: true });
            });
        });
    }

    // 瀑布流状态：1：开启、0：关闭
    let waterfallScrollStatus = GM_getValue('scroll_status', 1);
    // 当前网页域名
    let domain = location.host;

    /**
     * 多线程异步队列 依赖 jQuery 1.8+
     * @param {Number} n 正整数, 线程数量
     */
    function Queue(n) {
        n = parseInt(n, 10);
        return new Queue.prototype.init((n && n > 0) ? n : 1)
    }

    Queue.prototype = {
        init: function (n) {
            this.threads = [];
            this.taskList = [];
            while (n--) {
                this.threads.push(new this.Thread)
            }
        },
        /**
         * @param {Function} callback promise对象done时的回调函数，它的返回值必须是一个promise对象
         */
        push: function (callback) {
            if (typeof callback !== 'function') return;
            var index = this.indexOfIdle();
            if (index != -1) {
                this.threads[index].idle(callback);
            } else {
                this.taskList.push(callback);
                for (var i = 0, l = this.threads.length; i < l; i++) {
                    ((thread, self, id) => {
                        thread.idle(() => {
                            if (self.taskList.length > 0) {
                                let promise = self.taskList.shift()(); // 正确的返回值应该是一个promise对象
                                return promise.promise ? promise : $.Deferred().resolve().promise();
                            } else {
                                return $.Deferred().resolve().promise();
                            }
                        })
                    })(this.threads[i], this, i);

                }
            }
        },
        indexOfIdle: function () {
            var threads = this.threads,
                thread = null,
                index = -1;
            for (var i = 0, l = threads.length; i < l; i++) {
                thread = threads[i];
                if (thread.promise.state() === 'resolved') {
                    index = i;
                    break;
                }
            }
            return index;
        },
        Thread: function () {
            this.promise = $.Deferred().resolve().promise();
            this.idle = (callback) => {
                this.promise = this.promise.then(callback)
            }
        }
    };
    Queue.prototype.init.prototype = Queue.prototype;

    /**
     * 公用类
     */
    class Common {

        static init() {
            if(GM_getValue(SITE_CONFIG_KEY,undefined)===undefined) {
                GM_setValue(SITE_CONFIG_KEY,readSiteConfig());
                for(const legacyKey of Object.keys(LEGACY_SITE_KEYS)) GM_deleteValue(legacyKey);
            }
            for(const source of MAGNET_SOURCES) {
                if(GM_getValue(source.domainKey,undefined)===undefined)GM_setValue(source.domainKey,source.defaultDomain);
                if(GM_getValue(source.enabledKey,undefined)===undefined)GM_setValue(source.enabledKey,true);
                if(GM_getValue(source.nameKey,undefined)===undefined)GM_setValue(source.nameKey,source.defaultName);
                if(GM_getValue(source.templateKey,undefined)===undefined)GM_setValue(source.templateKey,source.defaultTemplate);
            }
            GM_setValue('javOldDriver_version',GM_info.script.version);
            GM_registerMenuCommand('设置',()=>Common.openSystemConfig());
        }
        static openSystemConfig() {
            const existing = document.getElementById('jav-old-driver-settings-overlay');
            if (existing) existing.remove();

            const overlay = document.createElement('div');
            overlay.id = 'jav-old-driver-settings-overlay';
            const dialog = document.createElement('section');
            dialog.className = 'jod-settings-dialog';
            dialog.setAttribute('role', 'dialog');
            dialog.setAttribute('aria-modal', 'true');
            dialog.setAttribute('aria-labelledby', 'jod-settings-title');

            const style = document.createElement('style');
            style.textContent = [
                '#jav-old-driver-settings-overlay{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;background:rgba(15,23,42,.62);font:14px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;color:#1f2937;}',
                '#jav-old-driver-settings-overlay *{box-sizing:border-box;}',
                '#jav-old-driver-settings-overlay .jod-settings-dialog{display:flex;flex-direction:column;width:min(980px,100%);max-height:calc(100vh - 32px);overflow:hidden;border:1px solid rgba(148,163,184,.28);border-radius:14px;background:#fff;box-shadow:0 24px 70px rgba(0,0,0,.32);}',
                '#jav-old-driver-settings-overlay .jod-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:17px 20px;border-bottom:1px solid #e5e7eb;background:#fff;}',
                '#jav-old-driver-settings-overlay .jod-title{margin:0;font-size:18px;font-weight:650;letter-spacing:.2px;color:#111827;}',
                '#jav-old-driver-settings-overlay .jod-subtitle{margin:3px 0 0;color:#6b7280;font-size:12px;}',
                '#jav-old-driver-settings-overlay .jod-body{min-height:0;padding:18px 20px;overflow:auto;background:#f8fafc;}',
                '#jav-old-driver-settings-overlay .jod-note{margin:0 0 16px;padding:10px 12px;border:1px solid #dbeafe;border-radius:8px;background:#eff6ff;color:#475569;font-size:12px;}',
                '#jav-old-driver-settings-overlay .jod-section{margin:0 0 18px;padding:15px 16px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;}',
                '#jav-old-driver-settings-overlay .jod-section:last-child{margin-bottom:0;}',
                '#jav-old-driver-settings-overlay .jod-section-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:5px;}',
                '#jav-old-driver-settings-overlay h3{margin:0;color:#111827;font-size:15px;font-weight:650;}',
                '#jav-old-driver-settings-overlay .jod-help{margin:4px 0 12px;color:#6b7280;font-size:12px;}',
                '#jav-old-driver-settings-overlay .jod-row{display:grid;grid-template-columns:minmax(110px,1fr) minmax(150px,1.2fr) minmax(180px,2fr) auto;gap:10px;align-items:end;padding:11px 0;border-top:1px solid #f1f5f9;}',
                '#jav-old-driver-settings-overlay .jod-fields{display:contents;}',
                '#jav-old-driver-settings-overlay .jod-field{display:flex;min-width:0;flex-direction:column;gap:5px;color:#4b5563;font-size:12px;}',
                '#jav-old-driver-settings-overlay input[type=text]{width:100%;min-width:0;height:36px;padding:7px 9px;border:1px solid #d1d5db;border-radius:7px;outline:none;background:#fff;color:#111827;font:13px inherit;}',
                '#jav-old-driver-settings-overlay input[type=text]:focus{border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.13);}',
                '#jav-old-driver-settings-overlay .jod-flags{display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;min-height:36px;padding-bottom:2px;}',
                '#jav-old-driver-settings-overlay .jod-check{display:inline-flex;align-items:center;gap:6px;white-space:nowrap;color:#4b5563;font-size:12px;}',
                '#jav-old-driver-settings-overlay input[type=checkbox]{width:15px;height:15px;margin:0;accent-color:#2563eb;}',
                '#jav-old-driver-settings-overlay button{min-height:34px;padding:7px 11px;border:1px solid #d1d5db;border-radius:7px;background:#fff;color:#374151;font:600 12px inherit;cursor:pointer;transition:background .15s,border-color .15s;}',
                '#jav-old-driver-settings-overlay button:hover{border-color:#9ca3af;background:#f3f4f6;}',
                '#jav-old-driver-settings-overlay button:focus-visible{outline:3px solid rgba(59,130,246,.28);outline-offset:1px;}',
                '#jav-old-driver-settings-overlay .jod-danger{color:#b91c1c;}',
                '#jav-old-driver-settings-overlay .jod-add{margin-top:10px;border-style:dashed;color:#2563eb;}',
                '#jav-old-driver-settings-overlay .jod-muted{color:#9ca3af;font-size:11px;}',
                '#jav-old-driver-settings-overlay .jod-setting-line{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:9px 0;border-top:1px solid #f1f5f9;color:#374151;font-size:13px;}',
                '#jav-old-driver-settings-overlay .jod-setting-line:first-of-type{margin-top:10px;}',
                '#jav-old-driver-settings-overlay .jod-notice{display:none;margin:0 0 14px;padding:10px 12px;border:1px solid #fecaca;border-radius:8px;background:#fef2f2;color:#991b1b;font-size:13px;}',
                '#jav-old-driver-settings-overlay .jod-notice.is-visible{display:block;}',
                '#jav-old-driver-settings-overlay .jod-footer{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:13px 20px;border-top:1px solid #e5e7eb;background:#fff;}',
                '#jav-old-driver-settings-overlay .jod-footer-actions{display:flex;gap:8px;margin-left:auto;}',
                '#jav-old-driver-settings-overlay .jod-primary{border-color:#2563eb;background:#2563eb;color:#fff;}',
                '#jav-old-driver-settings-overlay .jod-primary:hover{border-color:#1d4ed8;background:#1d4ed8;}',
                '#jav-old-driver-settings-overlay .jod-close{width:34px;height:34px;padding:0;font-size:20px;line-height:1;}',
                '@media(max-width:700px){#jav-old-driver-settings-overlay{padding:8px;}#jav-old-driver-settings-overlay .jod-settings-dialog{max-height:calc(100vh - 16px);border-radius:10px;}#jav-old-driver-settings-overlay .jod-header,#jav-old-driver-settings-overlay .jod-footer{padding:12px 14px;}#jav-old-driver-settings-overlay .jod-body{padding:12px;}#jav-old-driver-settings-overlay .jod-section{padding:12px;}#jav-old-driver-settings-overlay .jod-row{grid-template-columns:1fr 1fr;gap:8px;}#jav-old-driver-settings-overlay .jod-row .jod-field:nth-child(3){grid-column:1/-1;}#jav-old-driver-settings-overlay .jod-flags{grid-column:1/-1;}#jav-old-driver-settings-overlay .jod-row>.jod-danger{justify-self:start;}#jav-old-driver-settings-overlay .jod-footer{align-items:stretch;flex-wrap:wrap;}#jav-old-driver-settings-overlay .jod-footer-actions{width:100%;}#jav-old-driver-settings-overlay .jod-footer-actions button{flex:1;}}'
            ].join('\n');

            const header = document.createElement('header');
            header.className = 'jod-header';
            const headingWrap = document.createElement('div');
            const title = document.createElement('h2');
            title.id = 'jod-settings-title';
            title.className = 'jod-title';
            title.textContent = 'JAV老司机设置';
            const subtitle = document.createElement('p');
            subtitle.className = 'jod-subtitle';
            subtitle.textContent = '统一管理资源站点、磁力搜索来源与脚本显示选项';
            headingWrap.append(title, subtitle);
            const close = document.createElement('button');
            close.type = 'button';
            close.className = 'jod-close';
            close.setAttribute('aria-label', '关闭设置');
            close.textContent = '×';
            header.append(headingWrap, close);

            const body = document.createElement('div');
            body.className = 'jod-body';
            const notice = document.createElement('div');
            notice.className = 'jod-notice';
            notice.setAttribute('role', 'alert');
            body.appendChild(notice);
            const note = document.createElement('p');
            note.className = 'jod-note';
            note.textContent = '配置仅影响脚本生成的跳转入口和页面功能。域名填写主机名，不要填写协议或路径；路径模板支持对应的占位符。';
            body.appendChild(note);

            const showError = message => {
                notice.textContent = message;
                notice.classList.add('is-visible');
                body.scrollTop = 0;
            };
            const makeInput = (value, placeholder, labelText) => {
                const label = document.createElement('label');
                label.className = 'jod-field';
                const caption = document.createElement('span');
                caption.textContent = labelText;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = value || '';
                input.placeholder = placeholder || '';
                input.autocomplete = 'off';
                label.append(caption, input);
                return { label, input };
            };
            const makeCheck = (checked, labelText) => {
                const label = document.createElement('label');
                label.className = 'jod-check';
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.checked = !!checked;
                label.append(input, document.createTextNode(labelText));
                return { label, input };
            };
            const makeSection = (titleText, helpText) => {
                const section = document.createElement('section');
                section.className = 'jod-section';
                const heading = document.createElement('h3');
                heading.textContent = titleText;
                const help = document.createElement('p');
                help.className = 'jod-help';
                help.textContent = helpText;
                section.append(heading, help);
                body.appendChild(section);
                return section;
            };

            const siteSection = makeSection(
                '统一资源站跳转配置',
                '修改、新增或删除后会应用到对应的全站跳转入口。{id} 表示完整番号，{code} 表示去掉连字符的番号；路径模板留空时使用站点首页。'
            );
            const siteList = document.createElement('div');
            siteSection.appendChild(siteList);
            const siteRows = [];
            const makeSiteRow = site => {
                const row = document.createElement('div');
                row.className = 'jod-row';
                row.dataset.siteId = site.id || '';
                const titleField = makeInput(site.name, '站点名称', '站点名称');
                const hostField = makeInput(site.host, '例如 www.example.com', '域名');
                const templateField = makeInput(site.template, '例如 /search/{id}', 'URL 路径模板');
                const flags = document.createElement('div');
                flags.className = 'jod-flags';
                const enabled = makeCheck(site.enabled !== false, '启用');
                const jump = makeCheck(!!site.dynamic || (site.groups || []).includes('jump'), 'JAV 跳转');
                const preview = makeCheck(!site.dynamic && (site.groups || []).includes('preview'), '在线预览');
                if (site.dynamic) {
                    jump.input.disabled = true;
                    preview.input.disabled = true;
                }
                flags.append(enabled.label, jump.label, preview.label);
                if (site.dynamic) {
                    const hint = document.createElement('span');
                    hint.className = 'jod-muted';
                    hint.textContent = '专用搜索流程';
                    flags.appendChild(hint);
                }
                const remove = document.createElement('button');
                remove.type = 'button';
                remove.className = 'jod-danger';
                remove.textContent = '删除';
                remove.addEventListener('click', () => row.remove());
                row.append(titleField.label, hostField.label, templateField.label, flags, remove);
                siteList.appendChild(row);
                const record = {
                    row,
                    title: titleField.input,
                    host: hostField.input,
                    template: templateField.input,
                    enabled: enabled.input,
                    jump: jump.input,
                    preview: preview.input,
                    original: site
                };
                siteRows.push(record);
                return record;
            };
            const renderSites = () => {
                siteList.replaceChildren();
                siteRows.length = 0;
                for (const site of readSiteConfig()) makeSiteRow(site);
            };
            renderSites();
            const siteActions = document.createElement('div');
            const addSite = document.createElement('button');
            addSite.type = 'button';
            addSite.className = 'jod-add';
            addSite.textContent = '＋ 添加自定义站点';
            addSite.addEventListener('click', () => {
                const row = makeSiteRow({
                    id: 'custom-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
                    name: '自定义站点',
                    host: 'example.com',
                    template: '/{id}',
                    groups: ['jump'],
                    enabled: true
                });
                row.title.focus();
            });
            const restoreSites = document.createElement('button');
            restoreSites.type = 'button';
            restoreSites.textContent = '恢复默认内置站点';
            restoreSites.addEventListener('click', () => {
                if (!confirm('恢复默认站点会覆盖当前站点清单，是否继续？')) return;
                siteList.replaceChildren();
                siteRows.length = 0;
                for (const site of DEFAULT_SITE_CONFIG) makeSiteRow({ ...site });
            });
            siteActions.append(addSite, restoreSites);
            siteActions.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;';
            siteSection.appendChild(siteActions);

            const settingsSection = makeSection(
                '页面功能设置',
                '这些选项保留原有配置键与行为，不会改变站点跳转或磁力搜索规则。'
            );
            const scrollLine = document.createElement('label');
            scrollLine.className = 'jod-setting-line';
            scrollLine.appendChild(document.createTextNode('开启各站瀑布流（自动加载下一页）'));
            const scroll = document.createElement('input');
            scroll.type = 'checkbox';
            scroll.checked = GM_getValue('scroll_status', 1) !== 0;
            scrollLine.appendChild(scroll);
            settingsSection.appendChild(scrollLine);

            const magnetSection = makeSection(
                '磁力搜索源配置',
                '可修改现有搜索源的名称、域名和搜索路径模板。模板必须包含 {query}。每个来源使用专用结果解析器，因此不能仅通过填写域名新增全新的搜索引擎。'
            );
            const magnetRows = [];
            for (const source of MAGNET_SOURCES) {
                const row = document.createElement('div');
                row.className = 'jod-row';
                const name = makeInput(magnetSourceName(source), '来源名称', '来源名称');
                const host = makeInput(magnetSourceHost(source), '例如 example.com', '域名');
                const template = makeInput(magnetSourceTemplate(source), '例如 /search?q={query}', '搜索 URL 路径模板');
                const flags = document.createElement('div');
                flags.className = 'jod-flags';
                const enabled = makeCheck(GM_getValue(source.enabledKey, true), '启用');
                flags.appendChild(enabled.label);
                row.append(name.label, host.label, template.label, flags);
                magnetSection.appendChild(row);
                magnetRows.push({ source, name: name.input, host: host.input, template: template.input, enabled: enabled.input });
            }

            const footer = document.createElement('footer');
            footer.className = 'jod-footer';
            const restoreAll = document.createElement('button');
            restoreAll.type = 'button';
            restoreAll.textContent = '恢复默认配置';
            restoreAll.addEventListener('click', () => {
                if (!confirm('恢复默认配置会重置内置站点清单、瀑布流选项和磁力搜索源。是否继续？')) return;
                siteList.replaceChildren();
                siteRows.length = 0;
                for (const site of DEFAULT_SITE_CONFIG) makeSiteRow({ ...site });
                scroll.checked = true;
                for (const row of magnetRows) {
                    row.name.value = row.source.defaultName;
                    row.host.value = row.source.defaultDomain;
                    row.template.value = row.source.defaultTemplate;
                    row.enabled.checked = true;
                }
                notice.classList.remove('is-visible');
            });
            const footerActions = document.createElement('div');
            footerActions.className = 'jod-footer-actions';
            const cancel = document.createElement('button');
            cancel.type = 'button';
            cancel.textContent = '取消';
            cancel.addEventListener('click', () => overlay.remove());
            const save = document.createElement('button');
            save.type = 'button';
            save.className = 'jod-primary';
            save.textContent = '保存并应用';
            save.addEventListener('click', () => {
                notice.classList.remove('is-visible');
                let sites;
                try {
                    sites = [];
                    for (const row of siteRows) {
                        if (!row.row.isConnected) continue;
                        const name = row.title.value.trim();
                        const host = normalizeSiteHost(row.host.value);
                        const template = row.template.value.trim() || '/';
                        const groups = row.original && row.original.dynamic ? ['jump'] : [];
                        if (!(row.original && row.original.dynamic)) {
                            if (row.jump.checked) groups.push('jump');
                            if (row.preview.checked) groups.push('preview');
                        }
                        if (!name || !host || !template.startsWith('/') || template.startsWith('//') ||
                            /[\u0000-\u001f]/.test(template) || !groups.length) {
                            throw new Error('站点配置有误：名称、有效域名和至少一个适用场景为必填项；路径模板必须以 / 开头，不能以 // 开头。');
                        }
                        const originalSite = row.original || {};
                        sites.push({
                            id: originalSite.id || row.row.dataset.siteId || ('custom-' + Date.now()),
                            name,
                            host,
                            template,
                            groups,
                            enabled: row.enabled.checked,
                            dynamic: !!originalSite.dynamic
                        });
                    }

                    const magnetValues = [];
                    for (const row of magnetRows) {
                        const name = row.name.value.trim();
                        const host = normalizeSiteHost(row.host.value);
                        const template = row.template.value.trim();
                        if (!name || !host) throw new Error('磁力源配置有误：来源名称和有效域名不能为空。');
                        if (!template.startsWith('/') || template.startsWith('//') ||
                            !template.includes('{query}') || /[\u0000-\u001f]/.test(template)) {
                            throw new Error('磁力源「' + name + '」的搜索模板有误：必须以 / 开头，并且包含 {query}。');
                        }
                        magnetValues.push({ source: row.source, name, host, template, enabled: row.enabled.checked });
                    }

                    GM_setValue(SITE_CONFIG_KEY, sites);
                    GM_setValue('scroll_status', scroll.checked ? 1 : 0);
                    for (const item of magnetValues) {
                        GM_setValue(item.source.nameKey, item.name);
                        GM_setValue(item.source.domainKey, item.host);
                        GM_setValue(item.source.templateKey, item.template);
                        GM_setValue(item.source.enabledKey, item.enabled);
                    }
                    const enabled = enabledMagnetSources();
                    const selected = GM_getValue('search_index', '');
                    if (enabled.length && !enabled.includes(selected)) GM_setValue('search_index', enabled[0]);
                    overlay.remove();
                    history.go(0);
                } catch (error) {
                    showError(error.message || '配置无效，请检查后重试。');
                }
            });
            footerActions.append(cancel, save);
            footer.append(restoreAll, footerActions);

            const closePanel = () => overlay.remove();
            close.addEventListener('click', closePanel);
            overlay.addEventListener('click', event => {
                if (event.target === overlay) closePanel();
            });
            const onKeyDown = event => {
                if (event.key === 'Escape') {
                    closePanel();
                    document.removeEventListener('keydown', onKeyDown);
                }
            };
            document.addEventListener('keydown', onKeyDown);
            const originalRemove = overlay.remove.bind(overlay);
            overlay.remove = () => {
                document.removeEventListener('keydown', onKeyDown);
                originalRemove();
            };

            dialog.append(header, body, footer);
            overlay.append(style, dialog);
            document.body.appendChild(overlay);
            const firstInput = dialog.querySelector('input');
            if (firstInput) firstInput.focus();
        }
        /**
         * 设置cookie
         * @param {string} cname  名字
         * @param {string} cvalue 值
         */
        static setCookie(cname, cvalue) {
            let d = new Date();
            d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/;SameSite=Lax" + (location.protocol === 'https:' ? ";Secure" : "");
        }
        /**
         * html文本转换为Document对象 https://jsperf.com/domparser-vs-createelement-innerhtml/3
         * @param {string} text
         * @returns {Document}
         */
        static parsetext(text) {
            try {
                const doc = new DOMParser().parseFromString(String(text || ''), 'text/html');
                doc.querySelectorAll('script, iframe, object, embed, base').forEach(node => node.remove());
                doc.querySelectorAll('*').forEach(element => {
                    Array.from(element.attributes).forEach(attribute => {
                        const name = attribute.name.toLowerCase();
                        if (name.startsWith('on')) element.removeAttribute(attribute.name);
                        else if (['href', 'src', 'action', 'formaction', 'xlink:href'].includes(name) && /^\s*(?:javascript|vbscript):/i.test(attribute.value)) element.removeAttribute(attribute.name);
                    });
                    if (element.getAttribute('target') === '_blank') element.setAttribute('rel', 'noopener noreferrer');
                });
                return doc;
            } catch (e) {
                return document.implementation.createHTMLDocument('');
            }
        }

        /**
         * 判断日期是否最近X个月份的日期
         * @param {String} DateStr 日期
         * @param {Number} MonthNum 月数(X)
         * @returns {boolean}
         */
        static isLastXMonth(DateStr, MonthNum) {
            let now = new Date(); //当前日期
            let compDate = new Date(DateStr);
            let m2 = now.getFullYear() * 12 + now.getMonth();
            let m1 = compDate.getFullYear() * 12 + compDate.getMonth();
            if ((m2 - m1) < MonthNum) {
                return true;
            }
            return false;
        }

        /**
         * 方法: 通用chrome通知
         * @param {string} title
         * @param {string} body
         * @param {string} icon
         * @param {string} click_url
         */
        static notifiy(title, body, icon, click_url) {
            const notificationDetails = {
                text: body,
                title: title,
                timeout: 3000,
                image: icon
            };
            let targetUrl = '';
            try {
                const parsedUrl = new URL(String(click_url || ''));
                if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
                    targetUrl = parsedUrl.href;
                }
            } catch (error) {}
            if (targetUrl) {
                notificationDetails.onclick = () => {
                    GM_openInTab(targetUrl, { active: true, insert: true, setParent: true });
                };
            }
            GM_notification(notificationDetails);
        }

        /**
         * 发起网络请求
         * @param {string} url 对象参数
         * @param {string} referrer
         * @param {number} timeoutInt 超时毫秒数
         * @returns {Promise}
         */
        static request(url, referrerStr, timeoutInt) {
            return new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    url,
                    method: 'GET',
                    headers: {
                        "Cache-Control": "no-cache",
                        referrer: referrerStr
                    },
                    timeout: timeoutInt > 0 ? timeoutInt : 20000,
                    onload: response => {
                        response.loadstuts = true;
                        resolve(response);
                    },
                    onabort: response => {
                        response.loadstuts = false;
                        resolve(response);
                    },
                    onerror: response => {
                        response.loadstuts = false;
                        resolve(response);
                    },
                    ontimeout: response => {
                        response.loadstuts = false;
                        response.finalUrl = url;
                        resolve(response);
                    },
                });
            });
        }

        /**
         * 发起网络请求
         * @param {*} details 对象参数
         * @returns {Promise}
         */
        static requestGM_XHR(details) {
            return new Promise((resolve, reject) => {
                let req = GM_xmlhttpRequest({
                    method: details.method ? details.method : "GET",
                    url: details.url,
                    headers: details.headers,
                    timeout: details.timeout > 0 ? details.timeout : 20000,
                    onprogress: rsp => {
                        if (details.onprogress && details.onprogress(rsp)) {
                            resolve(rsp);
                            req.abort();
                        }
                    },
                    onload: rsp => resolve(rsp),
                    onerror: rsp => {
                        reject(`error`);
                    },
                    ontimeout: rsp => {
                        reject(`timeout`);
                    }
                });
            });
        }

        /**
         * 获取带-的番号
         * @param {String} avid 番号如:ABP888
         * @returns {String}  带-的番号
         */
        static getAvCode(avid) {

            // 带-的番号不处理，除了-0 如：DSVR-01167
            if (avid.match(/-[^0]/g)) return avid;
            // 999999_001,999999-001 不处理
            if (avid.match(/^[0-9-_]+$/g)) return avid;
            // crazyasia99999,sm999,video_999,BrazzersExxtra.99.99.99 不处理
            if (avid.match(/^(crazyasia|sm|video_|BrazzersExxtra)+/gi)) return avid;
            //去除开头的FC2
            avid = avid.replace(/\b(FC2+)/gi, "");
            let letter = avid.match(/[a-z|A-Z]+/gi);
            let num = avid.match(/\d+$/gi)[0];
            if (num.length > 3) {
                num = num.replace(/\b(0+)/gi, ""); //去除开头的0
                if (num.length < 3) {
                    num = (Array(3).join(0) + num).slice(-3);
                }
            }
            return letter.toString().replace(/,/g, "-") + "-" + num;
        }
        /**
         * 通过图片或视频url解析出DmmId
         * @param {String} url 带DmmId的图片或视频url
         * @returns {String}  DmmId的番号
         */
        static getDmmId(url) {
            //let url = "https://pics.dmm.co.jp/digital/video/1mtall028/1mtall028-2.jpg";
            let array = url.split("/");
            let dmmId = array[array.length - 2];
            //结尾数字串
            let num = dmmId.match(/\d+$/gi);
            //前缀
            let prefix = dmmId.replace(num, "");

            if (num) {
                //非00开头的数字同时字符数小于5的，添加00开头
                if (!num[0].match(/^00/) && num[0].length < 5) {
                    num = '00' + num;
                }
                return prefix + num;
            } else {
                return null;
            }
        }
        /**
         * 根据avid转成dmmId即cid
         * @param {string} avid 番号
         * @returns {string}  dmmId dmm的cid番号
         */
        static avIdToDmmId(avid) {
            // todo:待优化
            return avid;
        }
        /**
         * 获取查询onejav的url
         * @param {string} avid 番号
         * @returns {string}  返回符合onejav查询番号参数的url
         */
        static getOneJavSearchUrl(avid) {
            //FC2-PPV-9999999 => 9999999 , ABP-999 => ABP999
            avid = avid.replace(/-|FC2|PPV/g, "");
            return buildSiteUrl('onejav', avid);
        }
        /**
         * 获取查询blogjav的番号处理过后的查询字符
         * @param {string} avid 番号
         * @returns {string}  返回番号处理过后的查询字符
         */
        static getBlogJavSearchVal(avid) {
            //FC2-PPV-9999999 => FC2+PPV+9999999 , HEYZO-9999 => HEYZO+9999
            let cd = avid.replace(/-/g, "+");
            // 不含空格的情况,同时只含有字母与数字
            if (!(/\s+/g).test(cd) && (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/g).test(cd)) {
                // ABP999 => ABP+999
                // 取结尾数字
                let num = cd.match(/\d+$/gi);
                //前缀
                let prefix = cd.replace(num, "");
                cd = prefix + "+" + num;
            }
            return cd;
        }
        /**
         * 获取查询jav321的url
         * @param {string} avid 番号
         * @returns {Promise}  返回符合Jav321查询番号参数的url
         */
        static getJav321SearchUrl(avid) {
            // 测试 todo
            return new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: "POST",
                    url: buildSiteUrl('jav321', avid),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: "sn=" + encodeURIComponent(avid),
                    timeout: 20000,
                    onload: (r) => resolve(r.finalUrl),
                    onerror: (r) => reject(`查找jav321的 ${avid} 出错了`),
                    ontimeout: (r) => reject(`查找jav321的 ${avid} 超时了`)
                });
            });
        }
        /**
         * 获取查询javstore的url
         * @param {string} avid 番号
         * @returns {Promise}  返回符合JavStore查询番号参数的url
         */
        static getJavStoreSearchUrl(avid) {
            const searchUrl = buildSiteUrl('javstore', avid);
            if (!searchUrl) return Promise.resolve(null);
            let promise1 = Common.request(searchUrl);
            return promise1.then((result) => {
                if (!result.loadstuts) return;
                let doc = Common.parsetext(result.responseText);
                // 查找包含avid番号的a标签数组
                let a_array = $(doc).find(`.news_1n li h3 span a`);
                let a = a_array[0];
                //如果找到全高清大图优先获取全高清的
                for (let i = 0; i < a_array.length; i++) {
                    // 筛选匹配的番号数据  FC2-PPV-9999999 => 正则/FC2.*PPV.*9999999/gi
                    let reg = RegExp(avid.replace(/-/g, ".*"), "gi");
                    if (a_array[i].title.search(reg) > 0) {
                        if (!a) a = a_array[i];
                        let search_idx = a_array[i].title.search(/Uncensored|FHD|4K|Mosaic/i);
                        // 是否更新的链接
                        if ( parseInt(a_array[i].href.match(/\d+/)[0]) > parseInt(a.href.match(/\d+/)[0]) && search_idx >= 0) {
                            a = a_array[i];
                        }
                    }
                }

                if (!a) return null;
                try {
                    const resultUrl = new URL(a.getAttribute('href'), searchUrl);
                    const searchOrigin = new URL(searchUrl).origin;
                    return resultUrl.protocol === 'https:' && resultUrl.origin === searchOrigin ? resultUrl.href : null;
                } catch (error) { return null; }
            });
        }
        /**
         * jav321链接加入鼠标点击打开页面事件
         * @param {jQuery} $ele 链接元素
         * @param {String} avid 番号
         * @returns {jQuery} 链接元素
         */
        static jav321LinkMousedown($ele, avid) {
            $ele.mousedown((e) => {
                //鼠标左键 0  鼠标中键滚轮 1
                if (e.button < 2) {
                    if (!buildSiteUrl('jav321', avid)) return;
                    Common.getJav321SearchUrl(avid).then((url) => {
                        if (url && !(/\/search\/?$/.test(new URL(url).pathname))) {
                            GM_openInTab(url, { active: !e.button, insert: true, setParent: true });
                        } else {
                            Common.notifiy(`Jav321查无此番号: ${avid}`, '换个JAV站点查找试试吧!', EMPTY_IMAGE_DATA, "");
                        }
                    }).catch((errMsg) => Common.notifiy(errMsg));
                }
            });
            return $ele;
        }
        /**
         * javstore链接加入鼠标点击打开页面事件
         * @param {jQuery} $ele 链接元素
         * @param {String} avid 番号
         * @returns {jQuery} 链接元素
         */
        static javstoreLinkMousedown($ele, avid) {
            $ele.mousedown((e) => {
                //鼠标左键 0  鼠标中键滚轮 1
                if (e.button < 2) {
                    //FC2-PPV-9999999 => FC2+PPV+9999999 , HEYZO-9999 => HEYZO+9999
                    avid = avid.replace(/-/g, "+");
                    if (!buildSiteUrl('javstore', avid)) return;
                    Common.getJavStoreSearchUrl(avid).then((url) => {
                        if (url) {
                            GM_setValue(url, avid);
                            GM_openInTab(url, { active: !e.button, insert: true, setParent: true });
                        } else {
                            Common.notifiy(`JavStore查无此番号: ${avid}`, '换个JAV站点查找试试吧!', EMPTY_IMAGE_DATA, "");
                        }
                    });
                }
            });
            return $ele;
        }
        /**
         * 加入AV预览内容图使用的CSS
         */
        static addAvImgCSS() {
            GM_addStyle(`
                    .min {max-height: 535px;height:auto;cursor: pointer;} /*Common.addAvImg使用*/
                    .max {min-width: 1520px;} /*Common.addAvImg使用*/
                `);
        }
        /**
         * 加入AV预览内容图
         * @param {string} avid av唯一码
         * @param {function} func 函数
         * @param {boolean} isZoom 是否放大,默认true
         */
        static addAvImg(avid, func, isZoom) {
            let p = Common.getBigPreviewImgUrlFromBlogjav(avid);
            let p2 = Common.getBigPreviewImgUrlFromJavStore(avid);
            p.then(imgUrl => {

                if (!imgUrl || imgUrl === null) {
                    addJavArchiveImg.call(this);
                    return;
                }

                Common.requestGM_XHR({
                    method: 'HEAD',
                    url: imgUrl,
                    headers: { 'referrer': imgUrl.replace(/^(https?:\/\/[^\/#&]+).*$/, '$1') },
                    timeout: 5000
                }).then(result => {
                    if (result.status == 200 && (imgUrl.replace(/^https?:\/\//, '') == result.finalUrl.replace(/^https?:\/\//, '') || result.finalUrl.search(/removed.png/i) < 0)) {
                        GM_deleteValue(`temp_img_url_${avid}`);
                        addImg(imgUrl, func, isZoom);
                        Promise.resolve();
                    } else {
                        return Promise.reject("error");
                    }
                }).catch(msg => {
                    addJavArchiveImg.call(this);
                });

                function addJavArchiveImg() {
                    p2.then(url => {
                        imgUrl = GM_getValue(`temp_img_url_${avid}`, "");
                        if (imgUrl === "") {
                            addImg(EMPTY_IMAGE_DATA, func, false);
                        } else {
                            GM_deleteValue(`temp_img_url_${avid}`);
                            addImg(imgUrl, func, isZoom);
                        }
                    });
                }

                function addImg(targetImgUrl, func, isZoom) {
                    //创建img元素,加载目标图片地址
                    //创建新img元素
                    let className = "max";
                    if (isZoom != undefined && !isZoom) {
                        className = "min";
                    }
                    let $img = $(`<img id="javRealImg" title="点击可放大缩小 (图片正常时)" class="${className}"></img>`);
                    $img.attr("src", targetImgUrl);
                    $img.attr("style", "float: left;cursor: pointer;");
                    $img.click(function () {
                        if ($(this).hasClass('max')) {
                            $(this).attr("class", 'min');
                            this.parentElement.parentElement.scrollIntoView();
                        }
                        else {
                            $(this).attr("class", 'max');
                        }
                    });
                    //将新img元素插入指定位置
                    func($img);
                }
            });
        }
        /**
         * 根据番号从blogjav获取大预览图Url
         * @param {string} avid av唯一码
         * @returns {Promise} 大预览图Url地址
         */
        static getBigPreviewImgUrlFromBlogjav(avid) {
            // oneJav 取消获取blogjav预览图
            if ((/(OneJAV)/g).test(document.title)) {
                return Promise.resolve(null);
            }
            //请求搜索blogjav.net的番号
            return Common.searchBing(Common.getBlogJavSearchVal(avid),"blogjav.net","&mkt=zh-TW")
            .then(url => {
                let targetImgUrl = "";
                if (url.length > 0) {
                    //请求调用内页详情的访问地址
                    return Common.request(url, "https://pixhost.to/", 15000).then((result) => {
                        if (!result.loadstuts) return null;
                        let doc = Common.parsetext(result.responseText);
                        let img_array = $(doc).find('.entry-content a img[data-lazy-src*="imagetwist."],.entry-content a img[data-lazy-src*="pixhost."],.entry-content a img[data-src*="pixhost."]');

                        //如果找到内容大图
                        if (img_array.length > 0) {

                            var new_img_src = $(img_array[img_array.length - 1]).data('src')//.data('lazySrc');
                            targetImgUrl = new_img_src.replace('thumbs', 'images').replace('//t', '//img').replace(/[\?*\"*]/, '').replace('/th/', '/i/');
                            if (/imagetwist/gi.test(targetImgUrl)) targetImgUrl = targetImgUrl.replace('.jpg', '.jpeg');
                            if (targetImgUrl.length === 0) {
                                return null;
                            } else {
                                return targetImgUrl;
                            }
                        } else {
                            return null;
                        }
                    });
                } else {
                    return Promise.resolve(null);
                }
            });
        }
        /**
         * 根据番号从JavStore获取大预览图Url，并且缓存到GM中
         * @param {string} avid av唯一码
         */
        static getBigPreviewImgUrlFromJavStore(avid) {
            //异步请求搜索JavStore的番号
            GM_setValue(`temp_img_url_${avid}`, "");
            return Common.searchBing(avid,"javstore.net","&mkt=ja-JP").then(javUrl => {
                if (javUrl.length > 0) {
                    //异步请求调用内页详情的访问地址
                    return Common.request(javUrl, "http://pixhost.to/").then((result) => {
                        if (!result.loadstuts) return;
                        let doc = Common.parsetext(result.responseText);
                        let img_array = $(doc).find('.news a font[size*="+1"],.news a img[alt*=".th"]');
                        if (img_array.length > 0) {
                            let imgUrl = img_array[img_array.length - 1].parentElement.href;
                            if(img_array[0].tagName === 'IMG'){
                                imgUrl = img_array[img_array.length - 1].src;
                                imgUrl = imgUrl ? imgUrl : img_array[0].dataset.src;
                                imgUrl = imgUrl.replace('pixhost.org', 'pixhost.to').replace('.th', '')
                                    .replace('thumbs', 'images').replace('//t', '//img').replace(/[\?*\"*]/, '');
                            }

                            return Common.requestGM_XHR({
                                method: 'HEAD',
                                url: imgUrl,
                                headers: { 'referrer': imgUrl.replace(/^(https?:\/\/[^\/#&]+).*$/, '$1') },
                                timeout: 5000
                            }).then(result => {
                                if (result.status == 200 && (imgUrl.replace(/^https?:\/\//, '') == result.finalUrl.replace(/^https?:\/\//, '') || result.finalUrl.search(/removed.png/i) < 0)) {
                                    GM_setValue(`temp_img_url_${avid}`, imgUrl);
                                    return Promise.resolve(imgUrl);
                                } else {
                                    return Promise.resolve();
                                }
                            });
                        }
                    });
                } else {
                    return Promise.resolve();
                }
            });
        }
        /**
         *
         * @param {string} key
         * @param {string} site
         * @returns {Promise}  Promise内实现异步返回参数url
         */
        static searchBing(key,site,other) {
            return Common.request(`https://www.bing.com/search?q=site:${site}+${key}${other}`, "", 3000).then((result) => {
                if (!result.loadstuts) {
                    return Promise.resolve("");
                }
                var doc = Common.parsetext(result.responseText);
                let a_array = $(doc).find("#b_results .b_algo h2 a"); //$(doc).find("#rso span a");google
                let url = "",b = true;
                //如果找到全高清大图优先获取全高清的
                for (let i = 0; i < a_array.length; i++) {
                    if (i == 5)
                        break;
                    // 筛选匹配的番号数据  mium-999 => 正则/mium.*999/gi
                    let reg = RegExp(key.replace(/\+/g, ".*").replace(/-/g, ".*"), "gi");
                    if (a_array[i].innerHTML.search(reg) >= 0) {
                        if (url.length == 0) url = a_array[i].href;
                        var search_idx = a_array[i].innerHTML.search(/Uncensored|FHD|4K|Mosaic/i);
                        // 是否更新的链接，针对javstore
                        if((/(javstore)/g).test(site) && parseInt(a_array[i].href.match(/\d+/)[0]) < parseInt(url.match(/\d+/)[0])) b = false ;
                        if ( b && search_idx >= 0) {
                            url = a_array[i].href;
                        }
                    }
                };
                return new Promise(resolve => { resolve(url)});
            });
        }

        /**
         * 获取Dmm对应番号的数据
         * @param {string} dmmIdUrl DmmId网址
         * @returns {Promise}  Promise内实现异步返回参数dmmData
         */
        static getDmmData(dmmIdUrl) {
            if (!dmmIdUrl) return Promise.resolve(null);
            //异步请求dmm的番号页面
            return Common.requestGM_XHR({
                url: dmmIdUrl,
                timeout: 15000,
                headers: {
                    "Accept-Language": "ja-JP", //突破dmm地区访问限制，部分作品限制日本ip访问，例如STARS-706
                    "cookie": "age_check_done=1;" //跳过18岁以上限制
                },
            }).then((result) => {
                var doc = Common.parsetext(result.responseText);
                let dmmData = {};
                dmmData.collect_num = $(doc).find(".tx-count span").text();
                dmmData.score = $(doc).find(".d-review__average strong").text();
                dmmData.user_num = $(doc).find(".d-review__evaluates strong").text();
                dmmData.url = dmmIdUrl;
                dmmData.finalUrl = result.finalUrl;
                return dmmData;
            }).catch(msg => {
                return {};
            });
        }
        /**
         * 获取JavDb对应番号的数据
         * @param {string} avid av编号
         * @returns {Promise}  Promise内实现异步返回参数javdbData
         */
        static getJavDbData(avid) {
            return new Promise((resolve, reject) => {
                const javdbHost=magnetSourceHost(MAGNET_SOURCES.find(source=>source.id==='javdb'));
                let promise = Common.request("https://" + javdbHost + "/search?f=all&q=" + encodeURIComponent(avid));
                promise.then((result) => {
                    if (!result.loadstuts) {
                    }
                    let doc = Common.parsetext(result.responseText);
                    let a = $(doc).find(`.box .video-title:contains('${avid.toUpperCase()}')`);
                    if (a.length) {
                        let javdbData = {};
                        javdbData.score = $(a[0].parentElement).find('.score>span').text();
                        try { javdbData.url = new URL(a[0].parentElement.getAttribute('href'),"https://"+javdbHost+"/").href; }
                        catch(error) { reject(error);return; }
                        resolve(javdbData);
                    } else {
                        reject("javdb没查找到此番号");
                    }
                });
            });
        }
    };

    class Jav {
        /**
         * 加载数据  todo 改进
         * @param {String} pageName 访问网页名
         */

        static javbusUs() {
            $('#magnet-table tbody tr td[colspan="4"]').attr("colspan","5");
            for (const row of $('#magnet-table tr[height="35px"]')) {
                if ($(row).find('.nong-copy').length) continue;
                const magnet = $(row).find('td a').first().attr('href') || '';
                const cell = document.createElement('td'), button = document.createElement('button');
                button.type='button'; button.className='nong-copy'; button.textContent='复制完整磁链';
                button.setAttribute('data-magnet',magnet); cell.style.textAlign='center'; cell.appendChild(button);
                row.appendChild(cell); row.setAttribute('maglink',magnet);
                button.addEventListener('click',thirdparty.nong.magnet_table.handle_event,false);
            }
        }

        static getAvidAndChgPage() {
            let AVID = $('.header')[0].nextElementSibling.textContent;
            // 实现点击番号复制到系统剪贴板 todo 181221v1
            $('.header')[0].nextElementSibling.id = "avid";
            $('#avid').empty().attr("title", "点击复制番号").attr("avid", AVID);
            let a_avid = document.createElement('a');
            $(a_avid).attr("href", "#").append(AVID);
            $(a_avid).click(() => {
                GM_setClipboard($('#avid').attr("avid"));
            });
            $('#avid').append(a_avid);
            $('#avid').after("<span style='color:red;'>(←点击复制)</span>");
            $($('.header')[0]).attr("class", "header_hobby");
            return AVID;
        }

        static waterfallButton() {
            // 瀑布流ui按钮
            let a3 = document.createElement('a');
            (waterfallScrollStatus > 0) ? $(a3).append('关闭瀑布流&nbsp;&nbsp;') : $(a3).append('开启瀑布流&nbsp;&nbsp;');
            $(a3).css({
                "color": "blue",
                "font": "bold 12px monospace"
            });
            $(a3).attr("href", "#");
            $(a3).click(function () {
                if ((/关闭/g).test($(this).html())) {
                    GM_setValue('scroll_status', 0);
                } else {
                    GM_setValue('scroll_status', 1);
                }
                window.location.reload();
            });
            return a3;
        }

        static javlibaryScript() {
            let a3 = this.waterfallButton();
            if ((/(JAVLibrary)/g).test(document.title)) {
                // JavLibrary 列表增强。
                {
                    if (document.URL.indexOf("bestrated") > 0) {
                        $(".left select").after("<a href='/cn/vl_bestrated.php?deleteTwoMonthAway' class='hobby-a'>&nbsp;&nbsp;只看近两月份</a>");
                        $(".left select").after("<a href='/cn/vl_bestrated.php?deleteOneMonthAway' class='hobby-a'>&nbsp;&nbsp;只看当前月份</a>");
                        //todo
                    } else if (document.URL.indexOf("vl_newrelease") > 0 || document.URL.indexOf("vl_update") > 0
                        || document.URL.indexOf("vl_genre") > 0 || document.URL.indexOf("vl_mostwanted") > 0) {
                        $(".displaymode .right").prepend("<a href='" + document.location.origin + document.location.pathname
                            + "?delete9down" + document.location.search.replace('?', '&') + "' class='hobby-a'>只看9分以上&nbsp;&nbsp;</a>");
                        $(".displaymode .right").prepend("<a href='" + document.location.origin + document.location.pathname
                            + "?delete8down" + document.location.search.replace('?', '&') + "' class='hobby-a'>只看8分以上&nbsp;&nbsp;</a>");
                        $(".displaymode .right").prepend("<a href='" + document.location.origin + document.location.pathname
                            + "?delete7down" + document.location.search.replace('?', '&') + "' class='hobby-a'>只看7分以上&nbsp;&nbsp;</a>");
                    }

                    if ((/(bestrated|newrelease|newentries|vl_update|mostwanted|vl_star)/g).test(document.URL) ||
                        (/(vl_genre|vl_searchbycombo|mv_owned|mv_watched|mv_wanted|mv_visited)/g).test(document.URL) ||
                        (/(vl_label|vl_maker|vl_director|vl_searchbyid|userwanted|userowned)/g).test(document.URL)) {

                        // 指定站点页面加入瀑布流控制按钮
                        $(".displaymode .right").prepend($(a3));

                        // 瀑布流脚本
                        thirdparty.waterfallScrollInit();

                        let a1 = document.createElement('a');

                        $(a1).append('按【VR】+评分排序&nbsp;&nbsp;');
                        $(a1).css({
                            "color": "blue",
                            "font": "bold 12px monospace"
                        });
                        $(a1).attr("href", "#");
                        $(a1).click(() => {
                            let div_array = $("div.videos div.video");
                            div_array.sort((a, b) => {
                                let a_score = parseFloat($(a).children("a").attr("score"));
                                let b_score = parseFloat($(b).children("a").attr("score"));
                                if (a_score > b_score) {
                                    return -1;
                                } else if (a_score === b_score) {
                                    return 0;
                                } else {
                                    return 1;
                                }
                            });
                            div_array.sort((a, b) => {
                                let a_val = $(a).children("a").attr("title").indexOf("【VR】") >= 0 ? 1 : 0;
                                let b_val = $(b).children("a").attr("title").indexOf("【VR】") >= 0 ? 1 : 0;
                                if (a_val > b_val) {
                                    return -1;
                                } else if (a_val === b_val) {
                                    return 0;
                                } else {
                                    return 1;
                                }
                            });
                            // 删除Dom列表数据关系，重新添加排序数据
                            div_array.detach().appendTo("#waterfall");
                        });

                        let a2 = $(a1).clone();
                        $(a2).html('按时间排序&nbsp;&nbsp;');
                        $(a2).click(() => {
                            let div_array = $("div.videos div.video");
                            div_array.sort((a, b) => {
                                let a_time = new Date($(a).children("a").attr("release_date").replace(/-/g, "\/")).getTime();
                                let b_time = new Date($(b).children("a").attr("release_date").replace(/-/g, "\/")).getTime();
                                let a_score = parseFloat($(a).children("a").attr("score"));
                                let b_score = parseFloat($(b).children("a").attr("score"));
                                if (a_time > b_time) {
                                    return -1;
                                } else if (a_time === b_time) {
                                    return (a_score > b_score) ? -1 : 1;
                                } else {
                                    return 1;
                                }
                            });

                            // 删除Dom列表数据关系，重新添加排序数据
                            div_array.detach().appendTo("#waterfall");
                        });
                        $(".displaymode .right").prepend($(a2));
                        $(".displaymode .right").prepend($(a1));
                    }
                }
                //JavWebSql.DBinit();
                // 新增VR发行、FC2发行菜单入口
                const oneJavPopularUrl = buildSiteUrl('onejav', '', '/popular/?amateur=1');
                if (oneJavPopularUrl) $('.menul1 ul li:contains("新发行")').after('<li><a href="' + escapeSiteHtml(oneJavPopularUrl) + '" target="_blank" rel="noopener noreferrer" style="color: red;">FC2发行</a></li>');
                $('.menul1 ul li:contains("新发行")').after('<li><a href="vl_genre.php?g=aaua" style="color: red;">VR发行</a></li>');


                // 处理javlib番号详情页面的脚本
                if ($('.header').length && $('meta[name="keywords"]').length) {
                    //获取番号影片详情页的番号  例如：http://www.javlibrary.com/cn/?v=javli7j724
                    let AVID = this.getAvidAndChgPage();

                    window.onload = () => {
                        $('iframe').remove();
                    };

                    //增加预览图片大图链接
                    let imgs = $('.previewthumbs>img').clone();
                    $('.previewthumbs>img').remove();
                    imgs.each((i, img) => {
                        $('.previewthumbs').eq(0).append(`<a target="_blank" href="${img.src.replace("-", "jp-")}">${img.outerHTML}</a>`);
                    });

                    //加入坐标div，辅助插入元素
                    $('#video_genres').before(`<div id="zuobiao" class="item"></div>`);
                    let $div_zuobiao = $('#zuobiao');

                    //加入预览JAV全片截图
                    Common.addAvImg(Common.getAvCode(AVID), ($img) => {
                        // http://www.javlibrary.com/cn/?v=javlilzo4e
                        let divEle = $("div[id='video_title']")[0];  // todo 190604
                        if (divEle) {
                            $(divEle).after(
                                '<div style="width: 100%;height: 100%;display: inline-block;margin: 0px 0px 0px 0px;">' +
                                '<div id="hobby_div_left" style="float: left;min-width: 60%;"></div>' +
                                '<div id="hobby_div_right" style="float: left;min-width: 66px;"></div>' +
                                '</div>'
                            );
                            $('#hobby_div_left').append($('#video_jacket_info'));
                            $('#hobby_div_left').append($('#video_favorite_edit'));
                            $('#hobby_div_right').append($img);
                        }
                    }, true);

                    // 挊
                    thirdparty.nong.searchMagnetRun();

                    //加入dmm评分数据
                    if (imgs.length) {
                        let dmmId = Common.getDmmId(imgs[0].src);
                        if (!dmmId) {
                            dmmId = Common.avIdToDmmId(AVID);
                        }

                        Common.getDmmData(`https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=${dmmId}/`).then((dmmData) => {
                            $div_zuobiao.before(addLinkHtml(dmmData));

                            function addLinkHtml(dmmData) {
                                return `
                                    <div id="video_review_dmm" class="item">
                                        <table><tbody><tr>
                                            <td class="header"><a target="_blank" href="${dmmData.url}">DMM评价:</a></td>
                                            <td><span class="text">${dmmData.score.replace("点", "分")}</span>, ${dmmData.user_num}人评, ${dmmData.collect_num}收藏</td>
                                        </tr></tbody></table>
                                    </div>
                                `;
                            }
                        });
                    }

                    //加入javdb评分数据
                    let p3 = Common.getJavDbData(Common.getAvCode(AVID));
                    p3.then((javdbData) => {
                        let score = javdbData.score.trim().replace("由", "").replace("人評價", "人评");
                        $div_zuobiao.after(`
                            <div id="video_review_javdb" class="item">
                                <table><tbody><tr>
                                    <td class="header"><a target="_blank" href="${javdbData.url}">javdb评价:</a></td>
                                    <td><span class="text">${score}</td>
                                </tr></tbody></table>
                            </div>
                        `);
                    }).catch(() => {});

                    let $div_video_cast = $('#video_cast');
                    //加入Jav跳转
                    $div_video_cast.after(`
                        <div id="javweb_jump" class="item">
                            <table><tbody><tr>
                                <td class="header">JAV跳转:</td>
                                <td id="linkJump">
                                    ${renderSiteLinks(AVID, "jump")}
                                </td>
                            </tr></tbody></table>
                        </div>
                    `);
                    bindTampermonkeyOpenLinks(document.getElementById('javweb_jump'));
                    // JavStore 使用专用搜索流程，按统一站点配置控制显示和目标地址。
                    if (isSiteEnabled('javstore', 'jump')) {
                        let $span = $(`<span class="genre"><a href="javascript:void(0);">JavStore</a></span>`);
                        $('#linkJump').prepend(Common.javstoreLinkMousedown($span, AVID));
                    }


                    //加入在线预览跳转
                    $div_video_cast.after(`
                        <div id="video_webplayer" class="item">
                            <table><tbody><tr>
                                <td class="header">在线预览:</td>
                                <td>
                                    ${renderSiteLinks(AVID, "preview")}
                                </td>
                            </tr></tbody></table>
                        </div>
                    `);
                    bindTampermonkeyOpenLinks(document.getElementById('video_webplayer'));

                    $('#watched .smallbutton').html("放弃了");
                    $('#watched .smalldarkbutton.hidden').html("我放弃这片了");




                    //标题去除超链接
                    $('#video_title h3').after($('#video_title a'));
                    $('#video_title h3').text($('#video_title a').text());
                    $('#video_title a').empty();


                }//番号影片详情页处理end
            }
        }

        static javBusScript() {
            let a3 = this.waterfallButton();
            if ((/(JavBus|AVMOO|AVSOX)/g).test(document.title) || $("footer:contains('JavBus')").length) {
                GM_addStyle(`
                    .info p {line-height: 18px!important;}
                    .screencap img{	width:100%;	max-width: 1000px;}
                `);
                // 新增FC2菜单入口
                const oneJavPopularUrl = buildSiteUrl('onejav', '', '/popular/?amateur=1');
                if (oneJavPopularUrl) $('#navbar ul.nav.navbar-nav li:eq(0)').after('<li><a href="' + escapeSiteHtml(oneJavPopularUrl) + '" target="_blank" rel="noopener noreferrer" style="color: red;">FC2</a></li>');
                // 新增VR菜单入口
                $('#navbar ul.nav.navbar-nav li:eq(0)').after('<li><a href="/search/VR&type=1" style="color: red;">VR</a></li>');
                // 指定站点页面加入瀑布流控制按钮
                let li_elem = document.createElement('li');
                $(li_elem).append($(a3));
                // JavBus
                $(".visible-md-block").closest(".dropdown").after($(li_elem));
                // AVMOO|AVSOX
                $(".active").closest(".navbar-nav").append($(li_elem));
                $(".ad-box").remove();

                // 瀑布流脚本
                thirdparty.waterfallScrollInit();

                //获取番号影片详情页的番号  例如：https://www.javbus.com/AVVR-323
                if ($('.header').length && $('meta[name="keywords"]').length) {
                    let AVID = this.getAvidAndChgPage();

                    //加入坐标div，辅助插入元素
                    $('p.header').before('<p id="zuobiao"></p>');
                    let $p_zuobiao = $('#zuobiao');

                    Common.addAvImg(AVID, ($img) => {
                        //https://www.javbus.com/CHN-141
                        let divEle = $("div[class='col-md-3 info']")[0];
                        $(divEle).attr("id", "video_info");
                        if (divEle) {
                            $(divEle.parentElement).append($img);
                        }
                    }, false);//javbus 默认不放大

                    // 挊
                    thirdparty.nong.searchMagnetRun();

                    //加入dmm评分数据
                    let a_imgs = $('#sample-waterfall>a');
                    if (a_imgs.length && !$('a.avatar-box[href*="uncensored"]').length && !location.hostname.includes('javbus.org')
                        && $('#sample-waterfall>a[href*="pics.dmm"]').length) {
                        let p1 = Common.getDmmData(`https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=${Common.getDmmId(a_imgs[0].href)}/`);
                        p1.then((dmmData) => {
                            $p_zuobiao.before(`
                                <p>
                                    <span class="header">
                                        <a target="_blank" href="${dmmData.url}" style="color: blue;">
                                        DMM&nbsp;评:</a>
                                    </span>
                                    ${dmmData.score.replace("点", "分")}, ${dmmData.user_num}人评, ${dmmData.collect_num}收藏
                                </p>
                            `);
                        });
                    }

                    //加入javdb评分数据
                    Common.getJavDbData(AVID).then((javdbData) => {
                        let score = javdbData.score.trim().replace("由", "").replace("人評價", "人评");
                        $p_zuobiao.after(`
                            <p>
                                <span class="header"><a target="_blank" href="${javdbData.url}" style="color: blue;">javdb评:</a></span>
                                ${score}
                            </p>
                        `);
                    });

                    //加入在线预览跳转
                    $('.col-md-3.info').append(`
                        <p id="jav-online-preview">
                            <span class="header">在线预览:</span>${renderSiteLinks(AVID, "preview")}
                        </p>
                    `);
                    bindTampermonkeyOpenLinks(document.getElementById('jav-online-preview'));
                    // 加入javlib的跳转链接
                    $('.col-md-3.info').append(`
                        <p id="linkJump">
                            <span class="header">JAV跳转:</span>${renderSiteLinks(AVID, "jump")}
                        </p>
                    `);
                    if (isSiteEnabled('javstore', 'jump')) {
                        let $a = $(`<a title="综合 JAV资源站" href="javascript:void(0);" style="color: rgb(204, 0, 0);">JavStore&nbsp;</a>`);
                        $('#linkJump').append(Common.javstoreLinkMousedown($a, AVID));
                    }

                    // 磁链列表增加复制操作列
                    $('#magnet-table tbody tr').append('<td style="text-align:center;white-space:nowrap">操作</td>');
                    // 先执行一次，针对已经提前加载出磁链列表结果时有效
                    this.javbusUs();
                    // 使用MutationObserver API替换DOMNodeInserted
                    const observer = new MutationObserver((mutationsList, observer) => {
                        // 触发后关闭监听事件
                        observer.disconnect(); // 停止监听
                        this.javbusUs();
                    });
                    // 指定要观察的目标节点
                    const targetNode = document.getElementById('magnet-table');
                    // 配置观察选项
                    const config = { childList: true };
                    // 开始观察目标节点
                    observer.observe(targetNode, config);
                }
            }
        }

        static oneJavScript() {
            if ((/(OneJAV)/g).test(document.title)) { //todo 190404
                GM_addStyle(`
                    .column.is-5 {max-width: 82%;width: auto;}
                    .column {flex-basis: inherit;flex-grow: inherit;width: 800px;}
                    .container {max-width: 100%;width: 100%;}
                    .has-text-grey-dark {max-width: 1000px;}
                    .image {width: auto; max-width: 800px;}
                `);
                // 插入自己创建的div
                $('div.container nav.pagination.is-centered').before("<div id='card' ></div>");
                // 将所有番号内容移到新建的div里
                $('div#card').append($('div.container div.card.mb-3'));
                // 瀑布流脚本
                thirdparty.waterfallScrollInit();
            }
        }

        static jav321Script() {
            if ((/(^JAV321)/g).test(document.body.innerText)) { //todo 190531
                Common.addAvImgCSS();
                GM_addStyle(`
                    .col-md-3 {width: 20%;padding-left: 18px; padding-right: 2px;}
                    .col-xs-12,.col-md-12 {padding-left: 2px; padding-right: 0px;}
                    .col-md-7 {width: 79%;padding-left: 2px;padding-right: 0px;}
                    .col-md-9 {width: max-content;}
                    .col-md-offset-1 {margin-left: auto;}
                    .hobby {display: inline-block;float: left;}
                    .hobby_mov {width: 75%;}
                    .hobby_p {color: white;font-size: 40px;margin: 0 0 0px;display: inline-block;text-align: right;width: 100%;}
                `);
                $(".col-md-7.col-md-offset-1.col-xs-12 .row .col-md-3 .img-responsive:eq(0)").offsetParent().attr("class", "hobby");
                $("#video_overlay_sample").offsetParent().attr("class", "hobby_mov");
                // 调整div位置
                $('div.col-md-7.col-md-offset-1.col-xs-12').before($('div.col-xs-12.col-md-12')[0].parentElement);

                let meta = $('small')[0];
                let arr = meta.textContent.split(" ");
                let javID = arr[0];

                Common.addAvImg(javID, ($img) => { const divEle = $('div.col-md-9')[0]; if (divEle) $(divEle).after($img); }, true);

                $('.panel.panel-info:eq(0)').after($('.panel.panel-info:has(.table.table-striped)'));

                $('table.table.table-striped tbody tr:eq(0)').append('<th>操作</th>');


                const magnetRows = $('table.table.table-striped tbody tr:gt(0)');
                for (const row of magnetRows) {
                    const magnet = $(row).find('td a').first().attr('href') || '';
                    const cell = document.createElement('td');
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'nong-copy';
                    button.textContent = '复制完整磁链';
                    button.setAttribute('data-magnet', magnet);
                    cell.appendChild(button);
                    row.setAttribute('maglink', magnet);
                    row.appendChild(cell);
                    button.addEventListener('click', thirdparty.nong.magnet_table.handle_event, false);
                }
            }
        }

        static javDBScript() {
            if ((/(JavDB)/g).test(document.title)) {
                if ($('.app-desktop-banner').length) $('.app-desktop-banner').remove();
                if ($('.modal.is-active.over18-modal').length) $('.modal.is-active.over18-modal').remove();

                // 修改FC2菜单入口
                $('.navbar-dropdown.is-boxed .navbar-item:contains("FC2")')
                .attr("href","/advanced_search?type=3&score_min=4.2&score_max=&released_start=&released_end=&actors%5B%5D=&tags%5B%5D=&p=0&d=0&d=1&c=0&s=0&i=0&v=0&commit=檢索&lm=h").attr("style","color: red;");
                // 新增VR菜单入口
                $('.navbar-dropdown.is-boxed .navbar-item:eq(0)')
                .after('<a class="navbar-item" href="/advanced_search?type=0&score_min=4.2&score_max=&released_start=&released_end=&actors%5B%5D=&tags%5B%5D=&tags%5B%5D=212%7CVR&p=0&d=0&d=1&c=0&s=0&i=0&v=0&commit=檢索&lm=h" style="color: red;">VR</a>');


                // 瀑布流脚本
                thirdparty.waterfallScrollInit();

                // 非小封面列表
                if (!$("#waterfall").hasClass("v cols-4 vcols-8")) {
                    // 如果没有，加入tabs元素
                    if (!$(".tabs.is-boxed").length) {
                        $("#waterfall").before(`<div class="tabs is-boxed" style="justify-content: flex-end;"></div>`);
                    }
                    // 加入一个锚点
                    $(".tabs.is-boxed").before(`<a name="maodian" style="position: relative;top: -60px;"></a>`);
                    // 加入排序与过滤功能
                    $('.tabs.is-boxed').append(`
                        <div style="display: flex;">
                            <div class="is-active" style="border: 1px solid #3273dc;">
                                <a id="javtopusernum" href="#maodian" style="background-color: white;color: #3273dc;font-weight: bold;">
                                    <span>评分人数排序</span>
                                </a>
                            </div>
                            <div class="is-active" style="border: 1px solid #3273dc;">
                                <a id="javtopscore" href="#maodian" style="background-color: white;color: #3273dc;font-weight: bold;">
                                    <span>JAV评分排序</span>
                                </a>
                            </div>
                            <div style="border: 1px solid #3273dc;background-color: #f5f5f5;height: 2.8em;display: flex;">
                                <a href="#maodian" style="color: #3273dc; font-weight: bold;">
                                    <span>屏蔽评分人数&nbsp&lt;&nbsp</span>
                                </a>
                                <input id="offusernum" name="offusernum" class="input" placeholder="0&nbsp人数" min="0" max="9999" type="number"
                                        style="height: 1.5em;width: 5.5em;padding: 2px;margin: 0.6em 1em 0 0;">
                            </div>
                        </div>
                    `);

                    $('#javtopscore').click(() => {
                        let div_array = $(JAVDB_ITEM_SELECTOR);
                        div_array.sort((a, b) => {
                            let a_score = parseFloat($(a).attr("score"));
                            let b_score = parseFloat($(b).attr("score"));
                            if (a_score > b_score) {
                                return -1;
                            } else if (a_score === b_score) {
                                return 0;
                            } else {
                                return 1;
                            }
                        });
                        // 删除Dom列表数据关系，重新添加排序数据
                        div_array.detach().appendTo("#waterfall");
                        $('#javtopscore').css("background-color", "#3273dc").css("color", "white");
                        $('#javtopusernum').css("background-color", "white").css("color", "#3273dc");
                    });

                    $('#javtopusernum').click(() => {
                        let div_array = $(JAVDB_ITEM_SELECTOR);
                        div_array.sort((a, b) => {
                            let a_score = parseFloat($(a).attr("usernum"));
                            let b_score = parseFloat($(b).attr("usernum"));
                            if (a_score > b_score) {
                                return -1;
                            } else if (a_score === b_score) {
                                return 0;
                            } else {
                                return 1;
                            }
                        });
                        // 删除Dom列表数据关系，重新添加排序数据
                        div_array.detach().appendTo("#waterfall");
                        $('#javtopusernum').css("background-color", "#3273dc").css("color", "white");
                        $('#javtopscore').css("background-color", "white").css("color", "#3273dc");
                    });

                    $('#offusernum').change(() => {
                        let offusernum = $('#offusernum').val();
                        if (offusernum) {
                            $(JAVDB_ITEM_SELECTOR).toArray().forEach(e => {
                                parseInt($(e).attr("usernum")) < parseInt(offusernum) ? $(e).hide() : $(e).show();
                            });
                        }
                    });



                    if ($("div.video-detail").length) {
                        $("div.top-meta").remove();
                        const magnetItems = $("div.magnet-links .item");
                        for (const item of magnetItems) {
                            const magnet = $(item).find("a").first().attr("href") || "";
                            const button = document.createElement("button");
                            button.type = "button";
                            button.className = "nong-copy";
                            button.textContent = "复制完整磁链";
                            button.setAttribute("data-magnet", magnet);
                            $(item).find(".buttons.column").append(button);
                            button.addEventListener("click", thirdparty.nong.magnet_table.handle_event, false);
                        }
                    }

                }
            }
        }

        static javStoreScript() {
            if ($('.all_page_javstore1 .danhgia_thich').length) {
                GM_addStyle(`
                    .category_news_main_right {width: 100%;}
                    .boxoright {width: calc((100%) - 460px)}
                    .boxoleft { background: #ffffff!important; width: 460px; padding: 0 5px;}
                    .boxoleft > div { margin: 0 0 0 0; }
                    .news_2n > h2 { margin: 10px 0 10px 0;}
                    .onlinePlayLink {font-size: large; margin: 0 0 0 38px;}
                `);
                // 移除左侧右侧
                if ($('.category_news_left_side,.slide_exlogo,.box_left_news.news_2n')) {
                    $('.category_news_left_side,.slide_exlogo,.box_left_news.news_2n').remove();
                }
                // 显示大预览图
                let img_array = $('.news a font[size*="+1"],.news a img[alt*=".th"]');
                //if (img_array.length == 0) $(doc).find('.news a img[alt*=".th"]');
                img_array.toArray().forEach(e => {
                    let imgUrl = e.parentElement.href;
                    if(e.tagName === 'IMG'){
                        imgUrl = img_array[img_array.length - 1].src;
                        imgUrl = imgUrl ? imgUrl : img_array[0].dataset.src;
                        imgUrl = imgUrl.replace('pixhost.org', 'pixhost.to').replace('.th', '')
                            .replace('thumbs', 'images').replace('//t', '//img')
                            .replace(/[\?*\"*]/, '');
                    }
                    e.parentElement.href = "#";
                    e.parentElement.target = "";
                    e.parentElement.title = "返回顶部";
                    $(e.parentElement).attr("style", "display: inherit;text-align: center;");
                    let $img = $(`<img src="${imgUrl}" border="0">`);
                    $(e.parentElement).append($img);
                    e.parentElement.removeChild(e);
                });

                $(".boxoleft").append(`
                    <div class="box_left_news news_2n">
                        <h2><a href="javascript:void(0);">在线预览</a></h2>
                        <div class="onlinePlayLink">
                        </div>
                        <h2><a href="javascript:void(0);">下载</a></h2>
                    </div>
                `);

                // 挊
                thirdparty.nong.searchMagnetRun();

                $(".onlinePlayLink").append(`
                    ${renderSiteLinks($(".boxoleft .box_left_news.news_2n").attr("avid"), "preview")}
                `);
                bindTampermonkeyOpenLinks(document.querySelector('.onlinePlayLink'));

            }
        }

    }

    // 第三方脚本调用
    var thirdparty = {
        // 瀑布流脚本
        waterfallScrollInit: () => {
            var w = new thirdparty.waterfall({});
            // javbus.com、avmo.pw、avso.pw
            var $pages = $('div#waterfall div.item');
            if ($pages.length) {
                $pages[0].parentElement.parentElement.id = "waterfall_h";
                // javbus.com
                if ($("footer:contains('JavBus')").length) {
                    w = new thirdparty.waterfall({
                        next: 'a#next',
                        item: 'div#waterfall div.item',
                        cont: '.masonry',
                        pagi: '.pagination-lg',
                    });
                }
                //avmo.pw、avso.pw
                if ((/(AVMOO|AVSOX)/g).test(document.title)) {
                    w = new thirdparty.waterfall({
                        next: 'a[name="nextpage"]', //nextpage
                        item: 'div#waterfall div.item',
                        cont: '#waterfall',
                        pagi: '.pagination',
                    });
                }
            }
            // javlibrary
            var $pages2 = $('div.videos div.video');
            if ($pages2.length) {
                GM_addStyle(`
                            .videothumblist .videos .video {height: 270px;padding: 0px;margin: 4px;}
                            .videothumblist .videos .video .title {height: 2.8em;}
                            .id {height: 1.3em;overflow: hidden;}
                        `);
                $pages2[0].parentElement.id = "waterfall";
                w = new thirdparty.waterfall({
                    next: 'a[class="page next"]',
                    item: 'div.videos div.video',
                    cont: '#waterfall',
                    pagi: '.page_selector',
                });
            }
            // onejav
            var $pages3 = $('div.container div.card.mb-3');
            if ($pages3.length) {
                $pages3[0].parentElement.id = "waterfall";
                w = new thirdparty.waterfall({
                    next: 'a.pagination-next.button.is-primary',
                    item: 'div.container div.card.mb-3',
                    cont: '#waterfall',
                    pagi: '.pagination.is-centered',
                });
            }

            // javdb
            var $pages4 = $(JAVDB_ITEM_SELECTOR);
            if ($pages4.length) {
                GM_addStyle(`
                            .container {max-width: inherit !important;}
                            .tags{display: block !important;}
                            .tag.hobby{display: block;float: right;color: #fff;line-height: 2em;}
                        `);
                $pages4[0].parentElement.id = "waterfall";
                w = new thirdparty.waterfall({
                    next: '.pagination .pagination-next',
                    item: JAVDB_ITEM_SELECTOR,
                    cont: '#waterfall',
                    pagi: '.pagination',
                });
            }

            w.setSecondCallback((cont, elems) => {
                if (location.pathname.includes('/star/') && elems) {
                    cont.append(elems.slice(1));
                } else {
                    cont.append(elems);
                }
            });

            // javlib脚本
            w.setJavlibCallback((elems) => {
                // hobby mod script
                let filerMonth = (indexCd_id, dateString) => {
                    //过滤最新X月份的影片
                    if ($(indexCd_id).context.URL.indexOf("bestrated.php?delete") > 0) {
                        if ($(indexCd_id).context.URL.indexOf("bestrated.php?deleteOneMonthAway") > 0 && !Common.isLastXMonth(dateString, 1)) {
                            $(indexCd_id).remove();
                        } else if ($(indexCd_id).context.URL.indexOf("bestrated.php?deleteTwoMonthAway") > 0 && !Common.isLastXMonth(dateString, 2)) {
                            $(indexCd_id).remove();
                        }
                    }
                }

                let filerScore = (indexCd_id, score) => {
                    //过滤X评分以下的影片
                    if ($(indexCd_id).context.URL.indexOf("?delete") > 0) {
                        if ($(indexCd_id).context.URL.indexOf("delete7down") > 0 && score <= 7.01) {
                            $(indexCd_id).remove();
                        } else if ($(indexCd_id).context.URL.indexOf("delete8down") > 0 && score <= 8.01) {
                            $(indexCd_id).remove();
                        } else if ($(indexCd_id).context.URL.indexOf("delete9down") > 0 && score <= 9.01) {
                            $(indexCd_id).remove();
                        }
                    }
                }

                let setbgcolor = (indexCd_id, dateString) => {
                    // 如果是最近两个月份的影片标上背景色
                    if ($(indexCd_id).context.URL.indexOf("bestrated") > 0 && Common.isLastXMonth(dateString, 2)) {
                        //$(indexCd_id).css("background-color", "blanchedalmond");
                        $('div[class="hobby_add"]', $(indexCd_id)).css("background-color", "#ffffc9");
                    }
                }

                let extCode = (indexCd_id, actor, dateString, pingfengString) => {
                    $(indexCd_id).find(".id").append(` &nbsp;${actor}`);
                    let t = $(indexCd_id).find(".title").get(0); //todo v3.5.0
                    $(t).text().indexOf("【VR】") >= 0 ? $(t).css("background-color", "black").css("color", "white") : null;
                    $(indexCd_id).children("a").append(`<div class='hobby_add'style='color: red;font-size: 14px;'>
                                ${dateString}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${pingfengString}</div>`);
                    $(indexCd_id).children("a").attr("release_date", dateString);
                    let s = 0;
                    let r = Math.random() / 100;
                    if (pingfengString.replace(/[\\(\\)]/g, "") != '') {
                        s = r + parseFloat(pingfengString.replace(/[\\(\\)]/g, ""));
                    } else {
                        s = 0 + r;
                    }
                    if (s >= 10) {
                        s = 0.01;
                    }
                    $(indexCd_id).children("a").attr("score", s);
                    setbgcolor(indexCd_id, dateString);
                    filerMonth(indexCd_id, dateString);
                    filerScore(indexCd_id, s);
                }

                if (document.title.search(/JAVLibrary/) > 0 && elems) {//javlib列表
                    for (let i = 0; i < elems.length; i++) {
                        let _vid = $(elems[i]).attr("id").replace('vid_', ''); //vid_javlikd42y
                        // 给列表中的影片添加鼠标点击事件
                        $("a", $("#vid_" + _vid)).first().mousedown((event) => {
                            // 判断鼠标左键或中间才执行
                            if (event.button < 2) {
                                // 设置点击后填充新的背景色peachpuff
                                $("#vid_" + _vid).css("background-color", "#ffe7d3");
                            }
                        });
                        let indexCd_id, actor, dateString, pingfengString;
                        // 仅提取演员、发行日期与评分，不再读写本地影片数据库。
                        function getMovieInfo() {
                            w.queue.push(() => {
                                let defer = $.Deferred();
                                const infoUrl = location.origin + '/ja/?v=' + encodeURIComponent(_vid);
                                const promise = Common.request(infoUrl);
                                promise.then(result => {
                                    if (result.loadstuts && result.status < 300) {
                                        indexCd_id = "#vid_" + result.finalUrl.split("=")[1];
                                        const doc = result.responseText;
                                        let movie_info = doc.substring(doc.search(/<table id="video_jacket_info">/),
                                            doc.search(/<div id="video_favorite_edit" class="">/));
                                        movie_info = movie_info.replace("src", "hobbysrc");
                                        const $doc = $(Common.parsetext(movie_info));
                                        actor = $('#video_cast .text .star a', $doc).text();
                                        dateString = $('#video_date .text', $doc).text();
                                        pingfengString = $('#video_review .text .score', $doc).text();
                                        extCode(indexCd_id, actor, dateString, pingfengString);
                                    }
                                    return Promise.resolve();
                                }).then(() => {
                                    setTimeout(() => defer.resolve(), 800);
                                });
                                return defer.promise();
                            });
                        }
                        getMovieInfo();
                    }
                }
            });

            w.setFourthCallback((elems) => { // todo 20190404
                if (document.title.search(/OneJAV/) > 0 && elems) {
                    // 增加对应所有番号的Javlib的跳转链接,
                    for (let index = 0; index < elems.length; index++) {
                        let aEle = $(elems[index]).find("h5.title.is-4.is-spaced a")[0];
                        let avid = $(aEle).text().replace(/[ ]/g, "").replace(/[\r\n]/g, "") //去掉空格//去掉回车换行
                        let avcd = avid;
                        if (!(/(-)/g).test(avid)) {
                            avcd = Common.getAvCode(avid);
                        }

                        //修改样式
                        $(aEle.parentElement.parentElement).attr("style", "flex-direction: column;");
                        if (!(/^FC2(-)/g).test(avid)) {
                            // Javlib的跳转链接
                            $(aEle.parentElement).append(renderSiteLinks(avcd, 'jump'));
                            bindTampermonkeyOpenLinks(aEle.parentElement);
                        }
                        // 番号预览大图
                        Common.addAvImg(avcd, ($img) => {
                            let divEle = $(elems[index]).find("div.column.is-5")[0];
                            if (divEle) {
                                $(divEle).append($img);
                            }
                        }, false);
                    }
                }

                if (((/(JavBus|AVMOO|AVSOX)/g).test(document.title) || $("footer:contains('JavBus')").length) && elems) {
                    if (location.pathname.search('/searchstar|/actresses|/&mdl=favor&sort=4') < 0) { //排除actresses页面
                        // 处理列表文字内容排版
                        for (let i = 0; i < elems.length; i++) {
                            //$(elems[i]).css("height","385px");
                            if ($(elems[i]).find("div.avatar-box").length > 0) continue;
                            let spanEle = $(elems[i]).find("div.photo-info span")[0];
                            let t1 = $(spanEle).html().substr($(spanEle).html().indexOf("<br>") + 4);
                            let t2 = $(spanEle).html().substr(0, $(spanEle).html().indexOf("<br>"));
                            $(spanEle).html(t1 + "<br>" + t2);
                            // 给列表中的影片添加鼠标点击事件
                            $("a", $(elems[i])).first().mousedown((event) => {
                                // 判断鼠标左键或中间才执行
                                if (event.button < 2) {
                                    // 设置点击后填充新的背景色peachpuff
                                    $(elems[i]).find(".movie-box").css("background-color", "#ffe7d3");
                                }
                            });
                        }
                    }
                }

                // javdb列表内容排版处理
                if ((/(JavDB)/g).test(document.title) && elems) {
                    elems.toArray().forEach(e => {
                        //移除新种标签
                        $(e).find(".tags.has-addons span:not(.tag.is-success,.tag.is-warning)").remove();
                        if ($(e).find(".tag.is-warning").length) {
                            $(e).find(".tag.is-warning").text("含中字");
                        }
                        let $div = $(e).find(".tags.has-addons").eq(0);
                        let avid = $(e).find(".video-title strong").text();

                        if (!$div.children().length) {
                            $div.append(`<span class="tag is-success" style="background-color:#fff;">.</span>`);
                        }
                        if (!$("#waterfall").hasClass("v cols-4 vcols-8")) {
                            $div.append(`
                                        ${renderSiteLinks(avid, "jump")}
                                    `);
                            bindTampermonkeyOpenLinks($div[0]);
                            if (isSiteEnabled('jav321', 'jump')) {
                                let $a = $(`
                                            <a title="素人 JAV资源站" href="javascript:void(0);">
                                                <span class="tag hobby" style="margin-right: 0px;background-color:#418fa7;">Jav321</span>
                                            </a>
                                        `);
                                $div.append(Common.jav321LinkMousedown($a, avid));
                            }
                            if (isSiteEnabled('javstore', 'jump')) {
                                let $b = $(`
                                            <a title="综合 JAV资源站" href="javascript:void(0);">
                                                <span class="tag hobby" style="margin-right: 0px;background-color:#ad1d18;">JavStore</span>
                                            </a>
                                        `);
                                $div.append(Common.javstoreLinkMousedown($b, avid));
                            }

                            // 提取评分数、评分人数
                            $(e).attr("score", $(e).find('.score>span').text().match(/-?(?:\d+(?:\.\d*)?|\.\d+)/g)[0]);
                            $(e).attr("usernum", $(e).find('.score>span').text().match(/-?(?:\d+(?:\.\d*)?|\.\d+)/g)[1]);
                        }
                    });
                }

            });

            if ((/(JavBus|AVMOO|AVSOX)/g).test(document.title) || $("footer:contains('JavBus')").length) {
                // javbus.com、avmo.pw、avso.pw 样式
                GM_addStyle(`
                    #waterfall_h {height: initial !important;width: initial !important;flex-direction: row;flex-wrap: wrap;margin: 5px 15px !important;}
                    #waterfall_h .item {position: relative !important;top: initial !important;left: initial !important;float: left;}
                    #waterfall_h .movie-box img {position: absolute; top: -200px; bottom: -200px; left: -200px; right: -200px; margin: auto;}
                    #waterfall_h .movie-box .photo-frame {position: relative;} #waterfall_h .avatar-box .photo-info p {margin: 0 0 2px;}
                    #waterfall_h .avatar-box .photo-info {line-height: 15px; padding: 6px;height: 220px;}
                    #waterfall_h .avatar-box .photo-frame {margin: 10px;text-align: center;}
                    #waterfall_h .avatar-box.text-center {height: 195px;}//actresses页面
                `);

                if ($('#waterfall').length == 0 && location.pathname.search(/search/) > 0 &&
                    location.pathname.search(/uncensored/) < 1) {
                    window.location.href = $('li[role="presentation"]:eq(1) a').attr("href");
                }

                if (location.pathname.includes('/uncensored') || location.hostname.includes('javbus.org') || (/(AVSOX)/g).test(document.title)) {
                    GM_addStyle(`#waterfall_h .movie-box {width: 354px;} #waterfall_h .movie-box .photo-info {height: 105px;}`);
                } else {
                    GM_addStyle(`#waterfall_h .movie-box {width: 167px;} #waterfall_h .movie-box .photo-info {height: 145px;}`);
                }
            }
        },
        // 瀑布流脚本
        waterfall: (() => {
            function waterfall(selectorcfg = {}) {
                // 瀑布流脚本使用类
                class Lock {
                    constructor(d = false) {
                        this.locked = d;
                    }
                    lock() {
                        this.locked = true;
                    }
                    unlock() {
                        this.locked = false;
                    }
                }
                // 创建请求队列  //浏览器对同一域名进行请求的最大并发连接数:chrome为6
                this.queue = new Queue(1);
                this.page_queue = new Queue(1);
                this.lock = new Lock();
                this.baseURI = this.getBaseURI();
                this.selector = {
                    next: 'a.next',
                    item: '',
                    cont: '#waterfall', //container
                    pagi: '.pagination',
                };
                Object.assign(this.selector, selectorcfg);
                this.pagegen = this.fetchSync(location.href);
                this.anchor = $(this.selector.pagi)[0];
                this._count = 0;
                this._1func = (cont, elems) => {
                    cont.empty().append(elems);
                };
                this._2func = (cont, elems) => {
                    cont.append(elems);
                };
                this._3func = (elems) => { };
                if ($(this.selector.item).length) {
                    // 开启关闭瀑布流判断
                    if (waterfallScrollStatus > 0) {
                        document.addEventListener('scroll', this.scroll.bind(this));
                        document.addEventListener('wheel', this.wheel.bind(this));
                    }
                    this.appendElems(this._1func);
                }
            }

            waterfall.prototype.getBaseURI = () => {
                let _ = location;
                return `${_.protocol}//${_.hostname}${(_.port && `:${_.port}`)}`;
            };
            waterfall.prototype.getNextURL = function (href) {
                let a = document.createElement('a');
                a.href = href;
                return `${this.baseURI}${a.pathname}${a.search}`;
            };
            // 瀑布流脚本
            waterfall.prototype.fetchURL = function (url) {
                let status = 404;
                const fetchwithcookie = fetch(url, { credentials: 'same-origin' });
                return fetchwithcookie.then(response => {
                        status = response.status;
                        return response.text();
                    }).then(html => new DOMParser().parseFromString(html, 'text/html'))
                    .then(doc => {
                        let $doc = $(doc);
                        let elems = [];
                        let nextURL;
                        if(status < 300){
                            let href = $doc.find(this.selector.next).attr('href');
                            nextURL = href ? this.getNextURL(href) : undefined;
                            elems = $doc.find(this.selector.item);
                            for (const elem of elems) {
                                const links = elem.getElementsByTagName('a');
                                for (const link of links) {
                                    link.target = "_blank";
                                }
                            }
                            if ($(JAVDB_ITEM_SELECTOR).length && (this._count !== 0) && url === nextURL) {
                                if ($(`#waterfall>div>a[href="${$(elems[0]).find('a.box')[0].attr('href')}"]`).length > 0) {
                                    nextURL = undefined;
                                    elems = [];
                                }
                            }
                        } else {
                            nextURL = $doc.url;
                        }
                        return {
                            nextURL,
                            elems
                        };
                    });
            };
            // 瀑布流脚本
            waterfall.prototype.fetchSync = function* (urli) {
                let url = urli;
                do {
                    yield new Promise((resolve, reject) => {
                        if (this.lock.locked) {
                            reject();
                        }
                        else {
                            this.lock.lock();
                            resolve();
                        }
                    }).then(() => {
                        return this.fetchURL(url).then(info => {
                            url = info.nextURL;
                            return info.elems;
                        });
                    }).then(elems => {
                        this.lock.unlock();
                        return elems;
                    }).catch((err) => {
                        // Locked!
                    });
                } while (url);
            };
            // 瀑布流脚本
            waterfall.prototype.appendElems = function () {
                let nextpage = this.pagegen.next();
                if (!nextpage.done) {
                    nextpage.value.then(elems => {
                        const cb = (this._count === 0) ? this._1func : this._2func;
                        cb($(this.selector.cont), elems);
                        this._count += 1;
                        // hobby mod script
                        this._3func(elems);
                        this._4func(elems);
                    });
                }
                return nextpage.done;
            };
            // 瀑布流脚本
            waterfall.prototype.end = function () {
                document.removeEventListener('scroll', this.scroll.bind(this));
                document.removeEventListener('wheel', this.wheel.bind(this));
                let $end = $(`<h1>The End</h1>`);
                $(this.anchor).replaceWith($end);
            };
            waterfall.prototype.reachBottom = function (elem, limit) {
                return (elem.getBoundingClientRect().top - $(window).height()) < limit;
            };
            //滚动条事件触发
            waterfall.prototype.scroll = function () {
                this.pageQueuePush();
            };
            //滚轮事件触发
            waterfall.prototype.wheel = function () {
                this.pageQueuePush();
            };
            waterfall.prototype.pageQueuePush = function () {
                this.page_queue.push(() => {
                    let defer = $.Deferred();
                    new Promise(resolve => {
                        if (this.reachBottom(this.anchor, 1200) && this.appendElems(this._2func)) {
                            this.end();
                        }
                        resolve();
                    }).then(() => {
                        // 延迟1秒运行定时循环函数
                        setTimeout(() => {
                            // 判断域名是否当前页
                            if (document.title.search(/JAVLibrary/) > 0) {
                                // 定时循环函数,当队列执行完成时结束
                                var s4 = setInterval(() => {
                                    if (this.queue.taskList.length == 0) {
                                        defer.resolve();
                                    }
                                }, 200);
                            } else {
                                defer.resolve();
                            }
                        }, 500);
                    });
                    return defer.promise();
                });
            };
            waterfall.prototype.setFirstCallback = function (f) {
                this._1func = f;
            };
            waterfall.prototype.setSecondCallback = function (f) {
                this._2func = f;
            };
            waterfall.prototype.setJavlibCallback = function (f) {
                this._3func = f;
            };
            waterfall.prototype.setFourthCallback = function (f) {
                this._4func = f;
            };
            return waterfall;
        })(),
        // 挊
        nong: {
            main: {
                //av信息查询类
                //avsox|avmoo
                jav: {
                    type: 0,
                    re: /.*movie.*/,
                    vid: () => {
                        return $('.header_hobby')[0].nextElementSibling.getAttribute("avid");
                    },
                    proc: (main) => {
                        var divE = $("div[class='col-md-3 info']")[0];
                        $(divE).after(main.cur_tab);
                    }
                },
                javbus: {
                    type: 0,
                    re: /(jav|bus|dmm|see|cdn|fan){2}\./g,
                    vid: () => {
                        var a = $('.header_hobby')[0].nextElementSibling;
                        return a ? a.getAttribute("avid") : '';
                    },
                    proc: (main) => {
                        var divE = $("div[class='col-md-3 info']")[0];
                        $(divE).after(main.cur_tab);
                    }
                },
                javlibrary: {
                    type: 0,
                    re: /.*\?v=jav.*/,
                    vid: () => {
                        let avid = $('#video_id')[0].getElementsByClassName('text')[0].getAttribute("avid");
                        return Common.getAvCode(avid);
                    },
                    proc: (main) => {
                        //去十八岁警告
                        Common.setCookie("over18", 18);
                        $('.socialmedia').remove();
                        GM_addStyle(`
                            #video_info {text-align: left;font: 14px Arial;min-width: 230px;max-width: 260px;padding: 0px 0px 0px 0px;}
                            #video_jacket_info {overflow: hidden;} //table-layout: fixed;
                            #coverimg {vertical-align: top;overflow: hidden;max-width: 50%;}
                            #javtext {vertical-align: top;width: 260px;}
                            #video_info td.header {width: 75px;}
                            #video_info td.icon {width: 0px;}
                            #content {padding-top: 0px;}
                            #video_info table {margin-top: 6px;border-bottom: 1px solid #ffffff;}
                        `);

                        var tdE = $("td[style='vertical-align: top;']")[0];
                        tdE.id = "coverimg";
                        $("td[style='vertical-align: top;']")[1].id = 'javtext';
                        $('#leftmenu').remove();
                        $('#rightcolumn').attr("style", "margin: 0px 0px 0px 0px;width: 100%;padding: initial;");
                        $(tdE.parentElement).append('<td id="hobby" style="vertical-align: top;"></td>');
                        $('#hobby').append(main.cur_tab);
                    }
                },
                javstore: {
                    type: 0,
                    re: /.*javstore.*/,
                    vid: () => {
                        if (GM_getValue(document.URL, false)) {
                            let avid = GM_getValue(document.URL);
                            GM_deleteValue(document.URL);
                            $('.boxoleft .box_left_news.news_2n').attr("avid", avid);
                            return avid;
                        } else {
                            let $ele = $('.boxoleft .box_left_news.news_2n').attr("avid", $('.name').text().match(/[a-z|A-Z|0-9| _-]+/)[0].trim());
                            return $ele.attr('avid');
                        }
                    },
                    proc: (main) => {
                        $('.boxoleft .box_left_news.news_2n').append(main.cur_tab);
                    }
                },
            },
            resource_sites: {
                [magnetSourceHost(MAGNET_SOURCES.find(source=>source.id==='javdb'))]: (kw, callback) => {
                    const searchHost=GM_getValue('search_index');
                    const searchUrl=buildMagnetSearchUrl('javdb',kw);
                    if(!searchUrl){callback('',[]);return;}
                    let promise = Common.request(searchUrl, "https://" + searchHost + "/");
                    promise.then((result) => {
                        let data = [];
                        return new Promise((resolve, reject) => {
                            thirdparty.nong.search_engines.full_url = result.finalUrl;
                            let doc = Common.parsetext(result.responseText);
                            let a = $(doc).find(`.box .video-title:contains('${kw.toUpperCase().replace("+", "-")}')`);
                            if (a) {
                                let url;
                                try { url=new URL(a[0].parentElement.getAttribute('href'),"https://"+searchHost+"/").href; }
                                catch(error) { reject(error);return; }
                                resolve(url);
                            }
                            else {
                                reject();
                            }
                        }).then(url => {
                            Common.request(url).then(result => {
                                thirdparty.nong.search_engines.full_url = result.finalUrl;
                                let doc = Common.parsetext(result.responseText);
                                let t = $(doc).find('#magnets-content .item');
                                if (t) {
                                    for (let elem of t) {
                                        data.push({
                                            "title": elem.querySelector(".magnet-name span:nth-child(1)").textContent,
                                            "maglink": elem.querySelector(".magnet-name a:nth-child(1)").href,
                                            "size": elem.querySelector(".magnet-name .meta") ? elem.querySelector(".magnet-name .meta").textContent : "",
                                            "src": result.finalUrl,
                                        });
                                    }
                                }
                                else {
                                    data.push({
                                        "title": "没有找到磁链接",
                                        "maglink": "",
                                        "size": "0",
                                        "src": result.finalUrl,
                                    });
                                }
                                callback(result.finalUrl, data);
                            })
                        }).catch(() => {
                            data.push({
                                "title": "没有找到磁链接",
                                "maglink": "",
                                "size": "0",
                                "src": result.finalUrl,
                            });
                            callback(result.finalUrl, data);
                        });
                    });
                },
                [magnetSourceHost(MAGNET_SOURCES.find(source=>source.id==='btsow'))]: (kw, callback) => {
                    const searchUrl=buildMagnetSearchUrl('btsow',kw);if(!searchUrl){callback('',[]);return;}
                    let promise = Common.request(searchUrl);
                    promise.then((result) => {
                        thirdparty.nong.search_engines.full_url = result.finalUrl;
                        var doc = Common.parsetext(result.responseText);
                        if (!doc) {
                            thirdparty.nong.search_engines.parse_error(GM_getValue('search_index'));
                        }
                        var data = [];
                        var t = doc.getElementsByClassName('data-list')[0];
                        if (t) {
                            var a = t.getElementsByTagName('a');
                            for (var i = 0; i < a.length; i++) {
                                if (!a[i].className.match('btn')) {
                                    data.push({
                                        'title': a[i].title,
                                        'maglink': 'magnet:?xt=urn:btih:' + a[i].outerHTML.replace(/.*hash\//, '').replace(/" .*\n.*\n.*\n.*/, ''),
                                        'size': a[i].nextElementSibling.textContent,
                                        'src': a[i].href,
                                    });
                                }
                            }
                        }
                        callback(result.finalUrl, data);
                    });
                },
                [magnetSourceHost(MAGNET_SOURCES.find(source=>source.id==='btdig'))]: (kw, callback) => {
                    const searchUrl=buildMagnetSearchUrl('btdig',kw);if(!searchUrl){callback('',[]);return;}
                    let promise = Common.request(searchUrl);
                    promise.then((result) => {
                        thirdparty.nong.search_engines.full_url = result.finalUrl;
                        let doc = Common.parsetext(result.responseText);
                        let data = [];
                        let t = doc.querySelectorAll("div.one_result");
                        if (t) {
                            for (let elem of t) {
                                data.push({
                                    "title": elem.querySelector(".torrent_name a").textContent,
                                    "maglink": elem.querySelector(".fa.fa-magnet a").href,
                                    "size": elem.querySelector(".torrent_size").textContent,
                                    "src": elem.querySelector(".torrent_name a").href,
                                });
                            }
                        }
                        else {
                            data.push({
                                "title": "没有找到磁链接",
                                "maglink": "",
                                "size": "0",
                                "src": result.finalUrl,
                            });
                        }
                        callback(result.finalUrl, data);
                    });
                },
                [magnetSourceHost(MAGNET_SOURCES.find(source=>source.id==='nyaa'))]: (kw, callback) => {
                    const searchUrl=buildMagnetSearchUrl('nyaa',kw);if(!searchUrl){callback('',[]);return;}
                    let promise = Common.request(searchUrl);
                    promise.then((result) => {
                        thirdparty.nong.search_engines.full_url = result.finalUrl;
                        let doc = Common.parsetext(result.responseText);
                        if (!doc) {
                            thirdparty.nong.search_engines.parse_error(GM_getValue('search_index'));
                        }
                        let data = [];
                        let t = doc.querySelectorAll("tr.default,tr.success");
                        if (t.length !== 0) {
                            for (let elem of t) {
                                data.push({
                                    "title": elem.querySelector("td:nth-child(2)>a:nth-child(1)").title,
                                    "maglink": elem.querySelector("td:nth-child(3)>a:nth-last-child(1)").href,
                                    //"torrent_url": "https://nyaa.si" + elem.querySelector("td:nth-child(3)>a:nth-child(1)").href,
                                    "size": elem.querySelector("td:nth-child(4)").textContent,
                                    "src": new URL(elem.querySelector("td:nth-child(2)>a:nth-child(1)").getAttribute('href'),searchUrl).href,
                                });
                            }
                        }
                        callback(result.finalUrl, data);
                    });
                },
                [magnetSourceHost(MAGNET_SOURCES.find(source=>source.id==='torrentkitty'))]: (kw, callback) => {
                    const searchUrl=buildMagnetSearchUrl('torrentkitty',kw);if(!searchUrl){callback('',[]);return;}
                    let promise = Common.request(searchUrl);
                    promise.then((result) => {
                        thirdparty.nong.search_engines.full_url = result.finalUrl;
                        let doc = Common.parsetext(result.responseText);
                        let data = [];
                        let t = $(doc).find("#archiveResult tr:gt(0)");
                        if (t) {
                            for (let elem of t) {
                                if ((/(No result)/g).test(elem.querySelector(".name").textContent))
                                    break;
                                data.push({
                                    "title": elem.querySelector(".name").textContent,
                                    "maglink": elem.querySelector(".action>a:nth-child(2)").href,
                                    "size": elem.querySelector(".size").textContent,
                                    "src": new URL(elem.querySelector(".action>a:nth-child(1)").getAttribute('href'),searchUrl).href,
                                });
                            }
                        }
                        else {
                            data.push({
                                "title": "没有找到磁链接",
                                "maglink": "",
                                "size": "0",
                                "src": result.finalUrl,
                            });
                        }
                        callback(result.finalUrl, data);
                    });
                },
            },
            // 挊
            search_engines: {
                cur_engine: (kw, callback) => {
                    const ops=enabledMagnetSources();if(!ops.length){callback('',[]);return;}
                    let selected=GM_getValue('search_index',ops[0]);if(!ops.includes(selected)){selected=ops[0];GM_setValue('search_index',selected);}
                    const engine=thirdparty.nong.resource_sites[selected];if(typeof engine!=='function'){callback('',[]);return;}return engine(kw,callback);
                },
                parse_error: (a) => {
                    alert("调用搜索引擎错误，可能需要更新，请向作者反馈。i=" + a);
                },
                full_url: '',

            },
            // 挊
            magnet_table: {
                template: {
                    create_head: () => {
                        const row = document.createElement('tr'); row.className = 'jav-nong-row'; row.id = 'jav-nong-head';
                        const first = document.createElement('th'), select = document.createElement('select');
                        const sourceLabel = document.createElement('span'); sourceLabel.textContent = '来源：'; first.appendChild(sourceLabel);
                        const hosts = enabledMagnetSources();
                        for (const host of hosts) { const option = document.createElement('option'); option.value = host; option.textContent = magnetSourceLabel(host) + ' · ' + host; select.appendChild(option); }
                        const selected = GM_getValue('search_index', hosts[0] || '');
                        select.value = hosts.includes(selected) ? selected : (hosts[0] || '');
                        first.appendChild(select);
                        const settings = document.createElement('a'); settings.href = '#'; settings.textContent = '设置'; settings.style.marginLeft = '8px';
                        settings.addEventListener('click', event => { event.preventDefault(); Common.openSystemConfig(); });
                        first.appendChild(settings);
                        const searchPage = document.createElement('a'); searchPage.className = 'nong-search-page'; searchPage.href = '#';
                        searchPage.target = '_blank'; searchPage.rel = 'noopener noreferrer'; searchPage.textContent = '搜索页'; searchPage.style.marginLeft = '8px';
                        first.appendChild(searchPage); row.appendChild(first);
                        for (const title of ['文件名', '大小', '磁链']) { const cell = document.createElement('th'); cell.textContent = title; row.appendChild(cell); }
                        select.addEventListener('change', () => {
                            GM_setValue('search_index', select.value);
                            const old = document.getElementById('nong-table-new'); if (old) old.remove();
                            thirdparty.nong.searchMagnetRun();
                        });
                        return row;
                    },
                    create_row: data => {
                        const row = document.createElement('tr'); row.className = 'jav-nong-row';
                        const magnet = String(data.maglink || ''); row.setAttribute('maglink', magnet);
                        const sourceCell = document.createElement('td'), sourceLink = document.createElement('a');
                        const sourceUrl = String(data.src || ''); let host = '';
                        try { host = new URL(sourceUrl, location.href).hostname; } catch (error) {}
                        sourceLink.href = sourceUrl || '#'; sourceLink.target = '_blank'; sourceLink.rel = 'noopener noreferrer';
                        sourceLink.textContent = magnetSourceLabel(host); sourceLink.title = host || sourceUrl; sourceCell.appendChild(sourceLink);
                        const nameCell = document.createElement('td'); nameCell.textContent = data.title || '未命名资源'; nameCell.title = data.title || '';
                        const sizeCell = document.createElement('td'); sizeCell.textContent = data.size || '未知';
                        const magnetCell = document.createElement('td'), magnetLink = document.createElement('a');
                        const isMagnet = /^magnet:\?xt=urn:btih:/i.test(magnet);
                        magnetLink.className = 'nong-magnet-link'; magnetLink.href = isMagnet ? magnet : '#';
                        magnetLink.textContent = isMagnet ? '打开磁链' : '等待解析'; magnetCell.appendChild(magnetLink);
                        const copy = document.createElement('button'); copy.type = 'button'; copy.className = 'nong-copy';
                        copy.textContent = '复制完整磁链'; copy.setAttribute('data-magnet', isMagnet ? magnet : '');
                        copy.disabled = !isMagnet; magnetCell.appendChild(copy);
                        if (magnet.indexOf('#magnetlink') >= 0) {
                            Common.request(magnet + '?hobbyId=' + encodeURIComponent(data.id || '')).then(result => {
                                const marker = '#website#infohash#', index = result.responseText.indexOf(marker);
                                if (index < 0) return;
                                const hash = result.responseText.substring(index + marker.length, index + marker.length + 40);
                                if (!/^[a-f0-9]{40}$/i.test(hash)) return;
                                const fullMagnet = 'magnet:?xt=urn:btih:' + hash;
                                row.setAttribute('maglink', fullMagnet); magnetLink.href = fullMagnet;
                                magnetLink.textContent = '打开磁链'; copy.setAttribute('data-magnet', fullMagnet); copy.disabled = false;
                            }, () => {});
                        }
                        row.append(sourceCell, nameCell, sizeCell, magnetCell); return row;
                    },
                    create_loading: () => {
                        const row = document.createElement('tr'); row.className = 'jav-nong-row';
                        const cell = document.createElement('td'); cell.colSpan = 4; cell.id = 'notice';
                        cell.textContent = '正在搜索磁力资源…'; row.appendChild(cell); return row;
                    }
                },
                create_empty_table: () => { const table = document.createElement('table'); table.id = 'nong-table-new'; return table; },
                updata_table: (src, data) => {
                    const table = document.getElementById('nong-table-new'); if (!table) return;
                    const notice = table.querySelector('#notice'); if (notice) notice.parentElement.remove();
                    for (const item of data) table.appendChild(thirdparty.nong.magnet_table.template.create_row(item));
                    const searchPage = table.querySelector('.nong-search-page'); if (searchPage && src) searchPage.href = src;
                    thirdparty.nong.magnet_table.reg_event();
                },
                full: () => {
                    const table = thirdparty.nong.magnet_table.create_empty_table();
                    table.appendChild(thirdparty.nong.magnet_table.template.create_head());
                    table.appendChild(thirdparty.nong.magnet_table.template.create_loading()); return table;
                },
                handle_event: event => {
                    const button = event.target.closest('.nong-copy'); if (!button) return;
                    const magnet = button.getAttribute('data-magnet') || (button.closest('tr') ? button.closest('tr').getAttribute('maglink') : '') || '';
                    if (!/^magnet:\?xt=urn:btih:/i.test(magnet)) { button.textContent = '磁链尚未就绪'; return; }
                    GM_setClipboard(magnet); button.textContent = '已复制';
                    setTimeout(() => { button.textContent = '复制完整磁链'; }, 1000); event.preventDefault();
                },
                reg_event: () => {
                    document.querySelectorAll('#nong-table-new .nong-copy').forEach(button => {
                        if (button.dataset.bound === '1') return;
                        button.dataset.bound = '1';
                        button.addEventListener('click', thirdparty.nong.magnet_table.handle_event, false);
                    });
                }
            },
            // 挊
            searchMagnetRun: () => {
                let main = thirdparty.nong.main;
                let main_keys = Object.keys(main);
                main.cur_tab = null;
                main.cur_vid = '';
                for (var i = 0; i < main_keys.length; i++) {
                    var v = main[main_keys[i]];
                    if (new RegExp(v.re).test(location.href)) {
                        if (v.type === 0) {
                            try {
                                main.cur_vid = v.vid();
                            }
                            catch (e) {
                                main.cur_vid = '';
                            }
                            if (main.cur_vid) {
                                GM_addStyle(`
                                    #nong-table-new{margin:10px auto;color:#666 !important;font-size:13px;text-align:center;background-color: #F2F2F2;}
                                    #nong-table-new th,#nong-table-new td{text-align: center;height:30px;background-color: #FFF;padding:0 5px 0;border: 1px solid #EFEFEF;}
                                    .jav-nong-row{text-align: center;height:30px;background-color: #FFF;padding:0 5px 0;border: 1px solid #EFEFEF;}
                                    .nong-copy{margin-left:8px;padding:3px 8px;cursor:pointer;}
                                    .nong-copy:disabled{opacity:.5;cursor:not-allowed;}
                                    #jav-nong-head a{margin-right:5px;color:#08c;}
                                    #nong-table-new td{max-width:520px;overflow-wrap:anywhere;}
                                `);
                                main.cur_tab = thirdparty.nong.magnet_table.full();
                                v.proc(main);
                                if (!enabledMagnetSources().length) {
                                    const notice=document.querySelector('#nong-table-new #notice');
                                    if(notice)notice.textContent='没有启用任何磁力搜索源，请点击设置并至少启用一个来源。';
                                    return;
                                }
                                thirdparty.nong.search_engines.cur_engine(main.cur_vid, (src, data) => { //callback
                                    if (data.length === 0) {
                                        let url = thirdparty.nong.search_engines.full_url;
                                        const notice=document.querySelector('#nong-table-new #notice');
                                        if(notice){notice.textContent='没有找到磁力资源。';if(url){const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=' 查看搜索页';notice.appendChild(link);}}
                                    }
                                    else {
                                        thirdparty.nong.magnet_table.updata_table(src, data);
                                    }
                                });
                            }
                        }
                        break;
                    }
                }
            },
        },
    };

    function mainRun() {
        Common.init();
        GM_addStyle(`
			.tm-setting {display: flex;align-items: center;justify-content: space-between;padding-top: 20px;}
            .tm-checkbox {width: 16px;height: 16px;}
			.tm-text {width: 150px;height: 16px;}
		`);

        Jav.javStoreScript();
        // 判断是否指定页面
        if ((/(JAVLibrary|JavBus|AVMOO|AVSOX)/g).test(document.title) || $("footer:contains('JavBus')").length) {
            Common.addAvImgCSS();
            GM_addStyle(`
                .container {width: 100%;float: left;}
                .col-md-3 {float: left;max-width: 260px;}
                .col-md-9 {width: inherit;}
                .hobby-a {color: red; font: bold 12px monospace;}   /*javlib*/
                .footer {padding: 20px 0;background: #1d1a18;float: left;} /*javbus*/
                #nong-table-new {margin: initial !important;important;color: #666 !important;font-size: 13px;text-align: center;background-color: #F2F2F2;float: left;}
                .header_hobby {font-weight: bold;text-align: right;width: 75px;} /*javbus*/
            `);
            Jav.javlibaryScript();
            Jav.javBusScript();
        }

        Jav.oneJavScript();
        Jav.jav321Script();
        Jav.javDBScript();
    }
    mainRun();
})();