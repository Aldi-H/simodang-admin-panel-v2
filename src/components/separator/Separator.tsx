import { Flex } from "@chakra-ui/react";

const HSeparator = (props: { variant?: string; [x: string]: any }) => {
  const { variant, children, ...rest } = props;
  return (
    <Flex
      h="1px"
      w="100%"
      bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
      {...rest}
    />
  );
};

const VSeparator = (props: { variant?: string; [x: string]: any }) => {
  const { variant, children, ...rest } = props;
  return (
    <Flex
      w="1px"
      bg="linear-gradient(0deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)"
      {...rest}
    />
  );
};

// const HSeparator = (props: { variant?: string; [x: string]: any }) => {
//   const { variant, ...rest } = props;

//   return (
//     <Flex
//       h="1px"
//       w="100%"
//       bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
//       {...rest}
//     />
//   );
// };

// const VSeparator = (props: { variant?: string; [x: string]: any }) => {
//   const { variant, ...rest } = props;

//   return (
//     <Flex
//       w="1px"
//       bg="linear-gradient(0deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)"
//       {...rest}
//     />
//   );
// };

export { HSeparator, VSeparator };
