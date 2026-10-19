import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= maxChars) return <Text>{children}</Text>;

  const text = expanded ? children : children.substring(0, maxChars) + "...";

  return (
    <Text>
      {text}
      <Button
        size="xs"
        marginLeft={1}
        colorScheme="yellow"
        fontWeight="bold"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
