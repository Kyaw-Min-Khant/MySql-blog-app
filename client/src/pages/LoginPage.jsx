import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import LoginAnimation from "../Component/Animation/LoginAnimation";

const LoginPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <div className="flex bg-[#fafafa] justify-center min-h-screen items-center">
      <div className="flex bg-[#ffffff] justify-center py-5 shadow-xl rounded-md gap-4 items-center  w-8/12">
        <div className="w-4/12">
          <div className="mx-auto">
            <h2 className=" text-3xl text-center font-sans font-semibold">
              Login
            </h2>
            <form
              className=" px-3"
              onSubmit={form.onSubmit((values) => console.log(values))}
            >
              <TextInput
                withAsterisk
                mt="sm"
                label="Email"
                size="sm"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
              <TextInput
                mt="sm"
                withAsterisk
                label="Password"
                size="sm"
                placeholder="Enter Your Password"
                {...form.getInputProps("password")}
              />

              <button
                className=" mt-5 bg-brand py-1 font-semibold  rounded-md text-white w-full"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-4/12">
          <LoginAnimation />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
