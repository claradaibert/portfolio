import React from "react";

import ProfilePhoto from "../../../assets/profileImage.jpg";

import * as Style from "./style";

const ImageArea: React.FC = () => {
  return (
    <Style.Container>
      <img src={ProfilePhoto} />
      <div className="imgBackground" />
    </Style.Container>
  );
};

export { ImageArea };
