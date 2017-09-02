//index.js
//获取应用实例
const app = getApp()
const data = require('../../libs/data.js');
const baseUrl = 'https://api.map.baidu.com/geocoder/v2/?address=北京市海淀区上地十街10号&output=json&ak=qMuA8fTWTM4AwtdP4uGa0ZHqzGOj18LP'
const url = 'https://api.map.baidu.com/routematrix/v2/riding?output=json&origins=40.45,116.34&destinations=40.34,116.456&ak=qMuA8fTWTM4AwtdP4uGa0ZHqzGOj18LP'
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    index: 0,
    hasUserInfo: false,
    geoInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    socialData: data.socialData(),
    freeData: data.freeData(),
    tableInfo: data.socialData()['黄浦区'],
    district: ['黄浦区', '静安区', '嘉定区', '浦东新区', '徐汇区', '虹口区', '长宁区', '杨浦区','闵行区', '宝山区', '奉贤区', '崇明区'],
    objectDistrict: [
      {
        id: 0,
        name: '黄浦区'
      },
      {
        id: 0,
        name: '静安区'
      },
      {
        id: 0,
        name: '嘉定区'
      },
      {
        id: 0,
        name: '浦东新区'
      },
      {
        id: 0,
        name: '徐汇区'
      },
      {
        id: 0,
        name: '虹口区'
      },
      {
        id: 0,
        name: '长宁区'
      },
      {
        id: 0,
        name: '杨浦区'
      },
      {
        id: 0,
        name: '闵行区'
      },
      {
        id: 0,
        name: '宝山区'
      },
      {
        id: 0,
        name: '奉贤区'
      },
      {
        id: 0,
        name: '崇明区'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs',
      success: function(res) {
        console.log(res.data);
      }
    })
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value,
      tableInfo: this.data.socialData[this.data.district[e.detail.value]]
    })
  },
  onLoad: function () {
    this.setData({
      tableInfo: this.data.socialData['黄浦区']
    })
    // wx.getLocation({
    //   success: function(res) {
    //     var geoInfo = {
    //       latitude: res.latitude,
    //       longitude: res.longitude
    //     };
    //     // this.setData({
    //     //   geoInfo: geoInfo
    //     // })
    //   },
    // })
    // wx.request({
    //   url: url,
    //   success: function(res) {
    //     console.log(res.data);
    //   }
    // })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getGeoInfo: function() {
    wx.getLocation({
      success: function(res) {
        console.log(res);
      },
    })
  }
})
