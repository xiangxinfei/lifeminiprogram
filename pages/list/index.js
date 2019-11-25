import ApiList from '../../api/list'
Page({
  data: {
    category: {},
    list: [],
  },
  onLoad(options) {
    const id = options.id;
    ApiList.getList({
      id
    }).then((res) => {
      this.setData({
        category: res.data[0]
      })
      wx.setNavigationBarTitle({
        title: res.data[0].name
      })
    })
  },
})
