$.ajaxPrefilter(function(options) {
  //拼接根路径
  options.url = 'http://www.liulongbin.top:3007' + options.url
  console.log(options.url)
})

//注意： 调用get，post，ajax 时候，先调用这个函数
// 在这个函数中，可以拿到我们给ajax提供的配置对象
