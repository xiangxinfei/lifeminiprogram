import ApiIndex from '../../api/index';
const apiIndex = new ApiIndex();
Page({
  data: {
    slides: [], //轮播图
    menu: [], //首页菜单
  },
  onLoad() {
    apiIndex.getSlides().then((res) => {
      this.setData({
        slides: res.data
      })
    })
    apiIndex.getMenu().then((res) => {
      this.setData({
        menu: res.data
      })
    })
  },
})
