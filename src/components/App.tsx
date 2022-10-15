import React from "react";
import NavigationMenu from "./NavigationMenu";
import Home from "./Home";
import { Container } from "react-bootstrap";
import About from "./About";
import imageUrls from "../data/image-sources";
const App = () => {
  return (
    <>
      <NavigationMenu />
      <Container>
        {/* <Home /> */}
        <About imageUrls={imageUrls} />
      </Container>
    </>
  );
};
export default App;
