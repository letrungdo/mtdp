import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Form, Input, Button, Checkbox } from "antd";

const CustomForm = React.memo(({ status, message, onValidated }) => {
  const onFinish = (value) => {
    console.log("Success:", value);
    value &&
      onValidated({
        EMAIL: value.email,
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="footer-subcribe__form"
      >
        <Form.Item
          noStyle={true}
          name="email"
          rules={[
            {
              type: "email",
              message: "Đầu vào không hợp lệ Email!",
            },
            {
              required: true,
              message: "Vui lòng nhập email của bạn!",
            },
          ]}
        >
          <Input placeholder="Nhập email của bạn" />
        </Form.Item>
        <Form.Item noStyle={true}>
          <Button type="link" htmlType="submit">
            ĐĂNG KÝ
          </Button>
        </Form.Item>
      </Form>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </>
  );
});

export default function FooterSubcribeInput({ url }) {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}
