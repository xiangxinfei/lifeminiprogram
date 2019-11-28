import ApiListDetail from '../../api/list-detail'
Page({
  data: {
    shops: {},
    showData: false,
  },
  onLoad(options) {
    ApiListDetail.getDetail(options.id).then((res) => {
      this.setData({
        shops: res.data,
        showData: true
      })
      wx.setNavigationBarTitle({
        title: res.data.name,
      });
    })
  },
  /* 查看轮播图片 */
  viewImage(e) {
    console.log(e);
    wx.previewImage({
      urls: this.data.shops.images,
      current: e.target.dataset.src
    })
  },
})
