import React, { useEffect, useState } from 'react';

const throttle = (fn, delay) => {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
};

export const useScrollAnimation = (props: { floorRef: any }) => {
  const { floorRef } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    function onScroll() {
      floorRef.current &&
        floorRef.current.map((item, index) => {
          // dom的 top值小于0 且 大于自身负高度，说明元素目前在页面最上方
          const { top, height } = item?.getBoundingClientRect();
          if (
            top < 0 &&
            top >= -height &&
            index !== floorRef.current.length - 1
          ) {
            item.children[0].style.position = 'fixed';
            item.children[0].style.top = 0;
            item.children[0].style.transform = `scale(${
              (height + top) / height
            })`;
          } else {
            item.children[0].style.position = 'relative';
            item.children[0].style.transform = 'scale(1)';
          }

          if (top < 0 && top >= -height) {
            if (index !== activeIndex) {
              setActiveIndex(index);
              window.dispatchEvent(
                new CustomEvent('__page_index_change', { detail: index }),
              );
            }
          }
        });
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [floorRef, activeIndex]);
};
