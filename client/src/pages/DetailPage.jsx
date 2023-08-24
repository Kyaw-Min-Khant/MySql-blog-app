import { Link, useParams } from "react-router-dom";
import Layout from "../Layout";
import { useGetSingleBlogQuery } from "../api/postApi";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDeleteBlogMutation } from "../api/postApi";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const DetailPage = () => {
  //Use Params
  const { id } = useParams();
  const nav = useNavigate();
  //Api Methods
  const [deleteBlog] = useDeleteBlogMutation();
  const { data: blog } = useGetSingleBlogQuery(id);
  //
  const [userId, setUserId] = useState(null);
  const user = blog && blog[0]?.user_id;
  const data = { id, userId };

  //To prevent Cookies from Undefined
  useEffect(() => {
    try {
      const user = JSON?.parse(Cookies.get("Info"));
      setUserId(user?.id);
    } catch (e) {
      (" ");
    }
  }, []);
  //functions
  const editPage = (e) => {
    e.stopPropagation();
  };
  const deleteHandler = async (e) => {
    e.stopPropagation();
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirmed) {
      const check = await deleteBlog(data);
      if (check?.data) {
        toast.success("Deleted blog");
        nav("/");
      }
    }
  };

  return (
    <Layout className="">
      <div className="min-h-screen container pt-16 mx-auto">
        <div className=" lg:mx-0 md:mx-2 mx-5">
          <Toaster position="top-right" />
          <div className=" flex justify-between items-center">
            <h2 className="text-3xl text-header mt-5 mb-2 font-semibold">
              {blog && blog[0]?.title}
            </h2>
            {/* checkWriter */}
            <div className="">
              {user == userId && (
                <div className=" mt-2  flex justify-end items-center  gap-x-5">
                  <Link to={`/edit/${id}`}>
                    <button
                      onClick={editPage}
                      className=" bg-brand hover:bg-brand/70 rounded px-2  py-1"
                    >
                      <MdEdit className=" text-xl text-white" />
                    </button>
                  </Link>
                  <button
                    onClick={deleteHandler}
                    className=" border hover:bg-[#ff0000] text-[#ff0000] hover:text-white border-[#ff0000] rounded px-2  py-1"
                  >
                    <AiFillDelete className="  text-xl " />
                  </button>
                </div>
              )}
            </div>
          </div>

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
