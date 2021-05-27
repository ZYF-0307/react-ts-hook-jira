import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { IdSelect } from "components/id-select";

interface User {
  name: string;
  id: number;
}
const URL = process.env.REACT_APP_API_URL;
export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const [userList, setUserList] = useState<User[]>([]);
  useEffect(() => {
    fetch(`${URL}/users`).then(async (response) => {
      const userList = await response.json();
      setUserList(userList);
    });
  }, []);
  return (
    <>
      <IdSelect options={userList} {...props} />
    </>
  );
};
