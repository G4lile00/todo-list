import React, { useCallback } from "react";
import { Card, CardBody } from "@chakra-ui/card";
import { Checkbox } from "@chakra-ui/checkbox";
import { Input } from "@chakra-ui/input";
import { useEffect, useState } from "react";
import { debounce, noop } from "lodash";
import InputWrapper from "./inputWrapper";

export default function Task({
  checked,
  value = "",
  id,
  baseApiUrl,
  reload = noop,
}) {
  const [checkedState, setChackedState] = useState(checked);
  const [values, setValues] = useState(value);

  useEffect(() => {
    updateTask();
  }, [checkedState]);

  useEffect(() => {
    updateTask();
  }, [values]);

  const onChangeHandle = async () => {
    setChackedState(!checkedState);
  };

  const handleChange = (event) => {
    setValues(event.target.value);
  };
  const handleClickRemove = async (event) => {
    await fetch(baseApiUrl + "/deleteTask", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    reload();
  };
  async function updateTask() {
    await fetch(baseApiUrl + "/updateTask", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, value: values, checked: checkedState }),
    });
  }
  return (
    <Card className="w-fit h-min sm:m-8 m-1">
      <CardBody className={checkedState ? "bg-green-200" : "bg-slate-200"}>
        <div className="flex sm:flex-row flex-col p-4 sm:space-x-6">
          <Checkbox
            colorScheme="green"
            size={"md"}
            isChecked={checkedState}
            onChange={onChangeHandle}
            borderColor="black"
            className="my-2"
          >
            Feito
          </Checkbox>
          <InputWrapper
            placeholder="Sua tarefa"
            value={values}
            onChangeHandler={handleChange}
            className="w-full my-2"
          />
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  w-full my-2"
            onClick={handleClickRemove}
          >
            deletar
          </button>
        </div>
      </CardBody>
    </Card>
  );
}
