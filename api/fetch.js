import Config from '../config/config';

/**
 * 请求接口数据
 * url
 * options 参数  object
 * type 请求类型  大写
 */
export default class Fetch {
  static request(url, options, type) {
    return new Promise((resolve, reject) => {
      try {
        wx.request({
          url: Config.baseURL + url,
          data: {
            ...options,
          },
          method: type || 'GET',
          ...(type === 'POST' ? {
            header: {
              'content-type': 'application/x-www-form-urlencoded',
            },
          } : {
            header: {
              'content-type': 'json',
            },
          }),
          success: (res) => {
            if (res.statusCode === 200) {
              resolve(res);
            } else {
              reject(res);
            }
          },
          fail: (err) => {
            reject(new Error('服务器异常'));
          },
        });
      } catch (error) {
        reject(new Error('服务器异常'));
      }
    });
  }
}
