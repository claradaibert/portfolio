import React from "react";
import { useTranslation } from "react-i18next";

import ClaraCV from "../../assets/ClaraDaibert_CV.pdf";
import ClaraCVPT from "../../assets/ClaraDaibert_Curriculo.pdf";

import * as Style from "./style";

const CurriculumButton: React.FC = () => {
  const { i18n, t } = useTranslation();
  const currentLanguageIsPT = i18n?.language === "en";

  return (
    <Style.Container>
      <a
        href={currentLanguageIsPT ? ClaraCV : ClaraCVPT}
        download="claraDaibert_CV"
      >
        {t('@curriculumButton/Download')}
      </a>
    </Style.Container>
  );
};

export { CurriculumButton };
