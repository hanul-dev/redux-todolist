import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Todo from "../Pages/Todo/Todo"; 
import Category from "../Pages/Category/Category";
import NotFound from "../Pages/404/NotFound";
import Layout from "../Components/Layout"
import Greeting from '../Pages/Greeting';
import TodoDetail from '../Pages/Todo/TodoDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
          <Route path="/category" element={<Category />} />
          {/* todo/ detail NOTFOUND 처리 */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
  </BrowserRouter>
  );
};

export default Router;