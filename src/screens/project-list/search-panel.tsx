import React from "react";
import { Form, Input } from "antd";
import { UserSelect } from "components/user-select";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

interface SearchPanelProps {
  searchParams: {
    name: string;
    personId?: number;
  };
  setSearchParams: (searchParams: SearchPanelProps["searchParams"]) => void;
  users: User[];
}

export const SearchPanel = ({
  searchParams,
  setSearchParams,
  users,
}: SearchPanelProps) => {
  return (
    <>
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="项目名"
            type="text"
            value={searchParams.name}
            onChange={(event) =>
              setSearchParams({
                ...searchParams,
                name: event.target.value,
              })
            }
          />
        </Form.Item>
        <Form.Item>
          <UserSelect
            defaultOptionName={"负责人"}
            value={searchParams.personId}
            onChange={(value) =>
              setSearchParams({
                ...searchParams,
                personId: value,
              })
            }
          />
        </Form.Item>
      </Form>
    </>
  );
};
