import ApiList from '../../api/list'
Page({
  data: {
    category: {},
    list: [],
    pageIndex: 0,
    pageSize: 20,
  },
  onLoad(options) {
    const id = options.id;
    ApiList.getTitle(id).then((res) => {
      this.setData({
        category: res.data
      })
      wx.setNavigationBarTitle({
        title: res.data.name
      })
      let params = {
        'pageIndex': 0,
        'pageSize': 20
      }
      return ApiList.getList(res.data.id, params)
    }).then(res => {
      console.log(res);
    })
  },
})
