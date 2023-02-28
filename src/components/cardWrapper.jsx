import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Flex, Heading, Text } from "@chakra-ui/layout";

export default function CardWrapper({ children, header }) {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center w-full h-full">
        <Card className="flex justify-center items-center p-8 ">
          <CardHeader>
            <Heading className="text-xl"> {header}</Heading>
          </CardHeader>
          <CardBody className="flex flex-col items-center space-y-5">
            {children}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
