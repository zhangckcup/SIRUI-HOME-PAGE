import React from 'react';
import TryFreeBtn from '../TryFreeBtn';
import { NavLink } from 'umi';
import './inde.less';

export default (props) => {
  if (props.floorIndex === 1) return null;
  const { btnStyle = {} } = props;
  const { buttonType, isDeepStyle, className, btnHref, arrowStyle } = btnStyle;

  return (
    <>
      {buttonType === 'more' ? (
        <NavLink to={btnHref} className={className}>
          {'more'}
        </NavLink>
      ) : (
        <TryFreeBtn {...{ isDeepStyle, className, btnHref, arrowStyle }} />
      )}
    </>
  );
};
