// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/jp': { page: '/jp' }
    }
  }
}
