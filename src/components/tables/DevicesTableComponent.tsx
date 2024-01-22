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

import React, { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Table,
  Text,
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

import { FaEllipsisVertical } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Card from "@/components/cards/Card";
import TableHeader from "./components/TableHeader";
import TableCell from "./components/TableCell";
import THeadComponent from "./components/THeadComponent";
import TBodyComponent from "./components/TBodyComponent";
import TableControl from "./components/TableControl";

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
  const iconColor = useColorModeValue("gray.500", "gray.200");
  const menuBg = useColorModeValue("white", "navy.700");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)",
  );

  /**
   * Defines the columns configuration for the DevicesTableComponent.
   * Each column is defined using the columnHelper.accessor function,
   * specifying the accessor key and providing a configuration object
   * with properties for header and cell rendering.
   * @type {Array}
   */

  const columns: any[] = [
    // Column Helper/Column Template for deviceId
    columnHelper.accessor("deviceId", {
      id: "deviceId",
      header: () => {
        return <TableHeader tableHeaderName="Id Perangkat" />;
      },
      cell: (deviceIdData: any) => {
        return (
          <TableCell>
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {deviceIdData.getValue()}
            </Text>
          </TableCell>
        );
      },
    }),

    // Column Helper/Column Template for masterId
    columnHelper.accessor("masterId", {
      id: "masterId",
      header: () => {
        return <TableHeader tableHeaderName="Id Master" />;
      },
      cell: (masterIdData: any) => {
        return (
          <TableCell>
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {masterIdData.getValue()}
            </Text>
          </TableCell>
        );
      },
    }),

    // Column Helper/Column Template for deviceName
    columnHelper.accessor("deviceName", {
      id: "deviceName",
      header: () => {
        return <TableHeader tableHeaderName="Nama Perangkat" />;
      },
      cell: (deviceNameData: any) => {
        return (
          <TableCell>
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {deviceNameData.getValue()}
            </Text>
          </TableCell>
        );
      },
    }),

    // Column Helper/Column Template for autoWater
    columnHelper.accessor("autoWater", {
      id: "autoWater",
      header: () => {
        return <TableHeader tableHeaderName="Auto Water" />;
      },
      cell: (autoWaterData: any) => {
        const rowIndex = autoWaterData.row.id;

        return (
          <TableCell justify="center">
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
          </TableCell>
        );
      },
    }),

    // Column Helper/Column Template for autoFeeder
    columnHelper.accessor("autoFeeder", {
      id: "autoFeeder",
      header: () => {
        return <TableHeader tableHeaderName="Auto Feeder" />;
      },
      cell: (autoFeederData: any) => {
        const rowIndex = autoFeederData.row.id;

        return (
          <TableCell justify="center">
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
          </TableCell>
        );
      },
    }),

    // Column Helper/Column Template for savedData
    columnHelper.accessor("isSaved", {
      id: "isSaved",
      header: () => {
        return <TableHeader tableHeaderName="Simpan Data" />;
      },
      cell: (isSavedData: any) => {
        const rowIndex = isSavedData.row.id;

        return (
          <TableCell justify="center">
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
          </TableCell>
        );
      },
    }),

    // Column Helper/Column Template for Edit
    columnHelper.accessor("deviceId", {
      id: "edit",
      header: () => {
        return <TableHeader tableHeaderName="Action" />;
      },
      cell: (editData: any) => {
        return (
          <TableCell justify="center">
            <Menu isLazy>
              <MenuButton p="0px" style={{ position: "relative" }}>
                <Icon as={FaEllipsisVertical} height="18px" width="18px" />
              </MenuButton>

              <MenuList
                p="0px"
                mt="10px"
                minW="0"
                maxWidth="fit-content"
                borderRadius="10px"
                bg={menuBg}
                border="none"
                boxShadow={shadow}
              >
                <Flex flexDirection="column" p="10px">
                  {[
                    {
                      menuItem: "Edit",
                      menuIcon: (
                        <Icon
                          me="12px"
                          alignItems="center"
                          color={iconColor}
                          as={FaEdit}
                        />
                      ),
                      menuColor: iconColor,
                    },
                    {
                      menuItem: "Delete",
                      menuIcon: (
                        <Icon me="12px" alignItems="center" as={MdDelete} />
                      ),
                      menuColor: "red.400",
                    },
                  ].map((menuItem, index: number) => {
                    return (
                      <MenuItem
                        key={index}
                        _hover={{ bg: "rgba(112, 144, 176, 0.18)" }}
                        _focus={{ bg: "rgba(112, 144, 176, 0.18)" }}
                        bg={menuBg}
                        borderRadius="8px"
                        px="14px"
                        onClick={() =>
                          console.log("clicked", editData.getValue())
                        }
                        color={menuItem.menuColor}
                      >
                        {menuItem.menuIcon}
                        <Text fontSize="sm" color={menuItem.menuColor}>
                          {menuItem.menuItem}
                        </Text>
                      </MenuItem>
                    );
                  })}
                </Flex>
              </MenuList>
            </Menu>
          </TableCell>
        );
      },
    }),
  ];

  /**
   * Represents the DevicesTableComponent.
   * @remarks
   * This component displays a table of devices.
   *
   * @param {Object[]} tableData - The data to be displayed in the table.
   * @returns {Object} The table object.
   */

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
        <TableControl />
      </Box>

      <Box>
        <Table variant="simple" color="gray.500" mt="12px">
          <THeadComponent table={table} flexRender={flexRender} />
          <TBodyComponent table={table} flexRender={flexRender} />
        </Table>
      </Box>
    </Card>
  );
};

export default DevicesTableComponent;
