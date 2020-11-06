import React, { FC, ReactNode } from "react";
import { Link, navigate } from "gatsby";
import { Button } from "@material-ui/core";
import Header_Component from "./Header_Component";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          navigate("/about");
        }}
      >
        About Me
      </Button>
      <Header_Component />
      {children}
    </div>
  );
};

export default Layout;
