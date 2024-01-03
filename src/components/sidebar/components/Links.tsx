import { useCallback } from "react";
import Link from "next/link";

import { IRouteSidebarGroup } from "@/types/navigation";
import { usePathname } from "next/navigation";
import {
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import IconBox from "@/components/icons/IconBox";

interface SidebarLinkProps {
  routes: IRouteSidebarGroup[];
}

const SidebarLinks = (props: SidebarLinkProps) => {
  const { routes } = props;

  const pathName = usePathname();

  const activeColor = useColorModeValue("gray.700", "white");

  const inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600",
  );
  // const activeIconBackground = useColorModeValue("navy.600", "navy.500");
  // const activeIcon = useColorModeValue("white", "white");
  // const textColor = useColorModeValue("secondaryGray.500", "white");
  // const brandColor = useColorModeValue("brand.500", "brand.400");

  // const variantChange = "0.2s linear";

  const activeBg = useColorModeValue("white", "navy.700");
  const inactiveBg = useColorModeValue("white", "navy.700");
  const sidebarActiveShadow = "0px 7px 11px rgba(0, 0, 0, 0.04)";

  const activeRoute = useCallback(
    (routeName: string) => {
      return pathName?.includes(routeName);
    },
    [pathName],
  );

  const createLinks = (routes: IRouteSidebarGroup[]) => {
    return routes.map((SidebarGroup, index: number) => {
      return (
        <Box key={index}>
          <Text
            color={activeColor}
            fontWeight="bold"
            fontSize="md"
            mx="auto"
            mb={{
              xl: "6px",
            }}
            ps={{
              sm: "10px",
              xl: "16px",
            }}
            py="6px"
          >
            {SidebarGroup.label}
          </Text>

          {SidebarGroup.routes.map((route, index: number) => {
            if (route.layout === "/admin" || route.layout === "/account") {
              return (
                <Link key={index} href={route.layout + route.path}>
                  {activeRoute(route.layout + route.path) ? (
                    <Box
                      boxSize="initial"
                      justifyContent="flex-start"
                      alignItems="center"
                      bg={activeBg}
                      boxShadow={sidebarActiveShadow}
                      mb={{
                        xl: "2px",
                      }}
                      mx={{
                        xl: "auto",
                      }}
                      ps={{
                        sm: "10px",
                        xl: "16px",
                      }}
                      py="12px"
                      borderRadius="10px"
                      w="100%"
                      _active={{
                        bg: "inherit",
                        transform: "none",
                        borderColor: "transparent",
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                    >
                      <Flex>
                        {typeof route.icon === "string" ? (
                          <Icon>{route.icon}</Icon>
                        ) : (
                          <IconBox
                            bg="navy.500"
                            color="white"
                            h="28px"
                            w="28px"
                            me="12px"
                          >
                            {route.icon}
                          </IconBox>
                        )}
                        <Text
                          color={activeColor}
                          my="auto"
                          fontSize="sm"
                          as="b"
                        >
                          {route.name}
                        </Text>
                      </Flex>
                    </Box>
                  ) : (
                    <Box
                      boxSize="initial"
                      justifyContent="flex-start"
                      alignItems="center"
                      bg="transparent"
                      mb={{
                        xl: "2px",
                      }}
                      mx={{
                        xl: "auto",
                      }}
                      py="12px"
                      ps={{
                        sm: "10px",
                        xl: "16px",
                      }}
                      borderRadius="10px"
                      w="100%"
                      _active={{
                        bg: "inherit",
                        transform: "none",
                        borderColor: "transparent",
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                    >
                      <Flex>
                        {typeof route.icon === "string" ? (
                          <Icon>{route.icon}</Icon>
                        ) : (
                          <IconBox
                            bg={inactiveBg}
                            color={inactiveColor}
                            h="28px"
                            w="28px"
                            me="12px"
                          >
                            {route.icon}
                          </IconBox>
                        )}
                        <Text color={activeColor} my="auto" fontSize="sm">
                          {route.name}
                        </Text>
                      </Flex>
                    </Box>
                  )}
                </Link>
              );
            }
          })}
        </Box>
      );
    });
  };

  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
