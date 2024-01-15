import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type TableCellProps = {
  children: ReactNode;
  justify?: string;
};

const TableCell = (props: TableCellProps) => {
  const { children, justify } = props;

  return (
    <Flex align="center" justify={justify}>
      {children}
    </Flex>
  );
};

export default TableCell;
