import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useAuth } from "context/auth-context";

export const LoginScreen = () => {
  const { login, user } = useAuth();
  const handleSubmit = (value: { username: string; password: string }) => {
    login(value);
  };
  const isLoading = false;
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <Button loading={isLoading} htmlType={"submit"} type={"primary"} block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
