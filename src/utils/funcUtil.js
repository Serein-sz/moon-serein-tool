export function debounce(func, wait) {
  let timer;
  return function(...arg) {
    timer && clearTimeout(timer)
    timer = setTimeout(func(arg), wait);
  }
}