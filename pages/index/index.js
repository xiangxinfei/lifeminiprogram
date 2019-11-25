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
    })
    ApiIndex.getMenu().then((res) => {
      this.setData({
        menu: res.data
      })
    })
  },
})
