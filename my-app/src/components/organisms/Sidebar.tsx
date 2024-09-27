import LogoLargeScreen from '../../assets/Logo 1.jpg'
import LogoSmallScreen from '../../assets/Logo 2.png'
import ProfileSidebar from '../../assets/profile sidebar.png'
import { FaChevronDown,FaThLarge  } from "react-icons/fa";
import { AiFillHome  } from "react-icons/ai";
import SidebarPath from '../templates/sidebar/SidebarPath';
import { FaGear,FaPlus,FaEllipsis   } from "react-icons/fa6";



export default function Sidebar() {
    return (
        <div className=" sticky left-0 top-0 w-[90px] lg:w-[260px] h-screen p-[20px] border-r-[2px] border-[#DBEDF5] flex flex-col justify-between bg-white">
            <div className="top flex flex-col gap-[30px] lg:gap-[40px]">
                <div className="image flex justify-center">
                    <img className="hidden lg:block h-full" src={LogoLargeScreen} alt="" />
                    <img className="block lg:hidden" src={LogoSmallScreen} alt="" />
                </div>
                <div className='flex shadow-[1px_1px_10px_rgb(0,0,0,0.1)] w-fit lg:w-full items-center gap-[10px] h-[50px] rounded-[5px] border border-[#DBEDF5] py-[5px] px-[10px]'>
                    <p className=' font-medium  text-[15px] w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] flex justify-center items-center bg-[#C3C2CA] text-[#fff] rounded-full'>
                        CP
                    </p>
                    <div className='hidden lg:block'>
                        <h3 className=' font-medium text-[14px]'>Company Project</h3>
                        <p className='text-[14px] font-medium text-[#5F6D7E]'>12 Members</p>
                    </div>
                    <span className='hidden lg:block cursor-pointer text-[#5F6D7E]'>
                        <FaChevronDown  />
                    </span>
                </div>
                <div className=' -mx-[20px]'>
                    <SidebarPath path='/' title='Dashboard' icon={<AiFillHome />}  />
                    <SidebarPath path='/' title='Projects' icon={<FaThLarge />} /*count={10}*/ className='border-l-[4px] border-[#09242E] bg-[#F0F7FF]'/>
                    <SidebarPath path='/' title='Setting' icon={<FaGear />}  />
                </div>
            </div>
            <div className="bottom  flex  flex-col gap-[30px] lg:gap-[40px]">
                <div className='flex cursor-pointer gap-[10px] flex-col items-center shadow-[1px_1px_10px_rgb(0,0,0,0.1)] w-fit lg:w-full  h-[90px] rounded-[10px] border border-[#DBEDF5] py-[10px] px-[5px] lg:px-[20px]'>
                    <span className=' w-[40px] h-[40px] flex justify-center items-center text-[20px] border border-dashed rounded-full border-[#91969B] text-[#91969B]'><FaPlus /></span>
                    <p className='text-project_title text-[14px] font-medium hidden lg:block'>Add New Project</p>
                    <span className='text-[#5F6D7E] text-[22px] lg:hidden'><FaThLarge /></span>

                </div>
                <div className='flex cursor-pointer items-center  gap-[10px]  w-full lg:w-full  h-[58px] rounded-[10px] border border-[#DBEDF5] shadow-[1px_1px_10px_rgb(0,0,0,0.1)] p-[5px]'>
                    <img src={ProfileSidebar} className='h-[48px] w-full lg:w-[48px] ' alt="" />
                    <div className='hidden lg:block'>
                        <h3 className='text-[14px] font-medium text-[#53515B]'>Harry Jones</h3>
                        <p className=' text-project_title text-[14px]'>General Manager</p>
                    </div>
                    <FaEllipsis className='hidden lg:block'/>
                </div>
            </div>
        </div>  
    )
}
