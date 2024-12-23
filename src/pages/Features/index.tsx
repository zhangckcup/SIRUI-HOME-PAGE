import { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/Navbar';
import { featuresData, featuresBottomData } from './features';
import Title from '@/components/Title';
import Subtitle from '@/components/Subtitle';
import DepthText from '@/components/ArrowText';
import Button from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import '@/pages/font.css';
import './index.less';
import '../../global.less';
import { getWidth } from '@/hooks/useResponsive';

export default function Features() {
  const floorRef = useRef([]);
  useScrollAnimation({ floorRef });

  return (
    <div className="pc-features-wrap mobile-features-wrap">
      <div className="pc-common-nav ">
        <NavBar current="Features" />
      </div>
      {featuresData.map((item, index) => {
        return (
          <div
            ref={(ref) => (floorRef.current[index] = ref)}
            key={index}
            className={`pc-floor-wrap pc-features-floor dark-bg ${index % 2 === 0 ? 'common-dark-bg' : 'common-light-bg'
              }`}
          >
            <div
              className={`common-floor-wrap pc-features-floor ${index % 2 === 0 ? 'common-dark-bg' : 'common-light-bg'
                }`}
            >
              <Title {...item} />
              {item.useComponents ? (
                <DepthText {...item} />
              ) : (
                <Subtitle {...item} />
              )}
              <Button {...item} />
            </div>
          </div>
        );
      })}
      {/* 底部 */}
      <div className="pc-features-bottom-copy mobile-features-bottom-copy" />
      <div className="pc-features-bottom mobile-features-bottom light-bg">
        <div className="pc-bottom-content mobile-bottom-content">
          <div className="pc-bottom-left-view mobile-bottom-left-view">
            <a
              href={featuresBottomData.left.titleIcon.href}
              style={{ display: 'flex' }}
            >
              <img
                className={featuresBottomData.left.titleIcon.class}
                src={featuresBottomData.left.titleIcon.src}
                alt=""
              />
            </a>
            <div className="pc-bottom-left-icons mobile-bottom-left-icons">
              {featuresBottomData.left.items.map((item, index) => {
                return (
                  <a href={item.href} target="_blank" key={index}>
                    <img className={item.class} src={getWidth() ? item.srcPc : item.srcMobile} alt="icon" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="pc-bottom-right-view mobile-bottom-right-view">
            {featuresBottomData.right.map((item, index) => {
              return (
                <div className="pc-bottom-right-title-wrap mobile-bottom-right-title-wrap" key={index}>
                  <div className="pc-bottom-right-title-text mobile-bottom-right-title-text common-floor-font">
                    {item.title}
                  </div>
                  {item.items.map((n, i) => {
                    return (
                      <a
                        key={i}
                        href={n.href}
                        onClick={n.onClick}
                        target={n.target}
                        className="pc-bottom-right-item mobile-bottom-right-item common-floor-font"
                      >
                        {n.text}
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="pc-bottom-bar mobile-bottom-bar">
          {featuresBottomData.bottom.font.map((item) => {
            return (
              <span key={item.text} className="pc-normal-type mobile-normal-type common-floor-font">
                {item.text}
              </span>
            );
          })}
          {featuresBottomData.bottom.behind.map((item) => {
            return (
              <a
                href={item.href}
                key={item.text}
                target="_blank"
                className="pc-underline-type mobile-underline-type common-floor-font"
              >
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
