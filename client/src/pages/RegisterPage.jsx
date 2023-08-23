import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import RegisterAnimation from "../Component/Animation/RegisterAnimation";
import { useRegisterMutation } from "../api/userApi";
const RegisterPage = () => {
  const nav = useNavigate();
  const [Register] = useRegisterMutation();
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validate: {
      username: (value) =>
        value.length > 3 ? null : "UserName at least 3 characters",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length > 4 ? null : "Password at least 3 characters",
    },
  });
  return (
    <div className="flex bg-[#fafafa] justify-center min-h-screen items-center">
      <Toaster position="top-right" />
      <div className="flex bg-[#ffffff] justify-center py-5 shadow-xl rounded-md gap-4 items-center  w-8/12">
        <div className="w-4/12">
          <div className="mx-auto">
            <h2 className=" text-3xl text-center font-sans font-semibold">
              Register
            </h2>
            <form
              className=" px-3"
              onSubmit={form.onSubmit(async (values) => {
                try {
                  
                  const { data } = await Register(values);
                  if (data == "Create Successful") {
                    toast.success(data);
                    setTimeout(() => {
                      nav("/login");
                    }, 3000);
                  } else {
                    toast.error("Registration fail");
                  }
                } catch (e) {
                  console.error(e);
                }
              })}
            >
              <TextInput
                withAsterisk
                label="Name"
                size="sm"
                placeholder="Enter Your Name..."
                {...form.getInputProps("username")}
              />
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
                className=" mt-3 bg-brand py-1 font-semibold  rounded-md text-white w-full"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-4/12">
          <RegisterAnimation />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
