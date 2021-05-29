import React, { useState, useEffect } from "react";
import { SearchPanel } from "screens/project-list/search-panel";
import { List } from "screens/project-list/list";

import { cleanObject, useMount, useDebounce } from "utils";
import qs from "qs";

const URL = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [searchParams, setSearchParams] = useState({
    name: "",
    // personId: 0,
  });
  const debouncedSearchParams = useDebounce(searchParams, 200);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  useMount(() => {
    fetch(`${URL}/users`).then(async (response) => {
      const users = await response.json();
      setUsers(users);
    });
  });
  useEffect(() => {
    fetch(
      `${URL}/projects?${qs.stringify(cleanObject(debouncedSearchParams))}`
    ).then(async (response) => {
      const projects = await response.json();
      setProjects(projects);
    });
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
