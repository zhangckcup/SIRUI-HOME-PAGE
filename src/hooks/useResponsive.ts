import { useEffect } from "react";

export const getWidth = () => {
  return window.screen.width > 600;
}

const throttle = (fn, delay) => {
  let timer = null;

  return (...args) => {
    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export default () => {

  
}