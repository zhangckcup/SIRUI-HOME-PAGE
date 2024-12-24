import { useState, useEffect } from 'react';
import Login from '@/components/Login';
import { getWidth } from '@/hooks/useResponsive';
import { NavLink } from 'umi';
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
      {getWidth() ? (
        <div
          className={`pc-nav ${useDeepStyle ? 'pc-deepWrap ' : 'pc-lightWrap'}`}
        >
          <NavLink to="/">
            {useDeepStyle ? (
              <img src={require('$public/logo_deep.png')} className="pc-logo" />
            ) : (
              <img
                src={require('$public/logo.png')}
                alt="sandwich lab"
                className="pc-logo"
              />
            )}
          </NavLink>
          <Login show={loginShow} onClose={() => setLoginShow(false)} />
          <div className="pc-right-area">
            <div className="pc-nav-bar">
              <NavLink
                to="/"
                style={current === 'Home' ? { fontWeight: 700 } : {}}
              >
                Home
              </NavLink>
              <NavLink
                to="/Features"
                style={current === 'Features' ? { fontWeight: 700 } : {}}
              >
                Features
              </NavLink>
              <NavLink
                to="/ContactUs"
                style={current === 'ContactUs' ? { fontWeight: 700 } : {}}
              >
                Contact Us
              </NavLink>
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
                  src={require('$public/arrow-light.svg')}
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
                  src={require('$public/arrow-deep.svg')}
                  style={{ width: '7%', height: 'auto' }}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mobile-nav-wrap">
          {!showMask ? (
            <div className="mobile-nav-inner">
              {useDeepStyle ? (
                <img
                  src={require('$public/logo_deep.png')}
                  className="mobile-logo"
                />
              ) : (
                <img
                  src={require('$public/logo.png')}
                  alt="sandwich lab"
                  className="mobile-logo"
                />
              )}
              <div
                className="mobile-nav-btn"
                onClick={() => {
                  setShowMask(true);
                }}
              >
                {useDeepStyle ? (
                  <img
                    src={require('$public/menu_deep.png')}
                    className="mobile-menu"
                  />
                ) : (
                  <img
                    src={require('$public/menu.png')}
                    alt="sandwich lab"
                    className="mobile-menu"
                  />
                )}
              </div>
            </div>
          ) : (
            <div
              className="mobile-nav-mask"
              onClick={() => {
                setShowMask(false);
              }}
            >
              <div className="mobile-mask-title">
                <img
                  className="mobile-logo"
                  src={require('$public/logo.png')}
                />
                <img
                  className="mobile-close"
                  src={require('$public/mask_close.png')}
                />
              </div>
              <div className="mobile-item-wrap">
                <NavLink
                  className={`mobile-item-btn`}
                  to="https://test.sandwichlab.ai/lexi"
                  target="_blank"
                  onClick={() => {
                    setShowMask(false);
                  }}
                >
                  Login
                </NavLink>
                <NavLink
                  className={`mobile-item-btn ${
                    current === 'Home' ? 'mobile-active-item' : ''
                  }`}
                  to="/"
                  onClick={() => {
                    setShowMask(false);
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  className={`mobile-item-btn ${
                    current === 'Features' ? 'mobile-active-item' : ''
                  }`}
                  to="/Features"
                  onClick={() => {
                    setShowMask(false);
                  }}
                >
                  Features
                </NavLink>
                <NavLink
                  className={`mobile-item-btn ${
                    current === 'ContactUs' ? 'mobile-active-item' : ''
                  }`}
                  to="/ContactUs"
                  onClick={() => {
                    setShowMask(false);
                  }}
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
