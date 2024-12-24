import React, { useEffect, useMemo } from 'react';
import TryFreeBtn from '@/components/TryFreeBtn';
import { getWidth } from '@/hooks/useResponsive';
import './index.less';

export default function Home() {
  // banner图列
  const PcHomeImg = [
    require('$public/t1.jpg'),
    require('$public/t2.jpg'),
    require('$public/t3.jpg'),
    require('$public/t4.jpg'),
    require('$public/t5.jpg'),
  ];
  const MobileImg = [
    require('$public/mobile1.jpg'),
    require('$public/mobile2.jpg'),
    require('$public/mobile3.jpg'),
    require('$public/mobile4.jpg'),
    require('$public/mobile5.jpg'),
  ];
  const RandomNum = Math.floor(Math.random() * PcHomeImg.length);
  // 随即透出其一
  const randomImg = useMemo(() => {
    if (getWidth()) {
      return PcHomeImg[RandomNum];
    } else {
      return MobileImg[RandomNum];
    }
  }, [getWidth()]);

  useEffect(() => {
    const scrollCb = () => {
      window.location.href = '/Features';
    };
    document.addEventListener('wheel', scrollCb);

    return () => {
      document.removeEventListener('wheel', scrollCb);
    };
  }, []);
  console.log(RandomNum);

  return (
    <div
      className={`${
        getWidth() ? 'pc-all-wrap' : 'mobile-all-wrap'
      } "home-wrap"`}
    >
      <div className="pc-home-floor">
        {/* 背景图 */}
        <img
          className="pc-home-banner mobile-home-banner"
          alt={'Home Banner'}
          src={randomImg}
        />
        <div
          className={`pc-home-btn mobile-home-btn ${
            RandomNum > 2 ? 'mobile-center-btn' : ''
          }`}
        >
          <TryFreeBtn btnHref="https://test.sandwichlab.ai/lexi" />
        </div>
      </div>
    </div>
  );
}
