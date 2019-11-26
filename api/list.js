/**
 *  列表api
 */
import Fetch from './fetch.js';
// 楼盘列表接口
export default class ApiList {
  static getTitle(id) {
    return Fetch.request(`categories/${id}`);
  }
  static getList(id, options) {
    return Fetch.request(`categories/${id}/shops`, options);
  }
}
