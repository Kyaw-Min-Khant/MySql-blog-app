import { useGetBlogQuery } from "../api/postApi";
import BlogCart from "./BlogCart";

const BlogRender = () => {
  const { data: blogs } = useGetBlogQuery();
  const render = blogs?.map((blog) => <BlogCart {...blog} key={blog.id} />);
  return (
    <div className=" pt-12 min-h-screen flex-wrap gap-6 flex justify-around ">
      {render}
    </div>
  );
};

export default BlogRender;
