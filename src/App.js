import React, { useEffect } from "react";
import { useGetForksByNameQuery } from "./services/githubAPI";

const App = () => {
  const { data, error, isLoading } = useGetForksByNameQuery("defunkt/ace");
  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>App</div>;
};

export default App;
