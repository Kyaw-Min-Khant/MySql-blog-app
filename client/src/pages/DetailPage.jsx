import { useParams } from "react-router-dom";
import Layout from "../Layout";
import { useGetSingleBlogQuery } from "../api/postApi";

const DetailPage = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  return (
    <Layout className="">
      <div className="min-h-screen container pt-16 mx-auto">
        <div className="">
          <h2 className="text-3xl text-header mt-5 mb-2 font-semibold">
            {blog && blog[0]?.title}
          </h2>
          <hr className=" opacity-30" />
          <p className=" mt-3 tracking-wider text-[#2c2b2b] font-mono">
            {blog && blog[0]?.content}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
