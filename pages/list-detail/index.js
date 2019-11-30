import ApiListDetail from '../../api/list-detail'
Page({
  data: {
    shops: {},
    showData: false,
    commontId: 0,
    goTopVisible: false,
    scrollTop: 0,
    isLoading: true,
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
        showData: true,
        isLoading: false,
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
  },
  /* 页面滚动 */
  onPageScroll(e) {
    this.data.scrollTop = e.scrollTop;
    if (this.data.goTopVisible !== this.data.scrollTop > 700) {
      this.setData({
        goTopVisible: this.data.scrollTop > 700,
      });
    }
  },
  /* 回到顶部 */
  goTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      selector: '.container',
      success: (res) => {
        this.setData({
          goTopVisible: false,
          scrollTop: 0
        })
      }
    });
  },
})
