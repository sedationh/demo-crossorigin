console.log("接入 handle error")
// 监听 上报

window.onerror = function (message, source, line, column, error) {
  // Handle the error here
  console.log("from handle-error |Error:", {
    message,
    source,
    line,
    column,
    error,
  })
}

setTimeout(() => {
  throw new Error("handle error")
}, 200)
