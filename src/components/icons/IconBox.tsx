import { Flex } from "@chakra-ui/react";

export default function IconBox(props: { [x: string]: any; children: any }) {
  const { children, ...rest } = props;

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"8px"}
      {...rest}
    >
      {children}
    </Flex>
  );
}
