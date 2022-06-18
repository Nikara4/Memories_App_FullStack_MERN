import { Container } from "@mui/material";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, NavBar, Auth, PostDetails } from "./components";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <BrowserRouter>
      <Container maxWidth="2xl">
        <NavBar />
        <Routes>
          <Route path="/" exact="true" element={<Navigate to="/posts" />} />
          <Route path="/posts" exact="true" element={<Home />} />
          <Route path="/posts/search" exact="true" element={<Home />} />
          <Route path="/posts/:id" exact="true" element={<PostDetails />} />
          <Route path="/auth" exact="true" element={!user ? <Auth /> : <Navigate to="/posts" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
