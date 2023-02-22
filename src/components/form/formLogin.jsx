import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import CardWrapper from "../cardWrapper";
import InputWrapper from "../inputWrapper";
function FormLogin({
  onSubmitHandler,
  onChangeHandler,
  stateFormData = { email: "", password: "" },
}) {
  return (
    <CardWrapper header={"Login"}>
      <div>
        <form method="POST" onSubmit={onSubmitHandler}>
          <div className="flex items-center flex-col space-y-6">
            <div className="flex flex-col items-center">
              <InputWrapper
                className={"text-gray-700"}
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                onChange={onChangeHandler}
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
                onChange={onChangeHandler}
                value={stateFormData.email.password}
              />
            </div>
            <div className="flex flex-col items-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </CardWrapper>
  );
}
export default FormLogin;
