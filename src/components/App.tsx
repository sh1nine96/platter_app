import React from "react";
import NavigationMenu from "./NavigationMenu";
import Home from "./Home";
import { Container } from "react-bootstrap";
import About from "./About";
import imageUrls from "../data/image-sources";
import LoadingIndicator from "./common/LoadingIndicator";
const App = () => {
  return (
    <>
      <NavigationMenu />
      <Container>
        {/* <Home /> */}
        {/* <About imageUrls={imageUrls} /> */}
        <LoadingIndicator
          size="medium"
          message="Restaurants are being fetched"
        />
      </Container>
    </>
  );
};
export default App;
