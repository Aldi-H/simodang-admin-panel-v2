// import { Box, useStyleConfig} from '@chakra-ui/react';

import { useStyleConfig, chakra, forwardRef } from "@chakra-ui/react";
import { CustomCardProps } from "@/theme/theme";

const CustomCard = forwardRef<CustomCardProps, "div">((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("Card", { size, variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});

export default CustomCard;

// import { Box, useStyleConfig } from "@chakra-ui/react";
// function Card(props: { [x: string]: any; variant?: any; children: any }) {
//   const { variant, children, ...rest } = props;
//   const styles = useStyleConfig("Card", { variant });
//   // Pass the computed styles into the `__css` prop
//   return (
//     <Box __css={styles} {...rest}>
//       {children}
//     </Box>
//   );
// }

// export default Card;
