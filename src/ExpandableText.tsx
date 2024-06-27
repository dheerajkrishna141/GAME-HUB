import { Button, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children?: string;
}
const ExpandableText = ({ children }: Props) => {
  const [click, setClick] = useState(false);
  if (!children) return null;
  if (children.length <= 300) return <Text>{children}</Text>;
  else {
    const substring = children.substring(0, 300) + " ...";

    return (
      <>
        <Text>
          {click ? children : substring}
          {"  "}
          <Button
            size={"xs"}
            colorScheme="yellow"
            onClick={() => setClick(!click)}
          >
            {click ? "Show Less" : "Show More"}
          </Button>
        </Text>
      </>
    );
  }
};

export default ExpandableText;
