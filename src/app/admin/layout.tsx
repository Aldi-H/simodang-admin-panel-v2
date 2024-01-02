"use client";

import {
  Box,
  Portal,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import Sidebar from "@/components/sidebar/Sidebar";
import SidebarBrand from "@/components/sidebar/components/Brand";
import SidebarRoutes from "@/routes";

interface DashboardLayoutProps extends PropsWithChildren {
  [x: string]: any;
}

const AdminLayout = (props: DashboardLayoutProps) => {
  const { children, ...rest } = props;

  const { colorMode } = useColorMode();

  const background = useColorModeValue("secondaryGray.300", "navy.900");
  return (
    <Box
      // h="100vh" w="100vw" bg={background}
      minH="40vh"
      w="100%"
      position="absolute"
      // bgImage={colorMode === "light" ? bgAdmin : "none"}
      bg={background}
      bgSize="cover"
      top="0"
    >
      <Sidebar routes={SidebarRoutes} />
      <Box
        float="right"
        minH="100vh"
        height="100%"
        overflow="auto"
        position="relative"
        maxH="100%"
        w={{ base: "100%", xl: "calc( 100% - 230px )" }}
        maxWidth={{ base: "100%", xl: "calc( 100% - 230px )" }}
        // transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        // transitionDuration=".2s, .2s, .35s"
        // transitionProperty="top, bottom, width"
        // transitionTimingFunction="linear, linear, ease"
      >
        {/* <Portal>
          <Box>
          </Box>
        </Portal> */}

        <Box
          mx="auto"
          p={{ base: "20px", md: "30px" }}
          pe="20px"
          minH="100vh"
          pt="50px"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
