import { useState, useEffect } from 'react';
import Login from '@/components/Login';
import './NavBar.less';
import '@/pages/font.css';

export default function NavBar({ current }) {
  const [useDeepStyle, setUseDeepStyle] = useState(false);

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
    <div className={`pc-nav ${useDeepStyle ? 'pc-deepWrap' : 'pc-lightWrap'}`}>
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
  );
}
