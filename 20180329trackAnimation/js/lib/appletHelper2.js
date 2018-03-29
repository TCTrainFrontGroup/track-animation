
var hideShareFlag = 'hideShare=1',

    appletHelper = {

        /**
         * @description 判断是否是小程序环境
         * @param {function} callback 回调方法 (isApplet) => {}
         */
        isAppletEnvi: function (callback) {
            function ready() {
                callback && callback(window.__wxjs_environment === 'miniprogram');
            }

            var av = navigator.appVersion || navigator.userAgent;

            if (!/MicroMessenger/.test(av) || av.length < 20) { // 区别PC端模拟
                ready();
                return;
            }

            if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
                document.addEventListener('WeixinJSBridgeReady', ready, false);
            } else {
                ready();
            }
        },

        /**
         * @description 获取当前页面是否已禁用分享
         * 
         */
        hasDisableShare: function () {
            return !!sessionStorage.getItem("appletActivityDisableShare");
        },

        /**
         * @description 禁用分享
         */
        disableShare: function () {
            var pagePath = "/page/home/webview/webview",
                appletArgs = '&hideShare=1',
                search = location.search,
                hash = location.hash;

            search += (search ? '&' : '?') + hideShareFlag;

            var pageUrl = pagePath + '?src=' + encodeURIComponent(location.protocol + '//' + location.host + location.pathname + search + hash) + appletArgs;

            if (document.referrer) { // 网页进入
                setTimeout(() => {
                    history.back();
                }, 50);

                wx.miniProgram.navigateTo({
                    url: pageUrl
                });
            } else { // 小程序进入
                wx.miniProgram.redirectTo({
                    url: pageUrl
                });
            }
        },

        /**
         * @description 设置分享数据
         * 
         */
        setShareData: function (opts) {
            var url = opts.link;

            wx.miniProgram.postMessage({
                data: {
                    shareInfo: {
                        currentPath: location.host + location.pathname, //当前页面路径，不需要参数
                        title: opts.title, //默认同程艺龙
                        path: url, //默认当前页面路径
                        imageUrl: opts.imgUrl, //支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
                        successObj: opts.successOpts
                        /*
                        { //分享成功的回调接口请求，只支持发起请求，不支持请求成功后的回调处理。可不传
                            url: '',
                            data: {}, // json格式
                            method: 'GET', //默认get请求
                            header: {
                                "Content-Type": "application/json"
                            }
                        }
                         */
                    }
                }
            });
        },

        /**
         * 跳转到小程序首页
         */
        jumpToHomePage: function (refid, tab) {
            var args = '';
            if (refid) args += '&wxrefid=' + refid;
            wx.miniProgram.switchTab({
                url: '/page/home/index/index?tab=' + (tab || 0) + args
            });
        }
    };

if (location.search.indexOf(hideShareFlag) > 0) sessionStorage.setItem("appletActivityDisableShare", "1");

module.exports = appletHelper;


//=======================代码使用事例========================= 

// 页面引入js <script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>

// /**
//  * 业务逻辑代码
//  * @param {boolean} isApplet 是否是小程序环境
//  */
// function todo(isApplet) {

// }

// appletHelper.isAppletEnvi(function (isApplet) {
//    todo(isApplet);
// });
