import React from 'react';
import { ITitleProps } from '@/type';
import { getWidth } from '@/hooks/useResponsive';
import './index.less';
import '@/global.less';

export default (props: ITitleProps) => {
  const { titleConfigPc, titleConfigMobile, needMobileIcon } = props;
  const titleList = getWidth() ? titleConfigPc || [] : titleConfigMobile || [];

  return (
    <>
      {titleList.map((item, index) => {
        return (
          <div
            className={`${item.class} ${
              item.needIcon ? 'pc-has-icon-title' : ''
            }`}
            key={index}
          >
            {item.text}
            {item.needIcon ? (
              <div className="pc-title-icon-wrap">
                ···
                <div className="pc-title-icon-view">
                  <img
                    className="pc-title-icon-facebook pc-link-facebook"
                    src={require('$public/titleFacebook.png')}
                    alt="facebook"
                  />
                  <img
                    className="pc-title-icon-ig"
                    src={require('$public/titleIg.png')}
                    alt="ig"
                  />
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
      {!getWidth() && needMobileIcon ? (
        <div className="mobile-title-icon-wrap">
          <div className="mobile-title-icon-view">
            <img
              className="mobile-title-icon-facebook mobile-link-facebook"
              src={require('$public/titleFacebook.png')}
              alt="facebook"
            />
            <div className="mobile-title-icon-border" />
            <img
              className="mobile-title-icon-ig"
              src={require('$public/titleIg.png')}
              alt="ig"
            />
          </div>
        </div>
      ) : null}
      ;
    </>
  );
};
