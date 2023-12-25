import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config }, globalStyles);

export default theme;
