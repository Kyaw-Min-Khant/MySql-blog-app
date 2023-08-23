/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import "../css/blogcart.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDeleteBlogMutation } from "../api/postApi";
import { useEffect, useState } from "react";

const BlogCart = (props) => {
  const [deleteBlog] = useDeleteBlogMutation();
  const nav = useNavigate();
  const { id, title, content, user_id } = props;
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    try {
      const user = JSON?.parse(Cookies.get("Info"));
      setUserId(user);
    } catch (e) {" "}
  }, []);
  const detailPage = () => {
    nav(`/detail/${id}`, { state: { id } });
  };
  const editPage = (e) => {
    e.stopPropagation();
    nav(`edit/${id}`, { state: { id } });
  };
  console.log(id, user_id);
  const data = { id, user_id };
  //Delete Blog
  const deleteHandler = async (e) => {
    e.stopPropagation();
    const check = await deleteBlog(data);
    console.log(check);
  };
  return (
    <div className="">
      <div
        onClick={detailPage}
        className=" w-[400px] min-h-[250px] hover:bg-[#dfdfdffa] duration-[1s] cart px-6 pt-5 pb-2 rounded-md shadow bg-[#ffffff]"
      >
        <h2 className=" text-lg  font-medium text-header">{title}</h2>
        <div className="h-[135px] overflow-hidden">
          <p className=" font-serif text-sm  text-header font-medium leading-5 tracking-wider">
            {content}
          </p>
        </div>
        {/* checkWriter */}
        {user_id === userId?.id && (
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
