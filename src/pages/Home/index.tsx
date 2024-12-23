import React, { useEffect, useMemo } from 'react';
import TryFreeBtn from '@/components/TryFreeBtn';
import { getWidth } from '@/hooks/useResponsive';
import './index.less';

export default function Home() {
  // banner图列
  const PcHomeImg = ['/t1.jpg', '/t2.jpg', '/t3.jpg', '/t4.jpg', '/t5.jpg'];
  const MobileImg = ['/mobile1.jpg', '/mobile2.jpg', '/mobile3.jpg', '/mobile4.jpg', '/mobile5.jpg'];
  const RandomNum = Math.floor(Math.random() * PcHomeImg.length);
  // 随即透出其一
  const randomImg = useMemo(() => {
    if (getWidth()) {
      return PcHomeImg[RandomNum]
    } else {
      return MobileImg[RandomNum]
    }
  }, [getWidth()])


  useEffect(() => {
    const scrollCb = () => {
      window.location.href = '/Features';
    };
    document.addEventListener('wheel', scrollCb);

    return () => {
      document.removeEventListener('wheel', scrollCb);
    };
  }, []);
  console.log(RandomNum)

  return (
    <div className={`${getWidth() ? 'pc-all-wrap' : 'mobile-all-wrap'} "home-wrap"`}>
      <div className="pc-home-floor">
        {/* 背景图 */}
        <img className="pc-home-banner mobile-home-banner" alt={'Home Banner'} src={randomImg} />
        <div className={`pc-home-btn mobile-home-btn ${RandomNum > 2 ? 'mobile-center-btn' : ''}`}>
          <TryFreeBtn btnHref="https://test.sandwichlab.ai/lexi" />
        </div>
      </div>
    </div>
  );
}
