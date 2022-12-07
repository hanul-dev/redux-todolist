import React from 'react';
import Footer from "./Footer"
import Header from "./Header"
import { Wrapper } from "../Style/styles"

const Layout = ({children}) => {
  return (
    <Wrapper>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </Wrapper>
  );
};

export default Layout;