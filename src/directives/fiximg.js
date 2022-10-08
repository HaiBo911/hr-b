// 处理图片错误自定义指令
export default {
  inserted(dom, options) {
    dom.error = function() {
      dom.src = options.value
    }
    // 检测图片为空的状态
    dom.src = dom.src || options.value
  }
}
