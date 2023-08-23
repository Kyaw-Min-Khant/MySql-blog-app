import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Layout from "../Layout";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery, useUpdateBlogMutation } from "../api/postApi";
import Cookies from "js-cookie";

const EditPage = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  const [update] = useUpdateBlogMutation();
  const user = JSON.parse(Cookies.get("Info"));
  console.log(user?.id);
  const form = useForm({
    initialValues: {
      title: blog && blog[0]?.title,
      content: blog && blog[0]?.content,
      user_id: user?.id,
    },
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
          <h2 className="text-xl py-2 font-semibold text-header">Edit Blog</h2>
          <hr className=" opacity-30" />
          <form
            onSubmit={form.onSubmit(async (values) => {
              const data = await update({ values, bookId: id });
              console.log(data);
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
            <ReactQuill theme="snow" {...form.getInputProps("content")} />
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
