import LogoLargeScreen from "../../assets/Logo 1.jpg";
import LogoSmallScreen from "../../assets/Logo 2.png";
import ProfileSidebar from "../../assets/profile sidebar.png";
import { FaChevronDown, FaThLarge } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import SidebarPath from "../templates/sidebar/SidebarPath";
import { FaGear, FaPlus, FaEllipsis } from "react-icons/fa6";
// import ShowNotification from '../templates/notifications/ShowNotification';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className=" sticky left-0 top-0 w-24 lg:w-64 h-screen p-5 border-r-2 border-mainBorder flex flex-col justify-between bg-white">
      <div className="top flex flex-col gap-8 lg:gap-10">
        <div className="flex justify-center image">
          <img
            className="hidden h-full lg:block"
            src={LogoLargeScreen}
            alt=""
          />
          <img className="block lg:hidden" src={LogoSmallScreen} alt="" />
        </div>
        
        <div className="flex shadow-[1px_1px_10px_rgb(0,0,0,0.1)] w-fit lg:w-full items-center gap-2.5 h-12 rounded-1.5 border border-mainBorder py-1.5 px-2.5">
          <p className=" font-medium  text-base w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center bg-seventhColor text-white rounded-full">
            CP
          </p>
          <div className="hidden lg:block">
            <h3 className=" font-medium text-sm">Company Project</h3>
            <p className="text-sm font-medium text-mainColor">12 Members</p>
          </div>
          <span className="hidden lg:block cursor-pointer text-mainColor">
            <FaChevronDown />
          </span>
        </div>

        <div className=" -mx-5">
          <SidebarPath path="/" title="Dashboard" icon={<AiFillHome />} />
          <SidebarPath
            path="/"
            title="Projects"
            icon={<FaThLarge />}
            /*count={10}*/ className="border-l-1 border-brandColor bg-eightColor "
          />
          <SidebarPath path="/" title="Setting" icon={<FaGear />} />
        </div>
      </div>

      <div className="bottom  flex  flex-col gap-8 lg:gap-10">
        <Link
          to="new-project"
          className="flex cursor-pointer gap-2.5 flex-col items-center shadow-[1px_1px_10px_rgb(0,0,0,0.1)] w-fit lg:w-full  h-[90px] rounded-[10px] border border-[#DBEDF5] py-[10px] px-[5px] lg:px-[20px]"
        >
          <span className=" size-10 flex justify-center items-center text-5 border border-dashed rounded-full border-textColor text-textColor">
            <FaPlus />
          </span>
          <p className="text-project_title text-sm font-medium hidden lg:block">
            Add New Project
          </p>
          <span className="text-mainColor text-2xl lg:hidden">
            <FaThLarge />
          </span>
        </Link>

        <div className="flex cursor-pointer items-center  gap-2.5  w-full lg:w-full  h-14 rounded-xl border border-mainBorder shadow-[1px_1px_10px_rgb(0,0,0,0.1)] p-1.5 ">
          <img
            src={ProfileSidebar}
            className="h-12 w-full lg:w-12 "
            alt=""
          />
          <div className="hidden lg:block">
            <h3 className="text-sm font-medium text-mainColor">
              Harry Jones
            </h3>
            <p className=" text-project_title text-sm">General Manager</p>
          </div>
          <FaEllipsis className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
