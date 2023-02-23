import {
  absoluteUrl,
  getAppCookies,
  setLogout,
  verifyToken,
} from "@/middleware/utils";

import { Card, CardBody } from "@chakra-ui/card";
import Notes from "./notes.jsx";
import { Avatar } from "@chakra-ui/avatar";

export default function Auth({ profile, baseApiUrl }) {
  function handleOnClickLogout(e) {
    setLogout(e);
  }
  async function handleNewTaskClick() {
    const response = await fetch(baseApiUrl + "/tasksActions", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  }
  return (
    <>
      {profile && (
        <div className="flex flex-row space-x-6 h-full p-3">
          <Notes className="w-5/6" />
          <Card className="w-1/6 h-full">
            <CardBody className="bg-neutral-100 rounded-xl flex flex-col justify-between">
              <div className="flex flex-row justify-around items-center">
                <Avatar name={profile.email.split("@")[0]} />
                <p>{profile.email}</p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-6 w-full"
                  onClick={handleNewTaskClick}
                >
                  logout
                </button>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
    </>
  );
}
