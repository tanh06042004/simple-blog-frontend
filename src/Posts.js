import React from 'react';
import { Outlet } from 'react-router-dom'; // Dùng Outlet để render route con

function Posts() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <Outlet /> 
    </div>
  );
}
export default Posts;