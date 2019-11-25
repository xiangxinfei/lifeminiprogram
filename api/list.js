/**
 *  列表api
 */
import Fetch from './fetch.js';
// 楼盘列表接口
export default class ApiList {
  static getList(options) {
    return Fetch.request('categories', options);
  }
}
