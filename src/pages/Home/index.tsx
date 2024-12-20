import React, { useEffect, useMemo } from 'react';
import TryFreeBtn from '@/components/TryFreeBtn';
import { getWidth } from '@/hooks/useResponsive';
import './index.less';

export default function Home() {
  // banner图列
  const PcHomeImg = ['/t1.jpg', '/t2.jpg', '/t3.jpg', '/t4.jpg', '/t5.jpg'];
  const MobileImg = ['/t1.jpg', '/t2.jpg', '/t3.jpg', '/t4.jpg', '/t5.jpg'];
  // 随即透出其一
  // const randomImg = PcHomeImg[Math.floor(Math.random() * PcHomeImg.length)];
  const randomImg = useMemo(() => {
    if(getWidth()) {
      return PcHomeImg[Math.floor(Math.random() * PcHomeImg.length)]
    } else {
      return MobileImg[Math.floor(Math.random() * MobileImg.length)]
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

  
  return (
    <div className={`${getWidth() ? 'pc-all-wrap': 'mobile-all-wrap'} "home-wrap"`}>
      <div className="pc-home-floor">
        {/* 背景图 */}
        <img className="pc-home-banner mobile-home-banner" alt={'Home Banner'} src={randomImg} />
        <div className="pc-home-btn mobile-home-btn">
          <TryFreeBtn btnHref="https://test.sandwichlab.ai/lexi" />
        </div>
      </div>
    </div>
  );
}
