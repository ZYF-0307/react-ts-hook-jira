import React from "react";
import { useAuth } from "context/auth-context";
import { Button, Dropdown, Menu } from "antd";
import { ProjectListScreen } from "screens/project-list";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <>
      <Button onClick={logout} type={"link"}>
        登出
      </Button>
      <ProjectListScreen />
    </>
  );
};

const User = () => {
  const { logout, user } = useAuth();
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key={"logout"}>
            <Button onClick={logout} type={"link"}>
              登出
            </Button>
          </Menu.Item>
        </Menu>
      }
    >
      <Button type={"link"} onClick={(e) => e.preventDefault()}>
        Hi, {user?.name}
      </Button>
    </Dropdown>
  );
};
