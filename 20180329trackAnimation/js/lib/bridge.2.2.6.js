!function(e,a){function n(e,a){_++;var n=a.cbcache?a.cbcache+"1":"bridgeFnCache"+_,t=typeof e;if("function"===t)m[n]=e;else if("string"===t){for(var r,o=e.split("."),c=0;c<o.length;c++){if(0===c)r=window[o[c]];else{if("[object Object]"!==Object.prototype.toString.call(r))break;r=r[o[c]]}if(!r)break}m[n]="function"==typeof r?r:function(){}}return a.cbcache?[a.cbcache,"1"]:["bridgeFnCache",_]}function t(e){return o=[e.CBPluginName,e.CBTagName],e.CBTagName=e.CBPluginName+"."+e.CBTagName,e.CBPluginName=p,e}function r(e,a,n){var t=":s"+encodeURIComponent(":"+encodeURIComponent(n));s.loadURL("easy-js:"+e+":"+encodeURIComponent(a+":")+t)}var o,c,i=navigator.userAgent.toLowerCase(),_=0,m={},p="bridgeFnNewurl2Callback",l="_tc_web_bartag_isStop",s={platform:null,isTc:!1,isNavbarHidden:!0,isToolbarHidden:!0,NaEptStr:function(e){return!!("string"==typeof e&&e.trim().length>0)},buildParams:function(e){if(e&&e.reqBodyObj&&!s.isAppVersionGreatThan(801)){var a="";for(var n in e.reqBodyObj)null!=e.reqBodyObj[n]&&(a&&(a+=","),a+='"'+n+'":'+JSON.stringify(e.reqBodyObj[n]));e.reqbody=a,e.reqBodyObj=null}if(e&&e.requrl){var t=e.requrl;"%2f%2f"==t.toLowerCase().slice(0,"%2f%2f".length)&&(t=decodeURIComponent(t)),"//"==t.slice(0,"//".length)&&(e.requrl="http:"+t)}"[object Object]"===Object.prototype.toString.call(e.reqbody)&&(e.reqbody=JSON.stringify(e.reqbody),e.reqbody=e.reqbody.substring(1,e.reqbody.length-1))},extend:function(e,a){if(a&&e){var n,t;for(t in a)null!=(n=a[t])&&(e[t]=n);return e}},NaEptObj:function(e){var a=Object.prototype.toString.call(e);if("[object Array]"===a&&e.length>0)return!0;if("[object Object]"===a){for(var n in e)if(hasOwnProperty.call(e,n))return!0;return!1}return!1},stringifyAndEncode:function(e,a){try{var n=JSON.stringify(e);return a||(n=encodeURIComponent(n)),n}catch(t){return""}},decodeAndParse:function(e){try{return JSON.parse(decodeURIComponent(e))}catch(a){return{}}},buildParamString:function(e,a,n){var t={};return t.param=e||null,t.CBPluginName=a||"",t.CBTagName=n||"",s.stringifyAndEncode(t)},ntvCB:function(a,n){if(a){var t="[object Object]"===Object.prototype.toString.call(a)?a:s.decodeAndParse(a),r=t.pluginname+t.tagname,i=m[r];if(t.pluginname===p&&t.tagname){var _=t.tagname.toString().split(".");2==_.length&&e[_[0]]&&e[_[0]][_[1]]?(t.pluginname=_[0],t.tagname=_[1]):o&&2==o.length&&(r=o[0]+o[1],i=m[r],t.pluginname=o[0],t.tagname=o[1])}if(c&&l===r&&c(t.param),a=t,t.cacheKey){var v=Android.getCacheByKey(t.cacheKey);v&&(cachecbObj=JSON.parse(v),t.param=cachecbObj.param)}if(i)i(t.param),-1===r.indexOf("_cbcachemark_")&&delete m[r];else if(i=window[t.pluginname],i=i?i[t.tagname]:!1)i&&i(t.param);else{if("catch"===n)return;setTimeout(function(){s.ntvCB(a,"catch")},10)}}},loadURL:function(e){var n=a.createElement("iframe");n.style.display="none",n.src=e;var t=a.body||a.documentElement;t.appendChild(n),setTimeout(function(){n.parentNode.removeChild(n),n=null},200)},appver:null,isAppVersionGreatThan:function(e){return s.appver>=e&&e>0},appVersionNotSupportCallback:function(e,a){setTimeout(function(){try{var n={pluginname:e.CBPluginName,tagname:e.CBTagName,param:{tagname:e.param&&e.param.tagname,startVer:a}};s.ntvCB(s.stringifyAndEncode(n))}catch(t){}},10)},init:function(){i.indexOf("iphone")>-1||i.indexOf("ipad")>-1?s.platform=0:i.indexOf("android")>-1&&(s.platform=1),-1!=i.indexOf("tctravel")&&(s.isTc=!0),s.appver=function(){var e=0,a=i.match(/tctravel\/([\d\.]+)/i);if(a&&a.length>=2){var n=a[1].split(".");2==n.length&&n.push(0),3==n.length&&(e=parseInt(n.join("")))}return e}()}};s.processFn=n,s.init(),e._tc_bridge_public=s;for(var v=[{pfn:"_tc_bridge_bar",dfn:"_tc_ntv_bar",config:[{name:"set_navbar",v:700,cbcache:!0},{name:"set_navbar_hidden",emptyPass:!0,v:700,processData:function(e){return e&&e.param||(s.isNavbarHidden=!s.isNavbarHidden,e={param:{isNavbarHidden:s.isNavbarHidden}}),e}},{name:"set_toolbar_hidden",v:700,processData:function(e){return e&&e.param||(s.isToolbarHidden=!s.isToolbarHidden,e={param:{isToolbarHidden:s.isToolbarHidden}}),e}},{name:"shareInfoFromH5",v:700,cbcache:!0},{name:"show_navbar_close_icon",v:750},{name:"share_weixin_msg",v:809},{name:"show_navbar_popup",v:810},{name:"check_im_summary",v:810,cbcache:!0}]},{pfn:"_tc_bridge_util",dfn:"_tc_ntv_util",config:[{name:"set_webview_back",v:710,dfn:"_tc_ntv_bar",emptyPass:1},{name:"set_webview_forward",v:710,dfn:"_tc_ntv_bar",emptyPass:1},{name:"show_dialog",v:700},{name:"get_data",v:700,notSupprotNormal:!1,notSupprot:function(e){var a={};a.url=decodeURIComponent(e.param.requrl),a.serviceName=e.param.servicename,e.param.reqbody?"%"===e.param.reqbody[0]?a.jsonBody=decodeURIComponent(e.param.reqbody):a.jsonBody="{"+e.param.reqbody+"}":a.jsonBody="{}",$.ajax({type:"post",contentType:"application/json",dataType:"json",url:"http://10.100.172.197:8011/appservicetest/ClientDebug/Debug",data:JSON.stringify(a),success:function(a){var n="开发测试中转请求失败，请检查请求参数。";try{if("7000"==JSON.parse(a).response.header.rspCode)return void alert(n)}catch(t){return void alert(n)}s.ntvCB({param:{tagname:e.param.tagname,CBData:a},pluginname:e.CBPluginName,tagname:e.CBTagName})}})},processData:function(e){return s.buildParams(e.param),e}},{name:"set_page",v:700},{name:"set_event",v:700},{name:"upload_photo",v:710},{name:"keyword_search",v:710},{name:"set_city",v:710},{name:"set_category_event",v:710},{name:"set_webview_info",v:710,av:802},{name:"show_tips_dialog",v:720},{name:"get_network_type",v:720},{name:"set_alarm_info",v:720},{name:"get_alarm_info",v:720},{name:"cancel_alarm_info",v:720},{name:"show_toast",v:730},{name:"show_flash_dialog",v:730},{name:"save_tracelog",v:742},{name:"choose_photo",v:750},{name:"show_online_dialog",v:751},{name:"check_online_entry",v:751},{name:"set_weixin_cardcoupon",v:752},{name:"check_installed_packages",av:753,v:-1},{name:"scan",v:804},{name:"crop_photo",v:804},{name:"create_qrimage",v:804},{name:"get_app_info",v:806},{name:"td_save_product_detail",v:807},{name:"td_save_order_success",v:807},{name:"td_save_pay_success",v:807},{name:"get_index_config",v:810},{name:"get_webapp_cache",v:811},{name:"set_webapp_cache",v:811},{name:"set_clipboard",v:812},{name:"get_clipboard",v:812},{name:"capture_webview_img",v:814,notcode:814},{name:"call_tel",v:815}]},{pfn:"_tc_bridge_map",dfn:"_tc_ntv_map",config:[{name:"app_location",v:710,cbcache:!0,callfn:"app_locate"},{name:"open_navigation_map",v:730},{name:"select_city",v:730,notcode:760,cbcache:!0},{name:"show_multi_lonlats",v:740},{name:"open_hotel_map",v:760},{name:"select_flight_city",v:804},{name:"select_discovery_city",v:804},{name:"select_disport_city",v:812},{name:"select_train_city",v:816,notcode:816}]},{pfn:"_tc_bridge_user",dfn:"_tc_ntv_user",config:[{name:"user_login",v:720},{name:"get_device_info",v:720},{name:"get_contacts",v:730},{name:"get_mailing_address",v:730},{name:"user_logout",v:730},{name:"pick_common_contacts",v:740},{name:"pick_flight_common_contacts",v:750},{name:"pick_interflight_common_contacts",v:751},{name:"check_lockpattern",v:802},{name:"get_all_contacts",v:804},{name:"social_login_auth",v:806},{name:"pick_common_travelers",v:812},{name:"query_blh_info",v:822},{name:"pick_steamer_common_travelers",v:825},{name:"pick_business_common_travelers",v:826}]},{pfn:"_tc_bridge_web",dfn:"_tc_ntv_web",config:[{name:"open_newurl",rnparam:function(e){return t(e)},v:720,notSupprotNormal:!1,notSupprot:function(e){location.href=e.param.jumpUrl}},{name:"data_callback",rnparam:function(e){return t(e)},v:720},{name:"clear_cache",v:731},{name:"set_webview_mark",cbcache:!0,v:806},{name:"jump_webview_mark",v:806},{name:"play_audio",cbcache:!0,v:811,av:-1},{name:"open_with_close",v:820,notSupprotNormal:!1,notSupprot:function(e){if(e&&e.param){var a=e.param.jumpUrl;a&&(/^(?:tctclient|(?:http|tctravel):\/\/shouji.17u.cn\/internal)/.test(a)||a.indexOf("tcwvcnew")>0?location.href=a:_tc_bridge_web.open_newurl(e),c=function(e){e&&"false"===e.isStop&&setTimeout(function(){location.href="tctravel://shouji.17u.cn/internal/common/close"},0)})}}}]},{pfn:"_tc_bridge_datetime",dfn:"_tc_ntv_datetime",config:[{name:"pick_datetime",v:730},{name:"pick_date",v:730},{name:"pick_iflight_calendar",v:751},{name:"pick_common_calendar",v:760,notcode:760},{name:"pick_route_calendar",v:811},{name:"correct_local_time",cbcache:!0,v:814}]},{pfn:"_tc_bridge_sale",dfn:"_tc_ntv_sale",config:[{name:"get_redpackage",v:730},{name:"select_redpackage",v:730},{name:"get_redpackage_with_price",v:730}]},{pfn:"_tc_bridge_pay",dfn:"_tc_ntv_pay",config:[{name:"pay_creditcard",v:730},{name:"pay_alipay",v:730},{name:"pay_platform",v:740},{name:"open_recommend_page",v:740},{name:"flight_pay_platform",v:750},{name:"pay_weixin",v:822},{name:"bind_card",v:823}]},{pfn:"_tc_bridge_project",dfn:"_tc_ntv_project",config:[{name:"update_trainorder_status",v:742},{name:"write_comment",v:742},{name:"open_commentlist",v:742},{name:"save_train_nonmember_order",v:750},{name:"save_flight_nonmember_order",v:750},{name:"open_comment_center",v:752},{name:"save_flight_history_city",v:806},{name:"save_nonlogin_orders",v:811},{name:"update_nonlogin_orders",v:811},{name:"select_vacation_dest",v:811},{name:"write_invoice",v:816},{name:"save_business_nonlogin_orders",v:826}]}],d=0;d<v.length;d++){var f=v[d],u=f.config;e[f.pfn]=e[f.pfn]||{};for(var g=0;g<u.length;g++)!function(a,n,t,o){var c;c=1==s.platform?s.isAppVersionGreatThan(a.av||a.v):s.isAppVersionGreatThan(a.v);var i=a.dfn||n.dfn,_=a.name;t[_]=function(n){if(a.processData&&(n=a.processData(n)),n&&(a.cbcache&&(n.cbcache=o+"_cbcachemark_"+_),n.callback)){var t=s.processFn(n.callback,n);n.CBPluginName=t[0],n.CBTagName=t[1]}if(a.emptyPass||s.NaEptObj(n)){var m=a.callfn||_;if(c){if(a.rnparam&&(n=a.rnparam(n)),0==s.platform)r(i,m,s.stringifyAndEncode(n));else if(1==s.platform){var p=s.stringifyAndEncode(n,a.notcode&&s.isAppVersionGreatThan(a.notcode));e[i]&&e[i][m]&&e[i][m](p)}}else a.notSupprot&&a.notSupprot(n),a.notSupprotNormal!==!1&&s.appVersionNotSupportCallback(n,a.v.toString().split("").join("."))}}}(u[g],f,e[f.pfn],f.pfn)}}(window,document),function(e,a){function n(e){var a=JSON.parse(e);a&&(o=parseInt(a.delta)||0)}function t(){e.Android&&Android.getCorrectLocalTime?n(Android.getCorrectLocalTime()):""===o&&0==e._tc_bridge_public.platform&&e._tc_bridge_public.isAppVersionGreatThan(814)?c&&c.correct_local_time&&c.correct_local_time({callback:function(e){e&&e.CBData&&n(e.CBData)}}):""===o&&(o=0)}function r(){t();var e=Date.now();return e+=o||0}var o="",c=e._tc_bridge_datetime;t(),a.dateNow=r}(window,window._tc_bridge_datetime=window._tc_bridge_datetime||{});