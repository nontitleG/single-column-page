import * as React from "react";
import Header from "./header";
import "./layout.css";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main>
        {props.children}
      </main>
    </div>
  );
};

export default Layout
