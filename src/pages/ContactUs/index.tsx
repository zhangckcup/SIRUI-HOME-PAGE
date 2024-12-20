import React, { useCallback, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import NavBar from '@/components/Navbar';
import 'antd/dist/antd.css';
import '@/pages/font.css';
import { options } from './ constant';
import './index.less';
const axios = require('axios').default;

interface IProps {}

const OccupationList = [
  'Agriculture, Forestry, Fishing and Hunting',
  'Mining',
  'Utilities',
  'Construction',
  'Manufacturing',
  'Wholesale Trade',
  'Retail Trade',
  'Transportation and Warehousing',
  'Information',
  'Finance and Insurance',
  'Real Estate Rental and Leasing',
  'Professional, Scientific, and Technical Services',
  'Management of Companies and Enterprises',
  'Administrative and Support and Waste… Services',
  'Educational Services',
  'Health Care and Social Assistance',
  'Arts, Entertainment, and Recreation',
  'Accommodation and Food Services',
  'Other Services (except Public Administration)',
  'Public Administration',
];

export default function ContactUs({}: IProps) {
  const [form] = Form.useForm();
  const [submitStatus, setSubmitStatus] = useState('');

  const onSubmit = useCallback(async (values) => {
    try {
      console.log('onSubmit', values);
      // await axios.post('/api/submit', values); // 该地址用于本地代理调试接口
      await axios.post('//api.sandwichlab.ai/submit', values);

      setSubmitStatus('success');
    } catch (err) {
      setSubmitStatus('fail');
      console.warn('submitContactUs ERROR', err);
    }
  }, []);

  const closeDialog = useCallback(() => {
    setSubmitStatus('');
  }, []);

  return (
    <div className="pc-contact-us-warp">
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <NavBar current="ContactUs" />
      </div>

      {/* 默认与失败，保持表达在底层 */}
      {submitStatus !== 'success' ? (
        <div className="pc-contact-us-form-warp">
          <span className="pc-contact-us-title">
            Lets Have a Chat
            <img className="pc-hand" src="/hand3.png" alt="hand" />
          </span>
          <Form
            className="pc-ContactUsForm"
            layout="vertical"
            form={form}
            requiredMark={false}
            onFinish={onSubmit}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Item
                style={{ width: '45%' }}
                label="First name"
                name="first_name"
                rules={[
                  { required: true, message: "'First name' is required" },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                style={{ width: '45%' }}
                label="Last name"
                name="last_name"
                rules={[{ required: true, message: "'Last name' is required" }]}
              >
                <Input size="large" />
              </Form.Item>
            </div>
            <Form.Item
              label="Country"
              name="country"
              // initialValue={CountryList[0]}
              rules={[{ required: true, message: "'Country' is required" }]}
            >
              <Select
                size="large"
                showSearch
                // placeholder="Country"
                // defaultValue={CountryList[0]}
                options={options.map((v) => ({
                  value: `${v.en}${v.short ? `(${v.short})` : ''}`,
                  label: `${v.en}${v.short ? `(${v.short})` : ''}`,
                }))}
              />
            </Form.Item>
            <Form.Item
              label="Occupation"
              name="occupation"
              // initialValue={OccupationList[0]}
              rules={[{ required: true, message: "'Occupation' is required" }]}
            >
              <Select
                size="large"
                showSearch
                // placeholder="Occupation"
                // defaultValue={OccupationList[0]}
                options={OccupationList.map((v) => ({ value: v, label: v }))}
              />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "'Email Address' is required" },
                { type: 'email', message: "Invalid 'Email Address'" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item className="submit-btn">
              <Button block htmlType="submit">
                OK
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <div className="pc-contact-us-success">
          <span className="pc-contact-us-title">
            Thank You!
            <img className="pc-hand" src="/hand2.png" alt="hand" />
          </span>
          <span className="pc-contact-us-subtitle">
            We’ve received your submission, and we’ll be in touch soon!
          </span>
        </div>
      )}

      {submitStatus === 'fail' ? (
        <div className="pc-fail-mask">
          <div className="pc-fail-dialog">
            <img
              onClick={closeDialog}
              className="pc-fail-dialog-close"
              src="/close.png"
              alt="close"
            />
            <span className="pc-fail-title">Submission Failed</span>
            <span className="pc-fail-subtitle">
              There was an issue submitting your form. Please try again.
            </span>
            <div onClick={closeDialog} className="pc-base-btn">
              OK
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
