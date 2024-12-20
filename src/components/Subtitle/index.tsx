import React from 'react';
import { getWidth } from '@/hooks/useResponsive';
import './index.less';
import '@/global.less';

export default (props) => {
  const { subTitleConfigPc = [], subTitleConfigMobile = [] } = props;
  const subTitleList = getWidth() ? subTitleConfigPc : subTitleConfigMobile;

  return (
    <>
      {subTitleList?.map((item, index) => {
        return (
          <div className={item.class} key={index}>
            {item.text}
          </div>
        );
      })}
    </>
  );
};
