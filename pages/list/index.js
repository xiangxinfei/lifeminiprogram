import ApiList from '../../api/list'
Page({
  data: {
    list: [],
    id: 0,
    pageIndex: 0,
    pageSize: 20,
    reachBottomFlag: false,
    searchText: '',
    showBlock: false,
    goTopVisible: false,
    scrollTop: 0,
  },
  onLoad(options) {
    console.log(this.data.goTopVisible);

    this.data.id = options.id;
    ApiList.getTitle(this.data.id).then((res) => {
      wx.setNavigationBarTitle({
        title: res.data.name
      })
      this.loadmore()
    })
  },
  /* 加载 */
  loadmore() {
    const params = {
      _page: ++this.data.pageIndex,
      _limit: this.data.pageSize,
      q: this.data.searchText
    }
    ApiList.getList(this.data.id, params).then((res) => {
      this.setData({
        showBlock: true
      })
      const total = parseInt(res.header['X-Total-Count']);
      const reachBottomFlag = total > this.data.pageIndex * this.data.pageSize;
      const list = [...this.data.list, ...res.data];
      this.setData({
        list,
        reachBottomFlag
      })
      wx.stopPullDownRefresh();
    })
  },
  /* 页面下拉刷新 */
  onPullDownRefresh() {
    this.setData({
      pageIndex: 0,
      list: [],
      reachBottomFlag: false,
    });
    this.loadmore();
  },
  /* 页面触底 */
  onReachBottom() {
    if (this.data.reachBottomFlag) this.loadmore();
  },
  /* 文本框输入 */
  inputchangeHandle(e) {
    this.setData({
      searchText: e.detail.value
    })
  },
  /* 点击键盘的确认 */
  inputconfirm() {
    this.setData({
      pageIndex: 0,
      list: [],
      reachBottomFlag: false,
      showBlock: false
    });
    this.loadmore();
  },
  /* 页面滚动 */
  onPageScroll(e) {
    this.data.scrollTop = e.scrollTop;
    if (e.scrollTop > 700) {
      this.setData({
        goTopVisible: true
      })
      console.log(this.data.goTopVisible);

    }
  },
  /* 回到顶部 */
  goTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300,
      selector: '.container',
    });
    this.setData({
      goTopVisible: false,
      scrollTop: 0
    })
    console.log(this.data.goTopVisible);
  },
  onShareAppMessage() {
    console.log('分享');
  }
})
