import React from "react";
import { useTranslation } from "react-i18next";

// Asset import
import ProfilePhoto from "../../assets/profileImage.jpg";

// Component import
import { CurriculumButton } from "../../components/CurriculumButton";

// Parts import
import { ImageArea } from "./ImageArea";

// Style import
import * as Style from "./style";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Style.Container>
      <div className="bodyArea">
        <div className="textBody">{t("@aboutMe/textBody")}</div>
        <CurriculumButton />
      </div>
      <ImageArea />
    </Style.Container>
  );
};

export default AboutMe;
