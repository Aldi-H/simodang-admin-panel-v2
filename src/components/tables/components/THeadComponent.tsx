import { Key, MouseEventHandler, ReactNode } from "react";
import { Flex, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";

type THeadComponentProps = {
  table: {
    getHeaderGroups: () => any[];
  };
  flexRender: (header: any, context: any) => ReactNode;
};

const THeadComponent = (props: THeadComponentProps) => {
  const { table, flexRender } = props;

  // const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  // const borderColor = useColorModeValue("white", "navy.800");

  return (
    <Thead>
      {table.getHeaderGroups().map((headersGroup) => {
        return (
          <Tr key={headersGroup.id}>
            {headersGroup.headers.map(
              (header: {
                id: Key | null | undefined;
                colSpan: number | undefined;
                column: {
                  getToggleSortingHandler: () => MouseEventHandler | undefined;
                  columnDef: { header: any };
                  getIsSorted: () => string;
                };
                getContext: () => any;
              }) => {
                return (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    pe="10px"
                    borderColor="transparent"
                    cursor="pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Flex
                      justifyContent="space-between"
                      align="center"
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color="gray.400"
                      pb="12px"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: "",
                        desc: "",
                      }[header.column.getIsSorted() as string] ?? null}
                    </Flex>
                  </Th>
                );
              },
            )}
          </Tr>
        );
      })}
    </Thead>
  );
};

export default THeadComponent;
