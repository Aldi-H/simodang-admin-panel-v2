import { Box, Text } from "@chakra-ui/react";

type TableHeaderProps = {
  tableHeaderName: string;
};

const TableHeader = (props: TableHeaderProps) => {
  const { tableHeaderName } = props;

  return (
    <Box>
      <Text
        justifyContent="space-between"
        align="center"
        fontSize={{ sm: "10px", lg: "12px" }}
        color="gray.500"
      >
        {tableHeaderName}
      </Text>
    </Box>
  );
};

export default TableHeader;
