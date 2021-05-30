import React, { useState } from "react";
import { Button } from "antd";
import { RegisterScreen } from "unauthenticated-app/register";
import { LoginScreen } from "unauthenticated-app/login";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <Button type={"link"} onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
      </Button>
    </>
  );
};
