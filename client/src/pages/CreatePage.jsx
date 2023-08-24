import Layout from "../Layout";
import { TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCreateBlogMutation } from "../api/postApi";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import LoadingAnimation from "../Component/Animation/LoadingAnimation";
const CreatePage = () => {
  const [createBlog, { isLoading }] = useCreateBlogMutation();
  //Get Id of User
  const userId = JSON?.parse(Cookies.get("Info"));
  //Form
  const form = useForm({
    initialValues: { title: "", content: "", user_id: userId?.id },
    validate: {
      title: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      content: (value) =>
        value.length < 5 ? "Content must be at least 5 characters" : null,
    },
  });
  // To Control User Action
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <Layout>
      <div className="  flex justify-center items-center min-h-screen">
        <Toaster position="top-right" />

        <div className="px-5 py-10 rounded shadow bg-white  w-[500px]">
          <h2 className="text-xl py-2 font-semibold text-header">
            Create Blog
          </h2>
          <hr className=" opacity-30" />
          <form
            onSubmit={form.onSubmit(async (values) => {
              try {
                const data = await createBlog(values);
                if (data?.data) {
                  form.reset();
                  toast.success("Created Blog");
                }
              } catch (e) {
                console.error(e);
              }
            })}
            action=""
          >
            <TextInput
              label="Title"
              my="sm"
              placeholder="Title"
              size="md"
              {...form.getInputProps("title")}
            />
            <Textarea
              size="md"
              placeholder="Your Content"
              label="Your Content"
              {...form.getInputProps("content")}
            />

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
