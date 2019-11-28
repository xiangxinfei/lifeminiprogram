import ApiListDetail from '../../api/list-detail'
Page({
  data: {
    shops: {},
    showData: false,
    commontId:0,
  },
  onLoad(options) {
    ApiListDetail.getDetail(options.id).then((res) => {
      res.data.comments.forEach((item) => {
        item.images = item.images.map((value) => {
          return value.replace('w.h', '100.100');
        })
      })
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
  previewImage(e) {
    wx.previewImage({
      urls: this.data.shops.images,
      current: e.target.dataset.src
    })
  },
  // 利用事件捕获原理，父元素传递 data-index
  deliverId(e) {
    this.setData({
      commontId: e.currentTarget.dataset.index
    })
  },
  // 查看评论图片
  viewImage(e) {
    wx.previewImage({
      urls: this.data.shops.comments[this.data.commontId].images,
      current: e.target.dataset.src
    })
  }
})
