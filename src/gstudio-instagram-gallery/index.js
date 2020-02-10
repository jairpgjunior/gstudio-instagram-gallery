import React from "react";
import t from "prop-types";
import { Container, Image } from "./styles";

const GrInstagramGallery = ({ data, imageSize }) => {
  return (
    <Container>
      {(data || []).map(item => (
        <Image
          key={item.id}
          alt={item.caption.text}
          src={item.images.standard_resolution.url}
          size={imageSize}
        />
      ))}
    </Container>
  );
};

GrInstagramGallery.propTypes = {
  data: t.object,
  imageSize: t.number
};

GrInstagramGallery.defaultProps = {
  data: null,
  imageSize: 200
};

export default GrInstagramGallery;
