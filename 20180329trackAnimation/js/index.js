import helper from "./lib/helper";
import envi from "./lib/envi";
import share from "./lib/share";
import './lib/bridge.2.2.6'
import getSignFn from "./lib/signHelper";
// options {signFn: getSignFn(0x193)}

(function () {

    // 判断APP渠道，做UI兼容
    if (helper.isReturnUrl()) return;

    var pageData,
        channels = {
            wx: {
                isWX: 1,
                platId: helper.plat.wx.id,
                actCode: "a521fa3ef985644c1096fedae224c8ac",
                jumpUrl: "//wx.17u.cn/channel-web/wxModule/chuxingbao/open?ref_id=hcpqbp",
                robTicketUrl: "//wx.17u.cn/train/TrainGrabPage.html?privateEnter=1",
                refid: "399516790",
                // showShare: false,
                // shareTitle: '',
                // shareSubTitle: '',
                // sharePicture:'',
                showPhone: false
            },
            qq: {
                isQQ: 1,
                platId: helper.plat.qq.id,
                actCode: "8c3b5181881d9a4cca2584c22a91f90d",
                jumpUrl: "http://m.17u.cn/client/pj/240976581?schemUrl=shouji.17u.cn%2Finternal%2Fh5%2Ffile%2F35%2Fcoupon%2Findex.html%3Ftcwvcwl",
                robTicketUrl: "//wx.17u.cn/uniontrain/webapp/train/robticketsfill.html",
                refid: "399516781",
                // showShare: false,
                // shareTitle: '',
                // shareSubTitle: '',
                // sharePicture:'',
                showPhone: true
            },
            app: {
                isAPP: 1,
                platId: helper.plat.app.id,
                actCode: "9c57de8eb35283897f229b131d5cbb63",
                jumpUrl: "http://shouji.17u.cn/internal/h5/file/35/coupon/index.html?tcwvclogin",
                robTicketUrl: "tctclient://train/GrabTicketOrderList",
                refid: "399516783",
                // showShare: false,
                // shareTitle: '',
                // shareSubTitle: '',
                // sharePicture:'',
                showPhone: false
            }
        };

    if (envi.isInWeixin) pageData = channels.wx;
    else if (envi.isInQQ) pageData = channels.qq;
    else if (envi.isInApp) pageData = channels.app;
    else { // 其他渠道，默认走qq渠道逻辑
        //pageData = channels.wx;
        pageData = channels.app;
    }

    // 渲染/呈现页面 及 其业务逻辑
    var render = function (userIden) {
        







        helper.initStat(pageData.refid);
    };


    helper.getUserIden(function (userIden) {
        if (userIden) {
            render(userIden);
        } else {
            var authUrl = helper.getLocalAuthUrl(pageData.platId, ["serialId", "refid"], true);
            location.replace(authUrl);
        }
    });

})();

window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
}
