"use client";

import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import { SimodangLogo } from "@/components/icons/Icon";
import { HSeparator } from "@/components/separator/Separator";

const SidebarBrand = () => {
  const logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column" pt="12px" mb="8px">
      <SimodangLogo h="26px" w="175px" color={logoColor} />
      {/* <HSeparator my="12px" /> */}
    </Flex>
  );
};

{
  /* <Flex alignItems="center" flexDirection="column">
      <SimodangLogo h="26px" w="175px" my="32px" color={logoColor} />
      <HSeparator mb="26px" />
    </Flex> */
}

export default SidebarBrand;
