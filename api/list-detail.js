/**
 *  列表详情api
 */
import Fetch from './fetch.js';
// 楼盘列表接口
export default class ApiListDetail {
  static getDetail(id) {
    return Fetch.request(`shops/${id}`);
  }
}
