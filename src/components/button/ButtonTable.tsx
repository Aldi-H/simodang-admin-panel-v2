// "use client";

import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";

type ButtonTableProps = {
  leftIcon?: ReactElement;
  variant?: string;
};

const ButtonTable = (props: ButtonTableProps) => {
  const { leftIcon, variant } = props;

  return (
    <Button
      leftIcon={leftIcon}
      fontSize="sm"
      size="md"
      height="full"
      rounded="none"
      borderTopLeftRadius="10px"
      variant={variant}
    >
      Add Device
    </Button>
  );
};

export default ButtonTable;
