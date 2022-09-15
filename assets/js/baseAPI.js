
//注意： 调用get，post，ajax 时候，先调用这个函数
// 在这个函数中，可以拿到我们给ajax提供的配置对象

$.ajaxPrefilter(function(options) {
  //拼接根路径
  options.url = 'http://www.liulongbin.top:3007' + options.url
  console.log(options.url)

  //统一为有权限的接口，设置请求头
if (options.url.indexOf('/my/') !== -1) {
  options.headers = {
    Authorization: localStorage.getItem('token') || ''
  }
}


//全局挂载 complete 回调函数
options.complete = function(res) {
        // console.log('执行了 complete 回调')
      // console.log(res)
      // 在这个回调函数中， 可以使用 res.responseJSON 拿到服务器响应回来的数据
      if(res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
        // 1. 强制清空token
        localStorage.removeItem('token')
        // 2. 强制跳转到登录页面
        location.href = '/login.html'
      }
    

}

})



