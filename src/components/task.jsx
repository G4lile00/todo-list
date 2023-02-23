import { Card, CardBody } from "@chakra-ui/card";
import { Checkbox } from "@chakra-ui/checkbox";
import { useState } from "react";

export default function Task({ checked, value = "" }) {
  const [checkedState, setChackedState] = useState(checked);
  const onChangeHandle = () => {
    setChackedState(!checkedState);
  };
  return (
    <Card className="w-1/4 h-min m-8">
      <CardBody className={checkedState ? "bg-green-200" : "bg-slate-200"}>
        <div className="flex flex-row p-4 space-x-6">
          <Checkbox
            colorScheme="green"
            size={"md"}
            isChecked={checkedState}
            onChange={onChangeHandle}
            borderColor="black"
          >
            Feito
          </Checkbox>
          <p className="text-lg">{value}</p>
        </div>
      </CardBody>
    </Card>
  );
}
