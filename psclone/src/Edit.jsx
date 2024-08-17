import React, {useEffect} from "react";
import {useFile} from "./hooks/file";

const ParentComponent = ({children}) => {
  const {file} = useFile();

  useEffect(() => {
    console.log("[PARENT] File has changed");
    console.log(file);
  }, [file]);

  return (
    <>
      <h1>
        Parent
      </h1>
      {children}
    </>
  );
};

export default ParentComponent;