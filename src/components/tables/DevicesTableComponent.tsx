/* Devices Table Content
 * Id
 * masterId
 * userId
 * device name
 * autowater enable
 * autofeed enable
 * isSaved
 * temp
 * ph
 * tdo
 * tds
 * turbidity

  unknown 
 * temp low & high
 * ph ------||-----
 * tdo -----||-----
 * tds -----||-----
 * turbidity --||--
 */

"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Switch,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { FaPlus } from "react-icons/fa6";

import Card from "@/components/cards/Card";
import Searchbar from "../searchBar/SearchBar";

type DevicesTableColumnHelper = {
  deviceId: string;
  masterId: string;
  deviceName: string;
  autoWater: boolean;
  autoFeeder: boolean;
  isSaved: boolean;
};

const columnHelper = createColumnHelper<DevicesTableColumnHelper>();

const DevicesTableComponent = (props: { tableData: any }) => {
  const { tableData } = props;

  const [sorting, setSorting] = useState<SortingState>([]);

  const [autoWaterEnable, setAutoWaterEnable] = useState<boolean[]>(
    tableData.map((tableData: DevicesTableColumnHelper) => tableData.autoWater),
  );
  const [autoFeederEnable, setAutoFeederEnable] = useState<boolean[]>(
    tableData.map(
      (tableData: DevicesTableColumnHelper) => tableData.autoFeeder,
    ),
  );
  const [isSavedEnable, setIsSavedEnable] = useState<boolean[]>(
    tableData.map((tableData: DevicesTableColumnHelper) => tableData.isSaved),
  );

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const columns: any[] = [
    //* Column Helper/Column Template for deviceId
    columnHelper.accessor("deviceId", {
      id: "deviceId",
      header: () => {
        return (
          <Text
            justifyContent="space-between"
            align="center"
            fontSize={{ sm: "10px", lg: "12px" }}
            color="gray.500"
          >
            Id Perangkat
          </Text>
        );
      },
      cell: (deviceIdData: any) => {
        return (
          <Flex align="center">
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {deviceIdData.getValue()}
            </Text>
          </Flex>
        );
      },
    }),

    //* Column Helper/Column Template for masterId
    columnHelper.accessor("masterId", {
      id: "masterId",
      header: () => {
        return (
          <Text
            justifyContent="space-between"
            align="center"
            fontSize={{ sm: "10px", lg: "12px" }}
            color="gray.500"
          >
            Id Master
          </Text>
        );
      },
      cell: (masterIdData: any) => {
        return (
          <Flex align="center">
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {masterIdData.getValue()}
            </Text>
          </Flex>
        );
      },
    }),

    //* Column Helper/Column Template for deviceName
    columnHelper.accessor("deviceName", {
      id: "deviceName",
      header: () => {
        return (
          <Text
            justifyContent="space-between"
            align="center"
            fontSize={{ sm: "10px", lg: "12px" }}
            color="gray.500"
          >
            Nama Perangkat
          </Text>
        );
      },
      cell: (deviceNameData: any) => {
        return (
          <Flex align="center">
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {deviceNameData.getValue()}
            </Text>
          </Flex>
        );
      },
    }),

    //* Column Helper/Column Template for autoWater
    columnHelper.accessor("autoWater", {
      id: "autoWater",
      header: () => {
        return (
          <Text
            justifyContent="space-between"
            align="center"
            fontSize={{ sm: "10px", lg: "12px" }}
            color="gray.500"
          >
            Auto Water
          </Text>
        );
      },
      cell: (autoWaterData: any) => {
        const rowIndex = autoWaterData.row.id;

        return (
          <Flex align="center">
            <Switch
              id={`autoWater_${rowIndex}`}
              name={`autoWater_${rowIndex}`}
              isChecked={autoWaterEnable[rowIndex]}
              onChange={() => {
                setAutoWaterEnable((prevState) => {
                  const newState = [...prevState];
                  newState[rowIndex] = !newState[rowIndex];
                  return newState;
                });
              }}
            />
          </Flex>
        );
      },
    }),

    //* Column Helper/Column Template for autoFeeder
    columnHelper.accessor("autoFeeder", {
      id: "autoFeeder",
      header: () => {
        return (
          <Text
            justifyContent="space-between"
            align="center"
            fontSize={{ sm: "10px", lg: "12px" }}
            color="gray.500"
          >
            Auto Feeder
          </Text>
        );
      },
      cell: (autoFeederData: any) => {
        const rowIndex = autoFeederData.row.id;

        return (
          <Flex align="center">
            <Switch
              id={`autoFeeder_${rowIndex}`}
              name={`autoFeeder_${rowIndex}`}
              isChecked={autoFeederEnable[rowIndex]}
              onChange={() => {
                setAutoFeederEnable((prevState) => {
                  const newState = [...prevState];
                  newState[rowIndex] = !newState[rowIndex];
                  return newState;
                });
              }}
            />
          </Flex>
        );
      },
    }),

    //* Column Helper/Column Template for savedData
    columnHelper.accessor("isSaved", {
      id: "isSaved",
      header: () => {
        return (
          <Text
            justifyContent="space-between"
            align="center"
            fontSize={{ sm: "10px", lg: "12px" }}
            color="gray.500"
          >
            Simpan Data
          </Text>
        );
      },
      cell: (isSavedData: any) => {
        const rowIndex = isSavedData.row.id;

        return (
          <Flex align="center">
            <Switch
              id={`isSaved_${rowIndex}`}
              name={`isSaved_${rowIndex}`}
              isChecked={isSavedEnable[rowIndex]}
              onChange={() => {
                setIsSavedEnable((prevState) => {
                  const newState = [...prevState];
                  newState[rowIndex] = !newState[rowIndex];
                  return newState;
                });
              }}
            />
          </Flex>
        );
      },
    }),

    //* Column Helper/Column Template for Edit
    columnHelper.accessor("deviceId", {
      id: "edit",
      header: () => {
        return (
          <Text
            justifyContent="space-between"
            align="center"
            fontSize={{ sm: "10px", lg: "12px" }}
            color="gray.500"
          >
            Edit
          </Text>
        );
      },
      cell: (editData: any) => {
        return (
          <Flex align="center">
            <Text
              color={textColor}
              fontSize="sm"
              fontWeight="700"
              onClick={() => console.log("clicked", editData.getValue())}
            >
              Edit
            </Text>
          </Flex>
        );
      },
    }),
  ];

  const [data] = useState(() => [...tableData]);
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <Card w="100%" px="0px">
      <Box>
        <Table variant="simple" me="0px" mx="0px">
          <Thead>
            <Tr>
              <Th borderColor={borderColor}>
                <Flex justifyContent="space-between">
                  <Box>
                    <Button leftIcon={<FaPlus />} size="md">
                      Add Device
                    </Button>
                  </Box>
                  <Box>
                    <Searchbar />
                  </Box>
                </Flex>
              </Th>
            </Tr>
          </Thead>
        </Table>
      </Box>
      <Box>
        <Table variant="simple" color="gray.500" mt="12px">
          <Thead>
            {table.getHeaderGroups().map((headersGroup) => {
              return (
                <Tr key={headersGroup.id}>
                  {headersGroup.headers.map((header) => {
                    return (
                      <Th
                        key={header.id}
                        colSpan={header.colSpan}
                        pe="10px"
                        // borderColor={borderColor}
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
                  })}
                </Tr>
              );
            })}
          </Thead>

          <Tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
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
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
};

export default DevicesTableComponent;
