setTimeout(() => {
  throw new Error("front index.js error")
}, 200)

// 这里的错误监听可以正常工作
// window.onerror = function (message, source, line, column, error) {
//   // Handle the error here
//   console.error("from front |Error:", message, "at", source, "line:", line, "column:", column)
// }
