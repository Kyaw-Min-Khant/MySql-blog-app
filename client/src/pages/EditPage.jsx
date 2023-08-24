import "react-quill/dist/quill.snow.css";
import Layout from "../Layout";
import { TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleBlogQuery, useUpdateBlogMutation } from "../api/postApi";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import LoadingAnimation from "../Component/Animation/LoadingAnimation";

const EditPage = () => {
  //Use Params
  const nav = useNavigate();
  const { id } = useParams();
  //Api Methods
  const { data: blog } = useGetSingleBlogQuery(id);
  const [update, { isLoading }] = useUpdateBlogMutation();
  //Get UserInfo
  const user = JSON.parse(Cookies.get("Info"));
  //Form
  const form = useForm({
    initialValues: {
      title: blog ? blog[0]?.title : " ",
      content: blog ? blog[0]?.content : " ",
      user_id: user?.id,
    },
    validate: {
      title: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      content: (value) =>
        value.length < 5 ? "Content must be at least 5 characters" : null,
    },
  });
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <Layout>
      <div className=" flex justify-center items-center min-h-screen">
        <Toaster position="top-right" />

        <div className="px-5 py-10 rounded shadow bg-white  w-[500px]">
          <h2 className="text-xl py-2 font-semibold text-header">Edit Blog</h2>
          <hr className=" opacity-30" />
          <form
            onSubmit={form.onSubmit(async (values) => {
              const data = await update({ values, bookId: id });
              if (data?.data) {
                nav("/");
                toast.success("Updated Blog");
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
              className=" hover:bg-brand/70 w-full bg-brand text-white font-semibold py-2 rounded my-3"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditPage;
