import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './index.less';

interface IProps {
  show: boolean;
  onClose: Function;
}

function Remember({ onChange, value }: any) {
  const onChangeIn = (ev) => {
    onChange(ev.target.checked);
  };

  return (
    <div className="remember-checkbox-warp">
      <div className="remember-checkbox-warp">
        <input
          onChange={onChangeIn}
          type="checkbox"
          id="remember"
          name="remember"
        />
        <label htmlFor="remember">Remember me</label>
      </div>
      <a href="">Forget your password</a>
    </div>
  );
}

export default function Login({ show, onClose }: IProps) {
  const [form] = Form.useForm();

  const [isLogin, setIsLogin] = useState(true);

  const onCloseIn = () => {
    setIsLogin(true);
    onClose();
  };

  const onSubmit = (values) => {
    console.log('====================================');
    console.log('Login onSubmit', values);
    console.log('====================================');
  };

  if (show) {
    return (
      <div className="pc-login-mask">
        <div className={`pc-login-dialog ${isLogin ? 'pc-login-dialog-login' : ''}`}>
          <img
            onClick={() => onCloseIn()}
            className="pc-login-dialog-close"
            src="/close.png"
            alt="close"
          />
          <div className="pc-login-dialog-title">
            {isLogin ? 'Log in' : 'Create an account'}
          </div>
          <div className="pc-login-dialog-subtitle">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <span
                  className="pc-login-dialog-subtitle-change"
                  onClick={() => {
                    setIsLogin(false);
                    form.resetFields();
                  }}
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span
                  className="pc-login-dialog-subtitle-change"
                  onClick={() => {
                    setIsLogin(true);
                    form.resetFields();
                  }}
                >
                  Log in
                </span>
              </>
            )}
          </div>
          <div className="pc-login-dialog-form-area">
            {isLogin ? null : (
              <div
                className="pc-login-dialog-subtitle"
                style={{ color: '#666', fontWeight: 300 }}
              >
                Enter your email address to create an account.
              </div>
            )}
            <Form
              className="pc-login-dialog-form"
              layout="vertical"
              form={form}
              requiredMark={false}
              onFinish={onSubmit}
            >
              {isLogin ? null : (
                <Form.Item
                  label="Full name"
                  name="full_name"
                  rules={[
                    { required: true, message: "'Full name' is required" },
                  ]}
                >
                  <Input className="login-input" size="large" />
                </Form.Item>
              )}
              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  { required: true, message: "'Your Email' is required" },
                  { type: 'email', message: "Invalid 'Email Address'" },
                ]}
              >
                <Input className="login-input" size="large" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={
                  isLogin
                    ? []
                    : [{ required: true, message: "'Password' is required" }]
                }
              >
                <Input.Password className="login-password" size="large" />
              </Form.Item>
              {isLogin ? (
                <Form.Item name="remember" className="remember-checkbox">
                  <Remember />
                </Form.Item>
              ) : null}
              <Form.Item className="submit-btn">
                <Button
                  block
                  size="large"
                  className="submit-btn-btn"
                  htmlType="submit"
                >
                  {isLogin ? 'Log in' : 'Continue'}
                </Button>
              </Form.Item>
            </Form>
          </div>
          <img className="pc-divider" src="/Divider.png" alt="Divider" />
          <div className="pc-other-login">
            <div className="pc-other-login-item">
              <img src="/fblogo.png" alt="Facebook" />
              Sign-up with Facebook
            </div>
            <div className="pc-other-login-item">
              <img src="/googlelogo.png" alt="Google" />
              Continue with Google
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
