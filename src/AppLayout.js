import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import PostLists from './PostLists';
import Post from './Post';
import About from './About';
import Login from './Login';
import Stats from './Stats';
import NewPost from './NewPost';
import NoMatch from './NoMatch';
import ProtectedRoute from './ProtectedRoute';

function AppLayout() {
  const [user, setUser] = useState(null); // Thêm state để quản lý user
  const logOut = () => setUser(null); // Thêm hàm logout

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>Home</Link>
        <Link to="/posts" style={{ padding: 5 }}>Posts</Link>
        <Link to="/about" style={{ padding: 5 }}>About</Link>
        <span> | </span>
        {user && (
          <Link to="/stats" style={{ padding: 5 }}>Stats</Link>
        )}
        {user && (
          <Link to="/newpost" style={{ padding: 5 }}>New Post</Link>
        )}
        {!user && (
          <Link to="/login" style={{ padding: 5 }}>Login</Link>
        )}
        {user && (
          <span onClick={logOut} style={{ padding: 5, cursor: 'pointer' }}>
            Logout
          </span>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route
          path="/stats"
          element={
            <ProtectedRoute user={user}><Stats /></ProtectedRoute>
          }
        />
        <Route
          path="/newpost"
          element={
            <ProtectedRoute user={user}><NewPost /></ProtectedRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default AppLayout;