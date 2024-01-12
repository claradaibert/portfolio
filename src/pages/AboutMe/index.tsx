import React from "react";
import { useTranslation } from "react-i18next";

// Style import
import * as Style from "./style";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Style.Container>
      <div className='textBody'>
        {t('@aboutMe/textBody')}
      </div>
    </Style.Container>
  );
};

export default AboutMe;