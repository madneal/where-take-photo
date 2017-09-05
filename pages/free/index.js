// free
const data = require('../../libs/data.js');
var baseUrl = 'https://api.map.baidu.com/geocoder/v2/?address=上海市';
const ak = '&output=json&ak=qMuA8fTWTM4AwtdP4uGa0ZHqzGOj18LP'

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    index1: 0,
    freeData: data.freeData(),
    tableInfo1: data.freeData()['黄浦区'],
    district1: ['黄浦区', '静安区', '嘉定区', '浦东新区', '徐汇区', '虹口区', '长宁区', '杨浦区', '闵行区', '宝山区', '奉贤区', '崇明区', '普陀区', '松江区'],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs',
      success: function (res) {
        console.log(res.data);
      }
    })
  },
  makecall: function (e) {
    const tel = e.target.dataset.tel + '';
    console.dir(e);
    wx.makePhoneCall({
      phoneNumber: tel,
    })
  },
  navigateinfo: function () {
    wx.navigateTo({
      url: '../info/index',
    })
  },
  openmap: function (e) {
    const location = e.target.dataset.location;
    const url = baseUrl + location + ak;
    wx.request({
      url: url,
      success: function (res) {
        wx.openLocation({
          latitude: res.data.result.location.lat,
          longitude: res.data.result.location.lng,
          name: location
        })
      }
    })
  },
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value,
      tableInfo1: this.data.freeData[this.data.district1[e.detail.value]]
    })
  },
  onLoad: function () {
  },
})
