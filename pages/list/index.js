import ApiList from '../../api/list'
const apiList = new ApiList();
Page({
  data: {
    category: {},
    list: [],
  },
  onLoad(options) {
    const id = options.id;
    apiList.getList({
      id
    }).then((res) => {
      console.log(res);
      this.setData({
        category: res.data[0]
      })
      wx.setNavigationBarTitle({
        title: res.data[0].name
      })
    })
  },
})
