import DevicesTableView from "@/views/admin/device";
import { Box } from "@chakra-ui/react";

const Device = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <DevicesTableView />
    </Box>
  );
};

export default Device;
