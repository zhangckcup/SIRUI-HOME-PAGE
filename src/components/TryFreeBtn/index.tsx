import { useMemo } from 'react';
import './index.less';

export default function TryFreeBtn(props) {
  const { className, btnHref, arrowStyle = 'home' } = props;
  const showArrow = useMemo(() => {
    if (arrowStyle === 'home') {
      return (
        <svg
          className="pc-arrow mobile-arrow"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.7766 11.5664L7.85156 3.8695C7.51875 3.58356 7.03125 3.84138 7.03125 4.30309V19.6968C7.03125 20.1586 7.51875 20.4164 7.85156 20.1304L16.7766 12.4336C17.032 12.2133 17.032 11.7867 16.7766 11.5664Z" />
        </svg>
      );
    } else {
      return (
        <svg
          className="pc-arrow mobile-arrow"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8333 7.625L17 12M17 12L12.8333 16.375M17 12L7 12"
            stroke-fill="currentColor"
          />
        </svg>
      );
    }
  }, [arrowStyle]);

  return (
    <a className={`pc-try-btn mobile-try-btn ${className}`} href={btnHref} target="_blank">
      Try for free now
      {showArrow}
    </a>
  );
}
