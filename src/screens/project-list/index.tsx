import { useState, useEffect } from "react";
import { SearchPanel } from "screens/project-list/search-panel";
import { List } from "screens/project-list/list";
import { ScreenContainer } from "components/lib";

import { cleanObject, useMount, useDebounce } from "utils";
import { useHttp } from "utils/http";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchParams]);
  return (
    <ScreenContainer>
      <SearchPanel
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        users={users}
      />
      <List users={users} list={projects} />
    </ScreenContainer>
  );
};
