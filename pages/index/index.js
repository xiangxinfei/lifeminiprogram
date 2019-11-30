import ApiIndex from '../../api/index';
Page({
  data: {
    slides: [], //轮播图
    menu: [], //首页菜单
  },
  onLoad() {
    ApiIndex.getSlides().then((res) => {
      this.setData({
        slides: res.data
      })
    }).catch(() => {
      wx.showToast({
        title: '网络出故障啦,请稍后再试！',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
        complete: () => {}
      });
    })
    ApiIndex.getMenu().then((res) => {
      this.setData({
        menu: res.data
      })
    })
  },
})
