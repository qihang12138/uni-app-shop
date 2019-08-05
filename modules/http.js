const http = function({url, method = 'GET', data = {}} = option) {
  return new Promise((resolve, reject) => {
    if(!url) return reject('url 不能为空');
    uni.request({
      url: url,
      data: data,
      method: method.toUpperCase(),
      header: {
        token: '50a00a9b8d3402ed4f1b3ed4b890294b',
        uid: wx.getStorageSync('uid')
      },
      success (res) {
        console.log('接口: ' + url);
        console.log(res.data);
        if(res.statusCode === 200) {
          resolve(res.data);
          // if(res.data.error_code === 501 || res.data.error_code === 502) {
          //   wx.redirectTo({
          //     url: '/pages/user/authorization'
          //   })
          // }
        }
      },
      fail (err) {
        reject(err);
      }
    })
  })
}

module.exports = http;