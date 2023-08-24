/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import "../css/blogcart.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDeleteBlogMutation } from "../api/postApi";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const BlogCart = (props) => {
  //Api Methods
  const [deleteBlog] = useDeleteBlogMutation();
  //
  const nav = useNavigate();
  //Data Prop and Handle Cookies undefined
  const { id, title, content, user_id } = props;
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    try {
      const user = JSON?.parse(Cookies.get("Info"));
      setUserId(user?.id);
    } catch (e) {
      (" ");
    }
  }, []);
  const data = { id, userId };

  //Function
  const detailPage = () => {
    nav(`/detail/${id}`, { state: { id } });
  };
  const editPage = (e) => {
    e.stopPropagation();
    nav(`edit/${id}`, { state: { id } });
  };

  //Delete Blog
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
    <div className="">
      <Toaster position="top-right" />
      <div
        onClick={detailPage}
        className="w-[350px] lg:w-[400px] min-h-[250px] hover:bg-[#dfdfdffa] duration-[1s] cart px-6 pt-5 pb-2 rounded-md shadow bg-[#ffffff]"
      >
        <h2 className=" text-lg  font-medium text-header">{title}</h2>
        <div className="h-[135px] overflow-hidden">
          <p className=" font-serif text-sm  text-header font-medium leading-5 tracking-wider">
            {content}
          </p>
        </div>
        {/* checkWriter */}
        {user_id === userId && (
          <div className=" mt-2 btn-action flex justify-end items-center  gap-x-5">
            <button
              onClick={editPage}
              className=" bg-brand hover:bg-brand/70 rounded px-2  py-1"
            >
              <MdEdit className=" text-xl text-white" />
            </button>
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
  );
};

export default BlogCart;
