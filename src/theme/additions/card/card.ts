import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const Card = {
  baseStyle: (props: StyleFunctionProps) => ({
    // p: "20px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    borderRadius: "10px",
    minWidth: "0px",
    wordWrap: "break-word",
    // bg: mode("#ffffff", "navy.800")(props),
    bg: mode("white", "navy.800")(props),
    backgroundClip: "border-box",
  }),
  variants: {
    panel: (props: StyleFunctionProps) => ({
      bg: mode("white", "gray.700")(props),
      width: "100%",
      boxShadow: "0px, 3.5px 5.5px rgba(0, 0, 0, 0.2)",
      borderRadius: "15px",
    }),
  },
  defaultProps: {
    variant: "panel",
  },
};

export const CardComponent = {
  components: {
    Card,
  },
};
