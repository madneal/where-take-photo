// free
//获取应用实例
const data = require('../../libs/data.js');
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    socialData: data.socialData(),
    index1: 0,
    freeData: data.freeData(),
    tableInfo1: data.freeData()['黄浦区'],
    district1: ['黄浦区', '静安区', '嘉定区', '浦东新区', '徐汇区', '虹口区', '长宁区', '杨浦区', '闵行区', '宝山区', '奉贤区', '崇明区'],
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
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs',
  //     success: function (res) {
  //       console.log(res.data);
  //     }
  //   })
  // },
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value,
      tableInfo1: this.data.freeData[this.data.district1[e.detail.value]]
    })
  },
  onLoad: function () {

  },
})
