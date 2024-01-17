import React from "react";
import { useTranslation } from "react-i18next";

// Util import
import { projectList } from "../../utils/projectList";

// Style import
import * as Style from "./style";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Style.Container>
      <div className="title">{t("@projects/title")}</div>
      <div className="projectList">
        {projectList.map((project) => (
          <div className="listItem">
            <p className="projectName">{project.name}</p>
            <p className="projectSubtitle">ooioioioioojfoisodfijsoifj</p>
          </div>
        ))}
      </div>
    </Style.Container>
  );
};

export { Projects };
