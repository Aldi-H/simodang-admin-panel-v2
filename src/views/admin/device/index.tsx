import { Box } from "@chakra-ui/react";

import DevicesTableComponent from "@/components/tables/DevicesTableComponent";

import DevicesData from "@/components/tables/dummyData/DevicesDummyData";

const DevicesTableView = () => {
  return (
    <Box>
      <DevicesTableComponent tableData={DevicesData} />
    </Box>
  );
};

export default DevicesTableView;
