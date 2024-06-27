import { Box, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ children, title }: Props) => {
  return (
    <Box marginTop={5}>
      <Heading size={"md"} color={"gray"}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default DefinitionItem;
