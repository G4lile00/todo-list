import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import CardWrapper from "../cardWrapper";
import InputWrapper from "../inputWrapper";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function NewUser({ handleNewUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex items-center w-full">
        <Button colorScheme="blue" onClick={onOpen} className="w-full">
          Novo usuario
        </Button>
      </div>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Card className=" h-full">
              <CardBody className="bg-neutral-100 rounded-xl flex flex-col justify-between">
                <div>
                  <form method="POST" onSubmit={handleNewUser}>
                    <div className="flex items-center flex-col space-y-6">
                      <div className="flex flex-col items-center">
                        <InputWrapper
                          className={"text-gray-700"}
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <InputWrapper
                          className={"text-gray-700"}
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                          registrar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </CardBody>
            </Card>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function FormLogin({
  onSubmitHandler,
  onSubmitNewUser,
  stateFormData = { email: "", password: "" },
}) {
  return (
    <CardWrapper header={"Login"}>
      <div className="space-y-5">
        <form method="POST" onSubmit={onSubmitHandler}>
          <div className="flex items-center flex-col space-y-6">
            <div className="flex flex-col items-center">
              <InputWrapper
                className={"text-gray-700"}
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={stateFormData.email.value}
              />
            </div>
            <div className="flex flex-col items-center">
              <InputWrapper
                className={"text-gray-700"}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={stateFormData.email.password}
              />
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
              </button>
            </div>
          </div>
        </form>
        <NewUser handleNewUser={onSubmitNewUser} />
      </div>
    </CardWrapper>
  );
}
