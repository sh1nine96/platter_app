import React from "react";
import NavigationMenu from "./NavigationMenu";
import Home from "./Home";
import { Container } from "react-bootstrap";
import About from "./About";
import imageUrls from "../data/image-sources";
import LoadingIndicator from "./common/LoadingIndicator";
import Rating from "./common/Rating";
const App = () => {
  return (
    <>
      <NavigationMenu />
      <Container>
        {/* <Home /> */}
        {/* <About imageUrls={imageUrls} /> */}
        {/* <LoadingIndicator
          size="medium"
          message="Restaurants are being fetched. Please wait...."
        /> */}
        <Rating value={3.75} className="me-2" />
        3.75 (120 ratings)
      </Container>
    </>
  );
};
export default App;
