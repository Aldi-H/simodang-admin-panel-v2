import {
  Box,
  Flex,
  Table,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa6";

import ButtonTable from "@/components/button/ButtonTable";
import Searchbar from "@/components/searchBar/SearchBar";

const TableControl = () => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Table>
      <Thead>
        <Tr>
          <Th p={0} m={0} borderColor={borderColor}>
            <Flex justifyContent="space-between">
              <Box>
                <ButtonTable leftIcon={<FaPlus />} variant="ghost" />
              </Box>
              <Box m="8px" mr="12px">
                <Searchbar />
              </Box>
            </Flex>
          </Th>
        </Tr>
      </Thead>
    </Table>
  );
};

export default TableControl;
