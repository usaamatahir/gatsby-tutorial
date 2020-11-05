import React, { FC, ReactNode } from "react";
import { Link } from "gatsby";
import Header_Component from "./Header_Component";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header_Component />
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      {children}
    </div>
  );
};

export default Layout;
