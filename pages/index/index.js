//index.js
//获取应用实例
// var app = getApp()
var config = require('../../utils/config.js')


let size = 1;
let flag = true;



Page({
    data: {
        animationData: {},
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        dataBoll: false, //正在加载默认显示

        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        inputShowed: false,
        inputVal: "",
        liveList: ""

    },

    onLoad: function() {
        //this.getList();
        //  getTestData(循环次数，数据格式)
        this.setData({
            ceshiList: config.ceshi().slice(0, 2),
            dataBoll: true
        });
    },
    getList: function() {
        var _this = this;
        if (flag) {
            flag = false;
            wx.request({
                url: 'http://192.168.1.105:9082/happyReadingApp/bookResource/getBookOfMustOrChooose',
                data: {
                    "currentPage": 1,
                    "pageSize": 6 * size,
                    "difficultyLevel": 1,
                    "bookType": 2
                },
                header: {
                    'content-type': 'application/json'
                },
                method: 'POST',
                success: function(res) {
                    if (res.data.header.code == 0) {
                        var data = res.data.data.list;
                        console.log(data)
                        var str = "";
                        for (var i in data) {
                            str += JSON.stringify(data);
                        }
                        _this.setData({
                            liveList: data,
                            dataBoll: true
                        });
                        setTimeout(function() {
                            size++;
                            flag = true;
                        }, 1000)
                    }
                }
            })
        }
    },
    sendValue: function() {
        var v = this.data.inputVal;

        wx.showToast({
            title: v,
            icon: "success",
            duration: 1000
        })
    },
    showInput: function() {
        this.setData({
            inputShowed: true
        });

    },
    hideInput: function() {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function() {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function(e) {
        this.setData({
            inputVal: e.detail.value
        });
    }

})