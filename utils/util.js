const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
};

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
};

/**
 * 发起网络请求并将返回的数据设置到指定的上下文中。
 * 
 * @param {string} url - 请求的URL地址。
 * @param {string} dataKey - 数据在上下文中存储的键名。
 * @param {Object} [context=this] - 数据存储的上下文对象，默认为当前this对象。
 * @returns {Promise} - 返回一个Promise对象，请求成功时resolve，失败时reject。
 */
function requestAndSetData(url, dataKey, context=this) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'GET',
      success: (res) => {
        // 将请求返回的数据设置到指定的上下文中
        context.setData({
          [dataKey]: res.data,
        });
        resolve();
      },
      fail: (err) => {
        console.error(err);
      }
    });
  });
};

/**
 * 防抖函数
 * @param {Function} func - 需要防抖的函数
 * @param {number} wait - 等待时间（毫秒）
 * @returns {Function} - 返回防抖后的函数
 */
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
};

/**
 * 节流函数
 * @param {Function} func - 需要节流的函数
 * @param {number} wait - 等待时间（毫秒）
 * @returns {Function} - 返回节流后的函数
 */
function throttle(func, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      func.apply(this, args);
      lastTime = now;
    }
  };
}

module.exports = {
  formatTime:formatTime,
  requestAndSetData:requestAndSetData,
  debounce:debounce,
  throttle:throttle
}
