import React from "react";

import { Card, CardBody } from "@chakra-ui/card";
import Task from "./task";

export default function Notes({ baseApiUrl, profile }) {
  return (
    <Card className="w-full h-full ">
      <CardBody className="bg-neutral-100 rounded-xl flex flex-wrap overflow-auto justify-between">
        {/* {tasks.map((obj) => {
          return <Task checked={obj.checked} value={obj.value} />;
        })} */}
      </CardBody>
    </Card>
  );
}
