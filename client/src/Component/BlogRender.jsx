import { useGetBlogQuery } from "../api/postApi";
import LoadingAnimation from "./Animation/LoadingAnimation";
import BlogCart from "./BlogCart";

const BlogRender = () => {
  const { data: blogs, isLoading } = useGetBlogQuery();
  //Render Blog Content
  const render = blogs?.map((blog) => <BlogCart {...blog} key={blog.id} />);
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div className=" pt-12 min-h-screen flex-wrap gap-y-10 flex justify-around ">
      {render}
    </div>
  );
};

export default BlogRender;
