import React from "react";

import Header from "./header";

const skeleton = ({ children }) => {
  return (
    <div>
      <Header />
      {children}{" "}
    </div>
  );
};
export default skeleton;
