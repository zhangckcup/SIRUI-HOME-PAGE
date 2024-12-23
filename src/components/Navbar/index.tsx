import { useState, useEffect } from 'react';
import Login from '@/components/Login';
import { getWidth } from '@/hooks/useResponsive';
import './NavBar.less';
import '@/pages/font.css';

export default function NavBar({ current }) {
  const [useDeepStyle, setUseDeepStyle] = useState(false);
  const [showMask, setShowMask] = useState(false);

  useEffect(() => {
    const changeStyle = (e) => {
      setUseDeepStyle(e.detail % 2 !== 0);
    };

    window.addEventListener('__page_index_change', changeStyle);

    return () => {
      window.removeEventListener('__page_index_change', changeStyle);
    };
  }, []);

  const [loginShow, setLoginShow] = useState(false);

  return (
    <>
      {
        getWidth() ? (
          <div className={`pc-nav ${useDeepStyle ? 'pc-deepWrap ' : 'pc-lightWrap'}`}>
            <a href="/">
              {useDeepStyle ? (
                <img src="/logo_deep.png" className="pc-logo" />
              ) : (
                <img src="/logo.png" alt="sandwich lab" className="pc-logo" />
              )}
            </a>
            <Login show={loginShow} onClose={() => setLoginShow(false)} />
            <div className="pc-right-area">
              <div className="pc-nav-bar">
                <a href="/" style={current === 'Home' ? { fontWeight: 700 } : {}}>
                  Home
                </a>
                <a
                  href="/Features"
                  style={current === 'Features' ? { fontWeight: 700 } : {}}
                >
                  Features
                </a>
                <a
                  href="/ContactUs"
                  style={current === 'ContactUs' ? { fontWeight: 700 } : {}}
                >
                  Contact Us
                </a>
              </div>
              <div
                onClick={() => {
                  window.location.href = 'https://test.sandwichlab.ai/lexi';
                }}
                className="pc-login-btn"
              >
                Login
              </div>
              {useDeepStyle ? (
                <div
                  onClick={() => {
                    window.location.href = 'https://test.sandwichlab.ai/lexi';
                  }}
                  className="pc-try-free-btn"
                >
                  Try for free now
                  <img
                    src="/arrow-light.svg"
                    style={{ width: '7%', height: 'auto' }}
                  />
                </div>
              ) : (
                <div
                  onClick={() => {
                    window.location.href = 'https://test.sandwichlab.ai/lexi';
                  }}
                  className="pc-try-free-btn"
                >
                  Try for free now
                  <img
                    src="/arrow-deep.svg"
                    style={{ width: '7%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mobile-nav-wrap">
            {!showMask ? (<div className="mobile-nav-inner">
              {useDeepStyle ? (
                <img src="/logo_deep.png" className="mobile-logo" />
              ) : (
                <img src="/logo.png" alt="sandwich lab" className="mobile-logo" />
              )}
              <div className="mobile-nav-btn" onClick={() => { setShowMask(true) }}>
                {useDeepStyle ? (
                  <img src="/menu_deep.png" className="mobile-menu" />
                ) : (
                  <img src="/menu.png" alt="sandwich lab" className="mobile-menu" />
                )}
              </div>
            </div>) :
              (
                <div className="mobile-nav-mask" onClick={() => { setShowMask(false) }}>
                  <div className="mobile-mask-title">
                    <img className="mobile-logo" src="/logo.png" />
                    <img className="mobile-close" src="/mask_close.png" />
                  </div>
                  <div className="mobile-item-wrap">
                    <a className={`mobile-item-btn`} href="https://test.sandwichlab.ai/lexi" target='_blank' onClick={() => { setShowMask(false) }}>
                      Login
                    </a>
                    <a className={`mobile-item-btn ${current === 'Home' ? 'mobile-active-item' : ''}`} href="/" onClick={() => { setShowMask(false) }}>
                      Home
                    </a>
                    <a className={`mobile-item-btn ${current === 'Features' ? 'mobile-active-item' : ''}`} href="/Features" onClick={() => { setShowMask(false) }}>
                      Features
                    </a>
                    <a className={`mobile-item-btn ${current === 'ContactUs' ? 'mobile-active-item' : ''}`} href="/ContactUs" onClick={() => { setShowMask(false) }}>
                      Contact Us
                    </a>
                  </div>
                </div>
              )}
          </div>
        )
      }

    </>

  );
}
