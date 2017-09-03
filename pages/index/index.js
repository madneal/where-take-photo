//index.js
//获取应用实例
const data = require('../../libs/data.js');
var baseUrl = 'http://api.map.baidu.com/routematrix/v2/riding?output=json&';

Page({
  data: {
    index: 0,
    location: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    socialData: data.socialData(),
    tableInfo: data.socialData()['黄浦区'],
    district: ['黄浦区', '静安区', '嘉定区', '浦东新区', '徐汇区', '虹口区', '长宁区', '杨浦区','闵行区', '宝山区', '奉贤区', '崇明区', '普陀区'],
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
      },{
        id: 12,
        name: '普陀区'
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
  }
})
