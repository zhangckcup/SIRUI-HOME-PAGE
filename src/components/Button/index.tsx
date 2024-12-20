import React from 'react';
import TryFreeBtn from '../TryFreeBtn';
import './inde.less';

export default (props) => {
  if (props.floorIndex === 1) return null;
  const { btnStyle = {} } = props;
  const { buttonType, isDeepStyle, className, btnHref, arrowStyle } = btnStyle;

  return (
    <>
      {buttonType === 'more' ? (
        <a href={btnHref} className={className}>
          {'more'}
        </a>
      ) : (
        <TryFreeBtn {...{ isDeepStyle, className, btnHref, arrowStyle }} />
      )}
    </>
  );
};
