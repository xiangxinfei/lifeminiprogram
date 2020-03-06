/**
 *  首页api
 */
import Fetch from './fetch.js';
// 楼盘列表接口
export default class ApiIndex {
  //首页(index)轮播图
  static getSlides() {
    return Fetch.request('slides');
  }
  //首页九宫格
  static getMenu() {
    return Fetch.request('categories');
  }
}
