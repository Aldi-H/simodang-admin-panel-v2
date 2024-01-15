import { Key, ReactNode } from "react";
import { Tbody, Td, Tr } from "@chakra-ui/react";

type TBodyComponentProps = {
  table: {
    getRowModel: () => {
      rows: any[];
    };
  };
  flexRender: (cell: any, context: any) => ReactNode;
};

const TBodyComponent = (props: TBodyComponentProps) => {
  const { table, flexRender } = props;

  return (
    <Tbody>
      {table.getRowModel().rows.map((row) => {
        return (
          <Tr key={row.id}>
            {row
              .getVisibleCells()
              .map(
                (cell: {
                  id: Key | null | undefined;
                  column: { columnDef: { cell: any } };
                  getContext: () => any;
                }) => {
                  return (
                    <Td
                      key={cell.id}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Td>
                  );
                },
              )}
          </Tr>
        );
      })}
    </Tbody>
  );
};

export default TBodyComponent;
