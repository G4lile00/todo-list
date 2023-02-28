import { setLogout } from "@/middleware/utils";

import { Card, CardBody } from "@chakra-ui/card";
import Notes from "./notes.jsx";
import { Avatar } from "@chakra-ui/avatar";
import { useDisclosure } from "@chakra-ui/hooks";
import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { noop } from "lodash";

function handleOnClickLogout(e) {
  setLogout(e);
}

function PlacementExample({ profile, baseApiUrl, handleNewTask }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex items-center w-full">
        <Button colorScheme="blue" onClick={onOpen} className="w-full">
          Menu
        </Button>
      </div>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Card className=" h-full">
              <CardBody className="bg-neutral-100 rounded-xl flex flex-col justify-between">
                <div className="flex flex-row justify-around items-center">
                  <Avatar name={profile.id.split("@")[0]} />
                  <p>{profile.id}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-6 w-full"
                    onClick={handleNewTask}
                  >
                    nova Tarefa
                  </button>

                  <button
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-6 w-full"
                    onClick={handleOnClickLogout}
                  >
                    logout
                  </button>
                </div>
              </CardBody>
            </Card>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Auth({ profile, baseApiUrl, token }) {
  const [reload, setReload] = useState(true);

  async function handleNewTask() {
    await fetch(baseApiUrl + "/createTasks", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: "", token: token }),
    });
    setReload(!reload);
  }

  return (
    <>
      {profile && (
        <div className="flex flex-row space-x-6 h-full p-3">
          <div className="flex flex-col w-full">
            <div className="sm:hidden flex m-4">
              <PlacementExample
                profile={profile}
                baseApiUrl={baseApiUrl}
                handleNewTask={handleNewTask}
              />
            </div>
            <Notes
              className="w-5/6"
              baseApiUrl={baseApiUrl}
              token={token}
              reload={reload}
            />
          </div>
          <div className="sm:flex w-1/6  hidden">
            <Card className=" h-full">
              <CardBody className="bg-neutral-100 rounded-xl flex flex-col justify-between">
                <div className="flex flex-row justify-around items-center">
                  <Avatar
                    name={profile.id.split("@")[0]}
                    className="flex justify-center items-center"
                  />
                  <p>{profile.id}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-4 w-full"
                    onClick={handleNewTask}
                  >
                    nova Tarefa
                  </button>

                  <button
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-4 w-full"
                    onClick={handleOnClickLogout}
                  >
                    logout
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
