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
    district1: ['黄浦区', '静安区', '嘉定区', '浦东新区', '徐汇区', '虹口区', '长宁区', '杨浦区', '闵行区', '宝山区', '奉贤区', '崇明区', '普陀区'],
    objectDistrict: [
      {
        id: 0,
        name: '黄浦区'
      },
      {
        id: 1,
        name: '静安区'
      },
      {
        id: 2,
        name: '嘉定区'
      },
      {
        id: 3,
        name: '浦东新区'
      },
      {
        id: 4,
        name: '徐汇区'
      },
      {
        id: 5,
        name: '虹口区'
      },
      {
        id: 6,
        name: '长宁区'
      },
      {
        id: 7,
        name: '杨浦区'
      },
      {
        id: 8,
        name: '闵行区'
      },
      {
        id: 9,
        name: '宝山区'
      },
      {
        id: 10,
        name: '奉贤区'
      },
      {
        id: 11,
        name: '崇明区'
      },
      {
        id: 12,
        name: '普陀区'
      }
    ]
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
