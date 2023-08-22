import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import "../css/blogcart.css";
const BlogCart = () => {
  return (
    <div className="">
      <div className=" w-[400px] hover:bg-[#dfdfdffa] duration-[1s] cart px-6 pt-5 pb-2 rounded-md shadow bg-[#ffffff]">
        <h2 className=" text-lg  font-medium text-header">Hello San tr</h2>
        <div className="h-[135px] overflow-hidden">
          <p className=" font-serif text-sm  text-header font-medium leading-5 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            dolorum debitis blanditiis qui voluptatem. Earum necessitatibus ex
            aliquam, tempore magni iusto at possimus officia, eaque recusandae,
            nulla dolorem odit suscipit. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates laudantium, et facilis dolore laborum
            rem, repudiandae magni aperiam pariatur voluptas debitis sint illum
            necessitatibus cupiditate vero nobis sapiente quos totam.
          </p>
        </div>
        <div className=" mt-2 btn-action flex justify-end items-center  gap-x-5">
          <button className=" bg-brand hover:bg-brand/70 rounded px-2  py-1">
            <MdEdit className=" text-xl text-white" />
          </button>
          <button className=" border hover:bg-[#ff0000] border-[#ff0000] rounded px-2  py-1">
            <AiFillDelete className=" hover:text-white text-xl text-[#ff0000]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
