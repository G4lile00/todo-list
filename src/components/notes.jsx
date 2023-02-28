import React, { useEffect, useState } from "react";

import { Card, CardBody } from "@chakra-ui/card";
import Task from "./task";

async function getData(baseApiUrl, token) {
  let res = await fetch(baseApiUrl + "/getTasks", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: token }),
  });
  return await res.json();
}

export default function Notes({ baseApiUrl, token, reload }) {
  const [tasks, setTasks] = useState([]);

  function ReloadData() {
    getData(baseApiUrl, token).then((data) => {
      setTasks(data.data);
    });
  }

  useEffect(() => {
    ReloadData();
  }, [reload]);

  return (
    <Card className="w-full h-full sm:flex !contents">
      <CardBody className="bg-neutral-100 rounded-xl flex flex-wrap overflow-auto w-full sm:justify-between justify-center">
        {tasks.map((obj) => {
          return (
            <Task
              checked={obj.data.checked}
              value={obj.data.value}
              id={obj.id}
              baseApiUrl={baseApiUrl}
              key={obj.id}
              reload={ReloadData}
            />
          );
        })}
      </CardBody>
    </Card>
  );
}
