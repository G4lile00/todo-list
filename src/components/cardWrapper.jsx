import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Flex, Heading, Text } from "@chakra-ui/layout";

export default function CardWrapper({ children, header }) {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center w-full h-full">
        <Card className="w-1/4 h-2/5 flex justify-center items-center p-8 ">
          <CardHeader>
            <Heading className="text-xl"> {header}</Heading>
          </CardHeader>
          <CardBody>{children}</CardBody>
        </Card>
      </div>
    </div>
  );
}
