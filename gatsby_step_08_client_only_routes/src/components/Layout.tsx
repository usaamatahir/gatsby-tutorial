import React, { FC, ReactNode } from "react";
import { Link } from "gatsby";
import Header_Component from "./Header_Component";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/app/client1">Client 1</Link>
      <Link to="/app/client2">Client 2</Link>
      <Header_Component />
      {children}
    </div>
  );
};

export default Layout;
