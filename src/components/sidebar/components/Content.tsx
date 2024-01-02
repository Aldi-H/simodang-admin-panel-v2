import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

import SidebarBrand from "./Brand";
import SidebarRoutes from "@/routes";
import SidebarLinks from "./Links";
import { IRouteSidebarGroup } from "@/types/navigation";

interface SidebarContentProps {
  routes: IRouteSidebarGroup[];
}

const SidebarContent = (props: SidebarContentProps) => {
  const { routes } = props;

  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      <SidebarBrand />
      <Stack direction="column" mt="8px" mb="24px">
        <Box
        // pe={{ lg: "16px", "2xl": "16px" }}
        >
          <SidebarLinks routes={routes} />
        </Box>
      </Stack>
    </Flex>
  );
};

export default SidebarContent;
