setTimeout(() => {
  throw new Error("front index.js error")
}, 200)

// window.onerror = function (message, source, line, column, error) {
//   // Handle the error here
//   console.log("from front |Error:", {
//     message,
//     source,
//     line,
//     column,
//     error,
//   })
// }
