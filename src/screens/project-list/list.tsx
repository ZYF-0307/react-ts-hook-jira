import React from "react";
import { Table } from "antd";

import { User } from "./search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ users, list }: ListProps) => {
  const columns = [
    {
      title: "项目",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "负责人",
      dataIndex: "personId",
      key: "personId",
    },
  ];
  return (
    <>
      <Table dataSource={list} columns={columns} />
    </>
  );
};
