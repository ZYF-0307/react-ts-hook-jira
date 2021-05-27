import React, { useState, useEffect } from "react";
import { SearchPanel } from "screens/project-list/search-panel";
import { List } from "screens/project-list/list";

import { cleanObject } from "utils";
import qs from "qs";

const URL = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [searchParams, setSearchParams] = useState({
    groupName: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`${URL}/users`).then(async (response) => {
      const users = await response.json();
      setUsers(users);
    });
  }, [searchParams]);
  useEffect(() => {
    fetch(`${URL}/projects?${qs.stringify(cleanObject(searchParams))}`).then(
      async (response) => {
        const projects = await response.json();
        setProjects(projects);
      }
    );
  }, [searchParams]);
  return (
    <>
      <SearchPanel
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        users={users}
      />
      <List users={users} projects={projects} />
    </>
  );
};
