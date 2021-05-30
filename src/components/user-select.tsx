import React, { useState, useEffect } from "react";
import { IdSelect } from "components/id-select";
import { useHttp } from "utils/http";
import { useMount } from "utils";

interface User {
  name: string;
  id: number;
}
export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const client = useHttp();
  const [userList, setUserList] = useState<User[]>([]);

  useMount(() => {
    client("users").then(async (response) => {
      setUserList(response);
    });
  });
  // useEffect(() => {
  //   fetch(`${URL}/users`).then(async (response) => {
  //     const userList = await response.json();
  //     setUserList(userList);
  //   });
  // }, []);
  return (
    <>
      <IdSelect options={userList} {...props} />
    </>
  );
};
