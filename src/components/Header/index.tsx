import React, { useState } from "react";
import { MdOutlineWbSunny, MdOutlineMenu } from "react-icons/md";
import { TbMoon } from "react-icons/tb";
import { useTranslation } from "react-i18next";

// Hook import
import { useTheme } from "../../hooks/useTheme";

import * as Style from "./style";

const Header: React.FC = () => {
  const themeProvider = useTheme();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const ThemeIcon = () => {
    if (themeProvider.theme === "light") return <MdOutlineWbSunny />;
    return <TbMoon />;
  };

  const switchLanguage = () => {
    setLanguage((prev) => {
      if (prev === "pt") {
        i18n.changeLanguage("en");
        return "en";
      } else {
        i18n.changeLanguage("pt");
        return "pt";
      }
    });
  };

  return (
    <Style.Container>
      <button>
        <MdOutlineMenu />
      </button>
      <button onClick={() => switchLanguage()}>
        <p>{language.toUpperCase()}</p>
      </button>
      <button type="button" onClick={() => themeProvider.toggleTheme()}>
        <ThemeIcon />
      </button>
    </Style.Container>
  );
};

export { Header };
