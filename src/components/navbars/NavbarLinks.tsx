import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";
import { IoMdMoon, IoMdSunny, IoMdSettings } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const NavbarLinks = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navbarIconColor = useColorModeValue("gray.500", "gray.200");
  const menuBg = useColorModeValue("white", "navy.800");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)",
  );

  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <Button
        variant="no-hover"
        bg="transparent"
        p="0px"
        minW="unset"
        minH="unset"
        h="18px"
        w="max-content"
        onClick={toggleColorMode}
      >
        <Icon
          me="12px"
          h="18px"
          w="18px"
          color={navbarIconColor}
          as={colorMode === "light" ? IoMdMoon : IoMdSunny}
        />
      </Button>

      {/* User Profile Menu */}
      <Menu>
        <MenuButton p="0px" style={{ position: "relative" }}>
          <Center ms="0px" px="0px" color={navbarIconColor}>
            <Box
              me="6px"
              display={{ sm: "none", md: "flex" }}
              alignItems="center"
            >
              <Text fontSize="sm">Sign In</Text>
              <Icon as={MdOutlineKeyboardArrowDown} />
            </Box>
            <Icon as={FaUser} />
          </Center>
        </MenuButton>

        <MenuList
          boxShadow={shadow}
          p="0px"
          mt="10px"
          borderRadius="10px"
          bg={menuBg}
          border="none"
        >
          <Flex flexDirection="column" p="10px">
            <MenuItem
              _hover={{ bg: "rgba(112, 144, 176, 0.18)" }}
              _focus={{ bg: "rgba(112, 144, 176, 0.18)" }}
              bg={menuBg}
              borderRadius="8px"
              px="14px"
            >
              <Icon
                me="12px"
                alignItems="center"
                color={navbarIconColor}
                as={FaUser}
              />
              <Text fontSize="sm">Profile</Text>
            </MenuItem>
            <MenuItem
              _hover={{ bg: "rgba(112, 144, 176, 0.18)" }}
              _focus={{ bg: "rgba(112, 144, 176, 0.18)" }}
              bg={menuBg}
              borderRadius="8px"
              px="14px"
            >
              <Icon
                me="12px"
                alignItems="center"
                color={navbarIconColor}
                as={IoMdSettings}
              />
              <Text fontSize="sm">Settings</Text>
            </MenuItem>
            <MenuItem
              _hover={{ bg: "rgba(112, 144, 176, 0.18)" }}
              _focus={{ bg: "rgba(112, 144, 176, 0.18)" }}
              bg={menuBg}
              color="red.400"
              borderRadius="8px"
              px="14px"
            >
              <Icon me="12px" alignItems="center" as={FiLogOut} />
              <Text fontSize="sm">Log out</Text>
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavbarLinks;
