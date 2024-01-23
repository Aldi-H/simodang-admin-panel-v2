import { useEffect, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NavbarLinks from "./NavbarLinks";

type NavbarProps = {
  currentPageRoute?: string;
};

const Navbar = (props: NavbarProps) => {
  const { currentPageRoute } = props;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return;
  }, []);

  // const { variant, children, secondary, brandText, onOpen, ...rest } = props;

  const mainTextColor = useColorModeValue("gray.700", "gray.200");
  const secondaryTextColor = useColorModeValue("gray.700", "gray.200");

  const navbarBoxShadow = useColorModeValue(
    "none",
    "0px 7px 23px rgba(0, 0, 0, 0.05)",
  );
  // const navbarBg = useColorModeValue(
  //   "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
  //   "linear-gradient(112.83deg, rgba(36, 56, 138, 0.25) 0%, rgba(54, 82, 186, 0.15) 110.84%)",
  // );
  const navbarBorder = useColorModeValue("#FFFFFF", "rgba(11, 20, 55, 0.35)");
  const navbarFilter = useColorModeValue(
    "none",
    "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))",
  );

  let navbarInitialBoxShadowValue = "none";
  let navbaInitialBgValue = "none";
  let navbarInitialBorderValue = "transparent";
  let navbarInitialFiltervalue = "none";

  if (scrolled) {
    navbarInitialBoxShadowValue = navbarBoxShadow;
    // navbaInitialBgValue = navbarBg;
    navbarInitialBorderValue = navbarBorder;
    navbarInitialFiltervalue = navbarFilter;
  }

  // if (props.secondary) {
  //   navbarBackdrop = "none";
  //   mainText = "white";
  //   secondaryText = "white";
  //   secondaryMargin = "22px";
  //   paddingX = "30px";
  // }

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <Flex
      position="fixed"
      boxShadow={navbarInitialBoxShadowValue}
      bg={navbaInitialBgValue}
      borderColor={navbarInitialBorderValue}
      filter={navbarInitialFiltervalue}
      backdropFilter="blur(20px)"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      borderRadius="16px"
      display="flex"
      minH="75px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt="0px"
      pb="8px"
      right={{ base: "12px", md: "30px", lg: "30px", xl: "20px" }}
      px={{
        sm: "15px",
        md: "10px",
      }}
      ps={{
        xl: "15px",
      }}
      pt="8px"
      top={{ base: "12px", md: "16px", xl: "18px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 290px)",
        "2xl": "calc(100vw - 365px)",
      }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
        mb="0px"
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Breadcrumb fontSize="sm">
            <BreadcrumbItem color={mainTextColor}>
              <BreadcrumbLink href="#" color={secondaryTextColor}>
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={mainTextColor}>
              <BreadcrumbLink href="#" color={secondaryTextColor}>
                {/* Current Page */}
                {currentPageRoute}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Link
            color={mainTextColor}
            href="#"
            bg="inherit"
            borderRadius="inherit"
            fontWeight="bold"
            fontSize="sm"
            _hover={{ color: { mainTextColor } }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            {/* Current Page */}
            {currentPageRoute}
          </Link>
        </Box>

        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          <NavbarLinks />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
