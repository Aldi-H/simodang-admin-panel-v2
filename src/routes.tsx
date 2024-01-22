import { Icon } from "@chakra-ui/react";

import { IRouteSidebarGroup } from "./types/navigation";

import { FaRegChartBar, FaRocket, FaUsers, FaUser } from "react-icons/fa";
import { BsFillMotherboardFill } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { MdError } from "react-icons/md";
// import { FiLogOut } from "react-icons/fi";

const SidebarRoutes: IRouteSidebarGroup[] = [
  {
    // label: "Dashboard",
    routes: [
      {
        name: "Statistik",
        layout: "/admin",
        path: "/statistic",
        icon: (
          <Icon as={FaRegChartBar} width="16px" height="16px" color="inherit" />
        ),
      },
      {
        name: "Devices",
        layout: "/admin",
        path: "/device",
        icon: <Icon as={FaRocket} width="16px" height="16px" color="inherit" />,
      },
      {
        name: "Masters",
        layout: "/admin",
        path: "#",
        icon: (
          <Icon
            as={BsFillMotherboardFill}
            width="16px"
            height="16px"
            color="inherit"
          />
        ),
      },
      {
        name: "Article",
        layout: "/admin",
        path: "#",
        icon: (
          <Icon as={GrArticle} width="16px" height="16px" color="inherit" />
        ),
      },
      {
        name: "User Account",
        layout: "/admin",
        path: "#",
        icon: <Icon as={FaUsers} width="16px" height="16px" color="inherit" />,
      },
      {
        name: "Error Log",
        layout: "/admin",
        path: "#",
        icon: <Icon as={MdError} width="16px" height="16px" color="inherit" />,
      },
    ],
  },
  // {
  //   label: "Account",
  //   routes: [
  //     {
  //       name: "Profile",
  //       layout: "/admin",
  //       path: "#",
  //       icon: <Icon as={FaUser} width="16px" height="16px" color="inherit" />,
  //     },
  //     {
  //       name: "Setting",
  //       layout: "/admin",
  //       path: "#",
  //       icon: (
  //         <Icon as={IoMdSettings} width="16px" height="16px" color="inherit" />
  //       ),
  //     },
  //   {
  //     name: "Logout",
  //     layout: "/admin",
  //     path: "#",
  //     icon: <Icon as={FiLogOut} width="16px" height="16px" color="inherit" />,
  //   },
  // ],
  // },
];

export default SidebarRoutes;
