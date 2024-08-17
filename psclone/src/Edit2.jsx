import React, {useCallback} from "react";
import {useFile} from "./hooks/file";

const ChildComponent = () => {
  const {setFile} = useFile();

  const handleFileChange = useCallback(changeEvent => {
    console.log("[CHILD] passing the file to the parent...");
    setFile(changeEvent.currentTarget.files[0]);
  }, [setFile]);

  const handleFormSubmit = useCallback(submitEvent => {
    submitEvent.preventDefault();
  }, []);

  return (
    <>
      <h2>
        Child
      </h2>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileChange} />
      </form>
    </>
  );
};

export default ChildComponent;