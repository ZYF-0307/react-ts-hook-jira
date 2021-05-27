import React from "react";
import { Table } from "antd";

export const List = ({ users, projects }: { users: any; projects: any }) => {
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
      <Table dataSource={projects} columns={columns} />
    </>
  );
};
