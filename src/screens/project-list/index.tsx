import React, { useState, useEffect } from "react";
import { SearchPanel } from "screens/project-list/search-panel";
import { List } from "screens/project-list/list";

import { cleanObject, useMount, useDebounce } from "utils";
import qs from "qs";
import { useHttp } from "utils/http";

const URL = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const client = useHttp();

  const [searchParams, setSearchParams] = useState({
    name: "",
    // personId: 0,
  });
  const debouncedSearchParams = useDebounce(searchParams, 200);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  useMount(() => {
    client("users").then(async (response) => {
      setUsers(response);
    });
  });
  useEffect(() => {
    client("projects", { data: cleanObject(debouncedSearchParams) }).then(
      async (response) => {
        setProjects(response);
      }
    );
  }, [debouncedSearchParams]);
  return (
    <>
      <SearchPanel
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        users={users}
      />
      <List users={users} list={projects} />
    </>
  );
};
