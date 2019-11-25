/**
 *  首页api
 */
import Fetch from './fetch.js';
// 楼盘列表接口
export default class ApiIndex {
  //首页(index)轮播图
  static getSlides(options) {
    return Fetch.request('slides', options);
  }
  //首页九宫格
  static getMenu(options) {
    return Fetch.request('categories', options);
  }
}
