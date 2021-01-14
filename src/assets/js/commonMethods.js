// 节流防抖
export function debounce(fun, delay = 50) {
  let timer = null;
  return function () {
    if (timer)
      clearTimeout(timer);
    console.log(fun, delay);
    timer = setTimeout((...args) => {
      fun.apply(this, args)
    }, delay)
  }
}

