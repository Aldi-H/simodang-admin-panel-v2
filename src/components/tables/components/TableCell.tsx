import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

const TableCell = ({ children }: { children: ReactNode }) => {
  return <Flex align="center">{children}</Flex>;
};

export default TableCell;
