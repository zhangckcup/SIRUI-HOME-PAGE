import React, { useEffect, useRef } from 'react';
import { featuresData } from '../Features/features';
import { newPageData } from './data';
import Title from '@/components/Title';
import DepthText from '@/components/ArrowText';
import Subtitle from '@/components/Subtitle';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TryFreeBtn from '@/components/TryFreeBtn';
import './index.less';
import '@/pages/font.css';
import '@/global.less';

export default (props) => {
  const { i, pageStyle } = props.match.params;
  const hrefData = featuresData[Number(i) - 1];
  let pageList = [];
  newPageData.map((item, index) => {
    if (item.dataFloor === i) {
      pageList = [hrefData, ...item.data];
    }
  });

  const floorRef = useRef([]);
  useScrollAnimation({ floorRef });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pc-more-wrap mobile-more-wrap">
      {pageList.map((item, index) => {
        return (
          <div
            ref={(ref) => (floorRef.current[index] = ref)}
            key={index}
            className={`pc-more-wrap mobile-more-wrap ${
              pageStyle === 'light' ? 'common-light-bg' : 'common-dark-bg'
            }`}
          >
            <div
              className={`common-floor-wrap pc-more-floor mobile-more-floor ${
                pageStyle === 'light' ? 'common-light-bg' : 'common-dark-bg'
              }`}
            >
              <Title {...item} />
              {item.useComponents ? (
                <DepthText {...item} />
              ) : (
                <Subtitle {...item} />
              )}
              <div className="pc-more-page-btn mobile-more-page-btn">
                <a
                  className={
                    pageStyle === 'light'
                      ? 'pc-more-page-back-dark mobile-more-page-back-dark'
                      : 'pc-more-page-back-light mobile-more-page-back-light'
                  }
                  href={'javascript:history.back(-1)'}
                >
                  Back
                </a>
                <TryFreeBtn
                  {...{
                    className:
                      pageStyle === 'deep'
                        ? 'pc-tryFreeLightBtn mobile-tryFreeLightBtn'
                        : 'pc-tryFreeDeepBtn mobile-tryFreeDeepBtn',
                    btnHref: 'https://test.sandwichlab.ai/lexi',
                    arrowStyle: 'features',
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
