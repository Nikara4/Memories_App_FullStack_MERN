import { Container } from "@material-ui/core";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NavBar, Auth } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <NavBar />
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/auth" exact="true" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
