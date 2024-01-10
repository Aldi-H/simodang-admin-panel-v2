import {
  HTMLChakraProps,
  ThemeConfig,
  ThemingProps,
  extendTheme,
} from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { CardComponent } from "./additions/card/card";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config }, globalStyles, CardComponent);

export interface CustomCardProps extends HTMLChakraProps<"div">, ThemingProps {}

export default theme;
