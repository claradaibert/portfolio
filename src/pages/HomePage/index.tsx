import React from "react";
import { useTranslation } from "react-i18next";

// Component import
import { Header } from "../../components/Header";

// Style import
import * as Style from "./style";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Style.Container>
      <Header />
      <div className="pageBody">
        <div className="header">{t("@home/title")}</div>
        <div className="subtitle">{t("@home/subtitle")}</div>
      </div>
    </Style.Container>
  );
};

export default HomePage;
