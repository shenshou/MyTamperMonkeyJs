// ==UserScript==
// @name         OneJAVOneWeb list
// @name:zh-CN   OneJAVOneWeb list维护版
// @namespace    https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list
// @version      2026.1122.14
// @description  一个插件畅览N个JAV网站，涵盖车牌信息、演员信息、磁力种子、片花、在线观看、资讯及可选缩略图预览等
// @author       匿名
// @license      GPL
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAQCEeRdzAAAC1klEQVR4nK1V/U+NYRg+/4kxHylUxsx8bD4yH7PxAxmzMfO9qemkcyo5NX1wyEhD6WSpOSXmGG1+UBZJ0rA5FErIGbIoSowu9/1e7znvOfNbvNuznef+uO7rvp/reY4N9f7VWFLQjbh0YHrG6JbmKoZg2ZBQEEB0Kh3xowTUNVkwBMtmoMc6gakOc6Uhgq3+jkljTNCmMVNkxadbMWqTfBti9gEOL/D4NdDaCTS/AFYeAaaZBZYeApqeA2tPEESTL9wFqu8RUGOWHQYedAEpVQI4yQ5U3kHEt70MxhjihNXFFtqKbsCIVabtAdq02MQUYE8F9/k+AdSA5VLBc4vGknpg9gG2sDgPGPpB+/WHnFOUnQz123wGGJsMHK3jfuMpAdQZaOX1J2nc6WGSzm3TaYu1v4ctqi+zhjbXJWBMEnC1DRj+CSw4aALqHLeUMCj5vLQr+yhhk3sF+PUb6JAWv34HFuaSZWIRYytuAxP2Ak+l2LN3xjgswK2lfwNebgUCfUBpA30bigk4NxvoHwIa24FZWcC3YaC2xWBvAW47awFqkp6yVm7qkGKmL6OGhfRkH3UDXR+BdSbbrFojj4DKaIfHAtSZzs8BBqTNm09EDpX0nWvkDHV5m8UvLN3X6DNlZQHuKrcAx8tcEiVgZCRSTtqiHpay1ANRf9sr4EO/KMNlaJSyUUZJppZ2l1MKTi/32raKfVDk8+YTZ6YERCKhr8HPsQk5m1xqXp8yU4c6k3HJbE+/FW5Kw9dm7RVwkWj0yyBtx+o4BgNQgXoH6Ah8pqg14X4nT3JONqVRWBem01Qy7emjTfUaYhhsTb88H4NnZALdvSLmt7x+0WEqcFZzRAr48j1ZzssJPR42I9lexcpq1Nugz9iqQrmSbj4Gup+5H1hzXBi7GKOFEvLlhhVbr44BGGsyMClbT5SDWgzuNSn8ydKluWoLe+oiH9h/WdHBB/Y//wX8ASlYtkPZ5uteAAAAAElFTkSuQmCC
// @include      *://*.141jav.com/*
// @include      *://*.141ppv.com/*
// @include      *://*.g64w.com/*
// @include      *://*.u65w.com/*
// @include      *://*.h68g.com/*
// @include      *://*.c70j.com/*
// @include      *://*.f61m.com/*
// @include      *://*.g60y.com/*
// @include      *://*.jav321.com/*
// @include      *://*.javlib.com/*
// @include      *://*.javlibrary.com/*
// @include      *://*.n53i.com/*
// @include      *://*.onejav.com/*
// @include      *://*/cn/?v=jav*
// @include      *://*/en/?v=jav*
// @include      *://*/ja/?v=jav*
// @include      *://*/jp.page/movie?id=*
// @include      *://*/tw/?v=jav*
// @include      *://*/tw/movie/jav*
// @include      *://*/web/video?id=*
//
// 7mmtv
// @include      *://7mm*.*/*
// @include      *://aa1141.com/*
// @include      *://aa1142.com/*
// @exclude      https://7mm*/*/*search/*/*/1.html
// @exclude      https://aa*.com/*/*search/*/*/1.html
//
// 18AV視頻站 https://aabb1803.com/
// @include      *://18h.tv/*
// @include      *://a2a*/*
// @include      *://maa18*.com/*/chinese_content/*/*.html
// @include      *://maa18*.com/*/uncensored_content/*/*.html
// @match        *://maa18*.com/*/fc_search/all/*/1.html
// @exclude      https://maa18*.com/zh/*/1.html
// @exclude      https://maa18*.com/zh/*/all/*-*-*.html
// @exclude      https://maa18*.com/zh/*/all/index.html
// @exclude      https://maa18*.com/zh/*/list/index.html
//
// @include      *://9sex.tv/web/video?id=*
// @include      *://9sex.tv/web/skip/video?id=*
// @include      *://*/web/search?page=1&keyWord=*
// @include      *://airav*/*/playon.aspx*
// @include      *://freejavbt.com/*
// @include      *://freejavbt.xyz/*
// @include      *://hpav.tv/*
// @include      *://hpjav.tv/*
// @include      *://hdouban.com/moviedetail/*
// @include      *://byym21.com/moviedetail/*
// @include      *://jable.tv/*
// @include      *://jav.place/video/*
// @include      *://javbooks.com/content*censored/*.htm
// @include      *://javbooks.com/serch*
// @include      *://javmenu.com/*/*
// @include      *://jav-for.me/*.html
// @include      *://jav-for.me/?do=search*
// @include      *://www.mgstage.com/search*
// @include      *://onejav.com/torrent/*
// @include      *://paycalling.com/web/video?id=*
// @include      *://sextb.net/*
// @include      *://www.jav321.com/video/*
// @include      /^.*(avmoo|avsox)\..*$/
// @include      *://javdb*.com/v/*
// @include      *://javdb*.com/search?q=*
// @include      *://javdb*.com/actors/*
// @exclude      *://javdb*.com/actors/*?sort_type=*&vft=*
// @exclude      *://javdb*.com/actors/*?page=*&sort_type=*&vft=*
// @exclude      *://javdb*.com/actors/*?page=*&sort_type=*&t=*
// @exclude      *://javdb*.com/actors/*?t=*&sort_type=*
// @include      /^.*(jav|bus|dmm|see|cdn|fan){2}\..*$/
// @include      /^.*(hdouban)[0-9]*\..*$/
// @exclude	     *://onejav.com/search/*
// @exclude      *://javmenu.com/*/search?wd=*-*
// @exclude      *://javmenu.com/*/search?wd=*_*
// @exclude      /^https?:\/\/javmenu.com\/(?:zh-Hant|zh|en|ja|ko|de|es|fr|ru).*$\/FC2
// @exclude      /^https?:\/\/javmenu.com\/(?:zh-Hant|zh|en|ja|ko|de|es|fr|ru).*$\/censored
// @exclude      /^https?:\/\/javmenu.com\/(?:zh-Hant|zh|en|ja|ko|de|es|fr|ru).*$\/uncensored
// @exclude      /^https?:\/\/javmenu.com\/(?:zh-Hant|zh|en|ja|ko|de|es|fr|ru).*$\/western
// @exclude      /^https?:\/\/(?:[A-Za-z0-9]+\.)*(?:javbus|busjav|busfan|fanbus|buscdn|cdnbus|dmmsee|seedmm|busdmm|dmmbus|javsee|seejav){1}(?:\.[A-Za-z0-9]+)?\/(?:forum|actresses|uncensored|genre|series|studio|page){1,}\/?\S*$/
// @exclude      https://javcv.com/search*
// @exclude      https://*.jd.com/*
// @match      *://*.141jav.com/*
// @match      *://*.141ppv.com/*
// @match      *://*.f61m.com/*
// @match      *://*.g60y.com/*
// @match      *://*.jav321.com/*
// @match      *://*.javlibrary.com/*
// @match      *://*.n53i.com/*
// @match      *://*.onejav.com/*
// @match      *://*/cn/?v=jav*
// @match      *://*/en/?v=jav*
// @match      *://*/ja/?v=jav*
// @match      *://*/jp.page/movie?id=*
// @match      *://*/tw/?v=jav*
// @match      *://*/tw/movie/jav*
// @match      *://*/web/video?id=*
// @match      *://*javlib.com/*
// @match      *://7mm*.*/*
// @match      *://9sex.tv/web/video?id=*
// @match      *://9sex.tv/web/skip/video?id=*
// @match      *://airav*/*/playon.aspx*
// @match      *://airav.fun/*/playon.aspx*
// @match      *://airav.fun/*/playon.aspx?hid=*
// @match      *://avmoo.cfd/*/movie/*
// @match      *://avsox.click/*/movie/*
// @match      *://db.msin.jp/jp.page/movie?id=*
// @match      *://db.msin.jp/page/movie?id=*
// @match      *://freejavbt.com/*
// @match      *://freejavbt.xyz/*
// @match      *://hpav.tv/*
// @match      *://hpjav.tv/*
// @match      *://hpjav.tv/ja/*
// @match      *://hdouban.com/moviedetail/*
// @match      *://byym21.com/moviedetail/*
// @match      *://jable.tv/*
// @match      *://jable.tv/videos/*
// @match      *://jav.place/video/*
// @match      *://jav.place/en/video/*
// @match      *://jav4.land/*/movie/jav*.html
// @match      *://jav4.dog/*/movie/jav*.html
//
// javbooks aabb1802.com
// @match      *://javbooks.com/content*censored/*.htm
// @match      *://jmvbt.com/content*censored/*.htm
// @match      *://*.com/content*censored/*.htm
//
// 98
// @match        https://www.sehuatang.net/thread-*
// @match        https://www.sehuatang.net/forum.php?mod=viewthread&tid=*
// @match        https://*/thread-*
// @match        https://*/forum.php?mod=viewthread&tid=*
//
// javhoo.org
// @match        https://www.javhoo.org/av/*
// @match        https://www.javhoo.org/search/*
// @match      *://javdb*.com/v/*
// @match      *://javdb*.com/search?q=*
// @match      *://javmenu.com/*/*
// @match      *://jav-for.me/*.html
// @match      *://onejav.com/torrent/*
// @match      *://paycalling.com/web/video?id=*
// @match      *://sextb.net/*
// @match      *://*.airav.wiki/video/*
// @match      *://www.141jav.com/torrent/*
// @match      *://www.buscdn.*/*
// @match      *://www.busdmm.*/*
// @match      *://www.busjav.*/*
// @match      *://www.cdnbus.*/*
// @match      *://www.jav321.com/video/*
// @match      *://www.javbus.com/*
// @match      *://www.javbus.*/*
// @match      *://www.javsee.*/*
// @match      *://www.seejav.*/*
// @match      *://fh.fanhaoben.bar/*/rsearch/?query=*
// @match      *://*/Search?s=*
// @match      *://projectjav.com/?searchTerm=*
// @match      *://www.r18.com/common/search/searchword=*
// @match      *://*.javfun.me/search/*
// @match      *://bejav.net/search/*
// @match      *://javhd.today/search/video/?s=*
// @match      *://javabc.com/search/*
// @match      *://svjav.com/search/*
// @match      *://*/search*
// @match      *://*/?s=*
// @match      *://*/*/main/search*

// @match      *://*/thread-*-1-*.html
// @match      *://javstore.net/*-pn.html
// @match      *://btsow.*/magnet/detail/hash/*
// @match      *://www.sexbartv.info/*
// @match      *://xslist.org/*/model/*.html
// @match      *://*/forum*
// @match      *://javcv.com/movie/*
// @match      *://javcv.com/fc2/movie/*

// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @run-at       document-end
// @downloadURL https://raw.githubusercontent.com/shenshou/MyTamperMonkeyJs/main/scripts/OneJAVOneWeb%20list%E7%BB%B4%E6%8A%A4%E7%89%88.user.js
// @updateURL https://raw.githubusercontent.com/shenshou/MyTamperMonkeyJs/main/scripts/OneJAVOneWeb%20list%E7%BB%B4%E6%8A%A4%E7%89%88.user.js
// ==/UserScript==
(function () {
    'use strict';
    /* Native selector helpers: avoid relying on jQuery supplied by the host page. */
    function $(selector) {
        const elements = Array.from(document.querySelectorAll(selector));
        elements.text = () => elements.map(element => element.textContent || '').join('');
        elements.after = html => elements.forEach(element => element.insertAdjacentHTML('afterend', html));
        elements.before = html => elements.forEach(element => element.insertAdjacentHTML('beforebegin', html));
        elements.append = html => elements.forEach(element => element.insertAdjacentHTML('beforeend', html));
        elements.remove = () => elements.forEach(element => element.remove());
        return elements;
    }
    const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
    let previewEnabled = GM_getValue('onejav_preview_enabled', false) === true;
    const GALLERY_MANAGER_KEY = 'onejav_gallery_manager_v1';
    const GALLERY_DEFAULTS = [
        {id:'mic',name:'mic写真集',url:'https://www.micmicidol.com/'},
        {id:'wndfx',name:'Wndfx',url:'https://www.wndfx.com/'},
        {id:'hentai',name:'Hentai',url:'https://hentai-img.com/'},
        {id:'cosplay',name:'Cosplay',url:'https://zh.hentai-cosplays.com/'},
        {id:'porn',name:'Porn',url:'https://zh.porn-images-xxx.com/'},
        {id:'xiuren',name:'Xiuren',url:'http://www.xiuren.org/'},
        {id:'everia',name:'Everia',url:'https://everia.club/'},
        {id:'nsfwx',name:'Nsfwpicx',url:'https://nsfwx.pics/'},
        {id:'asian',name:'Asian',url:'https://asiantolick.com/'},
        {id:'xchina',name:'小黄书',url:'https://xchina.co/'},
        {id:'heyzo',name:'Heyzo',url:'https://jjgirls.com/'},
        {id:'photos18',name:'色圖',url:'https://www.photos18.com/'},
        {id:'tvv',name:'tvv',url:'https://mm.tvv.tw/'},
        {id:'pornpics',name:'Porn Pics',url:'https://www.pornpics.com/'},
        {id:'idol',name:'Idol',url:'https://idol.gravureprincess.date/'},
        {id:'hotgirl',name:'HOTGIRL',url:'https://hotgirl.asia/'},
        {id:'buondua',name:'Buon Dua',url:'https://buondua.com/'},
        {id:'nongmo',name:'NongMo',url:'https://www.ilovexs.com/'},
        {id:'nudecosplay',name:'NUDECOSPLAY',url:'https://nudecosplaygirls.com/'},
        {id:'nudebird',name:'NudeBird',url:'https://nudebird.biz/'},
        {id:'goddess247',name:'Goddess247',url:'https://goddess247.com/'},
        {id:'kissgoddess',name:'Kiss Goddess',url:'https://tw.goddesssite.com/'},
        {id:'girlpic',name:'girlpic',url:'https://girlygirlpic.com/'}
    ];
    const ensureGallerySettings = value => {
        if (!value || typeof value !== 'object' || Array.isArray(value)) value = {};
        if (typeof value.enabled !== 'boolean') value.enabled = true;
        ['disabled','deleted','order'].forEach(key => {
            if (!Array.isArray(value[key])) value[key] = [];
            else value[key] = value[key].filter(item => typeof item === 'string');
        });
        if (!value.overrides || typeof value.overrides !== 'object' || Array.isArray(value.overrides)) value.overrides = {};
        if (!Array.isArray(value.custom)) value.custom = [];
        value.custom = value.custom.filter(item => item && typeof item === 'object' && typeof item.id === 'string' && typeof item.name === 'string' && typeof item.url === 'string');
        return value;
    };
    const gallerySettings = ensureGallerySettings(GM_getValue(GALLERY_MANAGER_KEY, {}));
    const saveGallerySettings = () => GM_setValue(GALLERY_MANAGER_KEY, gallerySettings);
    const safeGalleryUrl = value => {
        try {
            const url = new URL(String(value || '').trim());
            return ['http:','https:'].includes(url.protocol) && !url.username && !url.password && !/[<>\s]/.test(String(value || ''));
        } catch (_) { return false; }
    };
    const getManagedGalleries = () => {
        const entries = GALLERY_DEFAULTS.map((item,index) => {
            const override = gallerySettings.overrides[item.id] || {};
            return {...item,...override,builtin:true,disabled:gallerySettings.disabled.includes(item.id),deleted:gallerySettings.deleted.includes(item.id),index};
        }).concat(gallerySettings.custom.map((item,index)=>({...item,builtin:false,disabled:!item.enabled,deleted:false,index:GALLERY_DEFAULTS.length+index})));
        const order = new Map(gallerySettings.order.map((id,index)=>[id,index]));
        return entries.sort((a,b)=>(order.get(a.id)??100000+a.index)-(order.get(b.id)??100000+b.index));
    };
    const renderGalleryLinks = () => {
        if (!gallerySettings.enabled) return '';
        const links = getManagedGalleries().filter(item=>!item.disabled&&!item.deleted&&safeGalleryUrl(item.url));
        if (!links.length) return '';
        return `<tbody><tr><td colspan="12">图库¹⁸⁺:${links.map((item,index)=>`${index===13?'<br>':''}<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer" style="padding:2px;">${escapeHTML(item.name)}</a>`).join('')}</td></tr></tbody>`;
    };
    GM_registerMenuCommand('综合管理面板', openSiteManager);
    const hostnameLabels = location.hostname.toLowerCase().split('.');
    const hasHostnameLabel = label => {
        const index = hostnameLabels.lastIndexOf(label.toLowerCase());
        return index >= Math.max(0, hostnameLabels.length - 2);
    };
    const hasAnyHostnameLabel = (...labels) => labels.some(hasHostnameLabel);
    const isJavDbHostname = /(^|\.)javdb\d*\.com$/i.test(location.hostname);
    const isJavHdHostname = /(^|\.)javhd\.today$/i.test(location.hostname);
    const SITE_MANAGER_KEY = 'onejav_site_manager_v1';
    const CATEGORY_MARKERS = ['车牌信息', '演员信息', '磁力种子', '宣传片', '在线观看', '资讯', '大缩略图'];
    const ensureSettings = value => {
        if (!value || typeof value !== 'object' || Array.isArray(value)) value = {};
        if (!value.overrides || typeof value.overrides !== 'object' || Array.isArray(value.overrides)) value.overrides = {};
        ['deleted', 'disabled', 'deletedCategories', 'siteOrder'].forEach(key => {
            if (!Array.isArray(value[key])) value[key] = [];
            else value[key] = value[key].filter(item => typeof item === 'string');
        });
        if (!Array.isArray(value.custom)) value.custom = [];
        value.custom = value.custom.filter(item => item && typeof item === 'object' && typeof item.id === 'string' && typeof item.name === 'string' && typeof item.urlTemplate === 'string');
        if (!Array.isArray(value.customCategories)) value.customCategories = [];
        value.customCategories = value.customCategories.filter(item => item && typeof item.id === 'string' && typeof item.name === 'string');
        if (!value.categoryNames || typeof value.categoryNames !== 'object' || Array.isArray(value.categoryNames)) value.categoryNames = {};
        return value;
    };
    const readSettings = () => ensureSettings(GM_getValue(SITE_MANAGER_KEY, {}));
    const saveSettings = value => GM_setValue(SITE_MANAGER_KEY, value);
    const categoriesFor = settings => CATEGORY_MARKERS.map(name => ({id:'builtin:'+name,name:settings.categoryNames['builtin:'+name]||name,builtin:true}))
        .concat(settings.customCategories.map(item=>({id:item.id,name:item.name,builtin:false})))
        .filter(item=>!settings.deletedCategories.includes(item.id));
    const categoryName = (id, settings) => categoriesFor(settings).find(item=>item.id===id)?.name || '';
    const toTemplate = (url, jav) => {
        let value=String(url||'');
        [['fanHao',jav.fanHao],['xiaxian',jav.xiaxian],['buwei',jav.buwei],['xiao',jav.xiao],['bango',jav.bango]]
            .filter(item=>item[1]).sort((a,b)=>String(b[1]).length-String(a[1]).length).forEach(([key,part])=>{
                [String(part),encodeURIComponent(String(part))].forEach(v=>{if(v.length>=3)value=value.split(v).join('{'+key+'}');});
            });
        if(jav.one&&String(jav.one).length===1)value=value.split('/'+jav.one+'/').join('/{one}/');
        return value;
    };
    const expandTemplate = (template,jav) => {
        const values={'番号':jav.fanHao,fanHao:jav.fanHao,bango:jav.bango,xiaxian:jav.xiaxian,buwei:jav.buwei,one:jav.one,xiao:jav.xiao};
        return String(template||'').replace(/\{(番号|fanHao|bango|xiaxian|buwei|one|xiao)\}/g,(m,k)=>encodeURIComponent(String(values[k]??'')));
    };
    const getManagedSites = (data,jav,settings) => {
        const result=[];let cat='builtin:车牌信息';
        Object.entries(data).forEach(([key,item],index)=>{
            if(CATEGORY_MARKERS.includes(key))cat='builtin:'+key;
            if(!item.name)return;
            const o=settings.overrides[key]||{};
            result.push({id:'builtin:'+key,key,name:o.name??String(item.name).replace(/<[^>]*>/g,''),description:o.description??item.zhushi??'',
                urlTemplate:o.urlTemplate??toTemplate(item.url,jav),color:o.color??item.color??'#000000',bgcolor:o.bgcolor??item.bgcolor??'',
                categoryId:o.categoryId||cat,builtin:true,hasOverride:Object.keys(o).length>0,deleted:settings.deleted.includes(key),disabled:settings.disabled.includes(key),index});
        });
        settings.custom.forEach((item,index)=>result.push({...item,id:item.id,key:item.id,builtin:false,deleted:false,disabled:!item.enabled,index:Object.keys(data).length+index}));
        const order=new Map(settings.siteOrder.map((id,index)=>[id,index]));
        result.sort((a,b)=>(order.get(a.id)??100000+a.index)-(order.get(b.id)??100000+b.index));
        return result;
    };
    const applySiteSettings = (data,jav) => {
        const settings=readSettings(),entries=Object.entries(data),named=[];let cat='builtin:车牌信息';
        entries.forEach(([key,item],index)=>{
            if(CATEGORY_MARKERS.includes(key))cat='builtin:'+key;
            if(!item.name||settings.deleted.includes(key)||settings.disabled.includes(key))return;
            const o=settings.overrides[key]||{},next={...item,categoryId:o.categoryId||cat};
            if(o.name!==undefined){next.name=o.name;next.plainName=true;}
            if(o.description!==undefined)next.zhushi=o.description;
            if(o.urlTemplate!==undefined&&safeTemplate(o.urlTemplate))next.url=expandTemplate(o.urlTemplate,jav);
            ['color','bgcolor'].forEach(k=>{if(o[k]!==undefined&&safeColor(o[k]))next[k]=o[k];});
            named.push(['builtin:'+key,key,next,index]);
        });
        settings.custom.forEach((item,index)=>{if(item.enabled&&safeTemplate(item.urlTemplate))named.push([item.id,item.id,{name:item.name,plainName:true,custom:true,zhushi:item.description||'',url:expandTemplate(item.urlTemplate,jav),color:safeColor(item.color)?item.color:'#000000',bgcolor:safeColor(item.bgcolor)?item.bgcolor:'',categoryId:item.categoryId},entries.length+index]);});
        const order=new Map(settings.siteOrder.map((id,index)=>[id,index]));
        named.sort((a,b)=>(order.get(a[0])??100000+a[3])-(order.get(b[0])??100000+b[3]));
        let cursor=0;const result={};
        entries.forEach(([key,item])=>{if(item.name){if(cursor<named.length){const e=named[cursor++];result[e[1]]=e[2];}}else result[key]=item;});
        while(cursor<named.length){const e=named[cursor++];result[e[1]]=e[2];}
        return result;
    };
    const safeTemplate = value => {
        const expanded=String(value||'').replace(/\{(?:番号|fanHao|bango|xiaxian|buwei|one|xiao)\}/g,'TEST123');
        if(/[{}]/.test(expanded))return false;
        try{const url=new URL(expanded);return ['http:','https:'].includes(url.protocol)&&!url.username&&!url.password;}catch(_){return false;}
    };
    const safeColor = value => !value||/^(#[0-9a-f]{3,8}|[a-z]{1,20}|rgba?\(\s*[\d.% ,]+\))$/i.test(value);
    function openSiteManager(){
        const old=document.getElementById('onejav-site-manager');if(old){old.remove();return;}if(!document.body)return;
        const settings=readSettings(),jav=new JAV('ABC-123',false),root=document.createElement('div');
        root.id='onejav-site-manager';
        const style=document.createElement('style');
        style.textContent='#onejav-site-manager{position:fixed;inset:0;z-index:2147483647;background:#0009;display:flex;align-items:center;justify-content:center;padding:14px;font:14px/1.5 system-ui,sans-serif;color:#222}#onejav-site-manager *{box-sizing:border-box}#onejav-site-manager .panel{background:#fff;width:min(1050px,100%);height:min(820px,94vh);border-radius:12px;display:flex;flex-direction:column;overflow:hidden}#onejav-site-manager header,#onejav-site-manager nav,#onejav-site-manager footer{padding:12px 18px;border-bottom:1px solid #ddd}#onejav-site-manager header{display:flex;justify-content:space-between;align-items:center}#onejav-site-manager h2{margin:0;font-size:19px}#onejav-site-manager main{padding:15px 18px;overflow:auto;flex:1}#onejav-site-manager button,#onejav-site-manager input,#onejav-site-manager select,#onejav-site-manager textarea{font:inherit}#onejav-site-manager button{padding:7px 10px;border:1px solid #ccc;border-radius:7px;background:#fff;cursor:pointer}#onejav-site-manager .primary{background:#2563eb;color:white;border-color:#2563eb}#onejav-site-manager .danger{color:#b91c1c}#onejav-site-manager nav{display:flex;gap:8px;flex-wrap:wrap}#onejav-site-manager .active{background:#eff6ff;border-color:#93c5fd}#onejav-site-manager input,#onejav-site-manager select,#onejav-site-manager textarea{padding:8px;border:1px solid #ccc;border-radius:7px;min-width:0}#onejav-site-manager .toolbar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}#onejav-site-manager .toolbar input{flex:1;min-width:180px}#onejav-site-manager .meta{font-size:12px;color:#666;overflow-wrap:anywhere}#onejav-site-manager .list{display:flex;flex-direction:column;gap:8px;margin-top:12px}#onejav-site-manager .row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;border:1px solid #ddd;border-radius:8px;padding:10px}#onejav-site-manager .name{font-weight:650}#onejav-site-manager .actions{display:flex;gap:5px;flex-wrap:wrap}#onejav-site-manager .formcover{position:absolute;inset:0;background:#0007;display:flex;align-items:center;justify-content:center;padding:14px}#onejav-site-manager .formbox{background:white;width:min(600px,100%);max-height:92%;overflow:auto;padding:18px;border-radius:10px}#onejav-site-manager .field{display:flex;flex-direction:column;gap:5px;margin:10px 0}#onejav-site-manager .formactions{display:flex;justify-content:flex-end;gap:8px;margin-top:14px}#onejav-site-manager .categoryrow{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:8px;padding:9px 0;border-bottom:1px solid #ddd}#onejav-site-manager footer{border-top:1px solid #ddd;border-bottom:0;color:#666;font-size:12px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}@media(max-width:650px){#onejav-site-manager{padding:0}#onejav-site-manager .panel{height:100%;border-radius:0}#onejav-site-manager .row{grid-template-columns:1fr}#onejav-site-manager .categoryrow{grid-template-columns:1fr auto}}';
        root.appendChild(style);
        const panel=document.createElement('div');panel.className='panel';
        const header=document.createElement('header'),title=document.createElement('h2');title.textContent='OneJAVOneWeb · 综合管理面板';
        const close=document.createElement('button');close.textContent='关闭';close.dataset.action='close';header.append(title,close);
        const nav=document.createElement('nav'),tab1=document.createElement('button'),tab2=document.createElement('button'),tab3=document.createElement('button');
        tab1.textContent='站点管理';tab1.dataset.tab='sites';tab2.textContent='分类管理';tab2.dataset.tab='categories';tab3.textContent='图库管理';tab3.dataset.tab='galleries';nav.append(tab1,tab2,tab3);
        const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
        const main=document.createElement('main'),footer=document.createElement('footer');
        const note=el('span','','配置保存在本机用户脚本存储中，不会改写内置默认数据。自定义站点仅作为普通链接，不会自动获得特殊站点适配能力。');
        const previewLabel=el('label','jump-setting');previewLabel.htmlFor='onejav-preview-enabled';
        const previewToggle=el('input');previewToggle.type='checkbox';previewToggle.id='onejav-preview-enabled';previewToggle.checked=previewEnabled;
        previewLabel.append(previewToggle,el('span','','点击加载缩略图预览（默认关闭）'));
        const galleryLabel=el('label','jump-setting');galleryLabel.htmlFor='onejav-gallery-enabled';
        const galleryToggle=el('input');galleryToggle.type='checkbox';galleryToggle.id='onejav-gallery-enabled';galleryToggle.checked=gallerySettings.enabled;
        galleryLabel.append(galleryToggle,el('span','','显示图库¹⁸⁺链接'));
        footer.append(note,previewLabel,galleryLabel);
        panel.append(header,nav,main,footer);root.appendChild(panel);document.body.appendChild(root);
        const sites=()=>getManagedSites(jav.data,jav,settings),cats=()=>categoriesFor(settings),save=()=>{saveSettings(settings);location.reload();};
        const renderSites=(q='',filter='')=>{
            main.replaceChildren();const toolbar=el('div','toolbar'),search=el('input');search.type='search';search.name='site-search';search.placeholder='搜索站点名称、网址或说明';search.value=q;
            const select=el('select');select.name='site-filter';const all=el('option','','全部分类');all.value='';select.appendChild(all);
            cats().forEach(c=>{const o=el('option','',c.name);o.value=c.id;select.appendChild(o);});select.value=filter;
            const add=el('button','primary','新增站点');add.dataset.action='add-site';toolbar.append(search,select,add);main.appendChild(toolbar);
            const list=el('div','list'),allSites=sites(),shown=allSites.filter(s=>(!filter||s.categoryId===filter)&&(!q||(s.name+' '+s.urlTemplate+' '+s.description).toLowerCase().includes(q.toLowerCase())));
            main.appendChild(el('div','meta','共 '+allSites.length+' 个站点，当前显示 '+shown.length+' 个。'));
            shown.forEach(site=>{
                const row=el('article','row'),info=el('div'),name=el('div','name',site.name+' · '+(site.deleted?'已删除':site.disabled?'已停用':'启用中'));
                info.append(name,el('div','meta',categoryName(site.categoryId,settings)+' · '+site.urlTemplate),el('div','meta',site.description));
                const actions=el('div','actions');
                const actionList=[['move-up','↑'],['move-down','↓'],['edit-site','编辑'],['toggle-site',site.disabled?'启用':'停用']];if(site.builtin&&site.hasOverride)actionList.push(['reset-site','恢复默认']);actionList.push(['delete-site',site.deleted?'恢复':'删除']);actionList.forEach(([action,label])=>{const b=el('button',action==='delete-site'||action==='reset-site'?'danger':'',label);b.dataset.action=action;b.dataset.id=site.id;actions.appendChild(b);});
                row.append(info,actions);list.appendChild(row);
            });
            if(!shown.length)list.appendChild(el('div','meta','没有符合条件的站点'));main.appendChild(list);
            tab1.classList.add('active');tab2.classList.remove('active');tab3.classList.remove('active');
        };
        const renderGalleries=(q='')=>{
            main.replaceChildren();
            const toolbar=el('div','toolbar'),search=el('input');search.type='search';search.name='gallery-search';search.placeholder='搜索图库名称或网址';search.value=q;
            const add=el('button','primary','新增图库');add.dataset.action='add-gallery';toolbar.append(search,add);main.append(toolbar);
            const all=getManagedGalleries(),shown=all.filter(item=>!q||(item.name+' '+item.url).toLowerCase().includes(q.toLowerCase()));
            main.appendChild(el('div','meta','内置图库 '+GALLERY_DEFAULTS.length+' 个，自定义图库 '+gallerySettings.custom.length+' 个；删除内置图库仅隐藏，可随时恢复。'));
            const list=el('div','list');
            shown.forEach(item=>{
                const status=item.deleted?'已隐藏':item.disabled?'已停用':'启用中';
                const row=el('article','row'),info=el('div');
                info.append(el('div','name',item.name+' · '+status+(item.builtin?' · 内置':' · 自定义')),el('div','meta',item.url));
                const actions=el('div','actions');
                [['move-gallery-up','↑'],['move-gallery-down','↓'],['edit-gallery','编辑']].forEach(([action,label])=>{const b=el('button','',label);b.dataset.action=action;b.dataset.id=item.id;actions.appendChild(b);});
                if(item.deleted){const b=el('button','','恢复');b.dataset.action='restore-gallery';b.dataset.id=item.id;actions.appendChild(b);}
                else{const b=el('button','',item.disabled?'启用':'停用');b.dataset.action='toggle-gallery';b.dataset.id=item.id;actions.appendChild(b);}
                const remove=el('button','danger',item.builtin?'隐藏':'删除');remove.dataset.action='delete-gallery';remove.dataset.id=item.id;actions.appendChild(remove);
                row.append(info,actions);list.appendChild(row);
            });
            if(!shown.length)list.appendChild(el('div','meta','没有符合条件的图库'));
            main.append(list);tab1.classList.remove('active');tab2.classList.remove('active');tab3.classList.add('active');
        };
        const galleryEditor=id=>{
            const item=id?getManagedGalleries().find(x=>x.id===id):null,cover=el('div','formcover'),form=el('form','formbox');
            form.appendChild(el('h3','',item?'编辑图库':'新增自定义图库'));
            const field=(label,key,value)=>{const wrap=el('div','field');wrap.appendChild(el('label','',label));const input=el('input');input.name=key;input.value=value||'';input.required=true;wrap.append(input);form.appendChild(wrap);};
            field('图库名称','name',item?.name||'');field('网址（仅允许 HTTP/HTTPS）','url',item?.url||'https://');
            const actions=el('div','formactions'),cancel=el('button','','取消'),submit=el('button','primary','保存');cancel.type='button';cancel.dataset.action='cancel-editor';submit.type='submit';actions.append(cancel,submit);form.append(actions);cover.appendChild(form);panel.appendChild(cover);
            form.addEventListener('submit',event=>{
                event.preventDefault();const values=new FormData(form),name=String(values.get('name')||'').trim(),url=String(values.get('url')||'').trim();
                if(!name){alert('请填写图库名称');return;}if(!safeGalleryUrl(url)){alert('网址无效，仅允许不含账号凭据的 HTTP/HTTPS 地址');return;}
                if(item?.builtin){gallerySettings.overrides[item.id]={...(gallerySettings.overrides[item.id]||{}),name,url};gallerySettings.deleted=gallerySettings.deleted.filter(x=>x!==item.id);}
                else if(item){const target=gallerySettings.custom.find(x=>x.id===item.id);if(target)Object.assign(target,{name,url});}
                else gallerySettings.custom.push({id:'gallery_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7),name,url,enabled:true});
                saveGallerySettings();location.reload();
            });
        };
        const renderCategories=()=>{
            main.replaceChildren();const toolbar=el('div','toolbar'),input=el('input');input.name='new-category';input.placeholder='输入新分类名称';
            const add=el('button','primary','新增分类');add.dataset.action='add-category';toolbar.append(input,add);main.append(toolbar);
            main.appendChild(el('div','meta','分类下仍有站点时不能删除，请先将站点调整到其他分类。'));
            cats().forEach(c=>{
                const row=el('div','categoryrow'),box=el('div'),name=el('input');name.value=c.name;name.dataset.categoryName=c.id;
                const count=sites().filter(s=>s.categoryId===c.id&&!s.deleted).length;box.append(name,el('div','meta',count+' 个站点 · '+(c.builtin?'内置分类':'自定义分类')));
                const rename=el('button','','保存名称');rename.dataset.action='rename-category';rename.dataset.id=c.id;
                const remove=el('button','danger','删除');remove.dataset.action='delete-category';remove.dataset.id=c.id;remove.disabled=count>0;
                row.append(box,rename,remove);main.appendChild(row);
            });
            tab1.classList.remove('active');tab2.classList.add('active');tab3.classList.remove('active');
        };
        const editor=id=>{
            const site=id?sites().find(s=>s.id===id):null,cover=el('div','formcover'),form=el('form','formbox');
            form.appendChild(el('h3','',site?'编辑站点':'新增自定义站点'));
            const field=(label,key,value,type='text',hint='')=>{
                const wrap=el('div','field');wrap.appendChild(el('label','',label));
                const input=type==='textarea'?el('textarea'):el('input');if(type==='textarea')input.rows=3;else input.type=type;
                input.name=key;input.value=value||'';input.required=key==='name'||key==='urlTemplate';wrap.append(input);
                if(hint)wrap.appendChild(el('small','meta',hint));form.appendChild(wrap);
            };
            field('站点名称','name',site?.name||'');
            field('网址模板','urlTemplate',site?.urlTemplate||'https://example.com/search/{番号}','text','支持 {番号}、{fanHao}、{bango}、{xiaxian}、{buwei}、{one}、{xiao}。');
            field('说明','description',site?.description||'','textarea');
            const wrap=el('div','field');wrap.appendChild(el('label','','所属分类'));const select=el('select');select.name='categoryId';
            cats().forEach(c=>{const o=el('option','',c.name);o.value=c.id;select.appendChild(o);});if(site)select.value=site.categoryId;wrap.append(select);form.append(wrap);
            field('文字颜色','color',site?.color||'#000000');field('背景颜色','bgcolor',site?.bgcolor||'');
            const actions=el('div','formactions'),cancel=el('button','','取消'),submit=el('button','primary','保存');cancel.type='button';cancel.dataset.action='cancel-editor';submit.type='submit';actions.append(cancel,submit);form.append(actions);cover.appendChild(form);panel.appendChild(cover);
            form.addEventListener('submit',event=>{
                event.preventDefault();const v=new FormData(form),next={name:String(v.get('name')||'').trim(),urlTemplate:String(v.get('urlTemplate')||'').trim(),
                    description:String(v.get('description')||'').trim(),categoryId:String(v.get('categoryId')||''),color:String(v.get('color')||'').trim()||'#000000',bgcolor:String(v.get('bgcolor')||'').trim()};
                if(!next.name){alert('请填写站点名称');return;}if(!safeTemplate(next.urlTemplate)){alert('网址模板无效，仅允许 http/https 并检查占位符');return;}
                if(!safeColor(next.color)||!safeColor(next.bgcolor)){alert('颜色格式无效');return;}if(!cats().some(c=>c.id===next.categoryId)){alert('请选择有效分类');return;}
                if(site?.builtin){settings.overrides[site.key]={...(settings.overrides[site.key]||{}),...next};settings.deleted=settings.deleted.filter(k=>k!==site.key);}
                else if(site){const target=settings.custom.find(x=>x.id===site.id);if(target)Object.assign(target,{...next,enabled:!site.disabled});}
                else settings.custom.push({id:'custom_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7),...next,enabled:true});
                save();
            });
        };
        root.addEventListener('click',event=>{
            const b=event.target.closest('button');if(!b)return;const a=b.dataset.action,id=b.dataset.id;
            if(b.dataset.tab){if(b.dataset.tab==='sites')renderSites();else if(b.dataset.tab==='categories')renderCategories();else renderGalleries();return;}
            if(a==='close'){root.remove();return;}if(a==='add-site'){editor(null);return;}if(a==='cancel-editor'){b.closest('.formcover')?.remove();return;}if(a==='edit-site'){editor(id);return;}
            if(a==='add-gallery'){galleryEditor(null);return;}if(a==='edit-gallery'){galleryEditor(id);return;}
            if(a==='toggle-gallery'||a==='delete-gallery'||a==='restore-gallery'||a==='move-gallery-up'||a==='move-gallery-down'){
                const item=getManagedGalleries().find(x=>x.id===id);if(!item)return;
                if(a==='toggle-gallery'){
                    if(item.builtin)gallerySettings.disabled=item.disabled?gallerySettings.disabled.filter(x=>x!==id):[...gallerySettings.disabled,id];
                    else{const target=gallerySettings.custom.find(x=>x.id===id);if(target)target.enabled=!target.enabled;}
                }else if(a==='delete-gallery'){
                    if(item.builtin)gallerySettings.deleted=item.deleted?gallerySettings.deleted:[...gallerySettings.deleted,id];
                    else{if(!confirm('永久删除自定义图库“'+item.name+'”？'))return;gallerySettings.custom=gallerySettings.custom.filter(x=>x.id!==id);gallerySettings.order=gallerySettings.order.filter(x=>x!==id);}
                }else if(a==='restore-gallery'){gallerySettings.deleted=gallerySettings.deleted.filter(x=>x!==id);}
                else{
                    const ids=getManagedGalleries().map(x=>x.id),i=ids.indexOf(id),j=i+(a==='move-gallery-up'?-1:1);
                    if(i<0||j<0||j>=ids.length)return;[ids[i],ids[j]]=[ids[j],ids[i]];gallerySettings.order=ids;
                }
                saveGallerySettings();location.reload();return;
            }
            if(a==='toggle-site'||a==='delete-site'||a==='reset-site'){
                const site=sites().find(s=>s.id===id);if(!site)return;
                if(a==='reset-site'){
                    if(!site.builtin||!confirm('将“'+site.name+'”恢复为脚本内置默认配置？'))return;
                    delete settings.overrides[site.key];settings.deleted=settings.deleted.filter(k=>k!==site.key);settings.disabled=settings.disabled.filter(k=>k!==site.key);
                }else if(a==='toggle-site'){
                    if(site.builtin)settings.disabled=site.disabled?settings.disabled.filter(k=>k!==site.key):[...settings.disabled,site.key];
                    else{const x=settings.custom.find(v=>v.id===id);if(x)x.enabled=!x.enabled;}
                }else if(site.builtin)settings.deleted=site.deleted?settings.deleted.filter(k=>k!==site.key):[...settings.deleted,site.key];
                else{if(!confirm('永久删除自定义站点“'+site.name+'”？'))return;settings.custom=settings.custom.filter(x=>x.id!==id);settings.siteOrder=settings.siteOrder.filter(x=>x!==id);}
                save();return;
            }
            if(a==='move-up'||a==='move-down'){const ids=sites().map(s=>s.id),i=ids.indexOf(id),j=i+(a==='move-up'?-1:1);if(i<0||j<0||j>=ids.length)return;[ids[i],ids[j]]=[ids[j],ids[i]];settings.siteOrder=ids;save();return;}
            if(a==='add-category'){const name=(main.querySelector('[name="new-category"]')?.value||'').trim();if(!name){alert('请填写分类名称');return;}if(cats().some(c=>c.name.toLowerCase()===name.toLowerCase())){alert('分类名称已存在');return;}settings.customCategories.push({id:'customcat_'+Date.now().toString(36),name});save();return;}
            if(a==='rename-category'){const input=Array.from(main.querySelectorAll('[data-category-name]')).find(x=>x.dataset.categoryName===id),name=(input?.value||'').trim();if(!name){alert('分类名称不能为空');return;}if(cats().some(c=>c.id!==id&&c.name.toLowerCase()===name.toLowerCase())){alert('分类名称已存在');return;}if(id.startsWith('builtin:'))settings.categoryNames[id]=name;else{const c=settings.customCategories.find(x=>x.id===id);if(c)c.name=name;}save();return;}
            if(a==='delete-category'){if(sites().some(s=>s.categoryId===id)){alert('请先将该分类下的站点调整到其他分类');return;}if(id.startsWith('builtin:'))settings.deletedCategories.push(id);else settings.customCategories=settings.customCategories.filter(x=>x.id!==id);delete settings.categoryNames[id];save();}
        });
        root.addEventListener('input',event=>{
            if(event.target.name==='gallery-search'){const q=event.target.value||'',pos=event.target.selectionStart;renderGalleries(q);const next=main.querySelector('[name="gallery-search"]');if(next){next.focus();if(pos!==null&&typeof next.setSelectionRange==='function')next.setSelectionRange(pos,pos);}return;}
            if(event.target.name==='site-search'||event.target.name==='site-filter'){
                const q=main.querySelector('[name="site-search"]')?.value||'',f=main.querySelector('[name="site-filter"]')?.value||'',name=event.target.name,pos=name==='site-search'?event.target.selectionStart:null;
                renderSites(q,f);const next=main.querySelector('[name="'+name+'"]');if(next){next.focus();if(pos!==null&&typeof next.setSelectionRange==='function')next.setSelectionRange(pos,pos);}
            }
        });
        root.addEventListener('change',event=>{
            if(event.target.id==='onejav-preview-enabled'){
                previewEnabled=event.target.checked;GM_setValue('onejav_preview_enabled',previewEnabled);
                document.querySelectorAll('.jav-preview-trigger').forEach(button=>{button.style.display=previewEnabled?'inline-block':'none';});
                if(!previewEnabled)document.querySelectorAll('.jav-preview-image').forEach(image=>{image.style.display='none';});
                return;
            }
            if(event.target.id==='onejav-gallery-enabled'){gallerySettings.enabled=event.target.checked;saveGallerySettings();location.reload();return;}
            if(event.target.name==='site-filter'){const q=main.querySelector('[name="site-search"]')?.value||'',f=event.target.value||'';renderSites(q,f);}
        });
        root.addEventListener('keydown',event=>{if(event.key==='Escape')root.remove();});
        renderSites();
    }
    document.addEventListener('click', event => {
        const trigger = event.target.closest?.('.jav-preview-trigger');
        if (trigger) {
            event.preventDefault();
            if (!previewEnabled) return;
            const preview = trigger.closest('.movieav')?.querySelector('.jav-preview-image');
            if (!preview) return;
            if (preview.style.display === 'none' || !preview.style.display) {
                if (!preview.hasAttribute('src')) preview.src = preview.dataset.src;
                preview.style.display = 'block';
            } else {
                preview.style.display = 'none';
            }
            return;
        }
        const previewImage = event.target.closest?.('.jav-preview-image');
        if (previewImage) previewImage.style.display = 'none';
    });
    document.addEventListener('click', event => {
        const trigger = event.target.closest?.('.jav-site-manager-trigger');
        if (trigger) { event.preventDefault(); openSiteManager(); }
    });
    /* Basic */
    class JAV {
        constructor(i, applySettings = true) {
            [this.bango, this.fanHao, this.xiaxian, this.buwei, this.one, this.xiao] = (() => {
                const input = String(i ?? '').trim();
                const o = input.replace(/\s+/g, '-');
                const fc2 = o.match(/FC2-?P?P?V?-?_?(\d+)/i);
                if (fc2) {
                    const number = fc2[1];
                    const canonical = 'FC2-PPV-' + number;
                    return [number, canonical, canonical, 'fc2ppv' + number, 'f', canonical.toLowerCase()];
                }
                const t = o.match(/([a-zA-Z]{2,12})-?(\d{2,12})/i);
                if (t) {
                    return [
                        `${t[1].toUpperCase()}${t[2]}`,
                        `${t[1].toUpperCase()}-${t[2]}`,
                        `${t[1].toUpperCase()}_${t[2]}`,
                        `${t[1].toUpperCase()}00${t[2]}`,
                        `${t[1].toLowerCase().charAt(0)}`,
                        `${t[1].toLowerCase()}-${t[2]}`
                        //`${t[1].toUpperCase()}(Array(5).join('0') + ${t[2]}).slice(-5)`
                        //`${t[1].toUpperCase()}('0000'+${t[2]}).slice(-5)`
                        // 需要5位的有前置0的数据，那么首先不管当前数字是多少位的，都先补上4个前置0，然后再截取这个字符串最后的5位，那么获取到的就是需要的数据：
                        // return ('0000'+num).slice(-5);
                        // 改不好，暂时补位两个00，适配dmm
                    ];
                }
                else {
                    console.info(`JAV:${i}处理失败，反馈给作者修复bug`);
                    return [input, input, input, input, input, input];
                }

            })();

            this.data = {
                车牌信息: { zhushi: '车牌信息类', name: '车牌', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                javlibarary: {
                    zhushi: 'JavLibrary 是一个线上日本成人影片图书馆。',
                    name: 'JAVLibrary', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://www.javlibrary.com',
                    uri: `/cn/vl_searchbyid.php?keyword=${encodeURIComponent(this.fanHao)}`
                },
                freejavbt: {
                    zhushi: 'JAV目錄大全| Free JAV BT，這是世界上最齊全的AV資料庫，成人影片資料庫及磁鏈分享',
                    name: 'FreeJavBt<sup>fc2</sup>', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://freejavbt.com',
                    uri: `/search?wd=${encodeURIComponent(this.fanHao)}`
                },
                javbus: {
                    zhushi: 'JavBus - AV磁力連結分享 - 日本成人影片資料庫',
                    name: 'JavBus', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://www.javbus.com',
                    uri: `/${encodeURIComponent(this.fanHao)}`
                },
                javdb: {
                    zhushi: 'JavDB 成人影片數據庫',
                    name: 'JavDB<sup>fc2</sup>', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://javdb008.com',
                    uri: `/search?q=${encodeURIComponent(this.xiaxian)}`
                },
                jav321: {
                    zhushi: 'Free JAV Torrents',
                    name: 'JAV321', bgcolor: '#FAFAD2', color: 'red',
                    origin: 'https://www.jav321.com',
                    uri: `/?bango=${encodeURIComponent(this.fanHao)}`
                },
                mgstage: {
                    zhushi: 'mgstage',
                    name: 'mgstage', bgcolor: '', color: 'red',
                    origin: 'https://www.mgstage.com',
                    uri: `/search/cSearch.php?search_word=${encodeURIComponent(this.fanHao)}`
                },
                // 此战代码错误 暂时取消 hdouban: {zhushi: 'hdouban',name: 'hdouban直<sup>fc2</sup>',bgcolor: '',color: 'green', origin: 'https://byym21.com', uri: `/search?keywords=${encodeURIComponent(this.fanHao)}&ty=movie&page=1&pageSize=12`},
                javplace: {
                    zhushi: '磁力站点',
                    name: 'javplace', bgcolor: '#FAFAD2', color: 'red',
                    origin: 'https://jav.place',
                    uri: `/video/${encodeURIComponent(this.fanHao)}`
                },
                // 【2022-10-17新增】最新免翻墙域名：https://kk4583.com/  https://aabb1803.com/
                javbooks: {
                    zhushi: 'javbooks',
                    name: 'javbooks', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://jbk009.com',
                    uri: `/serch_censored.htm?skey=${encodeURIComponent(this.fanHao)}`
                },
                // javland https://www.ebay.com/usr/javlandnet
                javland: {
                    zhushi: '磁力站点',
                    name: 'javland', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://jav4.land',
                    uri: `/tw/id_search.php?keys=${encodeURIComponent(this.fanHao)}`
                },
                javmenu: {
                    zhushi: 'javmenu 在线全片 片花 种子下载',
                    name: 'javmenu<sup>fc2</sup><sub>∞</sub>', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://javmenu.com',
                    uri: `/zh/search?wd=${encodeURIComponent(this.bango)}`
                },
                javhoo: {
                    zhushi: 'javhoo  - 日本成人影片資料庫',
                    name: 'javhoo<sup>fc2</sup><sub>∞</sub>', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://www.javhoo.org',
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                演员信息: { zhushi: '演员信息类，打开后自行在地址栏修改想要搜的演员', name: '演员', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                Xslist: {
                    zhushi: 'Xslist.org - 健康的宅男偶像專題網站',
                    name: 'Xslist <sub>∞</sub>', bgcolor: '', color: 'red',
                    origin: 'https://xslist.org',
                    uri: `/search?query=${encodeURIComponent(this.fanHao)}&lg=tw`
                },
                wikipedia: {
                    zhushi: 'wikipedia维基百科',
                    name: 'wikipedia', bgcolor: '', color: 'red',
                    origin: 'https://zh.m.wikipedia.org',
                    uri: `/zh-cn/%E4%B8%89%E4%B8%8A%E6%82%A0%E4%BA%9A`
                },
                airav: {
                    zhushi: 'airav 中文信息 预览10分钟',
                    name: 'airav', bgcolor: '#FAFAD2', color: 'red',
                    origin: 'https://airav.fun',
                    uri: `/cn/searchresults.aspx?Search=%E4%B8%89%E4%B8%8A%E6%82%A0%E4%BA%9A`
                },
                msin: {
                    zhushi: 'msin 演员搜索 请修改地址栏后面的演员名',
                    name: 'msin演员', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://db.msin.jp',
                    uri: `/jp.search/actress?str=%E6%B3%A2%E5%A4%9A%E9%87%8E%E7%B5%90%E8%A1%A3`
                },
                msin2: {
                    zhushi: 'msin 番号搜索',
                    name: 'msin番号', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://db.msin.jp',
                    uri: `/jp.search/movie?str=${encodeURIComponent(this.fanHao)}`
                },
                sougouwiki: {
                    zhushi: 'sougouwiki 番号演员搜索',
                    name: 'sougouwiki', bgcolor: '#FAFAD2', color: 'red',
                    origin: 'http://sougouwiki.com',
                    uri: `/search?keywords=${encodeURIComponent(this.fanHao)}`
                },
                第二排8: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                第二排9: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                第二排10: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                演员第一排10: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                演员第一排11: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                磁力种子: { zhushi: '磁力种子类', name: '磁力', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                // https://tellme.pw/btsow
                btsow: {
                    zhushi: 'btsow磁力链搜索。',
                    name: 'btsow', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://btsow.motorcycles',
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                onejav: {
                    zhushi: 'Free JAV Torrents种子站',
                    name: 'OneJAV<sup>fc2</sup>', bgcolor: '#FAFAD2', color: 'red',
                    origin: 'https://onejav.com',
                    uri: `/search/${encodeURIComponent(this.bango)}`
                },
                // https://tellme.pw/avmoo
                avmoo: {
                    zhushi: 'AVMOO',
                    name: 'AVMOO', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://avmoo.cfd',
                    uri: `/cn/search/${encodeURIComponent(this.fanHao)}`
                },
                // https://tellme.pw/avsox
                AVSOX: {
                    zhushi: 'AVSOX',
                    name: 'AVSOX<sup>fc2</sup>', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://avsox.click',
                    uri: `/cn/search/${encodeURIComponent(this.fanHao)}`
                },
                // 发布页 https://skrbtfabu.top/ https://skrbtdo.xyz
                skrbtdo: {
                    zhushi: '磁力站点',
                    name: 'skrbtdo', bgcolor: '', color: 'green',
                    origin: 'https://skrbtka.top',
                    uri: `/search?keyword=${encodeURIComponent(this.fanHao)}`
                },
                sukebei: {
                    zhushi: '磁力站点',
                    name: 'sukebei', bgcolor: '', color: 'red',
                    origin: 'https://sukebei.nyaa.si',
                    uri: `/?f=0&c=0_0&q=${encodeURIComponent(this.fanHao)}`
                },

                tokyotosho: {
                    zhushi: '磁力站点',
                    name: 'tokyotosho', bgcolor: '', color: 'green',
                    origin: 'https://www.tokyotosho.info',
                    uri: `/search.php?terms=${encodeURIComponent(this.fanHao)}`
                },
                // https://sosomagnet.com/
                kitty: {
                    zhushi: '磁力站点',
                    name: 'kitty', bgcolor: '', color: 'red',
                    origin: 'https://www.torrentkitty.cam',
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                btdig: {
                    zhushi: '磁力站点',
                    name: 'btdig', bgcolor: '', color: 'red',
                    origin: 'http://en.btdig.com',
                    uri: `/search?q=${encodeURIComponent(this.fanHao)}`
                },
                idope: {
                    zhushi: '磁力站点',
                    name: 'idope', bgcolor: '', color: 'red',
                    origin: 'https://idope.se',
                    uri: `/torrent-list/${encodeURIComponent(this.fanHao)}/`
                },
                u9a9: {
                    zhushi: '磁力站点',
                    name: 'u9a9', bgcolor: '', color: 'red',
                    origin: 'https://u9a9.com',
                    uri: `/?type=2&search=${encodeURIComponent(this.fanHao)}`
                },
                磁力第二排1: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                avmans: {
                    zhushi: '磁力站点 由于站点有的加-有的不加，可自行尝试',
                    name: 'avmans<sup>fc2</sup><sub>∞</sub>', bgcolor: '', color: 'green',
                    origin: 'https://gbsj.xyz',
                    uri: `/Single/${encodeURIComponent(this.bango)}`
                },
                yesjav: {
                    zhushi: '磁力站点',
                    name: 'yesjav', bgcolor: '', color: 'red',
                    origin: 'http://www.yesjav.info',
                    uri: `/search.asp?q=${encodeURIComponent(this.fanHao)}&`
                },
                jav141: {
                    zhushi: '磁力种子',
                    name: '141jav', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://www.141jav.com',
                    uri: `/torrent/${encodeURIComponent(this.bango)}`
                },
                ppv141: {
                    zhushi: '磁力种子',
                    name: '141ppv<sup>fc2</sup>', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://www.141ppv.com',
                    uri: `/torrent/${encodeURIComponent(this.bango)}`
                },
                zhongzisou: {
                    zhushi: '种子搜',
                    name: 'ZhongZiSou', bgcolor: '', color: 'green',
                    origin: 'https://www.zhongziso.com',
                    uri: `/list/${encodeURIComponent(this.fanHao)}/1`
                },
                anidex: {
                    zhushi: '磁力种子',
                    name: 'anidex', bgcolor: '', color: 'green',
                    origin: 'https://anidex.info',
                    uri: `/?q=${encodeURIComponent(this.fanHao)}`
                },
                javjunkies: {
                    zhushi: '磁力种子',
                    name: 'javjunkies', bgcolor: '', color: 'green',
                    origin: 'http://javjunkies.org',
                    uri: `/main/search/${encodeURIComponent(this.bango)}`
                },
                projectjav: {
                    zhushi: '磁力种子',
                    name: 'projectjav<sup>fc2</sup><sub>∞</sub>', bgcolor: '', color: 'green',
                    origin: 'https://projectjav.com',
                    uri: `/?searchTerm=${encodeURIComponent(this.fanHao)}`
                },
                nextjav: {
                    zhushi: '磁力种子',
                    name: 'nextjav', bgcolor: '', color: 'green',
                    origin: 'https://nextjav.com',
                    uri: `/torrent/detail/${encodeURIComponent(this.fanHao)}`
                },
                ijavtorrent: {
                    zhushi: 'ijavtorrent 磁力种子 大缩略图',
                    name: 'ijavtorrent', bgcolor: '', color: 'green',
                    origin: 'https://ijavtorrent.com',
                    uri: `/?searchTerm=${encodeURIComponent(this.fanHao)}`
                },
                // https://jg0.net/av_info/zh/?i=ajvr00152&is=AJVR-152
                jg0: {
                    zhushi: 'jg0 磁力种子 大缩略图',
                    name: 'jg0', bgcolor: '', color: 'green',
                    origin: 'https://jg0.net',
                    uri: `/av_info/zh/?i=${encodeURIComponent(this.buwei)}&is=${encodeURIComponent(this.fanHao)}`
                },
                磁力第三排1: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                // https://search.torrends.to/ADN-322
                torrends: {
                    zhushi: 'torrends。',
                    name: 'torrends', bgcolor: '', color: 'green',
                    origin: 'https://search.torrends.to',
                    uri: `/${encodeURIComponent(this.fanHao)}`
                },
                // https://www.btmet.com/search.php?q=SSIS-408&o=0&l=&c=1  https://github.com/btmet/home
                btmet: {
                    zhushi: 'btmet。',
                    name: 'btmet', bgcolor: '', color: 'green',
                    origin: 'https://www.btmet.com',
                    uri: `/search.php?q=${encodeURIComponent(this.fanHao)}&o=0&l=&c=1`
                },
                // https://cld61.buzz/search-adn-322-0-0-1.html 磁力帝.com https://xn--tfrs1ysrv.xyz/ 磁力帝.xyz
                // 1024bt121.buzz 磁力搜索.xyz https://1024bt121.buzz/main-search-kw-adn-322-1.html
                BT1024: {
                    zhushi: '磁力搜索。',
                    name: '1024bt', bgcolor: '', color: 'green',
                    origin: 'https://1024185.xyz',
                    uri: `/main-search-kw-${encodeURIComponent(this.fanHao)}-1.html`
                },
                // https://bitcq.com/search?q=adn-322
                // https://clmmm.cc/  永久域名：https://clmmdz.cyou https://磁力.xyz https://磁力妹.com https://磁力妹妹.com https://clmma33.buzz/search-adn-322-0-0-1.html
                clmmm: {
                    zhushi: '磁力妹妹。',
                    name: 'clmmm', bgcolor: '', color: 'green',
                    origin: 'https://clmma60.buzz',
                    uri: `/search-${encodeURIComponent(this.fanHao)}-0-0-1.html`
                },
                // https://u3c3.site/?search2=fjeofakansriji&search=adn-322
                u3c3: {
                    zhushi: 'u3c3。',
                    name: 'u3c3', bgcolor: '', color: 'green',
                    origin: 'https://u3c3.site',
                    uri: `/?search2=fjeofakansriji&search=${encodeURIComponent(this.fanHao)}`
                },
                // https://tw.souka.me/q/no=Adn-442
                souka: {
                    zhushi: 'souka。',
                    name: 'souka', bgcolor: '', color: 'green',
                    origin: 'https://tw.souka.me',
                    uri: `/q/no=${encodeURIComponent(this.fanHao)}`
                },
                // https://www.sehuatang.net/search.php?mod=forum&srchtype=title&srhfid=&srhlocality=forum::index&srchtxt=" + code + "&searchsubmit=true
                sehuatang: {
                    zhushi: 'sehuatang 高清中文字幕 ,98堂[原色花堂]。',
                    name: 'sehuatang', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://www.sehuatang.net',
                    uri: `/search.php?mod=forum&srchtype=title&srhfid=&srhlocality=forum::index&srchtxt=${encodeURIComponent(this.fanHao)}&searchsubmit=true`
                },
                // https://duo6.buzz/search-adn-332-rel-1.html  磁力多 bt113.com
                cilido: {
                    zhushi: '磁力多 bt113.com。',
                    name: 'duo6', bgcolor: '', color: 'green',
                    origin: 'https://om.cilido.top',
                    uri: `/search-${encodeURIComponent(this.fanHao)}-rel-1.html`
                },
                // https://wuqianra.top/search?keyword=adn-322 吴签磁力
                wuqianra: {
                    zhushi: '吴签磁力 右侧有封面图',
                    name: 'wuqianra', bgcolor: '', color: 'green',
                    origin: 'https://wuqianhu.top',
                    uri: `/search?keyword=${encodeURIComponent(this.fanHao)}`
                },
                磁力第三排11: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                磁力第三排12: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                宣传片: { zhushi: '宣传片类', name: '片花', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/441120-javbus-javdb-library-trailer', uri: `` },
                //xrmoo: {
                //zhushi: '闲人吧DMM视频预览系统。',
                //name: 'xrmoo',bgcolor: '',color: 'green',
                //
                //origin: 'http://dmm.xrmoo.com',
                //uri: `/sindex.php?searchstr=${encodeURIComponent(this.fanHao)}`
                //},
                // https://faleno.jp/top/works/fsdss529/
                faleno: {
                    zhushi: 'faleno 发行商为faleno的车牌预览',
                    name: 'faleno<sup>发</sup>', bgcolor: '', color: 'red',
                    origin: 'https://faleno.jp',
                    uri: `/top/works/${encodeURIComponent(this.bango)}/`
                },
                airav2: {
                    zhushi: 'airav简介及10分钟预览',
                    name: 'airav简介10', bgcolor: '#FAFAD2', color: 'red',
                    origin: 'https://airav.fun',
                    uri: `/cn/searchresults.aspx?Search=${encodeURIComponent(this.fanHao)}&Type=0`
                },
                airavwiki: {
                    zhushi: 'airav.wiki简介及10分钟预览',
                    name: 'airavwiki', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://www.airav.wiki',
                    uri: `/video/${encodeURIComponent(this.fanHao)}	`
                },
                xhamster: {
                    zhushi: 'xhamster',
                    name: 'xhamster', bgcolor: '', color: 'green',
                    origin: 'https://zh.xhamster.com',
                    uri: `/search/${encodeURIComponent(this.fanHao)}	`
                },
                paycalling: {
                    zhushi: 'paycalling 预览片花',
                    name: 'paycalling', bgcolor: '', color: 'green',
                    origin: 'https://paycalling.com',
                    uri: `/web/search?page=1&keyWord=${encodeURIComponent(this.fanHao)}	`
                },
                r18: {
                    zhushi: 'The Largest Japanese Porn Site',
                    name: 'r18', bgcolor: '', color: 'red',
                    origin: 'https://www.r18.com',
                    uri: `/common/search/searchword=${encodeURIComponent(this.fanHao)}/`
                },
                dmm: {
                    zhushi: 'dmm片花',
                    name: 'dmm<sup>日.代</sup>', bgcolor: '', color: 'red',
                    origin: 'https://www.dmm.co.jp',
                    uri: `/digital/videoa/-/detail/=/cid=${encodeURIComponent(this.buwei)}/`
                },
                avpreview: {
                    zhushi: 'avpreview 预览片花',
                    name: 'avpreview', bgcolor: '', color: 'green',
                    origin: 'https://avpreview.com',
                    uri: `/zh/video/${encodeURIComponent(this.buwei)}	`
                },
                // https://maxjav.com/?s=KMVR-801
                maxjav: {
                    zhushi: 'maxjav',
                    name: 'maxjav', bgcolor: '', color: 'green',
                    origin: 'https://maxjav.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                // https://jav9999.com/search?q=SSIS-408
                jav9999: {
                    zhushi: 'jav9999',
                    name: 'jav9999', bgcolor: '', color: 'green',
                    origin: 'https://jav9999.com',
                    uri: `/search?q=${encodeURIComponent(this.fanHao)}`
                },
                // https://api1.javspyl.tk/?ADN-322
                javspyl: {
                    zhushi: 'javspyl推荐片花',
                    name: 'javspyl', bgcolor: '', color: 'green',
                    origin: 'https://javspyl.tk',
                    uri: `/${encodeURIComponent(this.fanHao)}`
                },
                在线观看: { zhushi: '在线观看类', name: '在线', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                mmtv: {
                    zhushi: '在线观看下载等 适合搜索骑兵和fc2',
                    name: '7mmtv', bgcolor: '#FAFAD2', color: '#cb000d',
                    origin: 'https://7mmtv.sx',
                    uri: `/zh/censored_search/all/${encodeURIComponent(this.fanHao)}/1.html`
                },
                javmovs: {
                    zhushi: '在线观看全片Japanese Porn Streaming | JAV Stream | JAV HD Online',
                    name: 'JAVMOVS', bgcolor: '', color: 'green',
                    origin: 'https://javmovs.com',
                    uri: `/${encodeURIComponent(this.fanHao)}`
                },
                jable: {
                    zhushi: 'Jable.TV | 免費高清AV在線看',
                    name: 'Jable<sup>fc2</sup>', bgcolor: '#FAFAD2', color: 'red',
                    origin: 'https://jable.tv',
                    uri: `/search/${encodeURIComponent(this.fanHao)}/`
                },
                javdoe: {
                    zhushi: '在线观看全片JavDisk javdoe - Free JAV Streaming - Japanese Porn Online Full HD',
                    name: 'javdoe<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://javdoe.to',
                    uri: `/search/movie/${encodeURIComponent(this.fanHao)}`
                },
                javfree: {
                    zhushi: '在线观看全片JAV Free Online - JAVFree.SH - Japanese Porn Sex Streaming',
                    name: 'Javfree直<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://javfree.sh',
                    uri: `/search/movie/${encodeURIComponent(this.fanHao)}`
                },
                javfinder: {
                    zhushi: '在线观看全片JAV Free Online - javfinder - Japanese Porn Sex Streaming',
                    name: 'javfinder<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://javfinder.li',
                    uri: `/search/movie/${encodeURIComponent(this.fanHao)}`
                },
                hpjav: {
                    zhushi: '在线观看全片 無料AV, エロ動画, AVフリー, 素人の高画質アダルト動画, HPJAV 老片',
                    name: 'HPJAV<sup>fc2</sup>', bgcolor: '#FAFAD2', color: 'red',
                    origin: 'https://hpjav.tv',
                    uri: `/tw/?s=${encodeURIComponent(this.fanHao)}`
                },
                javhdporn: {
                    zhushi: 'Free JAV HD Videos, Japanese Porn Streaming Online - JAV HD Porn',
                    name: 'JAVHDPorn<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://www2.javhdporn.net',
                    uri: `/video/${encodeURIComponent(this.fanHao)}/`
                },
                javfun: {
                    zhushi: 'DownLoad JAV HD Free, Jav porn, Watch the best uncensored JAPANESE porn videos in FULL HD quality!',
                    name: 'JAVFUN<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://www9.javfun.me',
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                bejav: {
                    zhushi: 'BEJAV is a website watch JAV video HD for free without any account registration, Free Jav Streaming and Download the latest JAVHD, Japanese Porn, Asian Sex Videos ,Hot JAV Online, free porn japanese, Stream Adult Video japanese. Start watching Now',
                    name: 'BEJAV<sup>fc2</sup><sub>∞</sub>', bgcolor: '', color: 'red',
                    origin: 'https://bejav.net',
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                javhd: {
                    zhushi: '在线观看全片',
                    name: 'JAVHD', bgcolor: '', color: 'red',
                    origin: 'https://javhd.today',
                    uri: `/search/video/?s=${encodeURIComponent(this.fanHao)}`
                },
                在线第二排1: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                supjav: {
                    zhushi: 'Watch Free Jav Online, Japanese Porn HD Streaming Online',
                    name: 'SUPJAV<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://supjav.com',
                    uri: `/zh/?s=${encodeURIComponent(this.fanHao)}`
                },
                svjav: {
                    zhushi: 'JAV HD streaming, free download JAV, Japanese porn tube',
                    name: 'SVJAV <sub>∞</sub>', bgcolor: '', color: 'red',
                    origin: 'https://svjav.com',
                    uri: `/search/${encodeURIComponent(this.fanHao)}/`
                },
                fbjav: {
                    zhushi: 'JAV Online, Free Japanese adult video, Porn Streaming, Asian Sex Videos',
                    name: 'FBJAV', bgcolor: '', color: 'red',
                    origin: 'https://fbjav.com',
                    uri: `/${encodeURIComponent(this.fanHao)}/`
                },
                javhhh: {
                    zhushi: 'JAV Online, Free Japanese adult video, Porn Streaming, Asian Sex Videos',
                    name: 'JAVHHH<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://javhhh.com',
                    uri: `/video/${encodeURIComponent(this.fanHao)}/`
                },
                kissjav: {
                    zhushi: 'Asian Porn Movies, Jav Tube Porn, Korean Bj, Korean Porn, Amateur Porn',
                    name: 'KISSJAV<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://kissjav.li',
                    uri: `/search/video/?s=${encodeURIComponent(this.fanHao)}`
                },
                javdragon: {
                    zhushi: 'Watch Free JAV Japanese Porn and Asian XX Videos at JavDragon - Watch Japanese Porn XXX videos in amazing 720p HD! Exclusive JAV videos with hot Asian girls',
                    name: 'JavDragon', bgcolor: '', color: 'red',
                    origin: 'https://javdragon.com',
                    uri: `/${encodeURIComponent(this.bango)}/`
                },
                javsky: {
                    zhushi: 'Watch Free Jav HD Porn Streaming Online',
                    name: 'JAVSKY直<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://javsky.tv',
                    uri: `/search/movie/${encodeURIComponent(this.fanHao)}`
                },
                javbel: {
                    zhushi: 'Japanese Porn Videos, Asian Porn Tube, Japan Sex Movies',
                    name: 'JAVBEL', bgcolor: '', color: 'green',
                    origin: 'https://javbel.com',
                    uri: `/search.php?q=${encodeURIComponent(this.fanHao)}`
                },
                javmix: {
                    zhushi: '高画質で長時間の無料エロ動画',
                    name: 'Javmix<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://javmix.tv',
                    uri: `/video/${encodeURIComponent(this.fanHao)}/`
                },
                avdrive: {
                    zhushi: 'av-Drive [1080p Porn Videos] [Google Drive]',
                    name: 'av-Drive', bgcolor: '', color: 'red',
                    origin: 'https://av-drive.blogspot.com',
                    uri: `/search?q=${encodeURIComponent(this.fanHao)}`
                },
                javfor: {
                    zhushi: 'Japanese Adult Video (JAV), Full Length XXX Movies, Watch Free Porn Videos 网站仅支持站内搜索 无法获取搜索地址',
                    name: 'JAV-FOR', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://jav-for.me',
                    uri: `/?do=search&subaction=search&story=${encodeURIComponent(this.fanHao)}`
                },
                在线第三排1: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                ggjav: {
                    zhushi: '最も完全な無料オンライン日本のAV、HD JAV、アダルト映画',
                    name: 'GGJAV<sup>fc2</sup><sub>∞</sub>', bgcolor: '', color: 'red',
                    origin: 'https://ggjav.com',
                    uri: `/ja/main/search?string=${encodeURIComponent(this.fanHao)}`
                },
                bestjavporn: {
                    zhushi: '在线观看',
                    name: 'bestjavporn<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://www3.bestjavporn.com',
                    uri: `/search/${encodeURIComponent(this.fanHao)}/`
                },
                javcl: {
                    zhushi: 'Free Jav Streaming Online Free Porn Full HD',
                    name: 'JAVCL', bgcolor: '', color: 'green',
                    origin: 'https://javcl.com',
                    uri: `/search/${encodeURIComponent(this.fanHao)}/`
                },
                sextb: {
                    zhushi: 'Free JAV HD and XXX sex videos on the Japanese Porn',
                    name: 'SEXTB<sup>fc2</sup>', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://sextb.net',
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                avgle: {
                    zhushi: '無修正エロ動画ファンにAVGLEが贈る、人気AV女優や可愛い素人の高画質独占配信アダルト動画・免費成人影片、日本AV、無碼高清視頻播放',
                    name: 'avgle<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://avgle.com',
                    uri: `/search/videos?search_query=${encodeURIComponent(this.fanHao)}&search_type=videos	`
                },
                netflav: {
                    zhushi: 'Netflav 集結琳瑯滿目的精彩日本成人影片，只有在這才找得到，全部精心製作。',
                    name: 'netflav<sup>fc2</sup><sub>∞</sub>', bgcolor: '', color: 'red',
                    origin: 'https://netflav.com',
                    uri: `/search?type=title&keyword=${encodeURIComponent(this.fanHao)}`
                },
                missav: {
                    zhushi: '在线观看 大缩略图 无码流出',
                    name: 'missav<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://missav.com',
                    uri: `/cn/search/${encodeURIComponent(this.fanHao)}/`
                },
                javguru: {
                    zhushi: '在线观看',
                    name: 'javguru<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://jav.guru',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                javmost: {
                    zhushi: '在线观看',
                    name: 'javmost<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://www.javmost.cx',  // https://www.javmost.xyz/
                    uri: `/search/${encodeURIComponent(this.fanHao)}/`
                },
                av01: {
                    zhushi: '在线观看',
                    name: 'av01<sup>fc2荐</sup>', bgcolor: '', color: 'green',
                    origin: 'https://www.av01.tv',
                    uri: `/search/videos?search_query=${encodeURIComponent(this.fanHao)}`
                },
                paipancon: {
                    zhushi: '在线观看',
                    name: 'paipancon<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://paipancon.com',
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                在线第四排1: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                javfc2: {
                    zhushi: '在线观看',
                    name: 'javfc2<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://javfc2.net',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                javchill: {
                    zhushi: '在线观看',
                    name: 'javchill', bgcolor: '', color: 'red',
                    origin: 'https://javchill.com',
                    uri: `/search?search=${encodeURIComponent(this.fanHao)}`
                },
                watchjav: {
                    zhushi: '在线观看',
                    name: 'watchjav', bgcolor: '', color: 'green',
                    origin: 'https://watchjav.site',
                    uri: `/search?q=${encodeURIComponent(this.fanHao)}`
                },
                thisav: {
                    zhushi: 'thisav在线观看',
                    name: 'thisav', bgcolor: '', color: 'green',
                    origin: 'https://www.thisav.com',
                    uri: `/channel/${encodeURIComponent(this.fanHao)}`
                },
                youavhub: {
                    zhushi: 'youavhub 在线观看',
                    name: 'youavhub', bgcolor: '', color: 'red',
                    origin: 'https://youavhub.com',
                    uri: `/index.php/vod/search.html?wd=${encodeURIComponent(this.fanHao)}`
                },
                eporner: {
                    zhushi: 'eporner 在线观看',
                    name: 'eporner', bgcolor: '', color: 'red',
                    origin: 'https://www.eporner.com',
                    uri: `/search/${encodeURIComponent(this.fanHao)}/`
                },
                javseen: {
                    zhushi: 'javseen 在线观看',
                    name: 'javseen<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://javseen.tv',
                    uri: `/search/video/?s=${encodeURIComponent(this.fanHao)}`
                },
                av18pro: {
                    zhushi: '18av 在线观看',
                    name: '18avPro<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://18av.pro',
                    uri: `/v/?wd=${encodeURIComponent(this.fanHao)}`
                },
                javopen: {
                    zhushi: 'javopen 在线观看',
                    name: 'javopen<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://javopen.co',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                javhub: {
                    zhushi: 'javhub 在线观看 老片',
                    name: 'javhub', bgcolor: '', color: 'red',
                    origin: 'https://ja.javhub.net',
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                highporn: {
                    zhushi: 'highporn 在线观看',
                    name: 'highporn <sub>∞</sub>', bgcolor: '', color: 'green',
                    origin: 'https://highporn.net',
                    uri: `/search/videos?search_query=${encodeURIComponent(this.fanHao)}`
                },
                在线第五排1: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                japanhub: {
                    zhushi: 'japanhub 在线观看',
                    name: 'japanhub', bgcolor: '', color: 'green',
                    origin: 'https://japanhub.net',
                    uri: `/search/videos?search_query=${encodeURIComponent(this.fanHao)}`
                },
                goodav17: {
                    zhushi: 'goodav17 在线观看',
                    name: 'goodav17<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'http://goodav17.com',
                    uri: `/search/${encodeURIComponent(this.fanHao)}/1/`
                },
                av1688: {
                    zhushi: 'av1688 在线观看',
                    name: 'av1688<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://av1688.cc',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                share920: {
                    zhushi: '920share 在线观看',
                    name: '920share<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://920share.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                avbebe: {
                    zhushi: 'avbebe 在线观看',
                    name: 'avbebe<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://avbebe.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                avpanda: {
                    zhushi: 'avpanda 在线观看',
                    name: 'avpanda<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://avpanda.cc',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                ccavb: {
                    zhushi: 'ccavb 在线观看',
                    name: 'ccavb<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://ccavb.tv',
                    uri: `/video/${encodeURIComponent(this.fanHao)}`
                },
                cowmm: {
                    zhushi: 'cowmm 在线观看',
                    name: 'cowmm<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://cowmm.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                iijav: {
                    zhushi: 'iijav 在线观看',
                    name: 'iijav<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://iijav.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}/`
                },
                jav01: {
                    zhushi: 'jav01 在线观看',
                    name: 'jav01<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://jav01.cc',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                // https://www.ixxx.com/zh/search/pred-277
                ixxx: {
                    zhushi: 'ixxx 在线搜索观看',
                    name: 'ixxx', bgcolor: '', color: 'red',
                    origin: 'https://www.ixxx.com',
                    uri: `/zh/search/${encodeURIComponent(this.fanHao)}`
                },
                在线第六排1: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                javcc: {
                    zhushi: 'javcc 在线观看',
                    name: 'javcc<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://javcc.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                javfull: {
                    zhushi: 'javfull 在线观看',
                    name: 'javfull', bgcolor: '', color: 'red',
                    origin: 'https://javfull.net',
                    uri: `/${encodeURIComponent(this.fanHao)}/`
                },
                javsup: {
                    zhushi: 'javsup 在线观看',
                    name: 'javsup<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://javsup.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                macjav: {
                    zhushi: 'macjav 在线观看',
                    name: 'macjav<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://macjav.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}/`
                },
                theav: {
                    zhushi: 'theav 在线观看',
                    name: 'theav<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://theav.xyz',
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                tktube: {
                    zhushi: 'tktube 在线观看',
                    name: 'tktube<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://tktube.com',
                    uri: `/search/${encodeURIComponent(this.fanHao)}/`
                },
                upjav: {
                    zhushi: 'upjav 在线观看',
                    name: 'upjav<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://upjav.cc',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                jav223: {
                    zhushi: 'jav223 在线观看',
                    name: 'jav223<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://www.jav223.com',
                    uri: `/?m=video_search*${encodeURIComponent(this.fanHao)}*1`
                },
                youav: {
                    zhushi: 'youav 在线观看',
                    name: 'youav<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://www.youav.com',
                    uri: `/search/videos/${encodeURIComponent(this.fanHao)}`
                },
                njav: {
                    zhushi: 'njav 在线观看',
                    name: 'njav<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://njav.tv',
                    uri: `/zh/search?keyword=${encodeURIComponent(this.fanHao)}`
                },
                // https://9527.today/MehXPt
                javdove: {
                    zhushi: 'javdove 在线观看【多结果无跳】',
                    name: 'javdove<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://javdove2.space',
                    uri: `/search/videos?search_query=${encodeURIComponent(this.fanHao)}`
                },
                在线第七排0: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                huangboav: {
                    zhushi: 'huangboav FC2及亚洲视讯 无日本AV【结果乱无跳】',
                    name: 'huangboav<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://huangboav.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                buzzav: {
                    zhushi: 'buzzav 在线观看【结果乱无跳】',
                    name: 'buzzav<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://www.buzzav.com',
                    uri: `/search/videos/${encodeURIComponent(this.fanHao)}`
                },
                // https://maa1830.com
                av18: {
                    zhushi: '18av 在线观看',
                    name: '18av<sup>fc2</sup><sub>∞</sub>', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://maa1830.com',
                    uri: `/zh/fc_search/all/${encodeURIComponent(this.fanHao)}/1.html`
                },
                // https://www.javjack.com/search?utf8=%E2%9C%93&query=SSNI-744
                // https://javleak.com/?s=BF-674
                javleak: {
                    zhushi: 'javleak 在线观看',
                    name: 'javleak', bgcolor: '', color: 'red',
                    origin: 'https://javleak.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                // https://pornbraze.com/search/video/?s=MIDV-170
                pornbraze: {
                    zhushi: 'pornbraze 在线观看',
                    name: 'pornbraze', bgcolor: '', color: 'red',
                    origin: 'https://pornbraze.com',
                    uri: `/search/video/?s=${encodeURIComponent(this.fanHao)}`
                },
                // https://watchjavonline.com/CAWD-437/
                watchjavonline: {
                    zhushi: 'watchjavonline 在线观看',
                    name: 'watchjavOL', bgcolor: '', color: 'red',
                    origin: 'https://watchjavonline.com',
                    uri: `/${encodeURIComponent(this.fanHao)}/`
                },
                // https://www.javbangers.com/search/SPRD-1458/
                javbangers: {
                    zhushi: 'javbangers 在线观看',
                    name: 'javbangers<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://www.javbangers.com',
                    uri: `/search/${encodeURIComponent(this.fanHao)}/`
                },
                // https://vjav.com/search/1/?s=SDMU_849
                vjav: {
                    zhushi: 'vjav 在线观看',
                    name: 'vjav', bgcolor: '', color: 'red',
                    origin: 'https://vjav.com',
                    uri: `/search/1/?s=${encodeURIComponent(this.fanHao)}`
                },
                // https://www.hotsav.cc/index.php/vodsearch/-------------.html?wd=JUL-278
                // https://javcv.com/search?category=dvd_code&q=SSIS-408
                javcv: {
                    zhushi: 'javcv推荐片花',
                    name: 'javcv', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://javcv.com',
                    uri: `/search?category=dvd_code&q=${encodeURIComponent(this.fanHao)}`
                },
                javabc: {
                    zhushi: ' Watch Free Japanese Porn Movies Online HD',
                    name: 'javabc', bgcolor: '', color: 'green',
                    origin: 'https://javabc.com',  //SEXTOP
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                japteenx: {
                    zhushi: 'japteenx 在线观看 FC2',
                    name: 'japteenx<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://www.japteenx.com',
                    uri: `/search/videos?search_query=${encodeURIComponent(this.fanHao)}`
                },
                在线第八排1: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                porn78: {
                    zhushi: 'porn78 在线观看【多结果无跳】',
                    name: 'porn78<sup>fc2</sup>', bgcolor: '', color: 'green',
                    origin: 'https://porn78.info',
                    uri: `/zh/video/index?search=${encodeURIComponent(this.fanHao)}`
                },
                // https://www.sexbartv.info/index.php/vodsearch/-------------.html?wd=JUL-278
                // https://javstudy.com/video/CAWD-432
                // https://www.porntw.com/?q=SSIS-408
                porntw: {
                    zhushi: 'porntw 在线观看',
                    name: 'porntw', bgcolor: '', color: 'red',
                    origin: 'https://www.porntw.com',
                    uri: `/?q=${encodeURIComponent(this.fanHao)}`
                },
                // https://www.jav777.xyz/?s=JUFE-386
                jav777: {
                    zhushi: 'jav777 在线观看',
                    name: 'jav777', bgcolor: '', color: 'red',
                    origin: 'https://www.jav777.xyz',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                // https://avple.tv/search?key=AP-681&page=1&sort=date
                avple: {
                    zhushi: 'avple 在线观看',
                    name: 'avple<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://avple.tv',
                    uri: `/search?key=${encodeURIComponent(this.fanHao)}&page=1&sort=date`
                },
                // https://159i.com/video/search/CJOD_165/ 加勒逼A片網
                // https://18commmic.com/?cat=0&s=PFES-005
                // https://www.mmav.me/search/?keyword=ADN-322
                mmav: {
                    zhushi: 'mmav 在线观看',
                    name: 'mmav', bgcolor: '', color: 'red',
                    origin: 'https://www.mmav.me',
                    uri: `/search/?keyword=${encodeURIComponent(this.fanHao)}`
                },
                // https://avee.cc/index.php/vod/search.html?wd=JUL-278
                // https://avhbo.com/?s=WAAA-212
                avhbo: {
                    zhushi: 'avhbo 在线观看',
                    name: 'avhbo', bgcolor: '', color: 'red',
                    origin: 'https://avhbo.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                // https://thtmod7.com/index.php/vodsearch/-------------.html?wd=SUPA-179
                thtmod7: {
                    zhushi: 'thtmod7 桃花堂在线观看',
                    name: 'thtmod7', bgcolor: '', color: 'red',
                    origin: 'https://thtmod7.com',
                    uri: `/index.php/vodsearch/-------------.html?wd=${encodeURIComponent(this.fanHao)}`
                },
                // https://taiav.com/cn/search?q=SSIS-525
                taiav: {
                    zhushi: 'taiav 在线观看',
                    name: 'taiav', bgcolor: '', color: 'red',
                    origin: 'https://taiav.com',
                    uri: `/cn/search?q=${encodeURIComponent(this.fanHao)}`
                },
                // https://www.mdavmod.cc/index.php/vodsearch/-------------/?wd=JUL-278
                // https://avjoy.me/search/videos/JUFD-714
                // https://hayav.com/search/SSIS-547
                hayav: {
                    zhushi: 'hayav 在线观看',
                    name: 'hayav', bgcolor: '', color: 'red',
                    origin: 'https://hayav.com',
                    uri: `/search/${encodeURIComponent(this.fanHao)}`
                },
                // https://gigolo.av.net/search?keyword=SSNI-348
                // https://www.hxaa11.com/#/search?name=SOAN-085
                // https://www.micmicdoll.com/search?q=hodv-21736 之前以为只有写真，后来才看到还可以看全片
                micmicdoll: {
                    zhushi: 'micmicdoll 在线搜索观看',
                    name: 'micmicdoll', bgcolor: '', color: 'red',
                    origin: 'https://www.micmicdoll.com',
                    uri: `/search?q=${encodeURIComponent(this.fanHao)}`
                },
                // https://www.jav19.com/v/?wd=HMDNC-549
                jav19: {
                    zhushi: 'jav19 在线搜索观看',
                    name: 'jav19', bgcolor: '', color: 'red',
                    origin: 'https://www.jav19.com',
                    uri: `/v/?wd=${encodeURIComponent(this.fanHao)}`
                },
                资讯: { zhushi: '中文简介 资讯等', name: '资讯', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                uuribao: {
                    zhushi: '番号 相关资讯类',
                    name: 'uuribao', bgcolor: '', color: 'red',
                    origin: 'https://uuribao.net',
                    uri: `/archives/tag/${encodeURIComponent(this.fanHao)}/`
                },
                uuribao2: {
                    zhushi: '演员 相关资讯类 请自行修改演员',
                    name: 'uuribao演员', bgcolor: '', color: 'red',
                    origin: 'https://uuribao.net',
                    uri: `/archives/tag/%E4%B8%89%E4%B8%8A%E6%82%A0%E4%BA%9A/`
                },
                sex9: {
                    zhushi: '9sex 中文简介',
                    name: '9sex', bgcolor: '#FAFAD2', color: 'green',
                    origin: 'https://9sex.tv',
                    uri: `/web/search?page=1&keyWord=${encodeURIComponent(this.fanHao)}`
                },
                xcity: {
                    zhushi: 'xcity ',
                    name: 'xcity', bgcolor: '', color: 'green',
                    origin: 'https://xcity.jp',
                    uri: `/result_published/?genre=%2Fresult_published%2F&q=${encodeURIComponent(this.bango)}&sg=avod&num=30`
                },
                fc2ppv: {
                    zhushi: 'fc2ppv ',
                    name: 'fc2ppv', bgcolor: '', color: 'green',
                    origin: 'https://fc2ppv.org',
                    uri: `/search?q=${encodeURIComponent(this.fanHao)}`
                },
                资讯第一排6: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                资讯第一排7: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                资讯第一排8: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                资讯第一排9: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                资讯第一排10: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                资讯第一排11: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                大缩略图: { zhushi: '大缩略图', name: '缩图', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },
                javstore: {
                    zhushi: 'utimate free download solution, free download jav, jav free, free japanese av, free download av',
                    name: 'javstore<sup>fc2</sup>', bgcolor: '#FAFAD2', color: 'red',
                    origin: 'https://javstore.net',
                    uri: `/search/${encodeURIComponent(this.fanHao)}.html`
                },
                memojav: {
                    zhushi: '在线观看 大缩略图  推荐',
                    name: 'memojav', bgcolor: '', color: 'green',
                    origin: 'https://memojav.com',
                    uri: `/video/${encodeURIComponent(this.fanHao)}`
                },
                blogjav: {
                    zhushi: 'Jav Exclusively For You! Most Updated Daily!',
                    name: 'blogjav', bgcolor: '', color: 'green',
                    origin: 'https://blogjav.net',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                javbest: {
                    zhushi: 'Javbest free update',
                    name: 'javbest', bgcolor: '', color: 'green',
                    origin: 'https://javbest.net',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                maddawgjav: {
                    zhushi: 'maddawgjav free update',
                    name: 'maddawgjav', bgcolor: '', color: 'green',
                    origin: 'https://maddawgjav.net',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                // http://t2jav.com/?s=FSDSS-434
                t2jav: {
                    zhushi: 't2jav',
                    name: 't2jav<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'http://t2jav.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                // https://3xplanet.com/?s=FSDSS-434
                xplanet: {
                    zhushi: '3xplanet',
                    name: '3xplanet<sup>fc2</sup>', bgcolor: '', color: 'red',
                    origin: 'https://3xplanet.com',
                    uri: `/?s=${encodeURIComponent(this.fanHao)}`
                },
                // http://javscreens.com/f/fsdss-090.html
                javscreens: {
                    zhushi: 'javscreens',
                    name: 'javscreens', bgcolor: '', color: 'red',
                    origin: 'http://javscreens.com',
                    uri: `/${encodeURIComponent(this.one)}/${encodeURIComponent(this.xiao)}.html`
                },
                大缩略图第一排10: { zhushi: '', name: '', bgcolor: '', color: '#00a2e8', origin: 'https://greasyfork.org/zh-CN/scripts/449158-onejavoneweb-list', uri: `` },

            };
            for (let e in this.data) {
                this.data[e].url = `${this.data[e].origin}${this.data[e].uri}`;
                delete this.data[e].origin;
                delete this.data[e].uri;
            }
            if (applySettings) this.data = applySiteSettings(this.data, this);
        }
        create_table() {
            const rows = 12;
            let htmlTable = `<div class="movieav" fr-fix-stroke="true"><table class="jav_table" width="100%" border="1" cellspacing="0">`;
            let htmlTbody = '';
            const tableEntries = Object.entries(this.data);
            const remainder = tableEntries.length % rows;
            if (remainder) {
                const paddingCount = rows - remainder;
                for (let index = 0; index < paddingCount; index++) {
                    tableEntries.push([`temp_${index}`, { zhushi: '', name: '', color: '#ffffff', bgcolor: '', url: '#' }]);
                }
            }
            tableEntries.forEach(([, item], index) => {
                if (index % rows === 0) htmlTbody += '<tbody><tr>';
                htmlTbody += `<td style="background-color:${escapeHTML(item.bgcolor)};"><a target="_blank" rel="noopener noreferrer" title="${escapeHTML(item.zhushi)}" style="color:${escapeHTML(item.color)}" href="${escapeHTML(item.url)}">${item.plainName ? escapeHTML(item.name) : item.name}</a></td>`;
                if ((index + 1) % rows === 0) htmlTbody += '</tr></tbody>';
            });
            htmlTable += htmlTbody;

            htmlTable += `<tbody><tr><td colspan="${rows}" align="left"><button type="button" class="jav-preview-trigger" style="padding:2px 8px;display:${previewEnabled?'inline-block':'none'};">查看缩略图</button><button type="button" class="jav-site-manager-trigger" style="margin-left:8px;padding:2px 8px;">综合管理</button><div class="jav-preview-container" style="max-width:100%;overflow:auto;"><img class="jav-preview-image" data-src="https://image.memojav.com/image/screenshot/${escapeHTML(this.fanHao)}.jpg" style="display:none;width:auto;height:auto;max-width:none;max-height:none;object-fit:initial;cursor:pointer;" alt="缩略图预览"></div>&nbsp;&nbsp;<span style="font-size:9px;font-family:MingLiU;">车牌信息、演员信息、磁力种子、片花、在线观看、资讯、大缩略图&nbsp;&nbsp;<font color="green">绿色</font>:免番羽&nbsp;&nbsp;<font color="red">红色</font>:需番羽&nbsp;&nbsp;直：请直连Direct&nbsp;&nbsp;演员请自行修改</span></td></tr></tbody>`;
            // 从别的脚本看到一些 ¹⁸⁺ 图库，分享下 不想看到可以在下行前面添加注释符 //
            htmlTable += renderGalleryLinks();
            htmlTable += `</table></div>`;

            return htmlTable;
        }
    }
    // Add a valid viewport declaration only when the host page does not already provide one.
    if (document.head && !document.querySelector('meta[name="viewport"]')) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1';
        document.head.appendChild(meta);
    }
    GM_addStyle(`
        .movieav a { text-decoration: none; font-size: 14px; font-weight: bold; }
        .movieav a:hover { text-decoration: underline; }
        .movieav { margin: 0; padding: 5px 0; text-align: center; font-weight: 600; font-size: 14px; color: #000000; background: #EFEFEF; text-decoration: none; }
        .jav_table { border: 1px solid #ccc; margin: 0 auto; padding: 0; border-collapse: collapse; border-spacing: 0; }
        .jav_table tr { height: 21px; vertical-align: bottom; font-weight: bold; font-size: 14px; color: #000000; }
        .jav_table th, .jav_table td { padding: 1px; height: 21px; text-align: center; border: 1px solid #999; display: table-cell; vertical-align: middle; word-break: break-all; }
        .jav_table th { text-transform: uppercase; font-size: 14px; letter-spacing: 1px; }
        @media screen and (max-width: 300px) {
            .jav_table { border: 0; }
            .jav_table thead { display: none; }
            .jav_table tr { margin-bottom: 10px; display: block; border: 2px solid #ddd; }
            .jav_table td { display: block; text-align: right; font-size: 13px; border: 1px dotted #ccc; }
            .jav_table td:before { content: attr(data-label); float: left; text-transform: uppercase; font-weight: bold; }
        }
    `);

    /* OneJAV 141jav */
    if (hasAnyHostnameLabel('onejav', '141jav', '141ppv')) {
        (() => {
            const bango = $('body > div.container > div.card.mb-3 > div > div > div.column.is-5 > div > h5').text().trim();
            if (bango) {
                const jav = new JAV(bango);
                $('body > div.container > div.card.mb-3 > div > div').after(jav.create_table());
            } else if (/\/search\/[a-zA-Z0-9-]/.test(location.pathname) && $('div.card.mb-3').length === 0) {
                const searchBango = location.pathname.slice(8);
                if (searchBango) {
                    const jav = new JAV(searchBango);
                    $('div.container').after(jav.create_table(1));
                }
            }
        })();
    }

    /* avmoo javbus */
    if (hasAnyHostnameLabel('avmoo', 'avsox', 'javbus', 'busjav', 'busfan', 'fanbus', 'buscdn', 'cdnbus', 'dmmsee', 'seedmm', 'busdmm', 'dmmbus', 'javsee', 'seejav')) {
        
        const bango = $('body > div.container > h3').text().trim().split(' ')[0];
        const jav = new JAV(bango);
        $('body > div.container > #star-div').after(jav.create_table(1));
        $('body > div.container > #movie-share').before(jav.create_table(1));
    }

    /* Freejavbt  https://freejavbt.com/ADN-322 */
    if (null != location.hostname.match(/freejavbt/)) {
        (() => {
            const bango = location.pathname.slice(location.pathname.lastIndexOf('/') + 1).toUpperCase();
            const jav = new JAV(bango);
            //
            $('body > div.row.justify-content-center.mb-3.mw-100 > div:nth-child(1)').after(jav.create_table(1)); // body > div.row.justify-content-center.mb-3.mw-100 > div:nth-child(3)
            // $('#pills-0 > div > div').after(jav.create_table(1));

        })();
    }


    /* airav 网站强制了表格样式 看起来有些错乱 先放着吧 */
    if (null != location.hostname.match(/airav/)) {
        (() => {
            const bango = $('#ContentPlaceHolder1_Label_barcode').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('#form1 > div.position_wu').before(jav.create_table(1));

        })();
    }

    /* jav.place */
    if (null != location.hostname.match(/place/)) {
        (() => {
            const bango = $('body > div.wrapper > div.content-wrapper > div > div > div.row.mb-3 > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('body > div.wrapper > div.content-wrapper > div > div > div.row.mb-3').after(jav.create_table(1));

        })();
    }

    /* javbooks */
    if (null != location.href.match(/content_censored|content_uncensored/)) {
        (() => {
            const bango = $('#info > div:nth-child(2) > font').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('#info').before(jav.create_table(1));

        })();
    }

    /* msin.jp  */
    if (null != location.href.match(/db.msin.jp\/jp.page\/movie/)) {
        (() => {
            const bango = $('div.mv_pn').text().trim().split(' ')[0]; // #content > div:nth-child(4) > div.mv_pn  #content > div:nth-child(6) > div.mv_pn
            const jav = new JAV(bango);
            $('#breadcrumb').after(jav.create_table(1)); // #content > div:nth-child(4) > div.movie_image_ditail  #breadcrumb  .jump_movie

        })();
    }
    /* msin.jp FC2 */
    if (null != location.href.match(/db.msin.jp\/page\/movie/)) {
        (() => {
            const bango = $('div.mv_fileName').text().trim().split(' ')[0]; // #content > div.movie_info_ditail > div.mv_fileName
            const jav = new JAV(bango);
            $('#breadcrumb').after(jav.create_table(1)); // #content > div:nth-child(4) > div.movie_image_ditail

        })();
    }

    /* msin.jp  番号页面更改CSS 宽度  2023年3月改版后取消此处css样式修改*/


    /* JAVLibrary */
    if (null != location.hostname.match(/javlib|n53i|o58c|g60y|f61m|y62x|x63a|g64w|u65w|h68g|c70j/)) {
        (() => {
            const bango = $('#video_title > h3').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('#video_favorite_edit').after(jav.create_table(1));

        })();
    }

    /* JAV.Land */
    if (null != location.hostname.match(/jav[0-9]?.land|hidmm.com/)) {
        (() => {
            const bango = $('body > div.container-fluid > div > div.k-right > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('body > div.container-fluid > div > div.k-right > div:nth-child(2)').before(jav.create_table(1));

        })();
    }
    /* JAV.dog */
    if (null != location.hostname.match(/jav.dog/)) {
        (() => {
            const bango = $('body > div.container-fluid > div > div.k-right > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(2)').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('body > div.container-fluid > div > div.k-right > div:nth-child(2)').before(jav.create_table(1));

        })();
    }
    /* AV大平台 */
    if (null != location.hostname.match(/9sex|paycalling/)) {
        (() => {
            const bango = $('#twigFilm > div.container.d-flex.flex-wrap.align-items-start.align-self-start.no-gutters > h1 > span.original_coded').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('#lightgallery').before(jav.create_table(1));

        })();
    }

    /* javmenu */
    if (null != location.hostname.match(/javmenu/)) {
        (() => {
            const bango = location.pathname.slice(location.pathname.lastIndexOf('/') + 1).toUpperCase();
            const jav = new JAV(bango);
            $('#app > div.page-wrapper > div.page-content > div.container-fluid.p-0 > div > div.col-md-9.px-0 > div.box.mb-3.col-12').before(jav.create_table(1)); // #app > div > div > div.container-fluid.p-0 > div > div.col-md-8.px-0 > div:nth-child(4)

        })();
    }

    /* airav.wiki */
    if (null != location.hostname.match(/airav.wiki/)) {
        (() => {
            const bango = $('#__next > div.bg-dark.text-white.container-fluid > div.bgImage.row > div.col-12.col-md-10.mx-auto.footer-mb.main > div.min-h-500.row > div.col-12.col-md-5.col > div > h5.d-none.d-md-block.text-primary.mb-3').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('#__next > div.bg-dark.text-white.container-fluid > div.bgImage.row > div.col-12.col-md-10.mx-auto.footer-mb.main > div.min-h-500.row').before(jav.create_table(1));

        })();
    }

    /* 7mmtv.tv  7mm.tv */
    if (null != location.hostname.match(/7mm|aa1141|aa1142/)) {
        (() => {
            $('body > main > div > div > div.row.flex-lg-nowrap > div.col-12.col-fullvideo > div > div.fullvideo-text.block.mb-4.mb-lg-5 > div.ut_cg1_top').remove();
            const bango = $('body > main > div > div > div.row.flex-lg-nowrap > div.col-12.col-fullvideo > div > div.fullvideo-details.mb-2.mb-md-3 > div.d-flex.mb-4 > span:nth-child(1)').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('body > header > nav > div').after(jav.create_table(1));

        })();
    }

    /* 18AV視頻站 maa */
    if (null != location.hostname.match(/maa18/i)) {
        (() => {
            // $('body > div:nth-child(7) > div > div > div.content.video').remove();
            const bango = document.title.split(" ")[0]; // body > div:nth-child(4) > div > div > div.left > div.posts-inner-details-text > div > span:nth-child(1) > ul > li:nth-child(2)
            const jav = new JAV(bango);
            $('body > div.htmleaf-container > div > ul').after(jav.create_table(1)); // #cover_information  body > div.di_img body > div.htmleaf-container > div > ul

        })();
    }

    /* jav-for.me */
    if (null != location.hostname.match(/jav-for.me/)) {
        (() => {
            const bango = $('#dle-content > article > div.movie-cols.clearfix > div.movie-text > div.movie-title > div.movie-original').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('#cols-r').before(jav.create_table(1));

        })();
    }
    /* javcv.com */
    if (null != location.hostname.match(/javcv.com/)) {
        (() => {
            const bango = $('#product-tab-description > div > div:nth-child(1) > ul > li:nth-child(1) > span').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('body > div.page-wrapper > main > div > div > div.tab.tab-nav-boxed.tab-nav-underline.product-tabs.mt-3').before(jav.create_table(1));

        })();
    }
    /* sextb */
    if (null != location.hostname.match(/sextb/)) {
        (() => {
            const bango = location.pathname.slice(location.pathname.lastIndexOf('/') + 1).toUpperCase();
            const jav = new JAV(bango);
            $('body > div.container > section.tray.all > div.film-info > h1').after(jav.create_table(1));

        })();
    }

    /* jav321 */
    if (null != location.hostname.match(/jav321/)) {
        (() => {
            if (location.pathname.match(/\/video\/[a-zA-Z0-9-]+/i)) {
                const hinban = $('body > div:nth-child(3) > div.col-md-7.col-md-offset-1.col-xs-12 > div:nth-child(1) > div.panel-body > div:nth-child(1) > div.col-md-9')
                    .text()
                    .match(/品番: ([a-zA-Z0-9-]+)/i);
                const panel = $('body > div:nth-child(3) > div.col-md-7.col-md-offset-1.col-xs-12 > div:nth-child(1) > div.panel-body')[0];
                if (hinban?.[1] && panel) {
                    const jav = new JAV(hinban[1]);
                    panel.insertAdjacentHTML('beforeend', jav.create_table(1));
                }
            }
            const searchParams = new URLSearchParams(location.search);
            const searchBango = searchParams.get('bango');
            const searchInput = $('body > div:nth-child(2) > div > nav > div > form:nth-child(2) > div > input')[0];
            if (searchBango && searchInput) {
                // 仅预填番号，搜索由用户手动提交。
                searchInput.value = searchBango;
            }
        })();
    }

    /* hpjav */

    if (null != location.hostname.match(/hpj?av/)) {
        (() => {
            const bango = location.pathname.slice(location.pathname.lastIndexOf('/') + 1).toUpperCase();
            const jav = new JAV(bango);
            $('body > div.video-box-ather.container > div:nth-child(1) > div > div.video-countext-Models.col-md-12').append(jav.create_table(1));

        })();
    }

    /* jable */
    if (null != location.hostname.match(/jable/i)) {
        (() => {
            const matches = location.pathname.match(/\/videos\/([a-zA-Z0-9-]+)\//i);
            if (matches) {
                const jav = new JAV(matches[1]);
                $('#site-content > div > div > div:nth-child(1) > section.video-info.pb-3').append(jav.create_table(1));
            }
        })();
    }
    /* javdb */
    if (isJavDbHostname) {
        //const showBoxes = $('.box');
        
        const bango = $('body > section > div > div.video-detail > h2 > strong').text().trim().replace("10musu\_", "").split(' ')[0];
        const jav = new JAV(bango);
        $('body > section > div > div.video-detail > div.video-meta-panel').after(jav.create_table(1));
    }

    /* 98堂 */
    if (document.title.includes("高清中文字幕") || document.title.includes("亚洲有码原创") || document.title.includes("4K原版") || document.title.includes("素人有码系列") || document.title.includes("PPV") && document.title.includes("色花堂")) {
        const threadSubject = document.getElementById("thread_subject");
        const pagination = document.querySelector("#pgt");
        if (threadSubject && pagination) {
            const bango = threadSubject.textContent.trim().split(/\s+/)[0];
            const jav = new JAV(bango);
            pagination.innerHTML = jav.create_table(1);
        }

    }
    /* 98堂2  Discuz论坛系统强制宽版 对于删除版权的无效 */
    if (document.title.includes("Discuz")) {
        GM_addStyle(` .wp {width: 98%;}   `);
    }
    /* javhd.today */
    if (isJavHdHostname) {
        
    }
    /* javstore.net */
    if (null != location.hostname.match(/javstore/)) {
        //const bango = document.title.replace("6000Kbps ","").replace("FHD ","").replace("[VR] ","").replace("CHINASES SUB ","").replace("Reducing Mosaic ","").replace("[ENGSUB] ","").replace("[ENGLISH SUB]","").replace("10musume ","").replace("1pondo ","").replace("一本道 ","").replace("Caribbeancom ","").replace("Caribbeancompr ","").replace("FC2-PPV ","").replace("FC2 PPV ","").replace("HEYZO ","").replace("pacopacomama ","").replace("Tokyo Hot ","").split(" ")[0];
        const bango = document.title.replace(/(6000Kbps |FHD |\[VR\] |CHINASES SUB |Reducing Mosaic |\[ENGSUB\] |\[ENGLISH SUB\]|10musume |天然むすめ |1pondo |一本道 |1Pondo-|4k |Caribbeancom |Caribbean-|カリビアンコム |Caribbeancompr |FC2-PPV |FC2 PPV |FC2PPV |HEYZO |pacopacomama |パコパコママ |Tokyo Hot )/ig, "").split(" ")[0];
        const jav = new JAV(bango);
        $('body > div.all_page_javstore > div.all_page_javstore1 > div.boxoright > div.category_news_main_right > div.news > div.fisrst_sc').append(jav.create_table(1));

    }
    /* btsow */
    if (null != location.href.match(/btsow.\w+\/search/)) {
        (() => {
            const bango = location.pathname.slice(location.pathname.lastIndexOf('/') + 1).toUpperCase();
            const jav = new JAV(bango);
            $('body > div.container').append(jav.create_table(1));
            let div = document.createElement("div");
            div.style.height = '700px';
            document.body.append(div);
        })();
    }
    /* btsow2 */
    if (null != location.href.match(/magnet\/detail\/hash/)) {
        (() => {
            const bango = $('body > div.container > h3').text().trim().split(' ')[0];
            const jav = new JAV(bango);
            $('body > div.container').append(jav.create_table(1));
            let div = document.createElement("div");
            div.style.height = '700px';
            document.body.append(div);

        })();
    }
    /* xslist.org/tw/model/ */
    if (null != location.href.match(/xslist.org\/(zh|tw|en)\/model/)) {
        (() => {
            let div = document.createElement("div");
            div.style.height = '700px';
            document.body.append(div);

        })();
    }
    /* javhoo.org */
    if (hasHostnameLabel('javhoo')) {
        (() => {
            const bango = document.title.split(" ")[0];
            const jav = new JAV(bango);
            $('body > section > div.content-wrap > div > article').after(jav.create_table(1));

        })();
    }
    /* ggjav.com */
    if (null != location.hostname.match(/ggjav/i)) {
        $('.native_ads.columns.large-3.medium-6.small-12.item.float-left').remove();
    }
    /* sexbartv */
    if (null != location.hostname.match(/sexbartv/i)) {
        $('div.tags-cloud.box > .tags-cloud.box').remove();
        $('body > div.container > h1').remove();
        $('.all').remove();
    }
    /* javmenu */
    if (null != location.hostname.match(/javmenu/i)) {
        $('#app > div > div.page-content > div:nth-child(2) > div > div > div > div:nth-child(1) > div').remove();
    }

})();