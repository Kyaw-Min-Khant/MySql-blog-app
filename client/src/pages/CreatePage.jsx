import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Layout from "../Layout";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
const CreatePage = () => {
  const form = useForm({
    initialValues: { title: "", content: "" },

    validate: {
      title: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      content: (value) =>
        value.length < 5 ? "Content must be at least 5 characters" : null,
    },
  });
  return (
    <Layout>
      <div className="  flex justify-center items-center min-h-screen">
        <div className="px-5 rounded shadow bg-white  w-[500px]">
          <h2 className="text-xl py-2 font-semibold text-header">
            Create Blog
          </h2>
          <hr className=" opacity-30" />
          <form onSubmit={form.onSubmit(console.log)} action="">
            <TextInput
              label="Title"
              my="sm"
              placeholder="Title"
              size="md"
              {...form.getInputProps("title")}
            />
            <ReactQuill theme="snow" {...form.getInputProps("content")} />
            <button
              type="submit"
              className=" w-full hover:bg-brand/70 bg-brand text-white font-semibold py-2 rounded my-3"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
