import React from "react";
import { Form, Input } from "antd";
import { UserSelect } from "components/user-select";

interface SearchPanelProps {
  searchParams: any;
  setSearchParams: any;
  users: any;
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
