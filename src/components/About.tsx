import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faIcons } from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";

type Props = {
  imageUrls: string[];
};

const About = ({ imageUrls }: Props) => {
  return (
    <main>
      <section className="my-5">
        <header>
          <h2>
            <FontAwesomeIcon icon={faLink} className="me-2" />
            Attributes
          </h2>
        </header>
        <hr />
        <p>
          I would like to thank{" "}
          <a href="https://pixlr.com" target="_blank" rel="noreferrer">
            Pixlr{" "}
          </a>
          for providing an awesome free photo-editing tool online. I also thank
          the people who shared the images(for commercial and royalty free
          usages) which are used in this site.
        </p>
        <ListGroup>
          {imageUrls.map((imageUrl, idx) => (
            <ListGroup.Item key={imageUrl}>
              <a href={imageUrl}>{imageUrl}</a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </section>
    </main>
  );
};
export default About;
