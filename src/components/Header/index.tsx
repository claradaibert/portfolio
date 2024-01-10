import React from "react";
import { MdOutlineWbSunny, MdOutlineMenu } from "react-icons/md";
import { TbMoon } from "react-icons/tb";

// Hook import
import { useTheme } from "../../hooks/useTheme";

import * as Style from "./style";

const Header: React.FC = () => {
  const themeProvider = useTheme();

  const ThemeIcon = () => {
    if (themeProvider.theme === "light") return <MdOutlineWbSunny />;
    return <TbMoon />;
  };

  return (
    <Style.Container>
      <button>
        <MdOutlineMenu />
      </button>
      <button>
        <p>EN</p>
      </button>
      <button type="button" onClick={() => themeProvider.toggleTheme()}>
        <ThemeIcon/>
      </button>
    </Style.Container>
  );
};

export { Header };
