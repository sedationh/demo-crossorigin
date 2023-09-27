setTimeout(() => {
  throw new Error("other-origin-error")
}, 400)
