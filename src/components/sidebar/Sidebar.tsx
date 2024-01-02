import { Box, useColorModeValue } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";

import SidebarContent from "./components/Content";

import { IRouteSidebarGroup } from "@/types/navigation";
import {
  renderThumbDark,
  renderThumbLight,
  renderTrack,
} from "../scrollbar/Scrollbar";

interface SidebarResponsiveProps {
  routes: IRouteSidebarGroup[];
}

interface SidebarProps extends SidebarResponsiveProps {
  [x: string]: any;
}

const Sidebar = (props: SidebarProps) => {
  const { routes } = props;

  const variantChange = "0.2s linear";

  // const shadow = useColorModeValue(
  //   "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
  //   "unset",
  // );

  const sidebarBg = useColorModeValue("white", "navy.800");
  const sidebarMargins = "0px";

  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="220px"
        maxW="220px"
        ms={{
          sm: "16px",
        }}
        my={{
          sm: "16px",
        }}
        h="calc(100vh - 32px)"
        ps="20px"
        pe="20px"
        m={sidebarMargins}
        filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.05))"
        borderRadius="20px"
      >
        <Scrollbars
          autoHide
          universal={true}
          renderTrackVertical={renderTrack}
          renderThumbVertical={useColorModeValue(
            renderThumbLight,
            renderThumbDark,
          )}
        >
          <SidebarContent routes={routes} />
        </Scrollbars>
      </Box>
    </Box>
  );
};

export default Sidebar;
